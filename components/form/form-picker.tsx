"use client"

import Link from "next/link";
import Image from "next/image";
import { Check, Loader2 } from "lucide-react";
import { useFormStatus } from "react-dom";
import { useEffect, useState } from "react";
import { unsplash } from "@/lib/unsplash";
import { cn } from "@/lib/utils";
import { toast } from 'sonner';
import { defaultImages } from "@/constants/images";
import FormErrors from "./form-errors";
interface FormPickerProps {
    id: string;
    errors?: Record<string, string[] | undefined>;
}

export const FormPicker = ({ id, errors }: FormPickerProps) => {

    const [images, setImages] = useState<Array<Record<string, any>>>([]);
    const [selectedImageId, setSelectedImageId] = useState<string | null>(null);
    const { pending } = useFormStatus();
    const [isLoaded, setIsLoaded] = useState(true);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                // Call the service from unsplash
                // const result = await unsplash.photos.getRandom({
                //     collectionIds: ["317099"],
                //     count: 9,
                // })

                // if(result && result.response) {
                //     const imagesResult = (result.response as Array<Record<string, any>>)
                //     setImages(imagesResult);
                // } else {
                //     toast.error("Error fetching images");
                // }
                // Default images
                setImages(defaultImages);
            } catch (error) {
                console.log(error);
                setImages(defaultImages);
            } finally {
                setIsLoaded(false);
            }
        }
        fetchImages();
    }, [])

    if(isLoaded) return (
        <div className="p-6 flex items-center justify-center">
            <Loader2 className="animate-spin h-6 w-6 text-green-700" />
        </div>
    )

  return (
    <div className="relative">
      <div className="grid grid-cols-3 gap-2 mb-2">
        {images.map((image) => (
          <div 
            key={image.id}
            className={cn(
              "cursor-pointer relative aspect-video group hover:opacity-75 transition bg-muted",
              pending && "opacity-50 hover:opacity-50 cursor-auto"
            )}
            onClick={() => {
              if (pending) return;
              setSelectedImageId(image.id);
            }}
          >
            <input 
              type="radio"
              id={id}
              name={id}
              className="hidden"
              checked={selectedImageId === image.id}
              disabled={pending}
              value={`${image.id}|${image.urls.thumb}|${image.urls.full}|${image.links.html}|${image.user.name}`}
            />
            <Image
              src={image.urls.thumb}
              alt="Unsplash image"
              className="object-cover rounded-sm"
              fill  
            />
            {selectedImageId === image.id && (
              <div className="absolute inset-y-0 h-full w-full  bg-black/30 flex items-center justify-center">
                <div className="rounded-full border-4 border-white-500 p-1">
                  <Check className="h-6 w-6 text-white" />
                </div>
              </div>
            )}
            <Link 
              href={image.links.html}
              target="_blank"
              className="opacity-0 group-hover:opacity-100 absolute bottom-0 w-full text-[10px] truncate text-white hover:underline p-1 bg-black/50"
            >
              {image.user.name}
            </Link>
          </div>
        ))}
      </div>
      <FormErrors
        id="image"
        errors={errors}
      />
    </div>
  )
}



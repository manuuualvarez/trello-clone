"use client"

import { Input } from "@/components/ui/input";
import { useFormStatus } from "react-dom";

interface FormInputsProps {
    errors?: {
        title?: string[];
    }
}

export const FormInput  = ({ errors }: FormInputsProps) => {
    const { pending } = useFormStatus()
  return (
    <div>
        <Input
            id="title"
            name="title"
            required
            placeholder="Enter a board title"
            
            disabled={ pending }
        />
        { 
            errors?.title ? (
                <div>
                    {
                        errors.title.map((error: string) => (
                            <div key={ error } className="text-rose-500">
                                { error }
                            </div>
                        ))
                    
                    }
                </div>
            ): null
        }
    </div>
    
  )
}


import { deleteBoard } from "@/actions/deleteBoard";
import { Button } from "@/components/ui/button";


interface BoardProps {
    title: string;
    id: string;
}

export const Board = ({ id, title }: BoardProps) => {
    const deleteBoardWithId = deleteBoard.bind(null, id);

  return (
    <form action={deleteBoardWithId} className='flex items-center gap-x-2' >
        <p>
            Board title: { title }
        </p>
        <Button variant={"destructive"} size={"sm"} type="submit">
            Delete
        </Button>
    </form>
  )
}
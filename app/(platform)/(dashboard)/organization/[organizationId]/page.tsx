

// import { Suspense } from "react";
// import { Info } from "./_components/info";
// import { BoardList } from "./_components/board-list";

import { createBoard } from "@/actions/create-board";
import { Button } from "@/components/ui/button";
import { db } from "@/lib/db";
import { Board } from "./board";

const OrganizationIdPage = async () => {
  const board = await db.board.findMany();

  return (
    <div className="flex flex-col space-y-4">
        <form action= { createBoard }>
          <input
            id="title"
            name="title"
            required
            placeholder="Enter a board title"
            className="border-input border p-1"
          >
          </input>

          <Button
            type="submit"
          >
            Create Board
          </Button>
        </form>
        <div className="space-y-2">
            {
              board.map((board) => (
                <Board 
                  key={ board.id }
                  title= { board.title } 
                  id = { board.id } 
                />
              ))
            }
        </div>
    </div>
  );
};

export default OrganizationIdPage;

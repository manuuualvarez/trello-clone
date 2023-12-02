

// import { Suspense } from "react";
// import { Info } from "./_components/info";
// import { BoardList } from "./_components/board-list";

import { createBoard } from "@/actions/create-board";

import { db } from "@/lib/db";
import { Board } from "./board";
import { Form } from "./form";

const OrganizationIdPage = async () => {
  const board = await db.board.findMany();

  return (
    <div className="flex flex-col space-y-4">
        <Form />
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

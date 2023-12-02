

// import { Suspense } from "react";

import { db } from "@/lib/db";



// import { Info } from "./_components/info";
// import { BoardList } from "./_components/board-list";


const OrganizationIdPage = async () => {
  async function create(formData: FormData) {
    "use server"
    const title = formData.get("title") as string;

    const data = await db.board.create({
      data: {
        title
      }
    })

    console.log(data)
  }

  return (
    <div className="w-full mb-20">
      <div className="px-2 md:px-4">
        {/* <Suspense fallback={<BoardList.Skeleton />}>
          <BoardList />
        </Suspense> */}
        <form action= { create }>
          <input
            id="title"
            name="title"
            required
            placeholder="Enter a board title"
            className="border-input border p-1"
          >
          </input>
        </form>
      </div>
    </div>
  );
};

export default OrganizationIdPage;

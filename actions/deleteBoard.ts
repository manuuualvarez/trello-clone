"use server"

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

export const  deleteBoard = async (id: string) => {
    await db.board.delete({
        where: {
            id
        }
    })
    revalidatePath("/organization/org_2YuFTXM5vsOkEeUefZL1QDbd4kx")
}
import  {authOptions}  from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import { prisma } from "../libs/prismadb";


export async function getSession(){
    return await getServerSession(authOptions)
}

export default async function getAgency(agencyID: any){
    try{
        const session = await getSession();

        if(!session?.user?.email){
            return null;
        }

        const currentAgency = await prisma.agencies.findUnique({
            where: {
                id: agencyID
            }
        });

        if (!currentAgency){
            return null;
        }

        return {
            ...currentAgency
            // createdAt: currentUser.createdAt.toISOString(),
            // updatedAt: currentUser.updatedAt.toISOString(),
        }


    }catch (error: any) {
        return null
    }
}
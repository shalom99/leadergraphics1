import  {authOptions}  from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import { prisma } from "../libs/prismadb";


export async function getSession(){
    return await getServerSession(authOptions)
}

export default async function getProfiles(agencyID:any){
    try{
        const session = await getSession();

        if(!session?.user?.email){
            return null;
        }

        const profiles = await prisma.agents.findMany({
            where: {
                agency: agencyID
            }
        });

        // console.log("get profiles", profiles)
        if (!profiles){
            return null;
        }

        return {
            profiles
        }


    }catch (error: any) {
        return null
    }
}
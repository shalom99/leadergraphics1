import  {authOptions}  from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import { prisma } from "@/libs/prismadb";


export async function getSession(){
    return await getServerSession(authOptions)
}

export default async function getTemplate(){
    try{
        const session = await getSession();

        if(!session?.user?.email){
            return null;
        }

        // const template = await prisma.templates.findMany({
        //     where: {
        //         agency: 900
        //     },
        //     select: {
        //         basepdf: true
        //     }

        
        // });

        const template = await prisma.templates.findMany({
            where: {
                agency: 900
            },
            select: {
                basepdf: true
            }

        
        });


        // console.log("get template", template)
        if (!template){
            return null;
        }

        return {
            ...template
        }


    }catch (error: any) {
        return null
    }
}
import { NextRequest,NextResponse} from 'next/server'
import { getServerSession } from "next-auth/next"
import {prisma} from '@/app/libs/prismadb'
import authOptions  from '@/pages/api/auth/[...nextauth]'


export async function POST(request: Request) {

    const body = await request.json();
    console.log(JSON.stringify(body))
    console.log(body)
    console.log('api agencyid')
    // if(!agencyId){
    //     throw new Error('data empty')
    // }
    
    // const users = await prisma.agents.findMany({
    //     where: {
    //         agency: parseInt(agencyId)
    //     }
    // })

    // console.log(users)


    return NextResponse.json('users')
}








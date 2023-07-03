import { NextRequest,NextResponse} from 'next/server'
import { getServerSession } from "next-auth/next"
import {prisma} from '@/app/libs/prismadb'


export async function POST(request: Request) {

    const body = await request.json();
  
    console.log(body)
  
    const agencyId = await prisma.accounts.findUnique({
        where: {
            email: body
        },
        select: {
            agency: true
        }
    });
    console.log(agencyId?.agency)

    const users = await prisma.agents.findMany({
        where: {
            agency: agencyId?.agency
        }
    })

    //console.log(users)

    // const agencyId = await prisma.account_Types.findUnique({
    //     where: {
    //         email: agency
    //     }
    // })


    return NextResponse.json(users)
}








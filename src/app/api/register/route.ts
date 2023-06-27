import bcrypt from 'bcrypt'
import {prisma} from '@/app/libs/prismadb'
import { NextResponse} from 'next/server'

// import { PrismaClient } from '@prisma/client'


// const prisma = new PrismaClient({ datasources: {  db: { url: "mysql://yourdburlstringhere" } } });

export async function POST(request: Request) {


    // check if input data is empty
    // if(!name || !email || !password) {
    //     return new NextResponse('Missing Fields', {status: 400})
    // }

    
    // const exist = await prisma.user.findUnique({
    //     where: {
    //         email
    //     }
    // });

    // if(exist) {
    //     throw new Error('Email already exists')
    // }



    const user = await prisma.account_Types.create({
        data: {
            type: 'test'
     
        }
    });

    return NextResponse.json(user)
}

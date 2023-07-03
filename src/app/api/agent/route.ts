import { NextResponse} from 'next/server'

import {prisma} from '@/app/libs/prismadb'


export async function POST(request: Request) {

    const body = await request.json();
    const { firstName, lastName, mobile, profile} = body;


  
    // check if input data is empty
    if(!firstName || !lastName || !mobile) {
        return new NextResponse('Missing Fields', {status: 400})
    }

       
    // const email_exist = await prisma.accounts.findUnique({
    //     where: {
    //         email
    //     }
    // });

    // const number_exist = await prisma.accounts.findUnique({
    //     where: {
    //         mobile
    //     }
    // });

    // if(email_exist || number_exist ) {
    //     throw new Error('Email or Mobile number already exists')




    const agent = await prisma.agents.create({
        data: {
            first_name: firstName,
            last_name: lastName,
            mobile,
            agency: 900,
        }
    });
    console.log(agent)

    return NextResponse.json(agent)
}







import bcrypt from 'bcrypt'
import {prisma} from '@/app/libs/prismadb'
import { NextResponse} from 'next/server'


export async function POST(request: Request) {
    const body = await request.json();
    // console.log(body)
    // console.log(JSON.stringify(body))
    const { firstName, lastName, mobile, email, password, isAgent, agency } = body;
    console.log( firstName, lastName, mobile, email, password, isAgent, agency)
    let userType = 0;


    // check if input data is empty
    if(!firstName || !lastName || !mobile|| !email || !password) {
        return new NextResponse('Missing Fields', {status: 400})
    }

       
    const email_exist = await prisma.accounts.findUnique({
        where: {
            email
        }
    });

    const number_exist = await prisma.accounts.findUnique({
        where: {
            mobile
        }
    });

    if(email_exist || number_exist ) {
        throw new Error('Email or Mobile number already exists')
    }

   
    if(Number(isAgent) === 1) {
        userType = 801
        
    }else{
        userType = 800
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const user = await prisma.accounts.create({
        data: {
            first_name: firstName,
            last_name: lastName,
            mobile,
            email,
            hashed_password: hashedPassword,
            is_agent: isAgent === 1 ? true : false,
            agency: null,
            account_type: userType
        }
    });

    return NextResponse.json(user)
}






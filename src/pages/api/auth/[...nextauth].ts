import NextAuth, { AuthOptions } from "next-auth";
import { prisma } from "@/app/libs/prismadb";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from 'bcrypt'

export const authOptions: AuthOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {
                email: { label: "email", type: "text"},
                password: { label: "password", type: "password" },
            },
            async authorize(credentials) {

                // check to see if email and password is there
                if (!credentials?.email || !credentials.password) {
                    throw new Error('Please enter an email and password')
                }

                // check to see if user exists
                const user = await prisma.accounts.findUnique({
                    where: {
                        email: credentials.email
                    }
                });


                // if no user was found 
                if (!user || !user?.hashed_password) {
                    throw new Error('No user found')
                }



                // const agencyName = await prisma.agencies.findUnique({
                //     where: {
                //         id: user.agency
                //     }
                //  })

                // check to see if password matches
                const passwordMatch = await bcrypt.compare(credentials.password, user.hashed_password)

                // if password does not match
                if (!passwordMatch) {
                    throw new Error('Incorrect password')
                }

          

                console.log(user)
                return user as any;
            },
        }),
    ],
    secret: process.env.SECRET,
    session: {
        strategy: "jwt",
    },
    debug: process.env.NODE_ENV === "development",
    pages: {
        signIn: '/login',
    }
}

export default NextAuth(authOptions)


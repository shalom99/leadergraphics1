import NextAuth from "next-auth";
import { prisma } from "@/app/libs/prismadb";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from 'bcrypt'

export const authOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {
                email: { label: "Email", type: "text", placeholder: "Email" },
                password: { label: "Password", type: "password" },
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

                // check to see if password matches
                const passwordMatch = await bcrypt.compare(credentials.password, user.hashed_password)

                // if password does not match
                if (!passwordMatch) {
                    throw new Error('Incorrect password')
                }

                return user;
            },
        }),
    ],
    secret: process.env.SECRET,
    session: {
        strategy: "jwt",
    },
    debug: process.env.NODE_ENV === "development",
}
export default NextAuth(authOptions)



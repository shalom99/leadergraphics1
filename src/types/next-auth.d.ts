import NextAuth, {DefaultSession} from "next-auth"

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      /** The user's postal address. */
      id: Number,
      agency: Agency
    } & DefaultSession["user"]
  } 

  interface Agency {
    id: number,
    name: string,
    address: string,
    telephone: string
  }
}
'use client'
import { useSession } from "next-auth/react";
import Link from "next/link";

export default function Home() {
  const {data: session} = useSession()
  return (
    <main className="bg-main-bg bg-no-repeat bg-cover h-screen flex flex-col justify-center items-center gap-y-[200px]">
      <h1 className="font-black text-xl">Home Page</h1>
      <Link href="/login" className="text-red-600 text-3xl">Login</Link>
      <h1>{JSON.stringify(session)}</h1>
    </main>
  )

}

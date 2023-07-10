'use client'

import Link from "next/link";
import { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import ClientOnly from "./components/ClientOnly";


export default function Home() {



  return (

    <main className="bg-main-bg bg-no-repeat bg-cover h-screen flex flex-col justify-center items-center gap-y-[200px]">
      <h1 className="font-black text-xl">Home Page</h1>
      <Link href="/login" className="text-red-600 text-3xl">Login</Link>
  
    </main>

  )

}

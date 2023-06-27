'use client'

import Link from "next/link";
import { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";


export default function Home() {


  const session = useSession();
  const router = useRouter();


  useEffect(() => {
    if (session?.status === "authenticated") {
      router.push("/profiles");
    }
  });
  return (
    <main className="bg-main-bg bg-no-repeat bg-cover h-screen flex flex-col justify-center items-center gap-y-[200px]">
      <h1 className="font-black text-xl">Home Page</h1>
      <Link href="/login" className="text-red-600 text-3xl">Login</Link>
  
    </main>
  )

}

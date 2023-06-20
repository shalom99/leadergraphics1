import Link from "next/link";

export default function Home() {

  return (
    <main className="bg-main-bg bg-no-repeat bg-cover h-screen flex flex-col justify-center items-center gap-y-[200px]">
      <h1 className="font-black text-xl">Home Page</h1>
      <Link href="/login" className="text-red-600 text-3xl">Login</Link>
    </main>
  )

}

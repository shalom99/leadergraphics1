import Link from "next/link"
import {MdConstruction} from 'react-icons/md'

function page() {
  return (
    <div className="h-screen w-full flex flex-col gap-5 items-center justify-center">
        <MdConstruction size={60} />
        <h1 className="text-center text-4xl">Page under construction</h1>
        <Link href="/welcome"className="underline">Go back</Link>
    </div>
  )
}

export default page
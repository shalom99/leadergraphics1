'use client'
import Image from 'next/image'
import Link from 'next/link'
import { FC, useState } from 'react'

type pageProps = {
  
}

const Login: FC<pageProps> = ({}) => {
  const [data, setData] = useState({})
  return (
    <div className="bg-main-bg bg-no-repeat bg-cover h-screen flex items-center justify-center">
        <div className='relative w-[300px]'>
    <div className='bg-white row-span-full row-start-1 row-end-7 flex flex-col items-center pt-10 pb-28 rounded-full'>
        <Image src='/lg_logo.png' alt="Logo" width={150} height={150} className='mb-5'/>
        <h1 className="font-medium text-xl text-center">Login</h1>

        <form action="" className='flex flex-col items-center'>
            <label className='self-start pl-3 text-xs' htmlFor="">Email</label>
            <input type="text" className='border-2 border-black rounded-full mb-3' />
            <label className='self-start pl-3 text-xs' htmlFor="">Password</label>
            <input type="password" className='border-2 border-black rounded-full mb-2' />
            <Link href="/welcome">
            <button className=' bg-primaryBlue rounded-full px-5 py-2 text-xs font-bold'>LETS GO</button>
            </Link>
        </form>
    </div>
    <div className='absolute left-0 right-0 bottom-[-20px] text-xs gap-1 text-white bg-black rounded-full py-10 flex items-center justify-center'>
        <p>Don&apos;t have an account?</p>
        <Link href="/signup" className='font-bold'>Sign Up</Link>
    </div>
    </div>
  </div>
)
}

export default Login
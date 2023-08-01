import { url } from 'inspector'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import Templates from '@/components/Templates'
import Products from '@/components/Products'

type pageProps = {
  
}

const DesignHub: FC<pageProps> = ({}) => {
  return (
    <div className="bg-gradient-to-r from-rose-100 to-teal-100 h-full md:h-screen flex flex-col justify-center items-center">
        <div className='w-[min(700px, 100%)] py-5'>
            <h1 className='text-center font-black text-3xl mb-10'>Design Hub</h1>

            <Products />
        </div>

    </div>
)
}

export default DesignHub
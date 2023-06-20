import { url } from 'inspector'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

type pageProps = {
  
}

const DesignHub: FC<pageProps> = ({}) => {
  return (
    <div className="bg-main-bg bg-no-repeat bg-cover h-full md:h-screen flex flex-col justify-center items-center">
        <div className='w-[min(700px, 100%)] py-5'>
            <h1 className='text-center font-black text-3xl mb-10'>Design Hub</h1>

            <div className='grid grid-cols-2 md:grid-cols-3 gap-x-2 gap-y-2'>

                <div className='flex flex-col items-center gap-2'>
                    <p>Signboard</p>
                    <Image src='/img_sample.jpg' alt="Logo" width={150} height={150} className='mb-5'/>
                </div>

                <div className='flex flex-col items-center gap-2'>
                    <p>Digital Print</p>
                    <Image src='/img_sample.jpg' alt="Logo" width={150} height={150} className='mb-5'/>
                </div>

                <div className='flex flex-col items-center gap-2'>
                    <p>Corflute</p>
                    <Image src='/img_sample.jpg' alt="Logo" width={150} height={150} className='mb-5'/>
                </div>

                <div className='flex flex-col items-center gap-2'>
                    <p>Enduroboards</p>
                    <Image src='/img_sample.jpg' alt="Logo" width={150} height={150} className='mb-5'/>
                </div>

                <div className='flex flex-col items-center gap-2'>
                    <p>Flag</p>
                    <Image src='/img_sample.jpg' alt="Logo" width={150} height={150} className='mb-5'/>
                </div>

                <div className='flex flex-col items-center gap-2'>
                    <p>A-Frames</p>
                    <Image src='/img_sample.jpg' alt="Logo" width={150} height={150} className='mb-5'/>
                </div>

                <div className='flex flex-col items-center gap-2'>
                    <p>Window Sticker</p>
                    <Image src='/img_sample.jpg' alt="Logo" width={150} height={150} className='mb-5'/>
                </div>

                <div className='flex flex-col items-center gap-2'>
                    <p>Overlay</p>
                    <Image src='/img_sample.jpg' alt="Logo" width={150} height={150} className='mb-5'/>
                </div>

                <div className='flex flex-col items-center gap-2'>
                    <p>Other</p>
                    <Image src='/img_sample.jpg' alt="Logo" width={150} height={150} className='mb-5'/>
                </div>

            </div>
        </div>

    </div>
)
}

export default DesignHub
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

type ProductsProps = {
  
}

const Products: FC<ProductsProps> = ({}) => {
  return (
    <>
    <div className='grid grid-cols-2 md:grid-cols-3 gap-x-2 lg:gap-x-10 gap-y-2'>
    <div className='flex flex-col items-center gap-2'>
        <Link href="/designhub/designer">
 
        <p>Signboard</p>
        <Image src='/img_sample.jpg' alt="Logo" width={150} height={150} className='mb-5'/>
        </Link>
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
</>
)
}

export default Products
'use client'
import { FC, useCallback, useRef } from 'react'
import { toPng } from 'html-to-image';

type SignBoardProps = {
  size: string
  type: string
  bed: number
  bath: number
  car: number
  auction?: string
  isOpen: boolean
  style: string;

}

const SignBoard: FC<SignBoardProps> = ({isOpen, size, style, bed, car, bath, auction, type}) => {

  const ref = useRef<HTMLDivElement>(null)

  const onButtonClick = useCallback(() => {
    if (ref.current === null) {
      return
    }

    toPng(ref.current, { cacheBust: true, })
      .then((dataUrl) => {
        const link = document.createElement('a')
        link.download = 'my-image-name.png'
        link.href = dataUrl
        link.click()
      })
      .catch((err) => {
        console.log(err)
      })
  }, [ref])



    if(!isOpen) return null

  return (
    <>
    <div className=''>

        <div id="signage" ref={ref} className={`${style} bg-black text-white py-5 flex flex-col justify-between`}>

          <div id="header" className='flex flex-col items-center gap-y-2'>
          <h1 className='text-center'>Signboard {size}</h1>
              <div className=''>{type !== 'none' && type  }</div>
              <div>{auction && <p>Auction: {auction}</p>}
                
   
              </div>
          </div>

          
       


          <div id="footer" className='justify-self-end flex justify-center gap-5 text-xs'>
            
            <div id="bed" className={`${bed === 0? 'hidden' :'flex flex-col items-center'}`}>
              <p>{bed}</p>
              <p>BED</p>
            </div>
            <div id="bath" className={`${bath === 0 ? 'hidden' :'flex flex-col items-center'}`}>
              <p>{bath}</p>
              <p>BATH</p>
            </div>
            <div id="car" className={`${car === 0 ? 'hidden' :'flex flex-col items-center'}`}>
              <p>{car}</p>
              <p>CAR</p>
            </div>
          </div>
        </div>



        <div className='flex justify-between'>
            <div className='w-[10px] h-[100px] bg-gray-400'></div>
            <div className='w-[10px] h-[100px] bg-gray-400'></div>
        </div>

        <div className='flex justify-center mt-10'>
        {isOpen &&  <button className="border rounded-md bg-blue-200 py-1 px-2" onClick={onButtonClick}>Download Image</button> }
        </div>
    </div>
     </>
)
}

export default SignBoard
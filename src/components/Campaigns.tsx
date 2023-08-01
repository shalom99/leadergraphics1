'use client'
import { FC, useState } from 'react'
import { BiDownArrow, BiUpArrow } from 'react-icons/bi'
import { BsFillFilePostFill } from 'react-icons/bs'
import {GrDocumentText} from 'react-icons/gr'
type CampaignsProps = {
  
}

const Campaigns: FC<CampaignsProps> = ({}) => {
    const [show, setShow] = useState(false)

    const showHandler =  () =>{
        setShow(prev => !prev)
    }

  return (
    <div className="w-full h-full  pt-5 px-5 flex flex-col">
    <h1 className="mb-10 text-2xl font-bold">Campaigns</h1>
    
    <div className="flex flex-col gap-y-5">

    <div className="flex flex-col">
        <button onClick={showHandler} className="max-w-[300px] flex items-center justify-between gap-x-2 border p-2">
            <p className="font-bold">13 Capital Terrace, Queanbeyan</p>
            {(show ? <BiUpArrow size={25}/>: <BiDownArrow size={25}/>)}
        </button>


        {(show ?
            <>
            <div className="flex mb-10">
            <div className="flex flex-col gap-y-5">
                <p className="border bg-yellow-500 px-2 text-center font-bold">#00001-1</p>
                <BsFillFilePostFill size={150} />
            </div>

            <div className="grow">
                <p className="pl-2 text-2xl font-bold">13 Capital Terrace, Queanbeyan</p>
                <div className="flex flex-col border-4 p-2">
                    <p className="font-bold">Signboard</p>
                    <p className="italic text-sm mb-4">1200mm x 1800mm S/S Auction</p>
                    <p>Ordered: 13/06/23</p>
                    <p>Installed: 13/06/23</p>
                    <p className="mb-4">Removed: N/A</p>
                    
                    <div className="flex text-center">
                        <div className="w-[70px] text-xs border bg-green-700">Campaign Started</div>
                        <div className="w-[70px] text-xs border py-2 bg-green-700">Approved</div>
                        <div className="w-[70px] text-xs border py-2">Printing</div>
                        <div className="w-[70px] text-xs border py-2">Printed</div>
                        <div className="w-[70px] text-xs border py-2">Loaded</div>
                        <div className="w-[70px] text-xs border py-2">Installed</div>
                        <div className="w-[70px] text-xs border py-2">Removed</div>
                    </div>
        
                    

                </div>
            </div>
        </div> 

         <div className="flex">
            <div className="flex flex-col gap-y-5">
                <p className="border bg-yellow-500 px-2 text-center font-bold">#00001-1</p>
                <GrDocumentText size={150} />
                

            </div>

            <div className="grow">
                <p className="pl-2 text-2xl font-bold">13 Capital Terrace, Queanbeyan</p>
                <div className="flex flex-col border-4 p-2">
                    <p className="font-bold">Brochure</p>
                    <p className="italic text-sm mb-4">A4 Brochure 4pp, 300gsm Soverign Silk</p>
                    <p>Ordered: 13/06/23</p>
                    <p className="mb-4">Dispatched: 14/06/23</p>
                  
                    
                    <div className="flex text-center">
                        <div className="w-[70px] text-xs border bg-green-700">Campaign Started</div>
                        <div className="w-[70px] text-xs border py-2 bg-green-700">Approved</div>
                        <div className="w-[70px] text-xs border py-2 bg-green-700">Printing</div>
                        <div className="w-[70px] text-xs border py-2">Printed</div>
                        <div className="w-[70px] text-xs border py-2">Loaded</div>
                        <div className="w-[70px] text-xs border py-2">Installed</div>
                        <div className="w-[70px] text-xs border py-2">Removed</div>
                    </div>
        
                    

                </div>
            </div>
        </div> 
        </>

        : '' )}

    </div>

    <div className="flex flex-col">
        <div className="max-w-[300px] flex items-center justify-between gap-x-2 border p-2">
            <p className="font-bold">80 George Street, Marulan</p>
            <BiDownArrow size={25}/>
        </div>

    </div>

    <div className="flex flex-col">
        <div className="max-w-[300px] flex items-center justify-between gap-x-2 border p-2">
        <p className="font-bold">1/16 Slim Dusty Drive, Moncreiff</p>
            <BiDownArrow size={25}/>
        </div>

    </div>

    <div className="flex flex-col">
        <div className="max-w-[300px] flex items-center justify-between gap-x-2 border p-2">
        <p className="font-bold">4 Townshend Close, Kambah</p>
            <BiDownArrow size={25}/>
        </div>

    </div>





    </div>

  </div>
)
}

export default Campaigns
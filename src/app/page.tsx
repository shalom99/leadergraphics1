'use client'

import SignBoard from "./components/SignBoard";
import { useState } from "react";


const INITIAL_DATA = {
  sizes: [
    {name: 'Size', style: 'none'},
    {name: '600mm x 900mm', style: 'w-[200px] h-[300px] aspect-[2/3]'},
    {name: '600mm x 1200mm', style: 'w-[200px] h-[400px] aspect-[1/2]'},
    {name: '900mm x 1200mm', style: 'w-[300px] h-[400px] aspect-[3/4]'},
    {name: '900mm x 1600mm', style: 'w-[300] h-[533px] aspect-[9/16]'},
    {name: '1200mm x 1800mm', style: 'w-[min(100%,400px)] h-[600px] aspect-[2/3]'},
    {name: '1200mm x 2400mm', style: 'w-[min(100%,400px)] h-[800px] aspect-[1/2]'},
     ],
  size: "Size",
  bed: 0,
  bath: 0,
  car: 0,
  selected: "",
  style: "",
  type: "",
  auction: "",
}





export default function Home() {
  const [signageData, setSignageData] = useState(INITIAL_DATA)
  const [isOpen, setIsOpen] = useState(false)

  console.log(`initial data: ${JSON.stringify(signageData)}`)

  return (
    <main>
      <section className="w-[min(100%,800px)] px-2 mx-auto py-5 md:flex justify-between">
        <div className="">
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl">Signboard Design</h1>
        
            <select value={signageData.selected} onChange={changeSize} name="size" id="size" className="border">
              {signageData.sizes.map((size) => {
                return (
                  <option key={size.name} value={size.style}>{size.name}</option>
                )
              })}
            </select>

            <select name="type" id="type" value={signageData.type} onChange={(e) => setSignageData({...signageData, type: e.target.value})} className="border">
              <option value="none">Type</option>
              <option value="Generic">Generic</option>
              <option value="Photosign">Photosign</option>
            </select>
            <div className="grid grid-cols-[auto_1fr] gap-y-2">
              <label htmlFor="" className="border px-2">EER</label>
              <input type="text" disabled className="border bg-red-200"/>
      
              <label htmlFor="" className="border px-2">BED</label>
              <input type="number" min={0} value={signageData.bed} onChange={(e) => setSignageData({...signageData, bed: e.target.valueAsNumber})} className="border bg-gray-200"/>
        
              <label htmlFor="" className="border px-2">BATH</label>
              <input type="number" min={0} value={signageData.bath} onChange={(e) => setSignageData({...signageData, bath: e.target.valueAsNumber})} className="border bg-gray-200"/>
       
              <label htmlFor="" className="border px-2">CAR</label>
              <input type="number" min={0} value={signageData.car} onChange={(e) => setSignageData({...signageData, car: e.target.valueAsNumber})} className="border bg-gray-200"/>

              <label htmlFor="" className="border px-2">AUCTION</label>
              <input type="text" value={signageData.auction} onChange={(e) => setSignageData({...signageData, auction: e.target.value})} className="border bg-gray-200"/>

              <label htmlFor="" className="border px-2">PHOTO 1</label>
              <input type="text" disabled className="border bg-red-200"/>
              <label htmlFor="" className="border px-2">PHOTO 2</label>
              <input type="text" disabled className="border bg-red-200"/>
              <label htmlFor="" className="border px-2">PHOTO 3</label>
              <input type="text" disabled className="border bg-red-200"/>
              <label htmlFor="" className="border px-2">PHOTO 4</label>
              <input type="text" disabled className="border bg-red-200"/>
            </div>
     
          </div>
        </div>

        <div id="screenshot"  className="md:grow flex items-center justify-center py-5">
          <SignBoard {...signageData} isOpen={isOpen} />
        </div>
      </section>
    </main>
  );

  function changeSize(e: React.ChangeEvent<HTMLSelectElement>) {
    console.log(`selected: ${e.target.value}`)
    console.log(`data: ${JSON.stringify(signageData)}`)
    if(e.target.value === 'none'){
      setIsOpen(false)
      setSignageData(INITIAL_DATA)
    }else {
      setSignageData({...signageData, selected: e.target.value, style: e.target.value})
      setIsOpen(true)
    }

     
  

}
}

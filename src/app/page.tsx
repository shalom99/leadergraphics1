'use client'
import Image from "next/image";
import SignBoard from "./components/SignBoard";
import { useCallback, useRef, useState } from "react";
import { toPng } from 'html-to-image';

export default function Home() {
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
 
  const [size, setSize] = useState({style: '', name: ""})
  const [isOpen, setIsOpen] = useState(false)
  const [amenities, setAmenities] = useState({bed: 0, bath: 0, car: 0}) 

  const [auction, setAuction] = useState('')
  const [type, setType] = useState('')


  function changeSize(e:any) {

    if(e.target.value == "none"){
      setIsOpen(false)
      setSize({...size, name: "Size"})
    }else{

      if(e.target.value == '600x900'){
        setSize({name: e.target.value, style: 'w-[200px] h-[300px] aspect-[2/3]'})
      }else if(e.target.value == '600x1200'){
        setSize({name: e.target.value, style: 'w-[200px] h-[400px] aspect-[1/2]'})

        
      }else if(e.target.value == '900x1200'){
        setSize({name: e.target.value, style: 'w-[300px] h-[400px] aspect-[3/4]'})
 
      }else if(e.target.value == '900x1600'){
        setSize({name: e.target.value, style: 'w-[300] h-[533px] aspect-[9/16]'})
      }else if(e.target.value == '1200x1800'){
        setSize({name: e.target.value, style: 'w-[min(100%,400px)] h-[600px] aspect-[2/3]'})
      }else if(e.target.value == '1200x2400'){
        setSize({name: e.target.value, style: 'w-[min(100%,400px)]  h-[800px] aspect-[1/2]'})
      }
      console.log(size)
      
      setIsOpen(true)
    }

  
  }

  return (
    <main>
      <section className="w-[min(100%,800px)] px-2 mx-auto py-5 md:flex justify-between">
        <div className="">
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl">Signboard Design</h1>
        
            <select value={size.name} onChange={(e) => changeSize(e.target.value)} name="size" id="size" className="border">
              <option value="none">Size</option>
              <option value="600x900">600mm x 900mm</option>
              <option value="600x1200">600mm x 1200mm</option>
              <option value="900x1200">900mm x 1200mm</option>
              <option value="900x1600">900mm x 1600mm</option>
              <option value="1200x1800">1200mm x 1800mm</option>
              <option value="1200x2400">1200mm x 2400mm</option>
            </select>

            <select name="type" id="type" value={type} onChange={(e) => setType(e.target.value)} className="border">
              <option value="none">Type</option>
              <option value="Generic">Generic</option>
              <option value="Photosign">Photosign</option>
            </select>
            <div className="grid grid-cols-[auto_1fr] gap-y-2">
              <label htmlFor="" className="border px-2">EER</label>
              <input type="text" disabled className="border bg-red-200"/>
      
              <label htmlFor="" className="border px-2">BED</label>
              <input type="number" min={0} value={amenities.bed} onChange={(e) => setAmenities({...amenities, bed: e.target.valueAsNumber})} className="border bg-gray-200"/>
        
              <label htmlFor="" className="border px-2">BATH</label>
              <input type="number" min={0} value={amenities.bath} onChange={(e) => setAmenities({...amenities, bath: e.target.valueAsNumber})} className="border bg-gray-200"/>
       
              <label htmlFor="" className="border px-2">CAR</label>
              <input type="number" min={0} value={amenities.car} onChange={(e) => setAmenities({...amenities, car: e.target.valueAsNumber})} className="border bg-gray-200"/>

              <label htmlFor="" className="border px-2">AUCTION</label>
              <input type="text" value={auction} onChange={(e) => setAuction(e.target.value)} className="border bg-gray-200"/>

              <label htmlFor="" className="border px-2">PHOTO 1</label>
              <input type="text" disabled className="border bg-red-200"/>
              <label htmlFor="" className="border px-2">PHOTO 2</label>
              <input type="text" disabled className="border bg-red-200"/>
              <label htmlFor="" className="border px-2">PHOTO 3</label>
              <input type="text" disabled className="border bg-red-200"/>
              <label htmlFor="" className="border px-2">PHOTO 4</label>
              <input type="text" disabled className="border bg-red-200"/>
            </div>
            {isOpen &&  <button className="border rounded-md" onClick={onButtonClick}>Download Image</button> }
           
          </div>
       
        </div>

        <div id="screenshot" ref={ref} className="md:grow flex items-center justify-center py-5">
          <SignBoard  style={size.style} bed={amenities.bed} bath={amenities.bath} car={amenities.car} isOpen={isOpen} size={size.name} type={type} auction={auction}/>
  
        </div>

      </section>
    </main>
  );
}

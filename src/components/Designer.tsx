"use client";
import Image from "next/image";
import { FC, useCallback, useEffect, useRef, useState } from "react";
import { AiOutlineFileImage } from "react-icons/ai";
import Canvas from "./Canvas";
import cn from "../../libs/cn";
import { toPng } from "html-to-image";
type DesignerProps = {
  template: any;
};

const INITIAL_DATA = {
  sizes: [
    { name: "Size", style: "none" },
    { name: "600mm x 900mm", style: "w-[200px] h-[300px] aspect-[2/3]" },
    { name: "600mm x 1200mm", style: "w-[200px] h-[400px] aspect-[1/2]" },
    { name: "900mm x 1200mm", style: "w-[300px] h-[400px] aspect-[3/4]" },
    { name: "900mm x 1600mm", style: "w-[300] h-[533px] aspect-[9/16]" },
    {
      name: "1200mm x 1800mm",
      style: "w-[min(100%,400px)] h-[600px] aspect-[2/3]",
    },
    {
      name: "1200mm x 2400mm",
      style: "w-[min(100%,400px)] h-[800px] aspect-[1/2]",
    },
  ],
  size: "Size",
  bed: 0,
  bath: 0,
  car: 0,
  selected: "",
  style: "",
  type: "",
  auction: "",
};



const Designer: FC<DesignerProps> = ({ template }) => {
  const [designStage, setDesignStage] = useState("template");
  const [signageData, setSignageData] = useState(INITIAL_DATA);
  const [isOpen, setIsOpen] = useState(false);
  const [image, setImage] = useState<File>();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const ref = useRef<HTMLDivElement>(null)
  const [preview, setPreview] = useState<string>();
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

  useEffect(() => {
    if (image) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(image);
    } else {
      setPreview(null)
    }
  }, [image]);

  return (
    <div className="bg-gradient-to-r from-rose-100 to-teal-100 h-full md:h-full flex flex-col">
      <div
        id="topRow"
        className="w-full bg-white py-5 px-5 flex justify-between items-center"
      >
        <div>
          <button className="font-bold">Home</button>
        </div>

        <div className="flex items-center gap-x-[700px]">
          <h2 className="font-bold">Design Title</h2>
          <button className="bg-primaryBlue p-2 rounded-full">
            Save Draft
          </button>
        </div>
      </div>

      <div
        id="bottomRow"
        className="grow-0 w-full h-full flex overflow-hidden "
      >
        <div className="w-[20%] bg-gray-800 text-white flex">
          <div className="w-[20%]">
            <div
              className={cn(
                designStage === "template" ? "bg-gray-400" : "",
                "flex flex-col items-center py-3 cursor-pointer"
              )}
              onClick={() => {
                setDesignStage("template");
              }}
            >
              <AiOutlineFileImage size={40} />
              <p className="text-xs">Templates</p>
            </div>
            <div
              className={cn(
                designStage === "editor" ? "bg-gray-400" : "",
                "flex flex-col items-center py-3 cursor-pointer"
              )}
              onClick={() => {
                setDesignStage("editor");
              }}
            >
              <AiOutlineFileImage size={40} />
              <p className="text-xs">Editor</p>
            </div>
          </div>

          <div className=" w-[80%] bg-gray-400 overflow-hidden">
            <div className="h-[80px] flex flex-col justify-center border-b-2">
              <h1 className="text-center ">
                {designStage === "template" ? "Select Template" : "Editor"}
              </h1>
            </div>

            <div className="h-[100%] flex flex-col items-center py-2 bg-gray-400 ">
              <div
                id="templateDiv"
                className={designStage === "template" ? "" : "hidden"}
              >
                <div className=" py-5 cursor-pointer">
                  <Image
                    src="/template1.webp"
                    width={200}
                    height={200}
                    alt="template"
                  />
                  <p className="text-center">Template 1</p>
                </div>

  
              </div>

              <div
                id="editorDiv"
                className={cn(

                  "w-full flex flex-col py-5 gap-y-2 px-2",
                  designStage === "editor" ? "" : "hidden",
                )}
              >
                <select
                  value={signageData.selected}
                  onChange={changeSize}
                  name="size"
                  id="size"
                  className="rounded-full bg-gray-800"
                >
                  {signageData.sizes.map((size) => {
                    return (
                      <option key={size.name} value={size.style}>
                        {size.name}
                      </option>
                    );
                  })}
                </select>

                <select
                  name="type"
                  id="type"
                  value={signageData.type}
                  onChange={(e) =>
                    setSignageData({ ...signageData, type: e.target.value })
                  }
                  className="rounded-full bg-gray-800"
                >
                  <option value="none">Type</option>
                  <option value="Generic">Generic</option>
                  <option value="Photosign">Photosign</option>
                </select>
                <div className="w-full grid grid-cols-[auto_1fr] gap-y-2">
                  <label htmlFor="" className="border px-2">
                    EER
                  </label>
                  <input type="text" disabled className="border bg-red-200" />

                  <label htmlFor="" className="border px-2">
                    BED
                  </label>
                  <input
                    type="number"
                    min={0}
                    value={signageData.bed}
                    onChange={(e) =>
                      setSignageData({
                        ...signageData,
                        bed: e.target.valueAsNumber,
                      })
                    }
                    className="border bg-gray-800 pl-2"
                  />

                  <label htmlFor="" className="border px-2">
                    BATH
                  </label>
                  <input
                    type="number"
                    min={0}
                    value={signageData.bath}
                    onChange={(e) =>
                      setSignageData({
                        ...signageData,
                        bath: e.target.valueAsNumber,
                      })
                    }
                    className="border bg-gray-800 pl-2"
                  />

                  <label htmlFor="" className="border px-2">
                    CAR
                  </label>
                  <input
                    type="number"
                    min={0}
                    value={signageData.car}
                    onChange={(e) =>
                      setSignageData({
                        ...signageData,
                        car: e.target.valueAsNumber,
                      })
                    }
                    className="border bg-gray-800 pl-2"
                  />

                  <label htmlFor="" className="border px-2">
                    AUCTION
                  </label>
                  <input
                    type="text"
                    value={signageData.auction}
                    onChange={(e) =>
                      setSignageData({
                        ...signageData,
                        auction: e.target.value,
                      })
                    }
                    className="border bg-red-200 pl-2"
                  />
{/*                   
                  <label htmlFor="" className="border px-2">
                    PHOTO 1
                  </label>
                  <input type="file" className="border bg-red-200" /> */}
                  {/* <label htmlFor="" className="border px-2">PHOTO 2</label>
              <input type="text" disabled className="border bg-red-200"/>
              <label htmlFor="" className="border px-2">PHOTO 3</label>
              <input type="text" disabled className="border bg-red-200"/>
              <label htmlFor="" className="border px-2">PHOTO 4</label>
              <input type="text" disabled className="border bg-red-200"/> */}
                </div>
                <div className="flex justify-center rounded-full ">
                <label htmlFor="" className="rounded-l-full w-[200px] border px-2">
                    PHOTO 1
                  </label>
                  <input ref={fileInputRef} type="file" accept="image/*" onChange={(event) => {
            const file = event.target.files[0];
            if (file && file.type.substr(0, 5) === "image") {
              setImage(file);
            } else {
              setImage(null);
            }
          }} className="rounded-r-full border bg-red-200"  />
                </div>
                <button onClick={(event) => {
                  event.preventDefault()
                  fileInputRef.current?.click()
                }}>Show Image</button>
                <button onClick={onButtonClick} className="rounded-full border-2 bg-primaryBlue">Save Image</button>
              <p>{preview}</p>
              </div>
            </div>
          </div>
        </div>

        <div
          id="right"
          className="w-[80%] bg-primaryBlue p-5 flex items-center justify-center"
        >
              <div ref={ref} className="w-[799.5px] h-[1392px] bg-red-700 relative">
              <img src="/testjpg.jpg" className="absolute w-[799.5px] h-[1392px] inset-0 z-0" alt="" />

              <div className="absolute top-[12.89%] left-[4.5%] right-[4.5%] bottom-[55.9%]">
                <img src={preview} alt="" className="object-cover h-full w-full" />
              </div>
              

              <p className="absolute  top-[58.55%] left-[29.45%] text-white bg-[#0e3d37] text-xl px-5 font-light">{signageData.bed}</p>

              <p className="absolute top-[58.55%] left-[46.5%] text-white bg-[#0e3d37] text-xl px-5 font-light ">{signageData.bath}</p>
  

              <p className="absolute top-[58.55%]  left-[63.8%] text-white bg-[#0e3d37] text-xl px-5 font-light ">{signageData.car}</p>
  
              </div>

        
    
    
        </div>
      </div>
    </div>
  );

  function changeSize(e: React.ChangeEvent<HTMLSelectElement>) {
    console.log(`selected: ${e.target.value}`);
    console.log(`data: ${JSON.stringify(signageData)}`);
    if (e.target.value === "none") {
      setIsOpen(false);
      setSignageData(INITIAL_DATA);
    } else {
      setSignageData({
        ...signageData,
        selected: e.target.value,
        style: e.target.value,
      });
      setIsOpen(true);
    }
  }
};

export default Designer;

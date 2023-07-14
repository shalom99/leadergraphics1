"use client";
import Image from "next/image";
import { FC, useState } from "react";
import { AiOutlineFileImage } from "react-icons/ai";
import Canvas from "./Canvas";

type DesignerProps = {
  template: any;
};

const Designer: FC<DesignerProps> = ({ template }) => {


  const [selectedTemplate, setSelectedTemplate] = useState(0);

  return (
    <div className="bg-gradient-to-r from-rose-100 to-teal-100 h-full md:h-screen flex flex-col">
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
            Save Draft{" "}
          </button>
        </div>
      </div>

      <div
        id="bottomRow"
        className="grow-0 w-full h-full flex overflow-hidden "
      >
        <div className="w-[20%] bg-gray-800 text-white flex">
          <div className="w-[20%]">
            <div className="flex flex-col items-center py-3 bg-gray-400 ">
              <AiOutlineFileImage size={40} />
              <p className="text-xs">Templates</p>
            </div>
            <div className="flex flex-col items-center py-3 ">
              <AiOutlineFileImage size={40} />
              <p className="text-xs">Editor</p>
            </div>
            <div className="flex flex-col items-center py-3">
              <AiOutlineFileImage size={40} />
              <p className="text-xs">Elements</p>
            </div>
          </div>
          <div className=" w-[80%] bg-gray-400 overflow-hidden">
            <div className="h-[80px] flex flex-col justify-center border-b-2">
              <h1 className="text-center ">Select Templates</h1>
            </div>

            <div className="h-[100%] flex flex-col items-center py-2 bg-gray-400 overflow-auto pb-[100px]">
              <div className=" py-5 cursor-pointer">
                <Image
                  src="/template1.webp"
                  width={200}
                  height={200}
                  alt="template"
                  onClick={() => {
                    setSelectedTemplate(0);
                  }}
                />
                <p className="text-center">Template 1</p>
              </div>

              <div className=" py-5 cursor-pointer">
                <Image
                  src="/template2.webp"
                  width={200}
                  height={200}
                  alt="template"
                  onClick={() => {
                    setSelectedTemplate(2);
                  }}
                />
                <p className="text-center">Template 2</p>
              </div>

              <div className=" py-5 cursor-pointer">
                <Image
                  src="/template3.webp"
                  width={200}
                  height={200}
                  alt="template"
                  onClick={() => {
                    setSelectedTemplate(1);
                  }}
                />
                <p className="text-center">Template 3</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[80%] flex flex-col gap-y-5 justify-center items-center ">
          <Canvas dbtemplate={template} selected={selectedTemplate} />
        </div>
      </div>
    </div>
  );
};

export default Designer;

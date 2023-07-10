import Image from "next/image";
import { FC } from "react";
import { AiOutlineFileImage } from 'react-icons/ai'
type pageProps = {};

const Page: FC<pageProps> = ({}) => {
  return (
    <div className="bg-main-bg bg-no-repeat bg-cover h-full md:h-screen flex-col">
      <div id="topRow" className="w-full bg-white py-5 px-5 flex justify-between items-center">
        <div>
        <button className="font-bold">Home</button>
        </div>

        <div className="flex items-center gap-x-[700px]">
            <h2 className="font-bold">Design Title</h2> 
            <button className="bg-primaryBlue p-2 rounded-full">Save Draft </button></div>
       
      </div>

      <div className="w-full h-full flex">
        <div className="w-[20%] bg-gray-800 text-white flex">
          <div className="w-[20%]">
            <div className="flex flex-col items-center py-3 bg-gray-400 ">
            <AiOutlineFileImage size={40}/>
              <p className="text-xs">Templates</p>
            </div>
            <div className="flex flex-col items-center py-3 ">
            <AiOutlineFileImage size={40}/>
              <p className="text-xs">Editor</p>
            </div>
            <div className="flex flex-col items-center py-3">
            <AiOutlineFileImage size={40}/>
              <p className="text-xs">Elements</p>
            </div>
          </div>
          <div className="w-[80%] bg-gray-400 flex flex-col">
            <div className="h-[80px] flex flex-col justify-center border-b-2">
            <h1 className="text-center  ">Select Templates</h1>
            </div>

            <div className="flex flex-col items-center py-2">
               
                <Image src="/template1.webp" width={200} height={200} alt="template" />
                <p className="text-center">Template 1</p>
            </div>
           
          </div>
        </div>

        <div className="w-[80%] flex flex-col gap-y-5 justify-center items-center">
            <h1> Canvas</h1>
            <div className="w-[500px] h-[500px] bg-white"></div>
            
        </div>
      </div>
    </div>
  );
};

export default Page;

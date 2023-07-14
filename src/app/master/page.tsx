import { url } from "inspector";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { BiPlus } from "react-icons/bi";

type pageProps = {};

const Profiles: FC<pageProps> = ({}) => {
  return (
    <div className="bg-gradient-to-r from-rose-100 to-teal-100 h-screen flex justify-center">
      <div className="w-[700px] flex flex-col items-center pt-20">
     
       <h1 className="text-2xl font-bold">Master Login</h1>
       
        <div className="flex flex-col gap-20 mt-20 ">
            <button className="bg-primaryBlue rounded-full px-14 py-5 text-3xl font-bold">ALL CAMPAIGNS</button>
            <button className="bg-primaryBlue rounded-full px-14 py-5 text-3xl font-bold">ALL DRAFTS</button>

        </div>
    

      </div>
    </div>
  );
};

export default Profiles;

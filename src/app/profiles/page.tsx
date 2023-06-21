import { url } from "inspector";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { BiPlus } from "react-icons/bi";

type pageProps = {};

const Profiles: FC<pageProps> = ({}) => {
  return (
    <div className="bg-main-bg bg-no-repeat bg-cover h-screen flex justify-center">
      <div className="w-[700px] flex flex-col items-center pt-20">
        <div className=" gap-1 bg-primaryBlue rounded-full py-5 px-5 flex items-center justify-center">
          <h2 className="text-2xl">
        
            <span className="font-bold">Welcome Back</span> *Company Name*
          </h2>
        </div>

        <h3 className="font-medium text-2xl my-10">Who have we got here?</h3>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-5">
          <div className="flex flex-col items-center">
            <button>
              <Image
                src="/profile.png"
                width={150}
                height={150}
                alt="profile"
                className="bg-black p-3"
              />
              <p>Master Login</p>
            </button>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/profile.png"
              width={150}
              height={150}
              alt="profile"
              className="bg-black p-3"
            />
            <p>*Agent 1*</p>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/profile.png"
              width={150}
              height={150}
              alt="profile"
              className="bg-black p-3"
            />
            <p>*Agent 2*</p>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/profile.png"
              width={150}
              height={150}
              alt="profile"
              className="bg-black p-3"
            />
            <p>*Agent 3*</p>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/profile.png"
              width={150}
              height={150}
              alt="profile"
              className="bg-black p-3"
            />
            <p>*Agent 4*</p>
          </div>
          <div className="flex flex-col items-center">
            <BiPlus size={150} className="bg-black text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profiles;

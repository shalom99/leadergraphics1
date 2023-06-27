'use client'
import { useSession, signOut } from "next-auth/react";

import Image from "next/image";
import Link from "next/link";
import { FC,useEffect } from "react";
import { BiPlus } from "react-icons/bi";
import { GiExitDoor } from "react-icons/gi";
import { useRouter } from "next/navigation";


type pageProps = {};

const Profiles: FC<pageProps> = ({}) => {
  const {data: session} = useSession()
  const router = useRouter();

  useEffect(() => {
    if (session === null) {
      router.push("/");
    }
  });

  return (
    <div className="bg-main-bg bg-no-repeat bg-cover h-screen flex justify-center">
      <div className="w-[700px] flex flex-col items-center pt-20">
        <div className=" gap-1 bg-primaryBlue rounded-full py-5 px-5 flex items-center justify-center">
          <h2 className="text-2xl">
        
            Welcome Back:
            <span className="font-bold"> {session?.user?.email} </span>
  
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
              <p>Master</p>
            </button>
          </div>
    
          <div className="flex flex-col items-center">
            <BiPlus size={150} className="bg-black text-white" />
            <p className="text-gray-300">Add User</p>
          </div>
          <div className="flex flex-col items-center cursor-pointer" onClick={() => signOut()}>
            <GiExitDoor size={150} className="bg-black text-white" />

            <p>Sign Out</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profiles;

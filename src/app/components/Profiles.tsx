"use client";
import { signOut } from "next-auth/react";

import Image from "next/image";
import Link from "next/link";
import { FC, useState } from "react";
import { BiPlus } from "react-icons/bi";
import { GiExitDoor } from "react-icons/gi";

import CreateUser from "../modals/CreateUser";

type pageProps = {
    currentAgency: any
    profiles: any
};


const ProfileSelection: FC<pageProps> = ({currentAgency, profiles}) => {

console.log("client profiles", profiles)
  const [showModal, setShowModal] = useState(false)

  

  return (
    <div className="bg-main-bg bg-no-repeat bg-cover h-full flex justify-center">
      <div className="w-[700px] flex flex-col items-center pt-20">
        <div className=" gap-1 bg-primaryBlue rounded-full py-5 px-5 flex items-center justify-center">
          <h2 className="text-2xl">
            Welcome Back:
            <span className="font-bold"> {currentAgency.name} </span>
          </h2>
        </div>

        <h3 className="font-bold text-2xl my-10">Who have we got here?</h3>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-5">
     
            <div className="flex flex-col items-center">
              <Link href="/master">
                <Image
                  src="/profile.png"
                  width={150}
                  height={150}
                  alt="profile"
                  className="bg-black p-3"
                />
                <p className="text-center">Master</p>
              </Link>
            </div>


          {
            profiles.profiles.map((user: any) => {
              if(user.id == 0){
                return null
              }
              return (
                <div className="flex flex-col items-center" key={user.id}>
              <Link href="/master">
                <Image
                  src="/profile.png"
                  width={150}
                  height={150}
                  alt="profile"
                  className="bg-black p-3"
                />
                <p className="text-center">{user.first_name +" " + user.last_name}</p>
              </Link>
            </div>
              )
            })
          }
          

          <div className="flex flex-col items-center cursor-pointer" onClick={()=> {
            setShowModal(true)
          }}>
            <BiPlus size={150} className="bg-black text-white" />
            <p className="">Add User</p>
          </div>

          <div
            className="flex flex-col items-center cursor-pointer"
            onClick={() => signOut({ callbackUrl: "/login" })}
          >
            <GiExitDoor size={150} className="bg-black text-white" />
            <p>Sign Out</p>
          </div>
        </div>
      </div>
   
    

 

      <CreateUser showModal={showModal} setShowModal={setShowModal} />
    </div>
  );


};

export default ProfileSelection;

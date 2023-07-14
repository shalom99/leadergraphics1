"use client";
import { signOut } from "next-auth/react";

import Image from "next/image";
import Link from "next/link";
import { FC, useState } from "react";
import { BiPlus } from "react-icons/bi";
import { GiExitDoor } from "react-icons/gi";

import CreateUser from "../modals/CreateUser";
import { AiFillCloseCircle, AiOutlineMenu } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import AccountModal from "../modals/AccountModal";
type pageProps = {
    currentAgency: any
    profiles: any
};


const ProfileSelection: FC<pageProps> = ({currentAgency, profiles}) => {

// console.log("client profiles", profiles)
  const [showModal, setShowModal] = useState(false)
  const [showAccountModal, setShowAccountModal] = useState(false)

  
function handleModal(){
  console.log("click")
  // setShowAccountModal(prev => !prev)
}

  return (
    <div className="bg-gradient-to-r from-rose-100 to-teal-100 h-full md:h-screen flex flex-col items-center pt-7">
      <div className="w-full flex items-center justify-between px-5">
      <Image
            src="/lg_logo.png"
            alt="Logo"
            width={100}
            height={100}
            className="select-none"
            
          />
        <div onClick={() => {setShowAccountModal(prev => !prev)}} className="relative flex items-center bg-white rounded-full p-3 cursor-pointer select-none">
        <FaUserCircle size={30} />
        <AiOutlineMenu size={30}/>
       <AccountModal  showAccountModal={showAccountModal} />
    
        </div>
      </div>

      <div id="profileUsers" className="w-[700px] flex flex-col items-center">
        <div className="gap-1 bg-primaryBlue rounded-full py-5 px-20 flex items-center justify-center">
          <h2 className="text-2xl">
            Welcome Back:
            <span className="font-bold"> {currentAgency?.name} </span>
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
              <Link href={{
                pathname: '/agent',
                query: {
                  agentId: user.id
                }
              }}>
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

         
        </div>
      </div>
   
    

 

      <CreateUser showModal={showModal} setShowModal={setShowModal} />
    </div>
  );


};

export default ProfileSelection;

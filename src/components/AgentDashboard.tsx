"use client";
import { signOut } from "next-auth/react";
import Image from "next/image";
import React, { FC, useState } from "react";
import { BsPersonWorkspace, BsFiles, BsBell } from "react-icons/bs";
import { RxDashboard, RxExit } from "react-icons/rx";
import {AiOutlineUserSwitch} from 'react-icons/ai'
import { cn } from "@/libs/utils";
import Campaigns from "@/components/Campaigns";
import Drafts from "@/components/Drafts";
import DesignHub from "@/components/DesignHub";
import { useRouter } from "next/navigation";
import Link from "next/link";

type props = {
currentAgent: any
}


const AgentDashboard: FC<props> = ({currentAgent}) => {
  const [selected, setSelected] = useState(1)
  const router = useRouter()
  return (
    <div className="bg-gradient-to-r from-rose-100 to-teal-100 h-screen flex">
      <div id="sideMenu" className=" py-5 px-5 flex flex-col items-center">
        <Image
          src="/lg_logo.png"
          alt="Logo"
          width={75}
          height={75}
          className="select-none mb-5"
        />
        <nav className="grow flex flex-col justify-between">
          <div className="flex flex-col gap-y-5">
            <button onClick={()=> {setSelected(1)}} className={cn(selected === 1 ? "bg-primaryBlue font-bold" : '',"flex items-center gap-x-2  px-2 py-1  rounded-full")}>
              <RxDashboard size={25} /> <p className="">Campaigns</p>
            </button>

            <button onClick={()=> {setSelected(2)}} className={cn(selected === 2 ? "bg-primaryBlue font-bold" : '',"flex items-center gap-x-2  px-2 py-1  rounded-full")}>
              <BsPersonWorkspace size={25} /> Design Hub
            </button>
            <button onClick={()=> {setSelected(3)}} className={cn(selected === 3 ? "bg-primaryBlue font-bold" : '',"flex items-center gap-x-2  px-2 py-1  rounded-full")}>
              <BsFiles size={25} /> Drafts
            </button>
          </div>

          <div>
          <Link href="/profiles" className="flex items-center gap-x-2 px-2 py-1">< AiOutlineUserSwitch size={25} />Switch User</Link>

            <button
              onClick={() => signOut({ callbackUrl: "/login" })}
              className="flex items-center gap-x-2 px-2 py-1"
            >
              <RxExit size={25} />
              Sign Out
            </button>
          </div>
        </nav>
      </div>

      <div id="right" className="grow flex flex-col">
        <div id="topRight" className="flex justify-end px-5 py-2">
          <div className="flex items-center gap-x-3">
            <BsBell size={20} />
            <div className="flex items-center gap-x-2 rounded-xl border-primaryBlue border p-2">
              <Image
                src="/profile.png"
                width={30}
                height={30}
                alt="profile"
                className="bg-black rounded-full"
              />
              <p className="font-bold">{currentAgent.first_name +" "+ currentAgent.last_name}</p>
            </div>
          </div>
        </div>

        <div className="bg-primaryBlue grow">

            {selected === 1 ? <Campaigns /> : ''}
            {selected === 2 ? <DesignHub />: ''}

            {selected === 3 ? <Drafts /> : ''}


      
        </div>
      </div>
    
    </div>
  );
};

export default AgentDashboard;

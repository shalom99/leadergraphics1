"use client";
import { signOut } from "next-auth/react";
import Image from "next/image";
import React, { FC } from "react";
import { BsPersonWorkspace, BsFiles, BsBell, BsFillFilePostFill } from "react-icons/bs";
import { RxDashboard, RxExit } from "react-icons/rx";
import {AiOutlineUserSwitch} from 'react-icons/ai'
import {BiDownArrow, BiUpArrow} from 'react-icons/bi'
import {GrDocumentText} from 'react-icons/gr'

type props = {
currentAgent: any
}


const AgentDashboard: FC<props> = ({currentAgent}) => {
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
            <div className="flex items-center gap-x-2  px-2 py-1 cursor-pointer bg-primaryBlue rounded-full">
              <RxDashboard size={25} /> <p className="font-bold">Campaigns</p>
            </div>

            <div  className="flex items-center gap-x-2 px-2 py-1 cursor-pointer">
              <BsPersonWorkspace size={25} /> Design Hub
            </div>
            <div className="flex items-center gap-x-2 px-2 py-1 cursor-pointer">
              <BsFiles size={25} /> Drafts
            </div>
          </div>

          <div>
          <div className="flex items-center gap-x-2 px-2 py-1">< AiOutlineUserSwitch size={25} />  Switch User</div>
            <div
              onClick={() => signOut({ callbackUrl: "/login" })}
              className="flex items-center gap-x-2 px-2 py-1"
            >
              <RxExit size={25} />
              Sign Out
            </div>
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
          <div className="w-full h-full  pt-5 px-5 flex flex-col">
            <h1 className="mb-10 text-2xl font-bold">Campaigns</h1>
            
            <div className="flex flex-col gap-y-5">

            <div className="flex flex-col">
                <div className="max-w-[300px] flex items-center justify-between gap-x-2 border p-2">
                    <p className="font-bold">13 Capital Terrace, Queanbeyan</p>
                    <BiDownArrow size={25} />
                </div>

                {/* <div className="flex mb-10">
                    <div className="flex flex-col gap-y-5">
                        <p className="border bg-yellow-500 px-2 text-center font-bold">#00001-1</p>
                        <BsFillFilePostFill size={150} />

                    </div>

                    <div className="grow">
                        <p className="pl-2 text-2xl font-bold">13 Capital Terrace, Queanbeyan</p>
                        <div className="flex flex-col border-4 p-2">
                            <p className="font-bold">Signboard</p>
                            <p className="italic text-sm mb-4">1200mm x 1800mm S/S Auction</p>
                            <p>Ordered: 13/06/23</p>
                            <p>Installed: 13/06/23</p>
                            <p className="mb-4">Removed: N/A</p>
                            
                            <div className="flex text-center">
                                <div className="w-[70px] text-xs border bg-green-700">Campaign Started</div>
                                <div className="w-[70px] text-xs border py-2 bg-green-700">Approved</div>
                                <div className="w-[70px] text-xs border py-2">Printing</div>
                                <div className="w-[70px] text-xs border py-2">Printed</div>
                                <div className="w-[70px] text-xs border py-2">Loaded</div>
                                <div className="w-[70px] text-xs border py-2">Installed</div>
                                <div className="w-[70px] text-xs border py-2">Removed</div>
                            </div>
                
                            

                        </div>
                    </div>
                </div> */}

                {/* <div className="flex">
                    <div className="flex flex-col gap-y-5">
                        <p className="border bg-yellow-500 px-2 text-center font-bold">#00001-1</p>
                        <GrDocumentText size={150} />
                        

                    </div>

                    <div className="grow">
                        <p className="pl-2 text-2xl font-bold">13 Capital Terrace, Queanbeyan</p>
                        <div className="flex flex-col border-4 p-2">
                            <p className="font-bold">Brochure</p>
                            <p className="italic text-sm mb-4">A4 Brochure 4pp, 300gsm Soverign Silk</p>
                            <p>Ordered: 13/06/23</p>
                            <p className="mb-4">Dispatched: 14/06/23</p>
                          
                            
                            <div className="flex text-center">
                                <div className="w-[70px] text-xs border bg-green-700">Campaign Started</div>
                                <div className="w-[70px] text-xs border py-2 bg-green-700">Approved</div>
                                <div className="w-[70px] text-xs border py-2 bg-green-700">Printing</div>
                                <div className="w-[70px] text-xs border py-2">Printed</div>
                                <div className="w-[70px] text-xs border py-2">Loaded</div>
                                <div className="w-[70px] text-xs border py-2">Installed</div>
                                <div className="w-[70px] text-xs border py-2">Removed</div>
                            </div>
                
                            

                        </div>
                    </div>
                </div> */}

            </div>

            <div className="flex flex-col">
                <div className="max-w-[300px] flex items-center justify-between gap-x-2 border p-2">
                    <p className="font-bold">80 George Street, Marulan</p>
                    <BiDownArrow size={25}/>
                </div>

            </div>

            <div className="flex flex-col">
                <div className="max-w-[300px] flex items-center justify-between gap-x-2 border p-2">
                <p className="font-bold">1/16 Slim Dusty Drive, Moncreiff</p>
                    <BiDownArrow size={25}/>
                </div>

            </div>

            <div className="flex flex-col">
                <div className="max-w-[300px] flex items-center justify-between gap-x-2 border p-2">
                <p className="font-bold">4 Townshend Close, Kambah</p>
                    <BiDownArrow size={25}/>
                </div>

            </div>

     

      

            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentDashboard;

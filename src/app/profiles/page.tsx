"use client";
import { useSession, signOut } from "next-auth/react";

import Image from "next/image";
import Link from "next/link";
import { FC, useEffect, useState } from "react";
import { BiPlus } from "react-icons/bi";
import { GiExitDoor } from "react-icons/gi";
import { useRouter, redirect, usePathname, useSearchParams } from "next/navigation";
import Loader from "../components/Loader";
import CreateUser from "../modals/CreateUser";
import axios from "axios";
import { toast } from "react-hot-toast";
import { prisma } from "../libs/prismadb";

type pageProps = {};

const Profiles: FC<pageProps> = ({}) => {

  const { data: session, status } = useSession();
  const [showModal, setShowModal] = useState(false)
  const [agency, setAgency] = useState('')
  const [users, setUsers] = useState([{
    id: 0,
    first_name: '',
    last_name: '',
    mobile: '',
    profile_image: '',
    created_at: '',
    edited_at: '',
    agency: 0
  }])
  const agencyData = JSON.stringify(session?.user?.email);

  useEffect(() => {

    getUser(agencyData)


  }, [agencyData, showModal])

  function getAgencyData() {

  }

  function getUser(aData: String){
    axios.post('/api/agents', aData)
    .then((res) => {
      console.log(res.status, res.data)
     setUsers(res.data)
    })
    .catch((e) => {
      if (e.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log("error data", e.response.data);
        console.log("error status", e.response.status);
        console.log( "error headers",e.response.headers);

      } else if (e.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log(e.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        toast.error('Error', e.message);
      }
      // toast.error("Form error, please check input");
      console.log(e.config)
    })
    .finally(() => {
    
    })
    
  }


  if (status === "loading") {
    return (
      <div className="bg-black text-white fixed inset-0 text-center flex justify-center items-center">
        <p>Loading...</p>
      </div>
    );
  }

  if (status === "unauthenticated") {
    redirect("/login");

    return (
      <div className="bg-black text-white fixed inset-0 text-center flex justify-center items-center">
        <p>Access Denied</p>
      </div>
    );
  }

  return (
    <div className="bg-main-bg bg-no-repeat bg-cover h-screen flex justify-center">
      <div className="w-[700px] flex flex-col items-center pt-20">
        <div className=" gap-1 bg-primaryBlue rounded-full py-5 px-5 flex items-center justify-center">
          <h2 className="text-2xl">
            Welcome Back:
            <span className="font-bold"> {session?.user?.email} </span>
          </h2>
        </div>

        <h3 className="font-bold text-2xl my-10">Who have we got here?</h3>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-5">
     
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
            users.map((user) => {
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
      {/* <button className="bg-red-700" onClick={getUser}>GET USERS</button> */}
      {/* <p>{(session?.user?.email)}</p>
      <p>{JSON.stringify(users)}</p> */}
  
      <CreateUser showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
};

export default Profiles;

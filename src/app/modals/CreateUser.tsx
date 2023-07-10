"use client";
import { FC, useState } from "react";
import Image from "next/image";
import { MdOutlineModeEditOutline } from "react-icons/md";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import Loader from "../components/Loader";

type CreateUserProps = {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<any>>;
};

const CreateUser: FC<CreateUserProps> = ({ showModal, setShowModal }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false)
  const [agentData, setAgentData] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    profile: "",
  });

  function createAgent(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true)
    axios
      .post("/api/agent", agentData)
      .then(() => {
        toast.success("User successfully created");
        router.refresh();
        setShowModal(false);
      })
      .catch((e) => {
        if (e.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log("error data", e.response.data);
          console.log("error status", e.response.status);
          console.log("error headers", e.response.headers);
        } else if (e.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(e.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          toast.error("Error", e.message);
        }
        toast.error("Form error, please check input");
        // console.log(e.config)
      })
      .finally(() => {
        setLoading(false)
      });
  }

  if (showModal) {
    return (
      <div className="fixed top-0 right-0 left-0 bottom-0 flex items-center justify-center backdrop-blur-3xl">
        <form onSubmit={createAgent} className="w-[600px] flex flex-col">
          <h1 className="text-2xl font-bold">CREATE AGENT USER</h1>

          <div className="flex gap-5 py-5 border-y border-primaryBlue h-[400px]">
            <div className="min-w-[100px]">
              <div className="relative">
                <Image
                  src="/profile.png"
                  width={100}
                  height={100}
                  alt="profile"
                  className="bg-black p-3"
                />
                <button className="absolute bottom-2 left-2">
                  <MdOutlineModeEditOutline
                    size={25}
                    className="text-white a bg-gray-800 rounded-full"
                  />
                </button>
              </div>
            </div>
            <div className="grow flex flex-col gap-2">
              <input
                type="text"
                placeholder="First Name"
                className="bg-black text-white pl-2"
                value={agentData.firstName}
                onChange={(e) =>
                  setAgentData({ ...agentData, firstName: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="Last Name"
                className="bg-black text-white pl-2"
                value={agentData.lastName}
                onChange={(e) =>
                  setAgentData({ ...agentData, lastName: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="Number"
                className="bg-black text-white pl-2"
                value={agentData.mobile}
                onChange={(e) =>
                  setAgentData({ ...agentData, mobile: e.target.value })
                }
              />
              <textarea
                placeholder="Details"
                className="bg-black text-white pl-2"
              />

              {/* <p>{JSON.stringify(userData)}</p> */}
            </div>
          </div>
          <div className="pt-5">
            <div className="flex gap-2">
              <button
                type="submit"
                className="bg-primaryBlue px-4 py-2 text-xs rounded-full"
              >
                Save{" "}
              </button>
              <button
                className="border-2 border-primaryBlue px-3 py-2 text-xs rounded-full"
                onClick={() => {
                  setShowModal(false);
                }}
              >
                Cancel{" "}
              </button>
            </div>
          </div>
          <p>{JSON.stringify(agentData)}</p>
        </form>
        <Loader loading={loading}/>
      </div>
    );
  }
};

export default CreateUser;

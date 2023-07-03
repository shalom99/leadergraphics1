import { FC } from "react";
import Image from "next/image";
import { MdOutlineModeEditOutline } from "react-icons/md";

type pageProps = {};

const Page: FC<pageProps> = ({}) => {
  return (
    <div className="bg-main-bg bg-no-repeat bg-cover h-screen flex justify-center items-center">
      <div className="w-[600px] flex flex-col">
        <h1 className="text-2xl font-bold">Edit Agent Profile</h1>

        <div className="flex gap-5 py-5 border-y border-primaryBlue h-[400px]">
          <div className="">
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
          <div className="grow">
            <form className="flex flex-col gap-2">
              <input type="text" placeholder="First Name" className="bg-black text-white pl-2" />
              <input type="text" placeholder="Last Name" className="bg-black text-white pl-2" />
              <input type="text" placeholder="Number" className="bg-black text-white pl-2" />
              <textarea placeholder="Details" className="bg-black text-white pl-2" />
            </form>
          </div>
        </div>
        <div className="pt-5">
            <div className="flex gap-2">
            <button className="bg-primaryBlue px-4 py-2 text-xs rounded-full">Save </button>
            <button className="border-2 border-primaryBlue px-3 py-2 text-xs rounded-full">Cancel </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Page;

import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { HiOutlineArrowLeft } from "react-icons/hi";

type pageProps = {};

const Signup: FC<pageProps> = ({}) => {
  return (
    <div className="bg-main-bg bg-no-repeat bg-cover h-screen flex items-center justify-center">
      <div className="relative w-[300px]">
        <div className="absolute top-0 left-0 right-0 text-xs gap-1 text-white bg-black rounded-full px-5 py-5 flex items-center justify-between">
          <Link href="/login">
            <HiOutlineArrowLeft size={30} />
          </Link>

          <h1 className="grow text-center pr-[30px] text-2xl">Sign Up</h1>
        </div>
        <div className="bg-white row-span-full row-start-1 row-end-7 flex flex-col items-center mt-10 py-10 signup-form">
          <form action="" className="flex flex-col items-center">
            <label className="self-start pl-3 text-xs" htmlFor="">
              First Name
            </label>
            <input
              type="text"
              className="border-2 border-black rounded-full mb-3"
            />
            <label className="self-start pl-3 text-xs" htmlFor="">
              Last Name
            </label>
            <input
              type="text"
              className="border-2 border-black rounded-full mb-3"
            />

            <label className="self-start pl-3 text-xs" htmlFor="">
              Company Name (Optional)
            </label>
            <input
              type="text"
              className="border-2 border-black rounded-full mb-3"
            />

            <label className="self-start pl-3 text-xs" htmlFor="">
              Office Telephone (Optional)
            </label>
            <input
              type="text"
              className="border-2 border-black rounded-full mb-3"
            />

            <label className="self-start pl-3 text-xs" htmlFor="">
              Mobile
            </label>
            <input
              type="text"
              className="border-2 border-black rounded-full mb-3"
            />
            <fieldset className="w-full text-xs pb-3">
              <legend className="pl-3 mb-3">Real Estate?</legend>
              <div className="flex justify-center gap-5">
                <div className="flex items-center gap-1">
                  <label htmlFor="huey">Yes</label>
                  <input
                    type="radio"
                    id="huey"
                    name="agent"
                    value="huey"
                    className="w-5 h-5"
                  />
                </div>

                <div className="flex items-center gap-1">
                  <label htmlFor="dewey">No</label>
                  <input
                    type="radio"
                    id="dewey"
                    name="agent"
                    value="dewey"
                    className="w-5 h-5"
                  />
                </div>
              </div>
            </fieldset>
            <label className="self-start pl-3 text-xs" htmlFor="">
              Email
            </label>
            <input
              type="text"
              className="border-2 border-black rounded-full mb-3"
            />
            <label className="self-start pl-3 text-xs" htmlFor="">
              Password
            </label>
            <input
              type="password"
              className="border-2 border-black rounded-full mb-2"
            />
            <label className="self-start pl-3 text-xs" htmlFor="">
              Confirm Password
            </label>
            <input
              type="password"
              className="border-2 border-black rounded-full mb-2"
            />

            <Link href="/welcome">
            <button className=" bg-primaryBlue rounded-full px-5 py-2 text-xs font-bold">
              SUBMIT
            </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;

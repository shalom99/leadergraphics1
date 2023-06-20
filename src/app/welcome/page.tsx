import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { HiOutlineArrowLeft } from "react-icons/hi";

type pageProps = {};

const Signup: FC<pageProps> = ({}) => {
  return (
    <div className="bg-main-bg bg-no-repeat bg-cover h-screen flex items-center justify-center px-2 md:px-0">
      <div className="relative w-[450px]">
        <div className="absolute top-0 left-0 right-0 text-xs gap-1 text-white bg-black rounded-full px-5 py-8 flex items-center justify-between">
          <h1 className="grow text-center text-2xl">Welcome </h1>
        </div>
        <div className="bg-white flex flex-col items-center pt-28 pb-12 px-2 signup-form text">
          <div
            id="welcome_intro"
            className="text-sm text-center flex flex-col gap-4"
          >
            <p>We’ve noticed that you’re a Real Estate Business.</p>
            <p>
              Rest assured, you’re in the right place, our Team at Leader
              Graphics specialise in all things Real Estate.
            </p>
            <p>
              To take the hard work out for you one of our team members will be
              in touch shortly to discuss uploading templates to streamline the
              artwork process..
            </p>
          </div>

          <div
            id="welcome_design"
            className="text-sm text-center flex flex-col py-16"
          >
            <h2 className="font-bold text-lg">“I Already Have Artwork”</h2>
            <p>
              Amazing! Press the button below and we can get this show on the
              road!
            </p>
            <Link href="/designhub">
              <button className="bg-primaryBlue rounded-full px-5 py-2 text-lg font-bold my-3">
                Design Hub
              </button>
            </Link>
            <small className="leading-tight px-6">
              Please note that all supplied artwork needs to align with our
              <span className="font-bold">Artwork Guidelines</span>. To avoid
              incuring a fee for incorrect artwork, download a copy of our
              guidelines <span className="font-bold">HERE</span>.
            </small>
          </div>

          <div
            id="welcome_products"
            className="text-sm text-center flex flex-col"
          >
            <h2 className="font-bold text-lg">
              “Oops, Real Estate Isn’t my Thing”
            </h2>
            <p>
              No worries at all, Press the Button below for all our non-Real
              Estate products.
            </p>
            <Link href="/development">
              <button className="bg-primaryBlue rounded-full px-5 py-2 text-lg mt-2 font-bold">
                Products
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;

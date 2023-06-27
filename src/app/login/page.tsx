"use client";
import Image from "next/image";
import Link from "next/link";
import { FC, useState, useEffect } from "react";
import { signIn, useSession } from "next-auth/react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

type pageProps = {};

const Login: FC<pageProps> = ({}) => {
  const session = useSession();
  const router = useRouter();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (session?.status === "authenticated") {
      router.push("/profiles");
    }
  });

  const loginUser = async (e: React.FormEvent) => {
    e.preventDefault();
    signIn("credentials", { ...data, redirect: false }).then((callback) => {
      if (callback?.error) {
        toast.error(callback.error);
      }

      if (callback?.ok && !callback?.error) {
        toast.success("Logged in successfully!");
      }
    });
  };

  return (
    <div className="bg-main-bg bg-no-repeat bg-cover h-screen flex items-center justify-center">
      <div className="relative w-[300px]">
        <div className="bg-white row-span-full row-start-1 row-end-7 flex flex-col items-center pt-10 pb-28 rounded-full">
          <Image
            src="/lg_logo.png"
            alt="Logo"
            width={150}
            height={150}
            className="mb-5"
          />
          <h1 className="font-medium text-xl text-center">Login</h1>

          <form onSubmit={loginUser} className="flex flex-col items-center">
            <label className="self-start pl-3 text-xs" htmlFor="">
              Email
            </label>
            <input
             value={data.email}
             onChange={e => setData({ ...data, email: e.target.value })}
             required
             id="email"
             name="email"
             type="email"
              className="border-2 border-black rounded-full mb-3 pl-2"
            />
            <label className="self-start pl-3 text-xs" htmlFor="">
              Password
            </label>
            <input
             required
             value={data.password}
             onChange={e => setData({ ...data, password: e.target.value })}
             id="password"
             name="password"
             type="password"
              className="border-2 border-black rounded-full mb-2 pl-2"
            />
         
              <button type="submit" className=" bg-primaryBlue rounded-full px-5 py-2 text-xs font-bold">
                LETS GO
              </button>
         
          </form>
        </div>
        <div className="absolute left-0 right-0 bottom-[-20px] text-xs gap-1 text-white bg-black rounded-full py-10 flex items-center justify-center">
          <p>Don&apos;t have an account?</p>
          <Link href="/signup" className="font-bold">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;

"use client";
import Image from "next/image";
import Link from "next/link";
import { FC, useState } from "react";
import { signIn } from "next-auth/react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";


import { useForm } from "react-hook-form";
import { FormLoginValues } from "@/types";
import Loader from "../Loader";



const LoginForm: FC = ({}) => {

  const form = useForm<FormLoginValues>({
    defaultValues: {
      email: "",
      password: "",
    }
  })
  const { register, handleSubmit, formState} = form;
  const {errors} = formState

  const [loading, setLoading]  = useState(false) 


  const router = useRouter();

  const onSubmit = (data: FormLoginValues) => {
    console.log('Form submitted', data)
    setLoading(true)
    signIn("credentials", { ...data, redirect: false }).then((callback) => {
      if (callback?.error) {
        toast.error(callback.error);
        setLoading(false)
      }

      if (callback?.ok && !callback?.error) {
        router.push("/profiles")
        toast.success("Logged in successfully!");


      }
    }).finally(()=> {
     
    });
  }

  return (
    <div className="bg-gradient-to-r from-rose-100 to-teal-100 h-screen flex items-center justify-center">
      <div className="relative w-[300px]">
        <div className="bg-white row-span-full row-start-1 row-end-7 flex flex-col items-center pt-10 pb-24 rounded-full">
          <Image
            src="/lg_logo.png"
            alt="Logo"
            width={150}
            height={150}
            className="mb-5"
            
          />
          <h1 className="font-medium text-xl text-center">Login</h1>

          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center" noValidate>
            <label className="self-start pl-3 text-xs" htmlFor="">
              Email
            </label>
            <input
             type="email"
              className="border-2 border-black rounded-full mb-3 pl-2"
              {...register("email", {
                pattern: {
                 value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                 message: "Invalid email format"
               },
               required: 'email is required',
               validate: {
                 notAdmin: (fieldValue) => {
                   return fieldValue !== "admin@example.com" || "Enter a different email address"
                 },
                 notBlackListed: (fieldValue) => {
                   return !fieldValue.endsWith("baddomain.com") || "This domain is not supported"
                 } 
               },
             
             })}
            />
            <p className="text-red-700 text-xs mb-2">{errors.email?.message}</p>
            <label className="self-start pl-3 text-xs" htmlFor="password">
              Password
            </label>
            <input
      
           
             type="password"
              className="border-2 border-black rounded-full mb-2 pl-2"
              {...register("password", {
               required: 'password is required',
        
               },
             
             )}
            />
                    <p className="text-red-700 text-xs">{errors.password?.message}</p>
             
              <button type="submit" className=" bg-primaryBlue rounded-full px-5 mt-5 py-2 text-xs font-bold">
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
      <Loader loading={loading} />
    </div>
  );
};

export default LoginForm;

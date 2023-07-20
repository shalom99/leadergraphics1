"use client";

import Link from "next/link";
import { CSSProperties, FC, useEffect, useState } from "react";
import { HiOutlineArrowLeft } from "react-icons/hi";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

import Loader from "../components/Loader";
import { FormSignUpValues } from "@/types";
type pageProps = {};


const Signup: FC<pageProps> = ({}) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const form = useForm<FormSignUpValues>({
    defaultValues: {
      firstName: "",
      lastName: "",
      mobile: "",
      email: "",
      password: "",
      confirmPassword: "",
      isAgent: 0,
      agency: "",
    },
  });

  const { register, handleSubmit, formState, watch } = form;
  const { errors } = formState;

  const onSubmit = (data: FormSignUpValues) => {
    console.log("Form submitted", data);
    setLoading(true);

    axios
      .post("/api/register", data)
      .then(() => {
        toast.success("User successfully created");
        router.push("/login");
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
        setLoading(false);
      });
  };

  return (
    <div className="bg-gradient-to-r from-rose-100 to-teal-100 h-screen flex items-center justify-center">
      <div className="relative w-[300px]">
        <div className="absolute top-0 left-0 right-0 text-xs gap-1 text-white bg-black rounded-full px-5 py-5 flex items-center justify-between">
          <Link href="/login">
            <HiOutlineArrowLeft size={30} />
          </Link>

          <h1 className="grow text-center pr-[30px] text-2xl">Sign Up</h1>
        </div>
        <div className="bg-white row-span-full row-start-1 row-end-7 flex flex-col items-center mt-10 py-10 signup-form">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col items-center"
            noValidate
          >
            <label className="self-start pl-3 text-xs" htmlFor="">
              First Name
            </label>
            <input
              type="text"
              className="border-2 border-black rounded-full  pl-2"
              {...register("firstName", {
                required: "First Name is required",
              })}
            />
            <p className="text-red-700 text-xs">{errors.firstName?.message}</p>
            <label className="self-start pl-3 text-xs mt-3" htmlFor="">
              Last Name
            </label>
            <input
              type="text"
              className="border-2 border-black rounded-full pl-2"
              {...register("lastName", {
                required: "Last Name is required",
              })}
            />
            <p className="text-red-700 text-xs">{errors.lastName?.message}</p>

            <label className="self-start pl-3 text-xs mt-3" htmlFor="">
              Company Name (Optional)
            </label>
            <input
              type="text"
              className="border-2 border-black rounded-full mb-3 pl-2"
              {...register("agency")}
            />

            <label className="self-start pl-3 text-xs" htmlFor="">
              Office Telephone (Optional)
            </label>
            <input
              type="text"
              className="border-2 border-black rounded-full mb-3 pl-2"
            />

            <label className="self-start pl-3 text-xs" htmlFor="">
              Mobile
            </label>
            <input
              type="text"
              className="border-2 border-black rounded-full pl-2"
              {...register("mobile", {
                required: "Mobile number is required",
              })}
            />
            <p className="text-red-700 text-xs">{errors.mobile?.message}</p>

            <fieldset className="w-full text-xs mt-3">
              <legend className="pl-3 mb-3">Real Estate?</legend>
              <div className="flex justify-center gap-5">
                <div className="flex items-center gap-1">
                  <label htmlFor="agent_yes">Yes</label>
                  <input
                    type="radio"
                    id="agent_yes"
                    value={1}
                    className="w-5 h-5"
                    {...register("isAgent", {
                      validate: (value: number) => {
                        if (watch("isAgent") === value && !watch("agency")) {
                            return "Please input company name if agent"
                         
                        }
                      }
                    })}
                  />
                </div>

                <div className="flex items-center gap-1">
                  <label htmlFor="agent_no">No</label>
                  <input
                    type="radio"
                    id="agent_no"
                    value={0}
                    className="w-5 h-5"
                    {...register("isAgent", {
                      required: "Please select if agent",
                    })}
                  />
                </div>
              </div>
            </fieldset>
            <p className="text-red-700 text-xs">{errors.isAgent?.message}</p>
            <label className="self-start pl-3 text-xs mt-3" htmlFor="">
              Email
            </label>
            <input
              type="email"
              className="border-2 border-black rounded-full pl-2"
              {...register("email", {
                pattern: {
                  value:
                    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                  message: "Invalid email format",
                },
                required: "Email is required",
              })}
            />
            <p className="text-red-700 text-xs">{errors.email?.message}</p>

            <label className="self-start pl-3 text-xs mt-3" htmlFor="">
              Password
            </label>
            <input
              type="password"
              minLength={6}
              className="border-2 border-black rounded-full  pl-2"
              {...register("password", {
                required: "Password is required",
              })}
            />
            <p className="text-red-700 text-xs">{errors.password?.message}</p>

            <label className="self-start pl-3 text-xs mt-3" htmlFor="">
              Confirm Password
            </label>
            <input
              type="password"
              minLength={6}
              className="border-2 border-black rounded-full pl-2"
              {...register("confirmPassword", {
                required: "Confirm password is required",
                validate: (val: string) => {
                  if (watch("password") != val) {
                    return "Your passwords do not match";
                  }
                },
              })}
            />
            <p className="text-red-700 text-xs">
              {errors.confirmPassword?.message}
            </p>

            <button
              type="submit"
              className=" bg-primaryBlue rounded-full px-5 py-2 text-xs font-bold mt-3"
            >
              SUBMIT
            </button>
          </form>

          {/* 
            <div>
            <h1>test</h1>
            {JSON.stringify(signupData)}
         
            {JSON.stringify(confirmPassword)}
            {JSON.stringify(passwordHelper)}
            </div> */}
        </div>
        <Loader loading={loading} />
      </div>
    </div>
  );
};

export default Signup;

'use client'

import Link from "next/link";
import { FC, useState } from "react";
import { HiOutlineArrowLeft } from "react-icons/hi";
import axios from 'axios'
type pageProps = {};

const Signup: FC<pageProps> = ({}) => {
  const [signupData, setSignupData] = useState({
    firstName: '',
    lastName: '',
    mobile: '',
    email: '',
    password: '',
    isAgent: false,
    agency: '',
  })



  const signupUser = async (e: React.FormEvent<HTMLFormElement>) => {

    e.preventDefault();
    axios.post('/api/register', signupData).then(() => alert('User has been registered')).catch(() => alert('An error occurred'))
  }


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
          <form onSubmit={signupUser} className="flex flex-col items-center">
            <label className="self-start pl-3 text-xs" htmlFor="">
              First Name
            </label>
            <input
            value={signupData.firstName}
            onChange={e => setSignupData({...signupData, firstName: e.target.value})}
              type="text"
              className="border-2 border-black rounded-full mb-3 pl-2"
            />
            <label className="self-start pl-3 text-xs" htmlFor="">
              Last Name
            </label>
            <input
                  value={signupData.lastName}
                  onChange={e => setSignupData({...signupData, lastName: e.target.value})}
              type="text"
              className="border-2 border-black rounded-full mb-3 pl-2"
            />

            <label className="self-start pl-3 text-xs" htmlFor="">
              Company Name (Optional)
            </label>
            <input
                  value={signupData.agency}
                  onChange={e => setSignupData({...signupData, agency: e.target.value})}
              type="text"
              className="border-2 border-black rounded-full mb-3 pl-2"
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
                  value={signupData.mobile}
                  onChange={e => setSignupData({...signupData, mobile: e.target.value})}
              type="text"
              className="border-2 border-black rounded-full mb-3 pl-2"
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
                  value={signupData.email}
                  onChange={e => setSignupData({...signupData, email: e.target.value})}
              type="text"
              className="border-2 border-black rounded-full mb-3 pl-2"
            />
            <label className="self-start pl-3 text-xs" htmlFor="">
              Password
            </label>
            <input
                  value={signupData.password}
                  onChange={e => setSignupData({...signupData, password: e.target.value})}
              type="password"
              className="border-2 border-black rounded-full mb-2 pl-2"
            />
            <label className="self-start pl-3 text-xs" htmlFor="">
              Confirm Password
            </label>
            <input
                //  value={checkPassword.confirmPassword}
                //  onChange={validateConfirmPassowrd}
              type="password"
              className="border-2 border-black rounded-full mb-2 pl-2"
            />


            <button type="submit" className=" bg-primaryBlue rounded-full px-5 py-2 text-xs font-bold">
              SUBMIT
            </button>
          
          </form>

          <div>
            <h1>test</h1>
            {JSON.stringify(signupData)}</div>
        </div>
      </div>
    </div>
  );


  // function validatePassword(e:React.ChangeEvent<HTMLInputElement>){
  //   setCheckPassword({...checkPassword, password: e.target.value})
  // }


  // function validateConfirmPassowrd(e:React.ChangeEvent<HTMLInputElement>){
  //   setCheckPassword({...checkPassword, confirmPassword: e.target.value})

  // }

 

};

export default Signup;

'use client'

import Link from "next/link";
import { CSSProperties, FC, useState } from "react";
import { HiOutlineArrowLeft } from "react-icons/hi";
import axios from 'axios'
import {toast} from 'react-hot-toast'
import { error } from "console";
import { useRouter } from "next/navigation";
import { PuffLoader } from "react-spinners";
type pageProps = {};



const Signup: FC<pageProps> = ({}) => {
  const router = useRouter()
  const [signupData, setSignupData] = useState({
    firstName: '',
    lastName: '',
    mobile: '',
    email: '',
    password: '',
    isAgent: 0,
    agency: '',
  })

  const [loading, setLoading] = useState(false)
 

  const [confirmPassword, setConfirmPassword] = useState({
    firstpw: '',
    confirmpw: '',
  })

  const [passwordHelper, setPasswordHelper] = useState('')



  const validateForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(confirmPassword.firstpw !== confirmPassword.confirmpw){
      setSignupData({...signupData, password: ''})
      toast.error('Password do not match!')
      return null
    }else{
      setLoading(true)
      setSignupData({...signupData, password: confirmPassword.firstpw})
      if(confirmPassword.firstpw === confirmPassword.confirmpw){
        signupUser()
      }
  
   
    }
  }
   
   function signupUser(){
    axios.post('/api/register', signupData)
    .then(() => {
      toast.success('User successfully created')
      router.push('/login')

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
      toast.error("Form error, please check input");
      // console.log(e.config)

    })
    .finally(() => {
      setLoading(false)
    })

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
          <form onSubmit={validateForm} className="flex flex-col items-center">
            <label className="self-start pl-3 text-xs" htmlFor="">
              First Name
            </label>
            <input
            value={signupData.firstName}
            onChange={e => setSignupData({...signupData, firstName: e.target.value})}
              type="text"
              className="border-2 border-black rounded-full mb-3 pl-2"
              required
            />
            <label className="self-start pl-3 text-xs" htmlFor="">
              Last Name
            </label>
            <input
           
              value={signupData.lastName}
              onChange={e => setSignupData({...signupData, lastName: e.target.value})}
              type="text"
              className="border-2 border-black rounded-full mb-3 pl-2"
              required
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
                  <label htmlFor="agent_yes">Yes</label>
                  <input
                    type="radio"
                    id="agent_yes"
                    name="agent"
                    value={1}
                    className="w-5 h-5"
                    onChange={getRadioOption}
                  />
                </div>

                <div className="flex items-center gap-1">
                  <label htmlFor="agent_no">No</label>
                  <input
                    type="radio"
                    id="agent_no"
                    name="agent"
                    value={0}
                    className="w-5 h-5"
                    onChange={getRadioOption}
                   required
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
              type="email"
              className="border-2 border-black rounded-full mb-3 pl-2"
            />
            <label className="self-start pl-3 text-xs" htmlFor="">
              Password
            </label>
            <input
              id="firstpw"
              value={confirmPassword.firstpw}
              onChange={validatePassword}            
              type="password"
              minLength={6}
              className="border-2 border-black rounded-full mb-2 pl-2"
              required
            />
            <label className="self-start pl-3 text-xs" htmlFor="">
              Confirm Password
            </label>
            <input
              id="confirmpw"
              value={confirmPassword.confirmpw}
              onChange={validatePassword}
              type="password"
              minLength={6}
              className="border-2 border-black rounded-full mb-2 pl-2"
              required
            />

   
         
            <button type="submit" className=" bg-primaryBlue rounded-full px-5 py-2 text-xs font-bold">
              SUBMIT
            </button>
          
          </form>

            {/* <div>
            <h1>test</h1>
            {JSON.stringify(signupData)}
         
            {JSON.stringify(confirmPassword)}
            {JSON.stringify(passwordHelper)}
            </div> */}
        </div>
        {loading &&  <div className="fixed top-0 right-0 left-0 bottom-0 flex items-center justify-center backdrop-blur-3xl">
        <PuffLoader
        color="#63cdf5"
        loading={loading}
 
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
</div>}
       
      </div>
    </div>
  );




  function validatePassword(e:React.ChangeEvent<HTMLInputElement>){

    if(e.target.id === 'firstpw'){
      setConfirmPassword({...confirmPassword, firstpw: e.target.value})

    }else{
      setConfirmPassword({...confirmPassword, confirmpw: e.target.value})

    }


 
  }




  function getRadioOption(e: React.ChangeEvent<HTMLInputElement>){
    
      setSignupData({...signupData, isAgent: Number(e.target.value)})
   
  }



};

export default Signup;

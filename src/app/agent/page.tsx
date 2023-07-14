import { FC } from 'react'
import getAgent from '../actions/getAgent';
import { redirect } from 'next/navigation';
import Link from 'next/link';

type pageProps = {
  searchParams: any
}

const Agent: FC<pageProps> = async ({searchParams}) => {

  const currentAgent = await getAgent(Number(searchParams.agentId));
  if(!currentAgent){
    redirect('/login')
  }
  // console.log(searchParams)
  // console.log(currentAgent)

  return (
    <div className="bg-gradient-to-r from-rose-100 to-teal-100 h-screen flex justify-center">
    <div className="w-[700px] flex flex-col items-center pt-20">
   
    

      <div className="flex flex-col gap-20 mt-20 ">
          <h1 className='text-center font-bold text-2xl'>Account: {currentAgent?.first_name + " " + currentAgent?.last_name}</h1>
  
          <button className="bg-primaryBlue rounded-full px-14 py-5 text-3xl font-bold cursor-not-allowed">CAMPAIGNS</button>
      
          <Link href="/designhub">
          <button className="bg-primaryBlue rounded-full px-14 py-5 text-3xl font-bold">DESIGN HUB</button>
          </Link>
          <button className="bg-primaryBlue rounded-full px-14 py-5 text-3xl font-bold cursor-not-allowed">DRAFTS</button>

      </div>
  

    </div>
  </div>
)
}

export default Agent

    


    


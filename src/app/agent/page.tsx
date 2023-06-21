import { FC } from 'react'

type pageProps = {
  
}

const Agent: FC<pageProps> = ({}) => {
  return (
    <div className="bg-main-bg bg-no-repeat bg-cover h-screen flex justify-center">
    <div className="w-[700px] flex flex-col items-center pt-20">
   
    
     
      <div className="flex flex-col gap-20 mt-20 ">
          <button className="bg-primaryBlue rounded-full px-14 py-5 text-3xl font-bold">CAMPAIGNS</button>
          <button className="bg-primaryBlue rounded-full px-14 py-5 text-3xl font-bold">DESIGN HUB</button>
          <button className="bg-primaryBlue rounded-full px-14 py-5 text-3xl font-bold">DRAFTS</button>

      </div>
  

    </div>
  </div>
)
}

export default Agent

    


    


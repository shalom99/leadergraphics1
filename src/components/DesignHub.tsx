import { FC } from 'react'

import getTemplate from '@/actions/getTemplates';


type DesignHubProps = {
  
}

const DesignHub: FC<DesignHubProps> = async ({}) => {
 
  return (
    <div className="w-full h-full  pt-5 px-5 flex flex-col">
    <h1 className="mb-10 text-2xl font-bold">Design Hub</h1>

  </div>
)
}

export default DesignHub
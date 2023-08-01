import { FC } from 'react'
import getAgent from '../../actions/getAgent';
import { redirect } from 'next/navigation';

import AgentDB from '@/components/AgentDB';

type pageProps = {
  searchParams: any
}

const Page: FC<pageProps> = async ({searchParams}) => {

  const currentAgent = await getAgent(Number(searchParams.agentId));
  console.log(currentAgent)
  if(!currentAgent){
    redirect('/login')
  }
  // console.log(searchParams)
  // console.log(currentAgent)

  return (
    // <Agent currentAgent={currentAgent} />
    <AgentDB currentAgent={currentAgent}/>
  )
}

export default Page

    


    


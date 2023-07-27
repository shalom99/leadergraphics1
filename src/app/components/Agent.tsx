'use client'

import { FC, useState } from 'react'
import Link from 'next/link';
import AccountNav from './navbar/AccountNav';
import AgentNav from './navbar/AgentNav';

type pageProps = {
    currentAgent: any
}

const Agent: FC<pageProps> =  ({currentAgent}) => {
    const [showAccountModal, setShowAccountModal] = useState(false)

  return (
    <div className="bg-gradient-to-r from-rose-100 to-teal-100 h-screen flex flex-col items-center pt-5">
        <AgentNav showAccountModal={showAccountModal} setShowAccountModal={setShowAccountModal} currentAgent={currentAgent} />

  </div>
)
}

export default Agent

    


    


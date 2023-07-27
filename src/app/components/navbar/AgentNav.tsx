import AccountModal from '@/app/modals/AccountModal'
import AgentModal from '@/app/modals/AgentModal'
import Image from 'next/image'
import { Dispatch, FC, SetStateAction } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { FaUserCircle } from 'react-icons/fa'

type AccountNavProps = {
    showAccountModal: boolean
    setShowAccountModal?: Dispatch<SetStateAction<boolean>>
    currentAgent: any
}

const AgentNav: FC<AccountNavProps> = ({setShowAccountModal, showAccountModal, currentAgent}) => {
  return (
    <div className="w-full flex items-center justify-between px-5">
    <Image
          src="/lg_logo.png"
          alt="Logo"
          width={100}
          height={100}
          className="select-none"      
        />
      <div onClick={() => {setShowAccountModal?.(prev => !prev)}} className="relative flex items-center bg-white rounded-full p-3 cursor-pointer select-none">
      <FaUserCircle size={30} className="text-primaryBlue" />
      <AiOutlineMenu size={30} />
     <AgentModal currentAgent={currentAgent} showAccountModal={showAccountModal} />
  
      </div>
    </div>
)
}

export default AgentNav
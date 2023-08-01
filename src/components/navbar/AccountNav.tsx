import AccountModal from '@/components/modals/AccountModal'
import Image from 'next/image'
import { Dispatch, FC, SetStateAction } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { FaUserCircle } from 'react-icons/fa'

type AccountNavProps = {
    showAccountModal: boolean
    setShowAccountModal?: Dispatch<SetStateAction<boolean>>
    Agency: string
}

const AccountNav: FC<AccountNavProps> = ({setShowAccountModal, showAccountModal, Agency}) => {

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
      <p className='bg-primaryBlue rounded-full text-2xl font-bold px-2 mr-2'>
        {Agency[0]}A
        </p>
      <AiOutlineMenu size={30} />
     <AccountModal  showAccountModal={showAccountModal} />
  
      </div>
    </div>
)
}

export default AccountNav
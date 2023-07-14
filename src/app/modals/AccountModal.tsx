import { signOut } from 'next-auth/react'
import { FC } from 'react'
import { AiFillCloseCircle } from 'react-icons/ai'

type AccountModalProps = {
    showAccountModal: any
   
}

const AccountModal: FC<AccountModalProps> = ({showAccountModal}) => {
    if(!showAccountModal){
        return null
    }
  return (
     <div className="absolute top-[60px] left-[-100px] right-0 rounded-xl bg-white flex flex-col gap-y-3">
     <button className="pt-3">Options</button>
     <button className="">Edit Profiles</button>
     <button onClick={() => signOut({ callbackUrl: "/login" })} className="border-t-2 py-2">Sign Out</button>

     {/* <button onClick={() => {setShowAccountModal(prev => !prev)}} className="absolute top-2 left-2"><AiFillCloseCircle size={25}/></button> */}
   </div>
)
}

export default AccountModal
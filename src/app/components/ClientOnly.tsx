import { Accounts } from '@prisma/client'
import { FC } from 'react'

type ClientOnlyProps = {
  children: React.ReactNode
  currentUser: any
//   currentUser: {
//     id: number
//     first_name: string
//     last_name: string
//     mobile: string
//     email: string
//     hashed_password: string
//     used_passwords?: string
//     is_agent: boolean
//     agency: number
//     profile_image?: string
//     created_at?: string
//     updated_at?: string
//     account_type: number
//   }
}

const ClientOnly: FC<ClientOnlyProps> = ({children, currentUser}) => {
  return (
     <div>{children}</div>
)
}

export default ClientOnly
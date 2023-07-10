import Provider from './providers/AuthContext'
import './globals.css'
import { Inter } from 'next/font/google'
import getCurrentUser from './actions/getCurrentUser'
import ClientOnly from './components/ClientOnly'
import { Toaster } from 'react-hot-toast'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Leader Graphics Test',
  description: 'Signage Editor',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentUser = await getCurrentUser();
console.log("layout",currentUser)
  return (
    <html lang="en">
      <body className={inter.className}>
   
        <div>{JSON.stringify(currentUser)}</div>
        <Toaster
        toastOptions={{
          duration: 3000,
          style: {
            border: "1px solid green",
            padding: "16px",
          },
        }}
      />
        {children}
    
        </body>
    </html>
  )
}

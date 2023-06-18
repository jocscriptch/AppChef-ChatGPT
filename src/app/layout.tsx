import '@/styles/globals.css';
import Head from 'next/head';
import SideBar from './components/SideBar';
import SessionProvider from './components/SessionProvider';
import { getServerSession } from "next-auth";
import { authOptions } from '../../pages/api/auth/[...nextauth]';
import Login from './components/Login';
import ClientProvider from './components/ClientProvider';
import Contacts from './components/Contacts';
export const metadata = {
  title: 'ChatGPT Clone',
  description: 'ChatGPT Clone Next.js 13',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <body>
        <SessionProvider session={session}>
          {!session ? (
            <Login />
          ) : (
            <div className="flex">
              <div className="bg-[#202123] max-w-xs min-h-screen overflow-y-auto md:min-w-[20rem]">
                {/*Sidebar*/}
                <SideBar />
              </div>

              {/*ClientProvider Notification*/}
              <ClientProvider />
              <div className="bg-[#343541] flex-1">{children}</div>
            </div>
          )}
        </SessionProvider>
        <Contacts/>
      </body>
    </html>
  )
}

'use client'
import React from 'react';
import NewChat from './NewChat';
import Image from "next/image";
import { useSession, signOut } from 'next-auth/react';
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, orderBy, query } from "firebase/firestore";
import { db } from '../../../firebase';
import ChatRow from './ChatRow';
import IconExit from './icons/IconExit';

export default function SideBar() {

    const { data: session } = useSession();

    const [chats, loading, error] = useCollection(
        session &&
        query(
            collection(db, "users", session.user?.email!, "chats"),
            orderBy("createdAt", "asc")
        )
    );

    return (
        <div className="p-2 flex flex-col h-screen max-h-screen">
            <div className="flex-1">
                <div>
                    <div className="flex items-center">
                        {session && (
                            <div className="flex-grow-0 pr-2 py-1">
                                <Image
                                    src={session.user?.image!}
                                    width={50}
                                    height={50}
                                    alt="Profile pic"
                                    className="h-12 w-12 rounded-full cursor-pointer mx-auto mb-2 hover:opacity-50"
                                />
                            </div>
                        )}
                        {/* Botón con el icono */}
                        {session && (
                            <button onClick={() => signOut()} className="ml-auto">
                                <IconExit width={40} height={40} className="text-white" />
                            </button>
                        )}
                    </div>
                     {/* New Chat */}
                     <NewChat />

                    <div>
                        {/*ModelSection*/}
                    </div>

                    {/*Map through the ChatRows */}
                    {chats?.docs.map(chat => (
                        <ChatRow key={chat.id} id={chat.id} />
                    ))}
                </div>
            </div>

        </div>
    );
}


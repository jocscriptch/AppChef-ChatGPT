'use client'
import Chat from "@/app/components/Chat";
import ChatInput from "@/app/components/ChatInput";

type Props = {
  params:{
    id: string;
  };
};

export default function ChatPage({params: {id}}: Props) {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Chat chatId={id} />
     
      <ChatInput chatId={id} />
    </div>
  )
}
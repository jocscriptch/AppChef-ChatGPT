'use client'
import { DocumentData } from "firebase/firestore"
import Image from "next/image";

type Props = {
    message: DocumentData;
}

function Message({message}: Props) {
    const isChatGPT = message.user.name === "ChatGPT";

    return(
        <div className={`py-5 text-white ${isChatGPT && "bg-[#434654]"}`}>
            <div className="flex space-x-5 px-10 max-2xl: mx-auto">
                <Image src={message.user.avatar} width={30} height={30} alt=""  className="h-8 w-8"/>
                <p className="pt-1 text-sm">{message.text}</p>
            </div>
        </div>
    )
    
}

export default Message;
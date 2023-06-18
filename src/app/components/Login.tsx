'use client'
import { signIn } from "next-auth/react";
import Image from "next/image";
import IconCodechef from "./icons/IconCodeChef";

function Login() {
    return (
        <div className="bg-[#202123]  min-h-screen flex flex-col items-center
         justify-center text-center">
            <div className="pb-5">
                <IconCodechef
                    width={300}
                    height={300}
                    className="text-white" />
            </div>
            <button
                onClick={() => signIn("google")}
                className="text-white font-bold text-3xl animate-pulse border-white border-2 rounded-md p-2">
                Inicia Sesión <br />
                con ChefMasterBot
            </button>
        </div>
    )
}
export default Login

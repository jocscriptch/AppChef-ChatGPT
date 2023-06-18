"use client";
import Link from "next/link";
import { useState } from "react";
import IconContactsOutline from "./icons/IconContactsOutline";
import IconRobot from "./icons/IconRobot";
import Image from "next/image";
export default function Navbar() {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <nav className="flex items-center flex-wrap bg-gpt-gray p-3 ">
      <Link href="/">
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="2em"
            viewBox="0 0 640 512"
            fill="#FA4224"
            className="mx-2"
          >
            {" "}
            <path d="M293.5 3.8c19.7 17.8 38.2 37 55.5 57.7c7.9-9.9 16.8-20.7 26.5-29.5c5.6-5.1 14.4-5.1 20 0c24.7 22.7 45.6 52.7 60.4 81.1c14.5 28 24.2 58.8 24.2 79C480 280 408.7 352 320 352c-89.7 0-160-72.1-160-159.8c0-26.4 12.7-60.7 32.4-92.6c20-32.4 48.1-66.1 81.4-95.8c2.8-2.5 6.4-3.8 10-3.7c3.5 0 7 1.3 9.8 3.8zM370 273c30-21 38-63 20-96c-2-4-4-8-7-12l-36 42s-58-74-62-79c-30 37-45 58-45 82c0 49 36 78 81 78c18 0 34-5 49-15zM32 288c0-17.7 14.3-32 32-32H96c17.7 0 32 14.3 32 32s-14.3 32-32 32v64H544V320c-17.7 0-32-14.3-32-32s14.3-32 32-32h32c17.7 0 32 14.3 32 32v96c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V416c0-17.7 14.3-32 32-32V288zM320 480a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm160-32a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM192 480a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
          </svg>
          <span className="text-xl text-white font-bold uppercase tracking-wide mr-6">
            ChefBotApp
          </span>
        </div>
      </Link>
      <button
        className=" inline-flex p-3 hover:bg-gray-400 rounded lg:hidden text-white ml-auto hover:text-white outline-none"
        onClick={handleClick}
      >
        <svg
          fill="#75AB9D"
          xmlns="http://www.w3.org/2000/svg"
          height="2em"
          viewBox="0 0 448 512"
        >
          {" "}
          <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
        </svg>
      </button>
      <div
        className={`${
          active ? "block" : "hidden"
        }   w-full lg:inline-flex lg:flex-grow lg:w-auto ml-auto`}
      >
        <div
          className={`${
            active ? "" : "hidden"
          } w-full lg:inline-flex lg:flex-grow lg:w-auto ml-auto`}
        >
          <div className="flex flex-row items-center justify-end lg:items-center lg:justify-end">
            <button className="flex justify-center items-center mr-4">
              <IconRobot
                className="mx-2 text-green-400"
                width={25}
                height={25}
              />
              <Link className="text-left py-1" href="#Application">
                Aplicación
              </Link>
            </button>
            <button className="flex justify-center items-center">
              <IconContactsOutline
                className="mx-2 text-cyan-300"
                width={25}
                height={25}
              />
              <Link className="text-left py-1" href="#Contacts">
                Contactos
              </Link>
            </button>
          </div>
        </div>
        {active && (
          <div className="w-full mt-4 p-3 bg-gray-200 text-gray-800 text-center">
            <p>¡Menú desplegable visible en versión responsive!</p>
          </div>
        )}
      </div>
    </nav>
  );
}

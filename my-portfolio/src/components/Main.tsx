import { FaRobot } from "react-icons/fa";
import { FaTools } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";
import { FaGamepad } from "react-icons/fa";

import { SiPython } from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import { SiRstudioide } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiJavascript } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiMysql } from "react-icons/si";

export default function Main() {
  return (
    <section id="main" className="flex flex-col justify-center items-center text-start h-screen">
      <div className="flex-col justify-start content-center items-center w-[60%] h-screen">
        <h1 className="font-bold text-3xl">Hi, i'm
          <span className="font-bold text-violet-300 light-text text-3xl"> Matthew</span>
        </h1>
        <br />
        <h1 className="flex gap-2 ml-5 font-bold text-violet-300 light-text text-xl gap-2 ml-5"><FaRobot /> AI researcher</h1>
        <h1 className="flex gap-2 ml-5 font-bold text-violet-300 light-text text-xl"><FaTools /> Backend Developer</h1>
        <h1 className="flex gap-2 ml-5 font-bold text-violet-300 light-text text-xl"><FaDatabase /> Data Scientist</h1>
        <h1 className="flex gap-2 ml-5 font-bold text-violet-300 light-text text-xl"><FaGamepad />Aspiring Game Developer</h1>
        <div className="flex flex-row gap-10 justify-center m-5 mt-10 text-5xl text-red-400">
          <div className="relative group">
            <SiPython className="cursor-pointer" />
            <span className="absolute left-1/2 -translate-x-1/2 mt-2 whitespace-nowrap rounded bg-gray-800 px-2 py-1 text-xs text-white opacity-0 group-hover:opacity-100 transition">
              Python
            </span>
          </div>
          <div className="relative group">
            <FaJava className="cursor-pointer" />
            <span className="absolute left-1/2 -translate-x-1/2 mt-2 whitespace-nowrap rounded bg-gray-800 px-2 py-1 text-xs text-white opacity-0 group-hover:opacity-100 transition">
              Java
            </span>
          </div>
          <div className="relative group">
            <SiRstudioide className="cursor-pointer" />
            <span className="absolute left-1/2 -translate-x-1/2 mt-2 whitespace-nowrap rounded bg-gray-800 px-2 py-1 text-xs text-white opacity-0 group-hover:opacity-100 transition">
              R
            </span>
          </div>
          <div className="relative group">
            <RiTailwindCssFill className="cursor-pointer" />
            <span className="absolute left-1/2 -translate-x-1/2 mt-2 whitespace-nowrap rounded bg-gray-800 px-2 py-1 text-xs text-white opacity-0 group-hover:opacity-100 transition">
              TailwindCSS
            </span>
          </div>
          <div className="relative group">
            <SiJavascript className="cursor-pointer" />
            <span className="absolute left-1/2 -translate-x-1/2 mt-2 whitespace-nowrap rounded bg-gray-800 px-2 py-1 text-xs text-white opacity-0 group-hover:opacity-100 transition">
              JavaScript
            </span>
          </div>
          <div className="relative group">
            <SiTypescript className="cursor-pointer" />
            <span className="absolute left-1/2 -translate-x-1/2 mt-2 whitespace-nowrap rounded bg-gray-800 px-2 py-1 text-xs text-white opacity-0 group-hover:opacity-100 transition">
              TypeScript
            </span>
          </div>
          <div className="relative group">
            <FaReact className="cursor-pointer" />
            <span className="absolute left-1/2 -translate-x-1/2 mt-2 whitespace-nowrap rounded bg-gray-800 px-2 py-1 text-xs text-white opacity-0 group-hover:opacity-100 transition">
              React
            </span>
          </div>
          <div className="relative group">
            <SiMysql className="cursor-pointer" />
            <span className="absolute left-1/2 -translate-x-1/2 mt-2 whitespace-nowrap rounded bg-gray-800 px-2 py-1 text-xs text-white opacity-0 group-hover:opacity-100 transition">
              MySQL
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

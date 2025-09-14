import { FaRobot } from "react-icons/fa";
import { FaTools } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";
import { FaGamepad } from "react-icons/fa";

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
      </div>
    </section>
  );
}

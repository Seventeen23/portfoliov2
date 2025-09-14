import headerImg from "../assets/header.png";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [light, setLight] = useState(false);

  // Load theme on first render
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "light") {
      setLight(true);
      document.body.classList.add("light");
    }
  }, []);

  // Apply theme whenever it changes
  useEffect(() => {
    if(light) {
      document.body.classList.add("light");
      localStorage.setItem("theme", "light");
    } 
    else {
      document.body.classList.remove("light");
      localStorage.setItem("theme", "dark");
    }
  }, [light]);

  return (
    <nav className="fixed w-full h-21 bg-black/0 backdrop-blur-md z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <div className="flex flex-row items-center">
          <img src={headerImg} alt="headerimg" className="w-15 rounded-md"/>
          <h1 className="text-xl font-bold ml-4">Seventeen23</h1>
        </div>
        <ul className="flex gap-6">
          <li><a href="#about" className="text-violet-300 light-text hover:underline">About</a></li>
          <li><a href="#projects" className="text-violet-300 light-text hover:underline">Projects</a></li>
          <li><a href="#contact" className="text-violet-300 light-text hover:underline">Contact</a></li>
          <li>
            <motion.button
              whileTap={{ scale: 0.5 }}
              onClick={() => setLight((prev) => !prev)}
              className="pr-5"
            >
              {light ? (<MdOutlineLightMode size={25} />) : (<MdOutlineDarkMode size={25} />)}
            </motion.button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

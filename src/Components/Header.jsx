import { useState, useEffect } from "react";
import logo from "../assets/Logo/Logo-app.png";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed  left-[12vw] right-[12vw] z-50 flex justify-between items-center py-[1vw] px-[1.5vw] transition-all duration-300
        ${
          scrolled
            ? " top-0 bg-stone-900/90 border-b-[0.1vw] border-stone-300 shadow-md"
            : "top-[2vw] bg-transparent border-b-[0.5vw] border-stone-50/50"
        }
      `}
    >
      
      <div className="logo">
        <img src={logo} className="w-[7vw] h-auto" alt="logo" />
      </div>

      <div className="flex items-center gap-[1vw]">
        <nav className=" flex items-center text-white font-bold text-[1vw] w-[20vw] justify-between">
          <a href="#apropos"  className="hover:text-blue-400 transition-colors">
            À propos
          </a>
          <a
            href="#localisation"
            
            className="hover:text-blue-400 transition-colors"
          >
            Localisation
          </a>
          <a href="#activity"  className="hover:text-blue-400 transition-colors">
            Activités
          </a>
        </nav>

        <button 
        
        className="  text-white text-[1vw] font-bold py-[0.5vw] px-[2vw] bg-[#4097ff] rounded-full hover:bg-blue-500 transition-colors">
          <a href="#reservation">Réservé</a>
        </button>

        <div className=" flex flex-col items-end gap-[0.7vw] cursor-pointer">
          <span className="bg-white aspect-[74/1] w-[2vw] border-[#fff]"></span>{" "}
          <span className="bg-white w-[2vw] aspect-[74/1] border-[#fff]"></span>{" "}
          <span className="bg-white w-[1.5vw] aspect-[74/1] border-[#fff]"></span>
        </div>
      </div>
    </header>
  );
}

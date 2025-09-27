import { useState, useEffect } from "react";
import logo from "../assets/Logo/Logo-app.png";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activePage, setActivePage] = useState("apropos");
  const handleClick= (label)=>{
    
    setActivePage(label)
  }

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

    useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const handleScroll = () => {
      let current = activePage;
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const offset = 80; 
        if (rect.top <= offset && rect.bottom > offset) {
          current = section.id;
        }
      });
      if (current !== activePage) {
        setActivePage(current);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // lancer au mount pour activer la bonne section

    return () => window.removeEventListener("scroll", handleScroll);
  }, [activePage]);


  const links = [
    { id: "apropos", label: "À propos", },
    { id: "localisation", label: "Localisation" },
    { id: "activity", label: "Activités" },
  ];
  return (
    <header
      className={` fixed  left-[12vw] right-[12vw] z-50 flex justify-between items-center  px-[1.5vw] h-[5vw]  transition-all duration-300
        ${
          scrolled
            ? " top-[0.1vw] bg-stone-900/90 border-t-[0.1vw] border-t-transparent border-b-[0.1vw] border-b-stone-50/50 "
            : "top-[2vw]  border-t-[0.5vw] border-t-transparent border-b-[0.5vw] border-b-stone-50/50"
        }
      `}
    >
      <div className="logo">
        <img src={logo} className="w-[7vw] h-auto" alt="logo" />
      </div>

      <div className="flex items-center gap-[1vw] ">
        <nav className="flex items-center text-white font-bold text-[1vw] w-[20vw] justify-between h-[5vw]">
      {links.map((link) => (
        <a
          key={link.id}
          href={`#${link.id}`}
          onClick={()=>{
            handleClick(link.id)
          }}
          className={`
            ${
              activePage === link.id
                ? "text-blue-400 border-b-[0.5vw] border-b-blue-400 "
                : ""
            }
            hover:text-blue-400 transition-colors h-[5vw] flex items-center
          `}
        >
          {link.label}
        </a>
      ))}
    </nav>

        <button className={` ${activePage ==="reservation" ? "bg-blue-900" : ""} text-white text-[1vw] font-bold py-[0.5vw] px-[2vw] bg-[#4097ff] rounded-full hover:bg-blue-900  transition-colors `}>
          <a href="#reservation">Réservé</a>
        </button>

        <div className=" flex flex-col items-end gap-[0.7vw] cursor-pointer">
          <span className="bg-white aspect-[74/1] w-[2vw] border-[#fff]"></span>
          <span className="bg-white w-[2vw] aspect-[74/1] border-[#fff]"></span>
          <span className="bg-white w-[1.5vw] aspect-[74/1] border-[#fff]"></span>
        </div>
      </div>
    </header>
  );
}

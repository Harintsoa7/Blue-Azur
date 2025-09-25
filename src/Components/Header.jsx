import React from "react";
import logo from "../assets/Logo/logo-app.png";

export default function Navbar() {
  return (
    <header className=" z-100 fixed bg-black/50 aspect-[2843/181] top-[2vw] left-[12vw] right-[12vw] flex  justify-between items-center border-b-[0.5vw] border-stone-50/50 ">
      <div className="logo ">
        <img src={logo} className="w-[7vw] h-auto" alt="logo" />
      </div>
      <div className=" text-[1vw] flex items-center justify-between gap-[1vw] h-full   ">
        <nav className=" flex items-center   text-[#FFFFFF] font-bold  h-full relative w-[20vw] ">
          <ul className="flex w-full justify-between gap-[1vw]    ">
            <li className="   ">
              <a href="#apropos" className=" h-full ">
                À propos
              </a>
            </li>
            <li>
            
              <a href="#localisation">Localisation</a>
            </li>
            <li>
              
              <a href="#activity">Activités</a>
            </li>
          </ul>
        </nav>
        <button className="text-[#FFFFFF] text-[1vw] font-bold py-[0.5vw] px-[2vw] bg-[#4097ff] rounded-full ">
          <a href="#reservation">Réservé</a>
        </button>
        <div className="burger-menu flex flex-col items-end gap-[0.7vw] cursor-pointer">
          <span className="bg-white  aspect-[74/1] w-[2vw]  border-[#fff]"></span>
          <span className="bg-white  w-[2vw] aspect-[74/1]  border-[#fff]"></span>
          <span className="bg-white  w-[1.5vw] aspect-[74/1]  border-[#fff]"></span>
        </div>
      </div>
    </header>
  );
}

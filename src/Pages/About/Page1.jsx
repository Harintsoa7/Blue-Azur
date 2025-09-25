import Navbar from "../../Components/Navbar";
import SocialMedia from "../../Components/SocialMedia";
import slider1 from "../../assets/Slider/slider1.png";
import slider2 from "../../assets/Slider/slider2.png";
import ellipse from "../../assets/Ellipse.png";
export default function Apropos() {
  return (
    <>
      <div className=" relative bg-stone-950/70 flex items-center text-stone-50 hero bg-[url('src/assets/Background/bg.jpg')] bg-cover bg-center bg-gradient-to-r from-blue-500 to-green-500 bg-blend-overlay aspect-[3553/2046] overflow-hidden w-full pt-[10px]   px-[12.17vw]">
        <Navbar />
        <SocialMedia />
        <div className="flex items-end justify-between  w-full">
          <div className=" flex flex-col gap-[8vw] ">
            <div className="flex flex-col gap-[2vw] ">
              <h1 className="font-bold text-stone-50 text-[3vw] ">
                Votre évasion <br />
                <span className="font-normal"> sur la Côte d’Azur !</span>
              </h1>

              <p className="w-[26vw] text-justify text-[1vw]">
                Blu Azur vous invite à découvrir le charme de Saint-Raphaël, une
                destination d’exception nichée entre Cannes et Saint-Tropez. Nos
                appartements tout équipés, situés dans un domaine privé
                sécurisé, offrent un cadre verdoyant et paisible, à quelques pas
                de la marina de Santa Lucia, des plages de sable fin et du
                centre-ville animé. Profitez d’un séjour alliant confort,
                sérénité et élégance au cœur de la Riviera française !
              </p>
            </div>
            <div className=" flex items-center justify-around px-[1vw] w-[27vw] aspect-[984/103.42]  border-[0.1vw] border-stone-50/80 rounded-full">
              <p className="text-[1vw]">
                Réservez dès maintenant votre séjour !
              </p>
              <div className="w-[7%]  aspect-square rounded-full border-[0.1vw] overflow-hidden border-stone-50 text-[clamp(0.8rem,1vw,1.2rem)] flex items-center justify-center">
                <i className="fa-solid fa-chevron-right text-[0.7vw] "></i>
              </div>
            </div>
          </div>
          <div className="w-[19.6vw] flex items-center gap-[1vw] relative">
            <img src={slider1} alt="" className="w-[19.6vw] aspect-[698/467]" />
            <img
              src={slider2}
              alt=""
              className="w-[16.7vw] aspect-[594/398.6]"
            />
          </div>
        </div>
        <div className="absolute rounded-full border-[0.1vw] hover:scale-110 cursor-pointer right-[1.5vw] top-[40vw] -translate-y-1/2 border-white w-[2vw] aspect-square flex items-center justify-center">
          <img src={ellipse} alt="" className="w-[0.8vw]" />
        </div>
      </div>
    </>
  );
}

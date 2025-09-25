import React from "react";
import map from "../../assets/Autre/map.png";

export default function Localisation() {
  return (
    <div className=' py-[7vw] gap-[17vw] flex items-center  justify-between bg-[url("assets/Background/bg-3.png")] bg-cover bg-center  w-full px-[12.17vw]'>
      <div className="flex flex-col gap-[2vw]">
        <h1 className="text-[2vw] w-[25vw]">
          Où se trouve Blu Azur à
          <span className="font-bold"> Saint-Raphaël ?</span>
        </h1>

        <p className=" w-[32vw] text-[0.8vw]  text-justify">
          Blu Azur est idéalement situé entre Saint-Tropez et Cannes, au cœur de
          l’une des plus belles stations balnéaires de France. Nos appartements
          se trouvent dans un domaine privé sécurisé, entouré de verdure, à
          quelques minutes à pied de la plage sablonneuse de Santa Lucia et de
          la marina. Proche du centre-ville de Saint-Raphaël, la résidence
          permet un accès facile aux boutiques, restaurants et animations
          locales. Une station d’arrêt d’autobus est située à la sortie du site,
          facilitant les déplacements, et une boulangerie à proximité vous offre
          du pain frais chaque matin pour bien commencer la journée.
        </p>
        <div className="flex items-center  w-[16vw] aspect-[602/103] justify-between  px-[1vw] border-[0.1vw] border-[#4097ff]   rounded-full">
          <p className="text-[0.8vw] text-[#4097ff]">Comment s’y rendre ?</p>
          <div className="w-[1.5vw]  aspect-square rounded-full  overflow-hidden border-[0.1vw] border-[#4097ff]  flex items-center justify-center">
              <i className="fa-solid fa-chevron-right text-[0.7vw] text-[#4097ff] "></i>
            </div>
        </div>
      </div>
      <div className="relative bg-[url('assets/Autre/cart.png')] bg-center bg-cover aspect-[1026/1225] w-[29vw] rounded-[7%] ">
        <img
          src={map}
          alt=""
          className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 
               w-[6vw] "
        />
      </div>
    </div>
  );
}

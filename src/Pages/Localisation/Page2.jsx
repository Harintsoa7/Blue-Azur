import React from "react";
export default function Localisation() {
  return (
    <div className='text-white py-[7vw]  gap-[17vw] flex flex-row-reverse items-center  justify-between bg-[url("assets/Background/bg-4.png")] bg-cover bg-center  w-full px-[12.17vw]'>
      <div className="text-end flex flex-col gap-[1vw]">
        <h1 className="w-[31vw] text-[2vw]">
          Un point de départ idéal pour{" "}
          <span className="font-bold"> découvrir la Côte d’Azur ! </span>
        </h1>

        <p className="   text-justify text-[0.8vw] w-[30vw]">
          Entre mer et montagne, Saint-Raphaël est une destination idéale pour
          les amateurs de plein air et de découvertes. Randonnées dans le Massif
          de l’Estérel, sports nautiques sur les eaux cristallines de la
          Méditerranée, balades en bateau vers les îles de Lérins ou encore golf
          et cyclisme sur des parcours panoramiques, chaque journée offre son
          lot d’aventures. Entre marchés provençaux, villages perchés et
          animations locales, l’art de vivre azuréen se dévoile à chaque
          instant, faisant de Saint-Raphaël un lieu vibrant et inoubliable.
        </p>
      </div>
      <div className=" bg-[url('assets/Autre/collage.png')] bg-center bg-cover aspect-[904/1148] w-[25vw] relative "></div>
    </div>
  );
}

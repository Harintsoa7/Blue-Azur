import React from "react";
import bg5 from "../../assets/Background/bg-5.png";
export default function Reservations() {
  return (
    
    <div
      className="w-full py-[10vw] bg-center bg-cover text-white flex flex-col items-center justify-center gap-[3vw]"
      style={{
        backgroundImage: `linear-gradient(90deg, #4097FF 0%, rgba(115,115,115,0) 100%), url(${bg5})`,
      }}
    >
      <h1 className="text-[2.78vw] font-bold">Réservations</h1>
      <p className="text-[1.34vw] text-center w-[44vw]">
        <span className="font-bold">Offrez-vous un séjour inoubliable </span>
        dans l’un de nos appartements Blu Azur. Profitez d’un cadre
        exceptionnel, entre confort, détente et découvertes, au cœur de
        Saint-Raphaël.
      </p>
      <div className="flex items-center  w-[25vw] aspect[713/36] justify-between  bg-[#4097ff] px-[1vw] py-[0.5vw]  rounded-full">
        <p className="text-[1vw] font-bold">Réservez dès maintenant votre séjour !</p>
        <div className= "  border-stone-50 rounded-full w-[8%] border-[0.1vw] aspect-square flex justify-center items-center">
          <i className="fa-solid fa-chevron-right text-[0.8vw] "></i>
        </div>
         
      </div>
    </div>
  );
}

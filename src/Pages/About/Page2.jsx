import slider1 from "../../assets/Slider/slider3.png"
import slider2 from "../../assets/Slider/slider4.png"
import ellipse from "../../assets/Ellipse.png"
export default function Apropos() {
  return (
    <>
      {/* texte noir avec font blanc */}
      <div className=" relative bg-stone-50 overflow-hidden w-full aspect-[3556/1705] flex justify-between py-[8vw] px-[12.17vw] ">
        <div className="flex flex-col gap-[2vw] justify-center">
        <div className="flex flex-col gap-[1.5vw]">
          <h1 className="text-[3vw] w-[38vw] ">
            Le confort et la sérénité d’un
            <span className="font-bold"> appartement privé</span>
          </h1>

          <p className="w-[36.16vw] text-justify  text-[1vw]">
            Blu Azur vous propose des appartements élégants et spacieux, conçus
            pour accueillir de 2 à 6 personnes. Offrant un cadre confortable et
            moderne, ils sont parfaits pour une escapade détente ou un séjour
            prolongé.
          </p>
        </div>
        <div className="flex flex-col gap-[0.5vw]">
          <h2 className="text-[1.29vw] ">Les inclusions :</h2>
          <ul className="text-[0.90vw] w-[34vw]">
            <li className="flex flex-row items-center gap-[1vw]">
              <span className="flex w-[0.7vw] aspect-square bg-[#4097ff] rounded-full shrink-0"></span>

              <p>Stationnement privé</p>
            </li>
            <li className="flex flex-row items-center gap-[1vw]">
             <span className="flex w-[0.7vw] aspect-square bg-[#4097ff] rounded-full shrink-0"></span>

              Piscine extérieure avec chaises longues
            </li>
            <li className="flex flex-row items-center gap-[1vw]">
             <span className="flex w-[0.7vw] aspect-square bg-[#4097ff] rounded-full shrink-0"></span>

              Linge de lit et serviettes
            </li>
            <li className="flex flex-row items-center gap-[1vw]">
            <span className="flex w-[0.7vw] aspect-square bg-[#4097ff] rounded-full shrink-0"></span>

              Télévision, téléphone et Wi-Fi (accès au salon)
            </li>
            <li className="flex flex-row items-center gap-[1vw]">
             <span className="flex w-[0.7vw] aspect-square bg-[#4097ff] rounded-full shrink-0"></span>

              Réfrigérateur, cuisinière, lave-vaisselle, vaisselle
            </li>
            <li className="flex flex-row items-center gap-[1vw]">
            <span className="flex w-[0.7vw] aspect-square bg-[#4097ff] rounded-full shrink-0"></span>

              Kit bébé: comprend un lit parapluie avec un vrai matelas et une
              chaise haute
            </li>
            <li className="flex items-baseline gap-[1vw]">
             <span className="flex w-[0.7vw] aspect-square bg-[#4097ff] rounded-full shrink-0"></span>

              Autres commodités en prêt à la réception: jeux de société, livres,
              raquettes et balles de ping-pong, sèche-cheveux, fer et planche à
              repasser, adaptateur pour les prises étrangères et cache-prises
              pour les enfants.
            </li>
          </ul>
        </div>
        </div>
        <div>
          <div className="w-[27vw] flex  items-center gap-[0.5vw] ">
            <img src={slider1} alt="" />
            <img src={slider2} alt="" className="w-[21vw] aspect-[775/1001]" />
          </div>
        </div>
        <div className="absolute rounded-full border-[0.1vw] hover:scale-110 cursor-pointer right-[1.5vw] top-1/2 -translate-y-1/2 border-white w-[2vw] aspect-square flex items-center justify-center">
         <img src={ellipse} alt="" className="w-[0.8vw]" />
          
        </div>
      </div>
    </>
  );
}

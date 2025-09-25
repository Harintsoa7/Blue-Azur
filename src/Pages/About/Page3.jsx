
// import swimming from "./assets/swimming.png";
import swimming from "../../assets/Autre/swimming.png";
import city from "../../assets/Autre/city.png";
import casino from "../../assets/Autre/casino.png";
import village from "../../assets/Autre/village.png";
import golf from "../../assets/Autre/golf.png";
import montaigne from "../../assets/Autre/montaine.png";

export default function Apropos() {
  return (
    <>
    

      <div className="bg-[url('assets/Background/bg-piscine.png')] bg-cover bg-center  flex flex-col justify-around items-center gap-[5vw] w-full px-[12vw] py-[7vw]     ">
        <div className="flex flex-col  text-center w-[45.66vw] text-white">
          <h1 className="text-[2.78vw] w-[45.66vw]">
            Saint Raphaël, l’endroit parfait pour{" "}
            <span className=" font-bold">vivre la Côte d’Azur</span>{" "}
          </h1>
          <p className="text-[0.92vw]">
            Avec ses plages dorées, ses 300 jours de soleil et ses calanques
            sauvages, Saint-Raphaël est une destination de rêve. Entre mer
            turquoise et rochers rouges de l’Estérel, elle offre un cadre
            idyllique pour la détente et l’aventure.
          </p>
        </div>
        <div className=" grid grid-cols-6  items-start w-full text-white font-bold text-[1.28vw]">
          <div className="flex flex-col items-center justify-center ">
            <div className=" bg-white  flex  justify-center items-center  w-[8.29vw] rounded-full  aspect-square p-[1.5vw]">
              <img src={swimming} alt="" className="w-[90%] aspect-square" />
            </div>
            <p className="w-full text-center whitespace-pre-line">
              Sports nautiques,
              <br />
              plongée,
              <br />
              voile
            </p>
          </div>
          <div className="flex flex-col items-center justify-center ">
            <div className="bg-white flex justify-center items-center rounded-full w-[8.29vw] aspect-square p-[1.5vw]">
              <img src={city} alt="" className="w-[90%] aspect-square" />
            </div>
            <p className="w-full text-center">
              Randonnées et <br />
              vélo <br /> dans <br /> l'Estérel
            </p>
          </div>
          <div className="flex flex-col items-center justify-center ">
            <div className="bg-white flex justify-center items-center  rounded-full w-[8.29vw] aspect-square p-[1.5vw]">
              <img src={casino} alt="" className="w-[90%] aspect-square" />
            </div>
            <p className="w-full text-center">
              Casino et <br /> vie <br /> nocturne <br />
              animée
            </p>
          </div>
          <div className="flex flex-col items-center justify-center ">
            <div className="bg-white flex justify-center items-center rounded-full w-[8.29vw] aspect-square p-[1.5vw]">
              <img src={village} alt="" className="w-[90%] aspect-square" />
            </div>
            <p className="w-full text-center">
              Villages <br /> perchés et <br /> marchés <br /> provençaux
            </p>
          </div>
          <div className="flex flex-col items-center justify-center ">
            <div className="bg-white flex justify-center items-center  rounded-full w-[8.29vw] aspect-square p-[1.5vw]">
              <img src={golf} alt="" className="w-[90%] aspect-square" />
            </div>
            <p className="w-full text-center">
              Un paradis <br /> pour les <br /> golfeurs
            </p>
          </div>
          <div className=" flex flex-col items-center justify-center">
            <div className="bg-white flex justify-center items-center rounded-full w-[8.29vw] aspect-square p-[1.5vw]">
              <img src={montaigne} alt="" className="w-[90%] aspect-square" />
            </div>
            <p className="w-full text-center">
              Montagne <br /> et vélo <br /> de route
            </p>
          </div>
        </div>
        <p className="w-[45.66vw]  text-white text-center text-[0.92vw]">
          Flânez sur la Promenade des Bains, explorez les criques secrètes ou
          partez en mer depuis son port de plaisance. Saint-Raphaël, c’est la
          Côte d’Azur dans toute sa splendeur !
        </p>
      </div>
    </>
  );
}

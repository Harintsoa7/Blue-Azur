import React from "react";
import { motion } from "framer-motion";
export default function Activity() {
  return (
    <div className='text-white px-[12.17vw] flex flex-col gap-[1vw]  justify-center items-center bg-[url("assets/Background/bg-6.png")] bg-cover bg-center w-full aspect-[3556/2112] '>
      <motion.div className="grid grid-cols-2 gap-[1vw] w-[75.4vw]">
        <motion.div
          initial={{ x: "-10vw", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.5, ease: "linear" }}
          className='bg-[url("assets/Background/bg-grid-1.png")] p-[2vw] bg-cover bg-bottom flex flex-col justify-end  aspect-[1329/700] rounded-[10%] gap-[1.5vw]'
        >
          <motion.div className="flex flex-col gap-[0.5vw]">
            <h1 className="font-bold text-[1vw] w-[11.3vw]">
              Un patrimoine culturel d’exception
            </h1>
            <p className="w-[31.4vw] text-[0.7vw]">
              De Picasso à Cocteau, la Côte d’Azur a toujours été une terre
              d’inspiration pour les artistes. Musées, galeries et sites
              historiques jalonnent la région, offrant un voyage au cœur de
              l’art et de l’histoire entre Saint-Raphaël, Antibes et
              Saint-Paul-de-Vence.
            </p>
          </motion.div>
          <p className="text-[0.7vw]">
            À voir :
            <span className="text-[#4097ff] underline cursor-pointer ">
              &nbsp; Le Festival de Cannes, Carnaval de Nice, Fête du Citron
            </span>
          </p>
        </motion.div>

        <motion.div
          initial={{ x: "10vw", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.5, ease: "linear" }}
          className='bg-[url("assets/Background/bg-grid-2.png")]  aspect-[1321/700] p-[2vw] bg-cover bg-center flex flex-col justify-end gap-[1.5vw]  rounded-[10%]'
        >
          <div className="flex flex-col gap-[0.5vw]">
            <h1 className="font-bold  text-[1vw]">
              Le sport au rythme de la Méditerranée
            </h1>
            <p className="w-[31.4vw] text-[0.7vw]">
              Du légendaire Grand Prix de Monaco aux défis de l’Ironman, en
              passant par le Marathon des Alpes-Maritimes, la région vibre au
              rythme des grands événements sportifs. Cyclisme sur la Route des
              Crêtes, golf sur des parcours prestigieux et voile lors des
              Régates de Saint-Tropez complètent ce décor idéal pour les
              amateurs de sport et d’adrénaline.
            </p>
          </div>
          <p className="w-[31.4vw] text-[0.7vw]">
            À voir :
            <span className="text-[#4097ff] underline cursor-pointer">
              &nbsp; Grand prix de Monaco, Ironman France - Nice, Marathon des
              Alpes-Maritimes,
              <br /> Régates de Saint-Tropez
            </span>
          </p>
        </motion.div>
      </motion.div>
      <motion.div className="grid grid-cols-3 gap-[1vw] w-[75.4vw]">
        <motion.div
          initial={{ x: "-10vw", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.5, ease: "linear" }}
          className='bg-[url("assets/Background/bg-grid-3.png")] gap-[1.5vw] p-[2vw] bg-cover bg-bottom flex flex-col justify-end  aspect-[868/988]  rounded-[10%]'
        >
          <div className="flex flex-col gap-[0.5vw]">
            <h1 className="font-bold text-[1vw] w-[14vw]">
              Une destination gourmande et authentique{" "}
            </h1>

            <p className="text-[0.7vw]">
              Les marchés provençaux dévoilent des saveurs du terroir, entre
              fromages affinés, huile d’olive et spécialités méditerranéennes.
              Vignerons passionnés et restaurants raffinés offrent une
              expérience gastronomique où tradition et créativité se rencontrent
              dans un cadre enchanteur.
            </p>
          </div>
          <div className="flex items-center px-[1vw] py-[0.5vw]  justify-between  w-[15vw] border-1 border-[#4097ff]   rounded-full">
            <p className=" text-[#4097ff] text-[0.5vw]">
              Consulter la liste des meilleurs restaurants
            </p>
            <div className="w-[10%]  aspect-square rounded-full  overflow-hidden border-[0.1vw] border-[#4097ff]  flex items-center justify-center">
              <i className="fa-solid fa-chevron-right text-[0.7vw] text-[#4097ff] "></i>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ y: "10vw", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.5, ease: "linear" }}
          className='bg-[url("assets/Background/bg-grid-4.png")]  gap-[0.5vw] p-[2vw] bg-cover bg-bottom flex flex-col justify-end   aspect-[868/988]  rounded-[10%]'
        >
          <h1 className="font-bold text-[1vw] w-[14vw]">
            Des expériences inoubliables en famille
          </h1>

          <p className="text-[0.7vw]">
            Entre villages pittoresques, marchés publics animés et escapades sur
            la route du littoral, Saint-Raphaël propose un cadre idéal pour
            partager des moments inoubliables. La diversité des activités en
            plein air fait de la région une destination prisée par les amateurs
            de découvertes et d’aventures en famille.
          </p>
        </motion.div>
        <motion.div
          initial={{ x: "10vw", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.5, ease: "linear" }}
          className='bg-[url("assets/Background/bg-grid-5.png")] gap-[1vw] p-[2vw] bg-cover bg-bottom flex flex-col justify-end  aspect-[868/988]  rounded-[10%]'
        >
          <div className="flex flex-col gap-[0.5vw]">
            <h1 className="font-bold text-[1vw] w-[14vw]">
              L’évasion en pleine nature
            </h1>

            <p className="text-[0.7vw]">
              Le Massif de l’Estérel déploie ses roches rouges entre ciel et
              mer, offrant des panoramas spectaculaires. Randonnées, balades
              côtières et sentiers sauvages permettent de s’imprégner d’un
              environnement préservé, idéal pour une parenthèse hors du temps.
            </p>
          </div>
          <p className="text-[0.7vw]">À Voir: Grand Canyon du Verdon</p>
          <div className="flex items-center px-[1vw] py-[0.5vw]  justify-between  w-[15vw] border-1 border-[#4097ff]   rounded-full">
            <p className=" text-[#4097ff] text-[0.5vw]">
              Consulter la liste des meilleurs restaurants
            </p>
            <div className="w-[10%]  aspect-square rounded-full  overflow-hidden border-[0.1vw] border-[#4097ff]  flex items-center justify-center">
              <i className="fa-solid fa-chevron-right text-[0.7vw] text-[#4097ff] "></i>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

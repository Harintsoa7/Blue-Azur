import { motion } from "framer-motion";
import facebook from "../assets/Logo/facebook.png";
import youtube from "../assets/Logo/youtube.png";
import twitter from "../assets/Logo/Twitter.png";
import instagram from "../assets/Logo/instagram.png";

const socialLinks = [
  { src: facebook, alt: "Facebook", link: "https://facebook.com" },
  { src: youtube, alt: "YouTube", link: "https://youtube.com" },
  { src: twitter, alt: "Twitter", link: "https://twitter.com" },
  { src: instagram, alt: "Instagram", link: "https://instagram.com" },
];

export default function SocialMedia() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="absolute left-0 top-0 bottom-0 bg-[rgba(64,151,255,0.5)] w-[5vw]  flex items-end justify-center pb-[4vw]">
      <motion.ul
  variants={containerVariants}
  initial="hidden"
  whileInView="visible" 
  viewport={{ once: false, amount: 1 }}
  className="flex flex-col items-center justify-center gap-[1vw]"
>
  {socialLinks.map(({ src, alt, link }, index) => (
    <motion.li
      key={index}
      variants={itemVariants}
      whileHover={{ scale: 1.2, rotate: 5 }}
      whileTap={{ scale: 0.9 }}
      className={`${src === facebook ? "w-[28%]" : "w-[40%]"} rounded-full flex items-center justify-center cursor-pointer`}
    >
      <a href={link} target="_blank" aria-label={alt}>
        <img src={src} alt={alt} className="w-full h-auto" />
      </a>
    </motion.li>
  ))}
</motion.ul>

    </div>
  );
}

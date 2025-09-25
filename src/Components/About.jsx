import "../Style/About.css";
import linkedin from "../assets/Social-logo/linkedin.png";
import fb from "../assets/Social-logo/facebook.png";
import github from "../assets/Social-logo/github.png";
import pinterest from "../assets/Social-logo/pinterest.png";
import me from "../assets/me.jpg";
import Button from "./little-components/Button";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref1 = useRef(null);
  const isInView = useInView(ref1, { once: true });
  const myVariant = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 },
  };
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // délai entre les enfants
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };
  const aboutitemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <>
      <div className="about-wraper">
        <div className="about">
          <div className="social-image">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="social"
            >
              <motion.img
                variants={itemVariants}
                src={linkedin}
                alt="linkedin.png"
              />
              <motion.img
                variants={itemVariants}
                className="github"
                src={github}
                alt="github.png"
              />
              <motion.img variants={itemVariants} src={fb} alt="facebook.png" />
              <motion.img variants={itemVariants} src={pinterest} alt="" />
            </motion.div>
            <div className="profile">
              <motion.img
                initial={{ x: 0, y: 0 }}
                animate={{ x: -15, y: -15 }}
                src={me}
                alt=""
              />
            </div>
          </div>
          <motion.div
            className="about-me"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <h1>About Me</h1>
            <motion.p variants={aboutitemVariants}>
              My full name is
              <span className="name"> HARINTSOA RANDRIAMANANJARA.</span>
            </motion.p>
            <motion.p variants={aboutitemVariants}>
              I enjoy solving problems, learning new technologies, and turning
              ideas into digital experiences.
            </motion.p>
            <motion.p variants={aboutitemVariants}>
              Currently, I am looking for opportunities to grow as a developer
              and work on impactful projects. I value{" "}
              <span className="name">clean code</span> , teamwork, and
              continuous learning.
            </motion.p>
            <motion.p variants={aboutitemVariants}>
              My core skills include Laravel (backend), React.js (frontend),
              JavaScript, PHP, HTML, CSS, MySQL, and Git.
            </motion.p>
            <motion.p variants={aboutitemVariants}>
              When I’m not coding, I love listening to music and watching
              documentaries.
            </motion.p>
          </motion.div>
        </div>
        <div className="button">
          <Button ref={ref1} 
          variants={myVariant}
          initial="hidden"
          animate={isInView? "visible": "hidden"}
          cls="resume">
            Download CV
          </Button>
          <Button cls="re">Contact</Button>
        </div>
      </div>
    </>
  );
}

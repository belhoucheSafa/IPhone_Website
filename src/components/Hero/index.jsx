import "./Hero.css";
import { skills } from "../../data";
import CardUi from "../../assets/CardUi";
import ParticlesBackground from "../ParticlesBackground";
import { motion } from "framer-motion";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Hero = () => {
  return (
    <div className="section__wrapper" id="hero">
      <ParticlesBackground />

      <div className="hero__section__top">
        <div className="hero-left">
          <div className="hero-content"></div>
        </div>

        <div className="hero-right"></div>
      </div>
      <div className="hero__section__bottom">
        <div class="scroll-down"></div>
      </div>
    </div>
  );
};

export default Hero;

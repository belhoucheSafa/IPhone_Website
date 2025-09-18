import "./Hero.css";
import { skills } from "../../data";
import CardUi from "../../assets/CardUi";
import ParticlesBackground from "../ParticlesBackground";

const Hero = () => {
  return (
    <div className="section__wrapper" id="hero">
                <ParticlesBackground />   

      <div className="hero-left">
        {/* Left side with the line and content */}
        <div className="hero-line-container">
          <div className="hero-dot"></div>
          <div className="violet-gradient"></div>
        </div>

        <div className="hero-content"></div>
      </div>

      <div className="hero-right">
        {/* <div className="skills__container">
          {skills.map((skill, index) => (
            <div className="flex skill__group" key={index}>
              {skill.data.map((list, index) => (
                <div key={index} className="blur__overlay skill flex__center">
                  <div className="skill__logo">
                    <img src={list.logo} alt="" />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
        <CardUi className="card__ui-item" color={"var(--color-primary)"} /> */}
      </div>
    </div>
  );
};

export default Hero;

import "./About.css";
import Hole from "../../ui/Hole";
import { skills } from "../../data";
import CardUi from "../../assets/CardUi";
const AboutOld = () => {
  return (
    <section id="about" className="about__section">
      <div className="card section__wrapper">
        {/* <div className="column left-column">
          <h3 className="skill__title">My Skills</h3>
          <div className="skills__container">
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
          <CardUi className="card__ui-item" color={"var(--color-primary)"} />
        </div>
        <div className="column right-column">
          <h2 className="shine">About Me</h2>
          <h1 className="title">
            I am <span className="color__primary">Emanuel Eze</span>
          </h1>
          <p className="text__muted description">
            Experienced Frontend Developer with a passion for crafting dynamic,
            user-friendly, and responsive web interfaces. Proficient in modern
            frontend technologies, frameworks, and design principles. Adept at
            transforming ideas into seamless user experiences with clean,
            efficient, and scalable code. Strong attention to detail,
            problem-solving skills, and a proven track record of delivering
            visually stunning, high-quality projects on time.
          </p>
        </div> */}
      </div>
    </section>
  );
};

export default AboutOld;

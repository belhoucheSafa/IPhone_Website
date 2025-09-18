import "./Header.css";
import HeaderTitle from "../../ui/HeaderTitle";
import CodeBlock from "../../ui/CodeBlock";
import Facts from "../../ui/Facts";
import SocialHandles from "../../ui/SocialHandles";
import BreathCircle from "../../ui/BreathCircle";
import ParticlesBackground from "../ParticlesBackground";
// import { profile1 } from "../../assets";

const code = `
  const developer = {
    firstName: "Safa",
    lastName: "Belhouche",
    age: ⏳ 23 , 
    hobby: repeat = () => {
      // eat()
      // train() 
      // sleep()
      // code()
    }
  }
  `;

const Header = () => {

  return (
    <header id="header" >
        <ParticlesBackground />   
        <div className="section__wrapper">
          <div className="grid upper">
            <div className="column">
              <div className="header__title"></div>
            </div>
            <div className="column"></div>
          </div>
          <div className="card grid lower">
            <CodeBlock language={"javascript"} code={code} />
            <div>
              <p className="text__muted description">
                I dissect intricate user experience challenges to engineer
                integrity-focused solutions that resonate with billions of users.
              </p>
              <Facts />
              <SocialHandles />
            </div>
          </div>
        </div>
    </header>
  );
};


export default Header;

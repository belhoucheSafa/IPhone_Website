import { useRef } from "react";
import "./NewAbout.css";
import SyntaxHighlight from "react-syntax-highlighter";
import { a11yLight } from "react-syntax-highlighter/dist/esm/styles/hljs";
import me from "../../assets/newAboutAssets/me.png";
import Window from "../../assets/newAboutAssets/icons/window.svg";
import CopyEmailButton from "../../ui/CopyEmailButton";
import MotionCard from "../../ui/MotionCard";
import CSharpLogo from "../../assets/logos/csharp-pink.png";
import DotNetLogo from "../../assets/logos/dotnet-pink.png";
import BlazorLogo from "../../assets/logos/blazor-pink.png";

const code = `
  const developer = {
    name: "Safa Belhouche",
    age: ⏳ 23 , 
    hobby: repeat = () => {
      // eat()
      // sleep()
      // code()
    }
  }
  `;
  const customTheme = {
  ...a11yLight,
  // override token colors
  "hljs-comment": { color: "#888888", fontStyle: "italic" }, // comments
  "hljs-keyword": { color: "#cf7f4a", fontWeight: "bold" }, // keywords
  "hljs-number": { color: "#cf7f4a" }, // constants
  "hljs-string": { color: "#57b765" }, // strings
  "hljs-variable": { color: "#9467f5" }, // general purple
};
const About = () => {
  const grid2Container = useRef();

  return (
    <section id="new__about">
      <div className="section__wrapper">
        <div className="about__cards__wrapper">
          <div className="about__cards__row">
            <div className="about__card__1__left about__card">
              <div className="spotlight"></div>
              <img src={Window} alt="" className="window" />

              <div className="about__card__1__left__profile">
                <div className="avatar">
                  <img src={me} alt="" />
                </div>
                <div className="details">
                  <div className="top">Safa Belhouche</div>
                  <div className="bottom">Student & Software Developer</div>
                </div>
              </div>
              <div className="about__card__1__left__description__1">
                <div className="colored__text">Passionate</div>
                Developer and <br /> Lifelong Learner
              </div>
              <div className="about__card__1__left__description__2">
                I adapt to different time zones to make sure communication is
                smooth, no matter where you're located.
              </div>
            </div>

            <div className="about__card__2__right about__card">
              {/* <div className="spotlight"></div> */}
              <div className="about__card__2__right__code__block_wrapper">
                <div className="three__dots_wrapper">
                  <div className="one__dot dot__1"></div>
                  <div className="one__dot dot__2"></div>
                  <div className="one__dot dot__3"></div>
                </div>
                <div className="code__block__wrapper">
                  {/* <CodeBlock language={"javascript"} code={code} /> */}
                  <SyntaxHighlight
                    language={"javascript"}
                    style={customTheme}
                    className="block__code__wrapper"
                    customStyle={{
                      background: "transparent",
                      color: "#cdcdcd",
                      padding: "0px",
                      fontSize: "12px",
                    }}
                    wrapLongLines={true}
                  >
                    {code}
                  </SyntaxHighlight>
                </div>
              </div>
              <div className="about__card__2__right__details">
                <div className="about__title shine">
                  What <span className="highlight ">Drives Me</span>
                </div>
                <div className="about__desc">
                  I'm passionate about the intersection of design 🎨 and
                  development 💻. I believe the best digital experiences are
                  built with a deep understanding of the user 👤 and a
                  commitment to innovation 🌟.
                  <br /> Whether working on a simple landing page or a complex
                  web app, I bring precision ✍️, creativity ✨, and a user-first
                  mindset to every project.
                </div>
              </div>
            </div>
          </div>
          <div className="about__cards__row">
            

            <div className="about__card__3__left about__card">
              <div
                ref={grid2Container}
                className="flex items-center justify-center w-full h-full"
              >
                <p className="shine">CODE IS CRAFT</p>
                <MotionCard
                  style={{ rotate: "75deg", top: "50%", left: "20%" }}
                  text="GRASP"
                  containerRef={grid2Container}
                />
                <MotionCard
                  style={{ rotate: "-30deg", top: "60%", left: "55%" }}
                  text="SOLID"
                  containerRef={grid2Container}
                  className="special-motion-card"
                />
                <MotionCard
                  style={{ rotate: "30deg", bottom: "30%", left: "70%" }}
                  text="Design Patterns"
                  containerRef={grid2Container}
                />
                <MotionCard
                  style={{ rotate: "-45deg", top: "55%", left: "0%" }}
                  text="Design Principles"
                  containerRef={grid2Container}
                />
                <MotionCard
                  style={{ rotate: "20deg", top: "10%", left: "38%" }}
                  text="SRP"
                  containerRef={grid2Container}
                />
                <MotionCard
                  style={{ rotate: "30deg", top: "70%", left: "70%" }}
                  image={CSharpLogo}
                  containerRef={grid2Container}
                />
                <MotionCard
                  style={{ rotate: "-45deg", top: "30%", left: "25%" }}
                  image={BlazorLogo}
                  containerRef={grid2Container}
                />
                <MotionCard
                  style={{ rotate: "-45deg", top: "0%", left: "0%" }}
                  image={DotNetLogo}
                  containerRef={grid2Container}
                />
              </div>
            </div>

            <div className="about__card__4__right about__card">
              <div className="collab__text">
                I'm Committed to Collaboration and Clear <br /> Communication
              </div>
              <div className="copy__mail__btn__wrapper">
                <CopyEmailButton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

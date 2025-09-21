import { useState, useEffect, useRef } from "react";
import Plyr from "plyr-react";
import "plyr-react/plyr.css";
import "./ProjectModal.css";
import ParticlesBackground from "../../components/ParticlesBackground";
import PROJECTDEMOVIDEO from "../../assets/videos/project1.mp4";
import SyntaxHighlight from "react-syntax-highlighter";
import { a11yLight } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { IoLockClosed } from "react-icons/io5";
import { IoIosClose } from "react-icons/io";

const projectCode = `
const project = {
  name: "Awesome Portfolio",
  description: "A sleek developer portfolio showcasing projects from start to finish. I handle everything: management, design, modeling, coding, and UI. Interactive, modern, and user-friendly experiences.",
  techs: ["React", "Three.js", "TailwindCSS", "Plyr", "Framer Motion"],
  github: "If you want the code, just ask me 😉 or mail me at safabelhouche@example.com",
  tasks: [
    "Project management & planning",
    "UX/UI design and 3D modeling",
    "Frontend development & animations",
    "Testing, debugging, deployment"
  ],
  notes: () => {
    // User-friendly interface
    // Modern animations
    // Responsive design
  }
};  
`;

const customTheme = {
  ...a11yLight,
  // override token colors
  "hljs-comment": { color: "#888888", fontStyle: "italic" }, // comments
  "hljs-keyword": { color: "#cf7f4a", fontWeight: "bold" }, // keywords
  "hljs-number": { color: "#cf7f4a" }, // constants
  "hljs-string": { color: "#bab5c1" }, // strings
  "hljs-variable": { color: "#7c3fff", fontWeight: "bold" }, // general purple
};
const ProjectModal = ({ isOpen, onClose }) => {
  const [animationClass, setAnimationClass] = useState("");
  const [wasOpened, setWasOpened] = useState(false);
  const playerRef = useRef(null);
  const modalRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setAnimationClass("one"); // run open animation
      setWasOpened(true);
      document.body.classList.add("modal-active");
    } else if (wasOpened) {
      // only run close animation if it was opened before
      setAnimationClass("one out");
      document.body.classList.remove("modal-active");

      const timer = setTimeout(() => {
        setAnimationClass(""); // reset after animation ends
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [isOpen, wasOpened]);

  // Reset the player when modal closes
  useEffect(() => {
    if (!isOpen && playerRef.current) {
      const player = playerRef.current.plyr;
      if (player && typeof player.stop === "function") {
        player.stop();
      }
    }
  }, [isOpen]);

  // Handle click outside to close
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen && animationClass === "") return null;

  return (
    <>
      <div id="modal-container" className={animationClass}>
        <div className="modal-wrapper">
          <div className="modal-background">
            <div className="modal" ref={modalRef}>
              <div className="screen__top__bar">
                <div className="three__dots__screen_wrapper">
                  <div
                    className="one__dot__modal dot__1"
                    onClick={onClose}
                    style={{ cursor: "pointer" }}
                  ></div>
                  <div className="one__dot__modal dot__2"></div>
                  <div className="one__dot__modal dot__3"></div>
                </div>
                <div className="screen__tab__title">
                  <IoLockClosed className="locked__icon" />{" "}
                  https://Demo/E-Commerce Application
                </div>
              </div>
              <div className="screen__content">
                <div className="preview__box">
                  <Plyr
                    ref={playerRef}
                    source={{
                      type: "video",
                      sources: [
                        {
                          src: PROJECTDEMOVIDEO,
                          type: "video/mp4",
                        },
                      ],
                    }}
                    options={{
                      autoplay: false,
                      controls: [
                        "play-large",
                        "play",
                        "progress",
                        "current-time",
                        "mute",
                        "volume",
                        "fullscreen",
                      ],
                    }}
                  />
                </div>
                <div className="demo__details__box">
                  <div className="demo__details__code__block">
                    <SyntaxHighlight
                      language="javascript"
                      style={customTheme}
                      className="block__code__wrapper__demo"
                      customStyle={{
                        background: "transparent",
                        padding: "10px",
                        fontSize: "14px",
                        textAlign: "left",
                        color: "#7c3fff",
                        whiteSpace: "pre-wrap",
                      }}
                      wrapLongLines={true}
                    >
                      {projectCode}
                    </SyntaxHighlight>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectModal;
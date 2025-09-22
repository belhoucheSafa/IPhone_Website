import { FaPaintBrush } from "react-icons/fa";
import { SiFiverr } from "react-icons/si";
import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import { FaCodeCompare } from "react-icons/fa6";
import { GiIdea } from "react-icons/gi";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import { FaCode, FaProjectDiagram } from "react-icons/fa";

import {
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
  profile3,
  profile4,
  profile5,
  profile6,
  figma,
  sketch,
  xd,
  css,
  html,
  javascript,
  tailwind,
  bootstrap,
  react,
  reactnative,
  emailicon,
  messengericon,
  whatsappicon,
} from "./assets";

export const menu = [
  { name: "About" },
  { name: "Services" },
  { name: "Education & Experience" },
  { name: "Projects" },
  // { name: "Testimonial" },
  { name: "Contact" },
];

export const services = [
  {
    title: "UI / UX Design",
    color: "#2563eb",
    colorRGB: "37, 99, 235",
    icon: <FaPaintBrush />,
    description: `As a software engineering student, I design intuitive and engaging interfaces. 
                  From wireframes to polished prototypes, I focus on user-centric designs 
                  that combine creativity and functionality, ensuring seamless experiences across all platforms.`,
  },
  {
    title: "Web Development",
    icon: <FaCode />,
    color: "blueviolet",
    colorRGB: "138, 43, 226",
    description: `I build responsive and high-performance applications using modern technologies 
                  like React, Node.js, and more. My work covers everything from frontend to backend, 
                  creating scalable, maintainable, and efficient solutions for real-world problems.`,
  },
  {
    title: "Project Conception",
    icon: <FaProjectDiagram />,
    color: "var(--color-success)",
    colorRGB: "var(--color-success-rgb)",
    description: `I am involved in the full lifecycle of software projects, including planning, 
                  architecture design, and implementation. I ensure that ideas are transformed 
                  into practical and robust solutions that meet technical and business requirements.`,
  },
];
export const projects = [
  {
    title: "AI Powered School",
    image: project1,
    category: "UI/UX",
    description: `Transforming education with AI, our School UI Design project revolutionizes the 
                     learning experience. Seamlessly integrating intelligent features, personalized interfaces, 
                     and intuitive navigation, our design empowers educators and students alike. Experience 
                     innovation at its finest as we pave the way for a smarter, more efficient educational 
                     journey.`,
    demoLink: "https://google.com/",
    stacks: [
      {
        name: "XD",
        logo: xd,
      },
    ],
  },
  {
    title: "E-Commerce Application",
    image: project2,
    category: "Web",
    description: `Enhance your online shopping experience with our E-Commerce Application 
      UI design project. Seamlessly blending aesthetics with functionality, our intuitive 
      interface offers easy navigation, personalized recommendations, and secure 
      transactions. Elevate your digital storefront and captivate customers with a visually 
      stunning design tailored to your brand`,
    demoLink: "https://google.com/",
    stacks: [
      {
        name: "ReactJs",
        logo: react,
      },
      {
        name: "XD",
        logo: xd,
      },
      {
        name: "CSS",
        logo: css,
      },
      {
        name: "JavaScript",
        logo: javascript,
      },
    ],
  },
  {
    title: "Robotic Engineering Web Application",
    image: project3,
    category: "Web",
    description: `Unlock the future of robotics with our Robotic Engineering Web Application
      project. Seamlessly integrating cutting-edge technology, data analytics, 
      and collaborative tools, our platform empowers engineers to design, simulate, 
      and optimize robotic systems. Experience innovation at its peak as we redefine the 
      boundaries of robotic engineering.`,
    demoLink: "https://google.com/",
    stacks: [
      {
        name: "ReactJs",
        logo: react,
      },
      {
        name: "Figma",
        logo: figma,
      },
      {
        name: "Tailwind",
        logo: tailwind,
      },
    ],
  },
  {
    title: "Project Management application",
    image: project4,
    category: "Apps",
    description: `Simplify project coordination with our intuitive Project Management application. Track tasks, collaborate in real-time, and streamline workflows effortlessly. With customizable features and robust reporting, stay organized and efficient.
                     Elevate your project management experience and achieve success with ease.`,
    demoLink: "https://google.com/",
    stacks: [
      {
        name: "React Native",
        logo: reactnative,
      },
      {
        name: "XD",
        logo: xd,
      },
      {
        name: "CSS",
        logo: css,
      },
    ],
  },
  {
    title: "Mobile bank - App Design",
    image: project5,
    category: "UI/UX",
    description: `Experience banking at your fingertips with our sleek Mobile Bank app design. Seamlessly manage your finances on-the-go with intuitive navigation, secure transactions, and personalized insights. Enjoy a modern interface that prioritizes convenience and accessibility, revolutionizing your banking experience.`,
    demoLink: "https://google.com/",
    stacks: [
      {
        name: "Figma",
        logo: figma,
      },
    ],
  },
  {
    title: "Quiz App Development",
    image: project6,
    category: "Apps",
    description: `Elevate engagement and knowledge retention with our Quiz App 
                    Development project. Seamlessly crafted for interactive learning 
                    experiences, our app offers customizable quizzes, real-time feedback, 
                    and captivating visuals. Empower users to test their knowledge anytime,
                     anywhere, fostering a dynamic learning environment tailored to their 
                     needs.`,
    demoLink: "https://google.com/",
    stacks: [
      {
        name: "React Native",
        logo: reactnative,
      },
      {
        name: "Figma",
        logo: figma,
      },
      {
        name: "XD",
        logo: xd,
      },
      {
        name: "Bootstrap",
        logo: bootstrap,
      },
    ],
  },
];

export const skills = [
  {
    title: "UI/UX",
    data: [
      {
        skill: "Figma",
        level: "Experienced",
        logo: figma,
      },
      {
        skill: "Sketch",
        level: "Intermediate",
        logo: sketch,
      },
      {
        skill: "XD",
        level: "Intermediate",
        logo: xd,
      },
    ],
  },
  {
    title: "Frontend Development",
    data: [
      {
        skill: "HTML",
        level: "Experienced",
        logo: html,
      },
      {
        skill: "CSS",
        level: "Experienced",
        logo: css,
      },
      {
        skill: "JavaScript",
        level: "Experienced",
        logo: javascript,
      },
      {
        skill: "Tailwind",
        level: "Intermediate",
        logo: tailwind,
      },
      {
        skill: "Bootstrap",
        level: "Experienced",
        logo: bootstrap,
      },
      {
        skill: "React",
        level: "Experienced",
        logo: react,
      },
      {
        skill: "React Native",
        level: "Experienced",
        logo: reactnative,
      },
    ],
  },
];
export const contactInfo = [
  {
    name: "Email",
    value: "safabelhouch@gmail.com",
    link: "mailto:safabelhouch@gmail.com",
    icon: emailicon,
    btnIcon: <MdOutlineEmail />,
    color: "rgb(56,115,205)",
  },
  {
    name: "Messenger",
    value: "safa Belhouche",
    link: "#",
    icon: messengericon,
    btnIcon: <RiMessengerLine />,
    color: "rgb(139,74,251)",
  },
  {
    name: "WhatsApp",
    value: "+216 50122080",
    link: "https://api.whatsapp.com/send?phone=+21650122080",
    icon: whatsappicon,
    btnIcon: <BsWhatsapp />,
    color: "rgb(38,234,112)",
  },
];
export const socialHandles = [
  {
    name: "Fiverr",
    icon: <SiFiverr />,
    link: "",
  },
  {
    name: "Github",
    icon: <AiFillGithub />,
    link: "",
  },
  {
    name: "LinkedIn",
    icon: <AiFillLinkedin />,
    link: "",
  },
  {
    name: "Youtube",
    icon: <AiFillYoutube />,
    link: "https://www.youtube.com/channel/UCEtnsPZQEd0l1tbr_nDQd5Q?sub_confirmation=1",
  },
];

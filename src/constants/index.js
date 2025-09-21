import {
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  threejs,
} from "../assets/index";

const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 15, suffix: "+", label: "Years of Experience" },
  { value: 200, suffix: "+", label: "Satisfied Clients" },
  { value: 108, suffix: "+", label: "Completed Projects" },
  { value: 90, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    title: "Baccalaureate – Mathematical Sciences",
    date: "2020 – 2021",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    rating: 3,
    responsibilities: [
      "Developed logical and analytical thinking skills.",
      "Prepared for problem-solving challenges in software development.",
    ],
    review:
      "This year laid the foundation for my logical thinking and problem-solving skills.",
  },
  {
    title:
      "1st Year – Bachelor in Computer Science for Management - At EPI School",
    date: "2021 – 2022",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    rating: 4,
    responsibilities: [
      "Introduced to programming, databases, and IT fundamentals.",
      "Completed small projects to strengthen analytical and coding skills.",
    ],
    review:
      "I discovered my passion for programming and IT, and this year was crucial.",
  },
  {
    title:
      "2nd Year – Bachelor in Business Intelligence - At Polytechnique Sousse",
    date: "2022 – 2023",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    rating: 3,
    responsibilities: [
      "Focused on data analysis, SQL, and decision-support systems.",
      "Completed internship at Whitecape Technologies: strengthened Java and applied OOP concepts.",
      "Achieved top academic performance.",
    ],
    review:
      "This internship helped me strengthen Java/OOP skills and understand real-world coding.",
  },
  {
    title:
      "3rd Year – Bachelor in Business Intelligence (Graduated with Honors)",
    date: "2023 – 2024",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    rating: 5,
    responsibilities: [
      "Completed a 9-month final year internship (Capstone Project) with major responsibilities.",
      "Designed and implemented a large-scale web application from conception to deployment.",
      "Handled full-stack development: frontend UI/UX, backend logic, and database integration.",
      "Built dashboards and reporting tools to visualize complex data.",
      "Performed data cleaning, transformation, and preparation for analysis.",
      "Applied advanced SQL, Python, and BI tools to deliver functional and maintainable solutions.",
    ],
    review:
      "This year was transformative :  <br />my 9-month internship and capstone project gave me strong hands-on expertise and prepared me for professional challenges.",
  },
  {
    title: "Engineering Cycle – Software Engineering - At Polytechnique Sousse",
    date: "2024 – Present",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    rating: 4,
    responsibilities: [
      "Focused on advanced software development, system design, and modern technologies.",
      "Worked with React, React Native, Django, Java, cloud computing, and CI/CD pipelines.",
      "Engaged in volunteering activities at SOS Village and Elder Care Center, making a positive social impact.",
    ],
    review:
      "This year was pivotal : <br />I advanced my engineering skills while contributing to social projects — volunteering at SOS Akouda and Elder Care Center was one of the most meaningful experiences of my journey !",
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];


const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
  },
  {
    name: "fb",
    imgPath: "/images/fb.png",
  },
  {
    name: "x",
    imgPath: "/images/x.png",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
  },
];



export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};

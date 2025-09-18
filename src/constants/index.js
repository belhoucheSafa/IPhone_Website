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
    review:
      "This year laid the foundation for my logical thinking and problem-solving skills",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    title: "Baccalauréat – Sciences Mathématiques",
    date: "2020 – 2021",
    responsibilities: [
      "Developed logical and analytical thinking skills.",
      "Prepared for problem-solving challenges in software development.",
    ],
  },
  {
    review:
      "I discovered my passion for programming and IT, and this year was crucial",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    title: "1st Year Licence – Informatique de Gestion (EPI)",
    date: "2021 – 2022",
    responsibilities: [
      "Introduced to programming, databases, and IT fundamentals.",
      "Completed small projects to strengthen analytical and coding skills.",
    ],
  },
  {
    review:
      "This internship helped me strengthen Java/OOP skills and understand real-world coding",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    title: "2nd Year Licence – Business Intelligence (Major de Promotion)",
    date: "2022 – 2023",
    responsibilities: [
      "Focused on data analysis, SQL, and decision-support systems.",
      "Completed internship at TechnolowhiWhiteCape Technologies: learned Java and applied OOP concepts.",
      "Achieved top academic performance.",
    ],
  },
  {
    review:
      "Developing the Polyschool platform was a milestone — I handled everything end-to-end",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    title: "Internship – Polyschool Web Project",
    date: "2023",
    responsibilities: [
      "Designed, coded, and deployed a full-stack web application.",
      "Built responsive UI/UX and backend functionality with Python/Django.",
      "Managed project lifecycle independently.",
    ],
  },
  {
    review:
      "This year was transformative: I built a large full-stack project, dashboards, and learned data cleaning",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    title: "Licence – Business Intelligence (Mention Excellent)",
    date: "2023",
    responsibilities: [
      "Designed and implemented a large-scale web project from conception to deployment.",
      "Handled full-stack development: frontend UI/UX, backend logic, and database integration.",
      "Built dashboards and reporting tools to visualize complex data.",
      "Performed data cleaning, transformation, and preparation for analysis.",
      "Applied advanced SQL, Python, and BI tools to deliver functional and maintainable solutions.",
    ],
  },
  {
    review:
      "Leading the socio-cultural project was rewarding: earned EUR-ACE recognition, became volunteer in ESoS & Maison des Aînés, and met amazing people",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    title: "Engineering Cycle – Socio-Cultural Project",
    date: "2024",
    responsibilities: [
      "Led a small team to deliver a full-stack web application.",
      "Coordinated frontend and backend integration using React and Node.js.",
      "Implemented Agile workflow and ensured project delivery on time.",
      "Received EUR-ACE recognition for project quality and impact.",
    ],
  },
  {
    review:
      "Currently expanding my software engineering expertise, experimenting with modern technologies",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    title: "Engineering Cycle – Software Engineering",
    date: "2024 – Present",
    responsibilities: [
      "Focused on advanced software development, system design, and modern technologies.",
      "Working with React, React Native, Django, Java, cloud computing, and CI/CD pipelines.",
    ],
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

const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
    imgPath: "/images/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: "/images/client6.png",
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

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
  technologies
};




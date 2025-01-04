import {
  mobile,
  backend,
  creator,
  web,
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
  indie,
  beige,
  carrent,
  jobit,
  tripguide,
  bisdle,
  threejs,
  website,
  applic,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Frontend Developer",
    icon: backend,
  },
  {
    title: "UX/UI Designer",
    icon: creator,
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
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
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
];

const experiences = [
  {
    title: "Front End Developer",
    company_name: "Beige Corporation",
    icon: beige,
    iconBg: "#383E56",
    date: "November 2021 - March 2023",
    points: [
      "Developed and maintained multiple front-end web applications using React.js and Angular, enhancing the user experience and engagement by 30 percent through optimized and intuitive navigation and performance.",
      "Designed and developed the user interface for a mobile application and a web application using React Native resulting in a 30% increase in user engagement and user retention.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Effectively embraced Scrum practices, resulting in a 35% increase in task delivery efficiency and team organization.",
      "Producer App Demo",
      "User App Demo",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Contractor",
    icon: indie,
    iconBg: "#E6DEDD",
    date: "January 2023 - Present",
    points: [
      "Streamlined React UI development for responsiveness and performance while also utilizing React Testing Libraries to ensure high reliability and optimal user experience.",
      "Collaborated with designers and product managers to create high-quality products.",
      "Managing, maintaining, and updating websites that on average increase viewership by 15% a day.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Exotic World Website Demo",
      "NXT World Website Demo",
      "Redeemer Lutheran Live Site",
    ],
  },
];

const projects = [
  {
    name: "Job Application Tracker",
    description:
      "A web application that allows users to create applications and view them on the website. Users can update the status of their applications and delete the application if needed. This application also communicates with Google Sheets to access the applications without needing to look on the website.",
    tags: [
      {
        name: "Next.js",
        color: "text-blue4",
      },
      {
        name: "Google Sheets API",
        color: "text-blue3",
      },
      {
        name: "MongoDB",
        color: "text-blue2",
      },
    ],
    image: applic,
    source_code_link:
      "https://github.com/BrendanLThompson/job-application-tracker",
    test_link:
      "https://docs.google.com/spreadsheets/d/1rsZW3CYoSQPTDvL4J-Y2ZeEYxFJli5fpNMvA_ESuLlY/edit?usp=sharing",
  },
  {
    name: "BookNook",
    description:
      "A mobile application that allows users to search for, trade with, and log books with each other while also providing a platform that enables users to communicate with each other.",
    tags: [
      {
        name: "React Native",
        color: "text-blue4",
      },
      {
        name: "Google Maps API",
        color: "text-blue3",
      },
      {
        name: "Node.js",
        color: "text-blue2",
      },
    ],
    image: carrent,
    source_code_link:
      "https://github.com/BrendanLThompson/BookX",
    test_link:
      "https://marvelapp.com/prototype/8bbc4i1/screen/82018612",
  },
  {
    name: "Random Song Generator",
    description:
      "Web application that enables users to generate random songs and add them to a playlist within their Spotify account.",
    tags: [
      {
        name: "React.js",
        color: "text-blue4",
      },
      {
        name: "Spotify API",
        color: "text-blue3",
      },
      {
        name: "SASS",
        color: "text-blue2",
      },
    ],
    image: jobit,
    source_code_link:
      "https://github.com/BrendanLThompson/PlayListMaker",
    test_link: "https://584-final.netlify.app/#",
  },
  {
    name: "UniGuesser",
    description:
      "A wordle-like web application that challenges players to guess the best-in-slot (BIS) item combinations for champions in the game Teamfight Tactics (TFT).",
    tags: [
      {
        name: "React Native",
        color: "text-blue4",
      },
      {
        name: "HTML",
        color: "text-blue3",
      },
      {
        name: "TailwindCSS",
        color: "text-blue2",
      },
    ],
    image: tripguide,
    source_code_link:
      "https://github.com/BrendanLThompson/Uniguesser",
    test_link:
      "https://cdn.glitch.global/d0289d9a-f85e-403c-8fc9-fe94890df430/UNIGUESSER.pdf?v=1713769580870",
  },
  {
    name: "Bisdle",
    description:
      "Another wordle clone based off of the game, Team Fight Tactics, which has users guess which character is being hinted at according to the best items that they can use.",
    tags: [
      {
        name: "NextJS",
        color: "text-blue4",
      },
      {
        name: "Riot API",
        color: "text-blue3",
      },
      {
        name: "Bing Search API",
        color: "text-blue2",
      },
    ],
    image: bisdle,
    source_code_link:
      "https://github.com/mibernard/BISdle",
    test_link: "https://bisdle.vercel.app/",
  },
  {
    name: "Portfolio Website",
    description:
      "This website uses ThreeJS, ReactJS, TailwindCSS, and Vite as its main technologies. EamilJS is used to manage the contact portion of the page. ",
    tags: [
      {
        name: "ThreeJS",
        color: "text-blue4",
      },
      {
        name: "ReactJS",
        color: "text-blue3",
      },
      {
        name: "Vite",
        color: "text-blue2",
      },
    ],
    image: website,
    source_code_link:
      "https://github.com/BrendanLThompson/BLTPortfolioWebsite",
    test_link: "https://blthomp.vercel.app/",
  },
];

export {
  services,
  technologies,
  experiences,
  projects,
};

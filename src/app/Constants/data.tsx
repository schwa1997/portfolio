import { School, Work } from "@mui/icons-material";

export const userData = {
  name: "Huimin Chen",
  avatarUrl: "/selfie.png",
  email: "hermioneschwa@gmail.com",
  about: {
    title:
      "I'm a software developer that loves building products and web applications that impact millions of lives",
    description: [
      `I've been developing full-stack application since I was 10 years old. I didn't know what full-stack meant at that time because the term was not coined back then. I'm so out of content right now that I'm literally crying writing this text since lorem text is so 2012 now.`,
      `After learning HTML and struggling with CSS, I came up with a brilliant idea of using bootstrap so that I don't have to style everything by myself and - for obvious reasons - if you knew bootstrap, you were cool.`,
      `But now, I'm a legend. I've been coding in React, Angular, Vue, Svelte, Node.js, Express, Fastify, MongoDB, MySQL, Bootstrap, Tailwind, C, C++, C#, Rust, Haskell, Perl, PHP, Assembly, Logo and YouDontKnowShit programming language etc to name a few. Although I barely know the syntax (Psst, Stack overflow!), I consider myself a Ninja developer I'm laughing right now.`,
    ],
  },
  socialLinks: {
    instagram: "https://www.instagram.com/hermione_hot_pot/",
    linkedin: "https://www.linkedin.com/in/chenhuimin/",
    github: "https://github.com/schwa1997",
  },
  resumeUrl:
    "https://drive.google.com/file/d/1OPxYjksVI-t8w5YFiC3MCotOYLzqpp6V/view?usp=sharing",
  workExperience: [
    {
      title: "Master Thesis",
      location: "Padua, Italy",
      description:
        "My master thesis aims at developing a web applictaion for music engineering",
      date: "2024-3",
    },
    {
      title: "Full-Stack Developer",
      location: "Remote",
      description: "I worke as a freelancing web developer for remote work",
      date: "20123 - now",
    },
    {
      title: "Application engineer",
      location: "Beijing, China",
      description: "I am an application engineer for pilot machine development",
      date: "2019 - 2022",
    },
  ],
  educationExperience: [
    {
      title: "Computer engineering Master",
      location: "University of Padua",
      description:
        "Computer engineering-web information and data engineering",
      date: "2022-2024",
    },
    {
      title: "Electrical Engineering and Automation Bachelor",
      location: "Harbin Institute of Technology",
      description:
        "I finished my bachlor degree in Electrical Engineering and Automation Bachelor ",
      date: "2015 - 2019",
    },
    {
      title: "Englishr",
      location: "Harbin Institute of Technology",
      description:
        "I finished my second bachlor degree in English",
      date: "2016 - 2019",
    },
  ],
  projects: [
    {
      title: "Vita del Vino",
      imgUrl: "/project-vine.png",
      description:
        "a website for maintaining the status of the vineyard and send report to the management team for prevention of disease.",
      link: "https://github.com/schwa1997/VinoDelVitaApp",
    },
    {
      title: "Portfolio",
      imgUrl: "/portfolio.png",
      description: "A portfolio website using NextJS and taildwindcss, deployed by Vercel.",
      link: "https://my-website-odis.vercel.app/",
    },
    {
      title: "ListDemo",
      imgUrl: "/listDemo.png",
      description: "A simple demo for displaying data and display the resulted data by search filter",
      link: "https://motor-k-4zpn.vercel.app/",
    },
  ],
};

export const userData = {
  name: "Huimin Chen",
  avatarUrl: "/selfie.png",
  email: "hermioneschwa@gmail.com",
  about: {
    title: "I'm a software developer.",
    description: [
      ``,
      `After learning HTML and struggling with CSS, I came up with a brilliant idea of using bootstrap so that I don't have to style everything by myself and - for obvious reasons - if you knew bootstrap, you were cool.`,
      `But now, I'm a legend. I've been coding in React, Angular, Vue, Svelte, Node.js, Express, Fastify, MongoDB, MySQL, Bootstrap, Tailwind, C, C++, C#, Rust, Haskell, Perl, PHP, Assembly, Logo and YouDontKnowShit programming language etc to name a few. Although I barely know the syntax (Psst, Stack overflow!), I consider myself a Ninja developer I'm laughing right now.`,
    ],
  },
  socialLinks: {
    instagram: "https://www.instagram.com/hermione_hot_pot/",
    linkedin: "https://www.linkedin.com/in/chenhuimin/",
    github: "https://github.com/schwa1997",
  },
  resumeUrl: "https://change-ten.vercel.app/blog/resume",
  workExperience: [
    {
      title: "Full-Stack Developer",
      location: "Spain",
      description:
        "Full-stack developer with real application of Php, NestJs, Angular, Ionic for mobile app, AWS, IoT solution. Engaged in the development of an IoT application, functions in the CRM platform, and agriculture-related web platform",
      date: "2023 - Present",
    },
    {
      title: "Master Thesis",
      location: "Padua, Italy",
      description:
        "My master's thesis focused on developing a web application for children with listening disabilities to practice vowel pronunciation with appropriate volume, pitch, and other parameters. Designed the front-end with React, backend with Python running AI model which trained audio data to do the vowel recognition",
      date: "2024-03",
    },
    {
      title: "Application Engineer",
      location: "Beijing, China",
      description:
        "Served as an application engineer specializing in pilot machine development. Key projects included cam design for the cross-lapper, a crucial machine in the non-woven industry, and implementing a washing function for the vaccine packaging line.",
      date: "2019 - 2022",
    },
  ],
  educationExperience: [
    {
      title: "Master of Computer Engineering",
      location: "University of Padua",
      description:
        "Specialization in web information and data engineering. My master's thesis focused on developing a web application to assist children with listening disabilities in practicing vowel pronunciation at appropriate volume and pitch, intensity, and other parameters. Additionally, I developed an app for singers or individuals interested in practicing singing to refine their pitch accuracy.",
      date: "2022 - 2024",
    },
    {
      title: "Bachelor of Electrical Engineering and Automation",
      location: "Harbin Institute of Technology",
      description:
        "Completed a Bachelor's degree in Electrical Engineering and Automation. My bachelor's thesis involved studying the PLC design of an automatic noodle production machine.",
      date: "2015 - 2019",
    },
    {
      title: "English and Literature (Minor)",
      location: "Harbin Institute of Technology",
      description:
        "Earned a second Bachelor's degree in English. My thesis explored feminist narrative elements in the works of Jane Eyre, particularly examining the portrayal of feminist themes in the character of Jane Eyre.",
      date: "2016 - 2019",
    },
  ],
  projects: [
    {
      title: "Vita del Vino",
      imgUrl: "/project-vine.png",
      description:
        "a full-stack project for maintaining the status of the vineyard and send report to the management team for prevention of disease.",
      link: "https://github.com/schwa1997/VinoDelVitaApp",
    },
    {
      title: "Feinism Website",
      imgUrl: "/maomao.png",
      description: "A website for collecting feminism thoughts",
      link: "https://maomao-mu.vercel.app/",
    },
    {
      title: "SoundRise",
      imgUrl: "/project-thesis.png",
      description:
        "Thesis project for helping kids with listining diability to pronounce the vowls more correctly with the recognition of the volumn ",
      link: "https://vino-pe4fvhlzd-schwa1997s-projects.vercel.app/",
    },
    {
      title: "Notebook",
      imgUrl: "/change.png",
      description: "a notebook management website deployed using Docusaurus",
      link: "https://change-ten.vercel.app/",
    },
    {
      title: "Work Out Log",
      imgUrl: "/workout.png",
      description: "a website for workout record logging.",
      link: "https://workout-green.vercel.app/",
    },
    {
      title: "Portfolio",
      imgUrl: "/portfolio.png",
      description:
        "A portfolio website using NextJS and taildwindcss and motion, deployed by Vercel.",
      link: "https://portfolio-website-lilac-nu-18.vercel.app/",
    },
    {
      title: "Daily Plan tracker",
      imgUrl: "/ChanGing.png",
      description:
        "A miantaining project for myself to learn Spanish and track my life goals and progress",
      link: "https://craft-eta.vercel.app",
    },
    {
      title: "Oh-card Project-SAAS Product Protype",
      imgUrl: "/oh-card.png",
      description:
        "A full-stack project for therapists to manage the customers",
      link: "https://oh-card.vercel.app/",
    },
  ],
};
export const links = [
  {
    name: "Home",
    hash: "/",
  },
  {
    name: "About",
    hash: "/about",
  },
  {
    name: "Projects",
    hash: "/projects",
  },
  {
    name: "Experience",
    hash: "/experience",
  },
  {
    name: "Contact",
    hash: "/contact",
  },
] as const;

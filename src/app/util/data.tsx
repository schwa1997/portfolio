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
        "My master's thesis focused on developing a web application to assist children with listening disabilities in practicing vowel pronunciation at appropriate volume and pitch, intensity, and other parameters. Additionally, I developed an app for singers or individuals interested in practicing singing to refine their pitch accuracy.",
      date: "2024-03",
    },
    {
      title: "Full-Stack Developer",
      location: "Remote",
      description:
        "Freelance web developer specializing in full-stack development, working remotely on various projects.",
      date: "2023 - Present",
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
        "a website for maintaining the status of the vineyard and send report to the management team for prevention of disease.",
      link: "https://github.com/schwa1997/VinoDelVitaApp",
    },
    {
      title: "SoundRise",
      imgUrl: "/project-thesis.png",
      description:
        "Thesis project for helping kids with listining diability to pronounce the vowls more correctly with the recognition of the volumn ",
      link: "https://github.com/schwa1997/thesis-soundRise",
    },
    {
      title: "Work Out Log",
      imgUrl: "/project4-workout.png",
      description: "a website for workout record logging.",
      link: "https://workout-green.vercel.app/",
    },
    {
      title: "Portfolio",
      imgUrl: "/portfolio.png",
      description:
        "A portfolio website using NextJS and taildwindcss and motion, deployed by Vercel.",
      link: "https://my-website-odis.vercel.app/",
    },
    {
      title: "ListDemo",
      imgUrl: "/listDemo.png",
      description:
        "A simple demo for displaying data and display the resulted data by search filter",
      link: "https://motor-k-4zpn.vercel.app/",
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
export const blogs = [
  {
    id: 1,
    slug: 1,
    readingMins: 3,
    author: "SCHWA",
    tags: ["hobby", "sport"],
    title: "My Rugby Experience",
    img: "https://www.thebeijinger.com/sites/default/files/styles/800_width/public/3d4205f7ec0594beb0da39a19c19034.jpg",
    subtitle: "To be more fit and to challenge myself",
    body: [
      {
        paragraphIndex: 1,
        content:
          "In the world of sports, rugby has long been associated with strength, power, and resilience. Traditionally dominated by men, the sport has seen a remarkable transformation in recent years with the surge of interest and participation among women. As the barriers break down and opportunities expand, women's rugby is experiencing a renaissance, becoming a symbol of empowerment and inclusivity in athletics.",
      },
      {
        paragraphIndex: 2,
        content:
          "Historically, rugby has been perceived as a male-dominated sport, with its rough nature and physical demands often seen as better suited to men. However, this perception is rapidly changing as women around the world embrace the sport with passion and determination. From grassroots initiatives to international competitions, female rugby players are making their mark on the field and challenging stereotypes along the way.",
      },
      {
        paragraphIndex: 3,
        content:
          "Historically, rugby has been perceived as a male-dominated sport, with its rough nature and physical demands often seen as better suited to men. However, this perception is rapidly changing as women around the world embrace the sport with passion and determination. From grassroots initiatives to international competitions, female rugby players are making their mark on the field and challenging stereotypes along the way.",
      },
      {
        paragraphIndex: 4,
        content:
          "Historically, rugby has been perceived as a male-dominated sport, with its rough nature and physical demands often seen as better suited to men. However, this perception is rapidly changing as women around the world embrace the sport with passion and determination. From grassroots initiatives to international competitions, female rugby players are making their mark on the field and challenging stereotypes along the way.",
      },
    ],
  },
  {
    id: 2,
    slug: 2,
    readingMins: 5,
    author: "SCHWA",
    tags: ["travel"],
    title: "Weekend Trip to Munich",
    img: "https://cdn.odysseytraveller.com/app/uploads/2020/02/Old-Town-Hall-at-Marienplatz-Square-Munich-Germany-GettyImages-1173484118.jpg",
    subtitle: "Safety and Sunshine matters the most!",
    body: [
      {
        paragraphIndex: 1,
        content: "Safety is paramount, particularly for solo female travelers. It's essential to prioritize safety above all else, regardless of gender. Ensuring the safety of the city enhances the travel experience, imbuing it with a sense of security and tranquility. While it's impossible to guarantee a completely carefree vacation, remaining vigilant about one's surroundings is crucial. Even seemingly innocuous encounters can harbor risks, underscoring the need for cautiousness. Yet, amidst these considerations, Munich stands out as a beacon of safety in Europe, offering a reassuring haven for travelers.",
      },
      {
        paragraphIndex: 2,
        content: "And then there's sunshine – a radiant companion on any journey. Its warm embrace not only illuminates the landscape but also infuses each step with a touch of joy. I recall fondly the simple pleasures of strolling through Munich's sun-kissed streets, where the aroma of freshly baked bread mingles with the fragrant essence of grains. In those golden moments, happiness is effortless, enveloping the soul in a cocoon of contentment. Indeed, the quality of a solo trip is deeply intertwined with the benevolent glow of the sun, casting life's tapestry in hues of brilliance and warmth.",
      },
    ],
  },
  {
    id: 3,
    slug: 3,
    readingMins: 5,
    author: "SCHWA",
    tags: ["sport","self-imporvement"],
    title: "Workout and diet jourey",
    img: "https://c.stocksy.com/a/jmm500/z9/1379173.jpg",
    subtitle: "A sustainanable plan matters",
    body: [
      {
        paragraphIndex: 1,
        content: "Safety is paramount, particularly for solo female travelers. It's essential to prioritize safety above all else, regardless of gender. Ensuring the safety of the city enhances the travel experience, imbuing it with a sense of security and tranquility. While it's impossible to guarantee a completely carefree vacation, remaining vigilant about one's surroundings is crucial. Even seemingly innocuous encounters can harbor risks, underscoring the need for cautiousness. Yet, amidst these considerations, Munich stands out as a beacon of safety in Europe, offering a reassuring haven for travelers.",
      },
      {
        paragraphIndex: 2,
        content: "And then there's sunshine – a radiant companion on any journey. Its warm embrace not only illuminates the landscape but also infuses each step with a touch of joy. I recall fondly the simple pleasures of strolling through Munich's sun-kissed streets, where the aroma of freshly baked bread mingles with the fragrant essence of grains. In those golden moments, happiness is effortless, enveloping the soul in a cocoon of contentment. Indeed, the quality of a solo trip is deeply intertwined with the benevolent glow of the sun, casting life's tapestry in hues of brilliance and warmth.",
      },
    ],
  },
];

export const personalInfo = {
  name: "Saquib Fraz",
  role: "Frontend Developer & MERN Stack Developer",
  email: "Saquib.fraz309@gmail.com",
  phone: "+91 8872330822",
  location: "Mohali, Punjab, India",
  bio: "Passionate MERN Stack Developer specializing in React, Next.js, and blockchain technologies. Currently working as React.js Developer at Code Brew Labs.",
  social: {
    github: "https://github.com/saquibfraz",
    linkedin: "https://linkedin.com/in/saquibfraz",
    twitter: "https://twitter.com/saquibfraz"
  }
};

import { 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiJavascript, 
  SiVuedotjs, 
  SiTailwindcss, 
  SiRedux,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiSolidity,
  SiEthereum,
  SiWeb3Dotjs,
  SiGit,
  SiGithub,
} from "react-icons/si";
import { 
  FaRocket, 
  FaCode, 
  FaRobot, 
  FaPlug, 
  FaDroplet,
  FaFileCode
} from "react-icons/fa6";

export const skills = {
  frontend: [
    { name: "React.js", level: 95, icon: SiReact },
    { name: "Next.js", level: 90, icon: SiNextdotjs },
    { name: "TypeScript", level: 85, icon: SiTypescript },
    { name: "JavaScript", level: 95, icon: SiJavascript },
    { name: "Vue.js", level: 70, icon: SiVuedotjs },
    { name: "Tailwind CSS", level: 90, icon: SiTailwindcss },
    { name: "Redux/Redux Toolkit", level: 85, icon: SiRedux },
  ],
  backend: [
    { name: "Node.js", level: 85, icon: SiNodedotjs },
    { name: "Express.js", level: 85, icon: SiExpress },
    { name: "MongoDB", level: 80, icon: SiMongodb },
    { name: "Firebase", level: 75, icon: SiFirebase },
    { name: "RESTful APIs", level: 90, icon: FaPlug },
  ],
  blockchain: [
    { name: "Solidity", level: 80, icon: SiSolidity },
    { name: "Ethers.js", level: 85, icon: SiEthereum },
    { name: "Web3.js", level: 85, icon: SiWeb3Dotjs },
    { name: "Ethereum", level: 80, icon: SiEthereum },
    { name: "Thirdweb", level: 75, icon: FaRocket },
    { name: "SUI", level: 70, icon: FaDroplet },
  ],
  tools: [
    { name: "Git", level: 90, icon: SiGit },
    { name: "GitHub", level: 90, icon: SiGithub },
    { name: "Cursor", level: 85, icon: FaCode },
    { name: "Copilot", level: 80, icon: FaRobot },
    { name: "VS Code", level: 95, icon: FaFileCode },
  ]
};

export const experience = [
  {
    title: "React.js Developer",
    company: "Code Brew Labs",
    location: "Mohali, Punjab",
    period: "2022 - Present",
    description: "Developing and maintaining React-based web applications, implementing responsive designs, and collaborating with cross-functional teams.",
    achievements: [
      "Built 40+ production-ready React applications",
      "Improved application performance by 40%",
      "Mentored junior developers",
      "Implemented modern development practices"
    ]
  }
];

export const projects = {
  blockchain: [
    {
      name: "Finity Network",
      description: "DeFi protocol on Ethereum blockchain",
      chain: "Ethereum",
      tech: ["Solidity", "Ethers.js", "React", "TypeScript"],
      image: "/projects/finity.png",
      live: "https://finity.network",
      github: "",
      category: "DeFi"
    },
    {
      name: "Navada",
      description: "Decentralized exchange on Polygon",
      chain: "POL",
      tech: ["Web3.js", "React", "Next.js", "TailwindCSS"],
      image: "/projects/navada.png",
      live: "https://navada.exchange",
      github: "",
      category: "DEX"
    },
    {
      name: "FLYT",
      description: "Gaming platform on Base network",
      chain: "Base",
      tech: ["Solidity", "React", "TypeScript", "Thirdweb"],
      image: "/projects/flyt.png",
      live: "https://flyt.game",
      github: "",
      category: "Gaming"
    },
    {
      name: "DefiClub",
      description: "DeFi aggregator on BSC",
      chain: "BSC",
      tech: ["Web3.js", "React", "Node.js", "MongoDB"],
      image: "/projects/deficlub.png",
      live: "https://deficlub.io",
      github: "",
      category: "DeFi"
    },
    {
      name: "SUI Dollar",
      description: "Stablecoin protocol on SUI blockchain",
      chain: "SUI",
      tech: ["Move", "TypeScript", "React", "Next.js"],
      image: "/projects/suidollar.png",
      live: "https://suidollar.fi",
      github: "",
      category: "Stablecoin"
    }
  ],
  web: [
    {
      name: "Commbitz",
      description: "Communication platform for businesses",
      tech: ["React", "Node.js", "Socket.io", "MongoDB"],
      image: "/projects/commbitz.png",
      live: "https://commbitz.com",
      github: "",
      category: "SaaS"
    },
    {
      name: "FLYT Token",
      description: "Token launch platform",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Web3"],
      image: "/projects/flyt-token.png",
      live: "https://token.flyt.game",
      github: "",
      category: "Crypto"
    },
    {
      name: "BharatBit",
      description: "Indian cryptocurrency exchange",
      tech: ["React", "Redux", "Node.js", "PostgreSQL"],
      image: "/projects/bharatbit.png",
      live: "https://bharatbit.com",
      github: "",
      category: "Exchange"
    },
    {
      name: "RentVIP",
      description: "Luxury rental marketplace",
      tech: ["Vue.js", "Express.js", "MongoDB", "Stripe"],
      image: "/projects/rentvip.png",
      live: "https://rentvip.com",
      github: "",
      category: "Marketplace"
    },
    {
      name: "Alphatub",
      description: "Video streaming platform",
      tech: ["React", "Node.js", "AWS", "FFmpeg"],
      image: "/projects/alphatub.png",
      live: "https://alphatub.com",
      github: "",
      category: "Streaming"
    },
    {
      name: "UVault",
      description: "Secure digital vault",
      tech: ["React", "Electron", "Node.js", "Encryption"],
      image: "/projects/uvault.png",
      live: "https://uvault.io",
      github: "",
      category: "Security"
    },
    {
      name: "BXNK",
      description: "Digital banking solution",
      tech: ["React", "TypeScript", "Node.js", "PostgreSQL"],
      image: "/projects/bxnk.png",
      live: "https://bxnk.io",
      github: "",
      category: "FinTech"
    }
  ]
};

export const education = [
  {
    degree: "Bachelor of Technology",
    field: "Computer Science",
    institution: "Punjab Technical University",
    period: "2018 - 2022",
    achievements: ["First Class Honors", "Tech Club President"]
  }
]; 
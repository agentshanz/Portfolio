// Central content file — edit this to update the site without touching components.

export const profile = {
  name: "Shanmuganathan S",
  title: "AI & AI Agent Engineer • Founder at Zenvy Technologies",
  tagline:
    "Building intelligent AI products, full-stack applications, and real-world software that creates meaningful impact.",
  location: "Tamil Nadu, India",
  email: "zenvytechnologies@gmail.com",
  phone: "+91 6369007712",
  github: "https://github.com/agentshanz",
  linkedin: "https://www.linkedin.com/in/shanmuganathan23/",
  company: "Zenvy Technologies",
  website: "https://zenvytechnologies.vercel.app",
  imageUrl:
    "https://res.cloudinary.com/dexpunct2/image/upload/v1790145052/image.png",
  resumeUrl: "/resume.pdf",
};

export const about = [
  "I'm Shanmuganathan S, an AI & AI Agent Engineer and Founder of Zenvy Technologies.",
  "I build AI-powered products, intelligent automation systems, and scalable full-stack applications that solve real-world problems.",
  "My primary focus is AI Agents, LLM-powered applications, Machine Learning, and modern web technologies that create practical user experiences.",
  "I'm actively building products like SenseAble AI and ZenvyLance while strengthening my engineering skills through real-world projects, internships, and hackathons.",
  "I enjoy designing scalable systems, solving engineering challenges, and continuously exploring emerging AI technologies.",
  "My long-term vision is to grow Zenvy Technologies into a globally recognized AI-first technology company.",
];

// icon keys map to react-icons components in src/utils/icons.jsx
export const skillCategories = [
  {
    id: "languages",
    title: "Languages",
    skills: [
      "Python",
      "JavaScript",
      "Java",
      "C",
      "C++",
      "Rust",
      "R",
      "Assembly Language",
      "HTML",
      "CSS",
    ],
  },
  {
    id: "frontend",
    title: "Frontend",
    skills: [
      "React.js",
      "React Native",
      "Tailwind CSS",
      "Three.js",
      "Bootstrap",
      "React Three Fiber",
    ],
  },
  {
    id: "backend",
    title: "Backend",
    skills: ["Node.js", "Express.js", "FastAPI", "Python"],
  },
  {
    id: "database",
    title: "Database",
    skills: ["MongoDB", "Mongoose", "MySQL", "Oracle SQL"],
  },
  {
    id: "mobile",
    title: "Mobile Development",
    skills: ["React Native", "Expo", "Expo Router"],
  },
  {
    id: "ai",
    title: "Artificial Intelligence",
    skills: [
      "Machine Learning",
      "LLMs",
      "AI Agents",
      "Prompt Engineering",
      "Agent Workflows",
      "OpenAI API",
      "Groq API",
      "Claude API",
      "Computer Vision",
      "PyTorch",
      "TensorFlow",
      "Scikit-learn",
      "NumPy",
      "Pandas",
    ],
  },
  {
    id: "analytics",
    title: "Data Analytics",
    skills: [
      "Power BI",
      "Excel",
      "Data Cleaning",
      "Data Visualization",
      "Matplotlib",
      "Python",
    ],
  },
  {
    id: "tools",
    title: "Tools",
    skills: [
      "Git",
      "GitHub",
      "Docker",
      "Vercel",
      "VS Code",
      "Android Studio",
      "Figma",
      "Canva",
      "Postman",
    ],
  },
];

export const techStack = {
  Frontend: [
    "React.js",
    "Vite",
    "Tailwind CSS",
    "Framer Motion",
    "GSAP",
    "Three.js",
    "React Three Fiber",
    "Drei",
    "Lenis",
    "React Icons",
  ],
  Backend: ["Node.js", "Express.js", "FastAPI"],
  Database: ["MongoDB", "Mongoose", "MySQL"],
  Authentication: ["JWT"],
  AI: [
    "OpenAI API",
    "Groq API",
    "Claude API",
    "PyTorch",
    "TensorFlow",
    "Scikit-learn",
  ],
  Deployment: ["Vercel", "Render", "MongoDB Atlas"],
};

export const experience = [
  {
    role: "MERN Stack Development Intern",
    org: "Beetalogic Software Solutions",
    period: "Jun 2026 – Jul 2026",
    points: [
      "Developed production-ready features across the MERN stack.",
      "Collaborated with engineers to deliver real client-facing functionality.",
    ],
  },
  {
    role: "MERN Stack Intern",
    org: "Codec Technologies",
    period: "Dec 2025 – Jan 2026",
    points: [
      "Built end-to-end MERN features using MongoDB, Express, React, and Node.js.",
      "Implemented REST APIs and integrated frontend workflows.",
    ],
  },
  {
    role: "Web Development Intern",
    org: "Elevate Labs",
    period: "Aug 2025 – Sep 2025",
    points: [
      "Built responsive and user-friendly web interfaces.",
      "Worked in an iterative development workflow with feature improvements.",
    ],
  },
  {
    role: "Full Stack Development Intern",
    org: "Arttifai Tech",
    period: "Jun 2025 – Jul 2025",
    points: [
      "Contributed to frontend and backend development tasks.",
      "Strengthened practical full-stack development workflows.",
    ],
  },
];

export const education = [
  {
    degree: "B.E. Computer Science and Engineering",
    institution: "Annamalai University — Faculty of Engineering and Technology",
    period: "2024 – 2028",
    notes: "Current CGPA: 8.0",
  },
];

export const projects = [
  {
    id: "senseable-ai",
    title: "SenseAble AI",
    tagline: "Universal AI Accessibility Assistant",
    description:
      "An AI-powered accessibility assistant that helps people with visual, hearing, speech, mobility, and multiple disabilities through intelligent real-world assistance.",
    stack: [
      "React Native",
      "Computer Vision",
      "AI",
      "Mobile",
      "Accessibility",
    ],
    category: "AI",
    github: "#",
    demo: "https://hall-zebra-89727725.figma.site/",
    image: null,
    features: [
      "Object Detection",
      "Voice Assistance",
      "Accessibility-first Design",
      "Real-time AI Assistance",
    ],
  },

  {
    id: "zenvy-lance",
    title: "ZenvyLance",
    tagline: "AI-Powered Freelance Marketplace",
    description:
      "A trust-first freelance platform featuring AI proposal generation, freelancer matching, validation scoring, and escrow-powered workflows.",
    stack: ["React", "Node.js", "Express", "MongoDB", "Groq API"],
    category: "AI",
    github: "https://github.com/agentshanz/ZenvyLance",
    demo: "#",
    image: null,
    features: [
      "AI Proposal Generator",
      "AI Freelancer Matching",
      "Trust Score",
      "Escrow Workflow",
    ],
  },

  {
    id: "student-grade-predictor",
    title: "Student Grade Predictor",
    tagline: "Machine Learning Classification Project",
    description:
      "A Scikit-learn project that predicts student performance using Logistic Regression, evaluation metrics, and classification analysis.",
    stack: ["Python", "Scikit-learn", "Pandas", "NumPy"],
    category: "Machine Learning",
    github: "#",
    demo: "#",
    image: null,
    features: [
      "Logistic Regression",
      "Confusion Matrix",
      "Classification Report",
      "Cross Validation",
    ],
  },

  {
    id: "zenvy-technologies",
    title: "Zenvy Technologies",
    tagline: "Official Company Website",
    description:
      "The official website showcasing Zenvy Technologies' services, products, and AI-first vision through a modern responsive experience.",
    stack: ["React.js", "Tailwind CSS"],
    category: "Web",
    github: "https://github.com/agentshanz/zenvytechnologies",
    demo: "https://zenvytechnologies.vercel.app/",
    image: null,
  },
];

export const achievements = [
  "Founder of Zenvy Technologies.",
  "Led Team Logic Lords at Auristra'26, a 48-hour National-Level Hackathon hosted by Takshashila University.",
  "Built SenseAble AI as a real-world AI accessibility solution for hackathon competitions.",
];

export const certifications = [
  { name: "Generative AI Studio", issuer: "Google Cloud", year: "2025" },
  { name: "Advanced C++", issuer: "Simplilearn", year: "2025" },
  { name: "Frontend Development", issuer: "Simplilearn", year: "2025" },
  { name: "React Live Bootcamp", issuer: "SkillEcted", year: "2025" },
  { name: "Full Stack Development", issuer: "Simplilearn", year: "2025" },
  { name: "Java", issuer: "Mind Luster", year: "2025" },
  { name: "Python", issuer: "Udemy", year: "2025" },
];

export const services = [
  {
    title: "AI Products",
    desc: "Building AI-powered applications, AI Agents, LLM integrations, and intelligent automation.",
  },
  {
    title: "Full-Stack Development",
    desc: "Designing and building end-to-end MERN applications from database architecture to deployment.",
  },
  {
    title: "Machine Learning Solutions",
    desc: "Developing ML models, analytics pipelines, and data-driven applications using Python and Scikit-learn.",
  },
];

export const testimonials = [
  // Optional — add { name, role, quote } objects here.
];

export const blogPosts = [
  {
    slug: "welcome",
    title: "Welcome to my blog",
    date: "2026-01-01",
    excerpt:
      "I'll share my journey building AI products, hackathon experiences, startup lessons, and engineering insights here.",
  },
];

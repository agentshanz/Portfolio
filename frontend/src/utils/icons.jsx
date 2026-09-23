import {
  SiC,
  SiCplusplus,
  SiCursor,
  SiPython,
  SiJavascript,
  SiAssemblyscript,
  SiHtml5,
  SiCss,
  SiRust,
  SiR,
  SiExpo,
  SiReact,
  SiBootstrap,
  SiTailwindcss,
  SiThreedotjs,
  SiNodedotjs,
  SiExpress,
  SiFastapi,
  SiMongodb,
  SiMysql,
  SiGit,
  SiGithub,
  SiDocker,
  SiAndroidstudio,
  SiJsonwebtokens,
  SiVite,
  SiFramer,
  SiGreensock,
  SiVercel,
  SiRender,
  SiRailway,
  SiPostman,
  SiFigma,
  SiPytorch,
  SiTensorflow,
  SiNumpy,
  SiPandas,
  SiJson,
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";

import {
  FaJava,
  FaReact,
  FaDatabase,
  FaChartBar,
  FaBroom,
  FaRobot,
  FaBolt,
  FaPalette,
  FaBrain,
  FaEye,
} from "react-icons/fa";

import { TbCube, TbBrandOpenai } from "react-icons/tb";

const ICONS = {
  // Languages
  C: SiC,
  "C++": SiCplusplus,
  Java: FaJava,
  Python: SiPython,
  JavaScript: SiJavascript,
  HTML: SiHtml5,
  CSS: SiCss,
  Rust: SiRust,
  R: SiR,
  "Assembly Language": SiAssemblyscript,

  // Frontend
  "React.js": SiReact,
  "React Native": FaReact,
  Bootstrap: SiBootstrap,
  "Tailwind CSS": SiTailwindcss,
  "Three.js": SiThreedotjs,
  "React Three Fiber": TbCube,
  Vite: SiVite,
  "Framer Motion": SiFramer,
  GSAP: SiGreensock,
  Drei: TbCube,
  Lenis: SiJson,
  "React Icons": SiReact,

  // Backend
  "Node.js": SiNodedotjs,
  "Express.js": SiExpress,
  FastAPI: SiFastapi,

  // Database
  MongoDB: SiMongodb,
  "MongoDB Atlas": SiMongodb,
  Mongoose: FaDatabase,
  MySQL: SiMysql,
  SQL: FaDatabase,
  "Oracle SQL": FaDatabase,

  // AI & ML
  "OpenAI API": TbBrandOpenai,
  "Groq API": FaBolt,
  "Claude API": FaRobot,
  Claude: FaRobot,
  LLMs: FaBrain,
  "AI Agents": FaRobot,
  "Prompt Engineering": FaBrain,
  "Agent Workflows": FaRobot,
  "Machine Learning": FaBrain,
  "Computer Vision": FaEye,
  PyTorch: SiPytorch,
  TensorFlow: SiTensorflow,
  "Scikit-learn": FaBrain,
  NumPy: SiNumpy,
  Pandas: SiPandas,

  // Analytics
  "Power BI": FaChartBar,
  Excel: FaChartBar,
  "Data Cleaning": FaBroom,
  "Data Visualization": FaChartBar,
  Matplotlib: FaChartBar,

  // Tools
  Cursor: SiCursor,
  Git: SiGit,
  GitHub: SiGithub,
  Docker: SiDocker,
  Expo: SiExpo,
  "VS Code": VscVscode,
  "Android Studio": SiAndroidstudio,
  Figma: SiFigma,
  Canva: FaPalette,
  Postman: SiPostman,

  // Deployment
  Vercel: SiVercel,
  Render: SiRender,
  Railway: SiRailway,

  // Auth
  JWT: SiJsonwebtokens,
  "JWT (architecture ready)": SiJsonwebtokens,
};

export function getIcon(name) {
  return ICONS[name] || TbCube;
}

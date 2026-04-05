// Portfolio data for Rajasri Chanda's website
export const portfolioData = {
  personal: {
    name: "Rajasri Chanda",
    role: "B.Tech CSE Data Science Student",
    location: "Barasat, Kolkata-700124",
    email: "rajasrichanda@gmail.com",
    phone: "+91 9883440940",
    bio: "A passionate computer science student specializing in Data Science with hands-on experience in MERN stack development. Dedicated to creating efficient and user-friendly web applications.",
    hobbies: ["Reading Story Books", "Travelling", "Listening to Music"],
    social: {
      linkedin: "https://www.linkedin.com/in/rajasri-chanda-ba9a6924b/",
      github: "https://github.com/rajasrichanda",
      portfolio: "#",
    },
  },
  education: [
    {
      id: 1,
      institution: "Brainware University",
      degree: "B.Tech in Computer Science & Engineering (Data Science)",
      duration: "August 2022 – 2026",
      cgpa: "8.93",
      percentage: "84.75%",
      details: "Till seventh semester",
    },
    {
      id: 2,
      institution: "Mughberia Gangadhor High School (H.S.)",
      degree: "Higher Secondary Education",
      duration: "2020 – 2022",
      percentage: "92.20%",
    },
    {
      id: 3,
      institution: "Bhupatinagar Kannya Vidyalaya",
      degree: "Secondary Education",
      duration: "2020",
      percentage: "87.14%",
    },
  ],
  experience: [
    {
      id: 1,
      company: "Euphoria GenX",
      position: "MERN Stack Development Intern",
      duration: "July 2025 – Sep 2025",
      responsibilities: [
        "Developed full-stack web applications using React, Node.js, and MongoDB",
        "Collaborated with team members on feature development and debugging",
        "Implemented responsive UI designs with modern CSS techniques",
      ],
    },
  ],
  skills: {
    languages: [
      { name: "C", level: 85 },
      { name: "Java", level: 80 },
      { name: "JavaScript", level: 90 },
    ],
    webTechnologies: [
      { name: "HTML", level: 95 },
      { name: "CSS", level: 90 },
      { name: "Tailwind CSS", level: 90 },
      { name: "React", level: 90 },
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 85 },
      { name: "MongoDB", level: 85 },
      { name: "SQL", level: 80 },
    ],
    tools: [
      { name: "Linux", icon: "FaLinux" },
      { name: "VS Code", icon: "SiVisualstudiocode" },
      { name: "Git", icon: "FaGit" },
      { name: "Github", icon: "FaGithub" },
      { name: "Figma", icon: "SiFigma" },
      { name: "Vercel", icon: "SiVercel" },
      { name: "Render", icon: "FaServer" },
      { name: "MS Office", icon: "SiMicrosoft" },
    ],
  },
  projects: [
    {
      id: 1,
      title: "School Management System",
      description:
        "A comprehensive system that helps schools manage students, teachers, attendance, and academic records efficiently. Streamlines administrative tasks, making day-to-day operations easier. The system aims to improve the organization and overall management of the school.",
      technologies: ["React", "Node.js", "Express.js", "MongoDB"],
      sourceCode: "https://github.com/rajasrichanda/school-management-system",
      livePreview: "https://school-management-demo.vercel.app",
      icon: "FaSchool",
      image: `data:image/svg+xml,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300"><rect width="400" height="300" fill="#1a1f3a"/><rect x="60" y="60" width="280" height="180" rx="12" fill="#2a2f4a"/><rect x="80" y="90" width="240" height="20" rx="4" fill="#8b5cf6" opacity="0.7"/><rect x="80" y="124" width="180" height="10" rx="3" fill="#14b8a6" opacity="0.5"/><rect x="80" y="146" width="210" height="10" rx="3" fill="#14b8a6" opacity="0.4"/><rect x="80" y="168" width="160" height="10" rx="3" fill="#14b8a6" opacity="0.3"/><circle cx="310" cy="100" r="22" fill="#8b5cf6" opacity="0.3"/><text x="200" y="228" font-family="sans-serif" font-size="14" fill="#8b5cf6" text-anchor="middle" opacity="0.9">School Management System</text></svg>')}`,
      featured: true,
    },
    {
      id: 2,
      title: "Portfolio Website",
      description:
        "Developed a modern, responsive portfolio to showcase my skills, projects, and experiences. Built with React and Tailwind CSS for a clean, professional design with smooth animations.",
      technologies: ["React", "Tailwind CSS", "Framer Motion"],
      sourceCode: "https://github.com/rajasrichanda/portfolio",
      livePreview: "https://rajasrichanda-portfolio.vercel.app",
      icon: "FaLaptop",
      image: `data:image/svg+xml,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300"><rect width="400" height="300" fill="#0a0e27"/><rect x="30" y="30" width="340" height="240" rx="14" fill="#1a1f3a"/><rect x="30" y="30" width="340" height="40" rx="14" fill="#2a2f4a"/><circle cx="60" cy="50" r="7" fill="#8b5cf6"/><circle cx="85" cy="50" r="7" fill="#14b8a6"/><circle cx="110" cy="50" r="7" fill="#06b6d4"/><rect x="60" y="100" width="120" height="120" rx="60" fill="#8b5cf6" opacity="0.2"/><text x="120" y="168" font-family="sans-serif" font-size="28" fill="#8b5cf6" text-anchor="middle" font-weight="bold">RC</text><rect x="210" y="100" width="130" height="12" rx="4" fill="#8b5cf6" opacity="0.6"/><rect x="210" y="124" width="100" height="8" rx="3" fill="#14b8a6" opacity="0.4"/><rect x="210" y="144" width="115" height="8" rx="3" fill="#14b8a6" opacity="0.3"/><text x="200" y="255" font-family="sans-serif" font-size="14" fill="#14b8a6" text-anchor="middle" opacity="0.9">Portfolio Website</text></svg>')}`,
      featured: true,
    },
    {
      id: 3,
      title: "Background Remover",
      description:
        "Built a web application to remove backgrounds from photos and add custom colors. Integrated with remove.bg API for powerful image processing capabilities with an intuitive UI.",
      technologies: ["HTML", "Tailwind CSS", "JavaScript", "remove.bg API"],
      sourceCode: "https://github.com/rajasrichanda/background-remover",
      livePreview: "https://background-remover-app.vercel.app",
      icon: "FaImage",
      image: `data:image/svg+xml,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300"><rect width="400" height="300" fill="#1a1f3a"/><rect x="50" y="50" width="140" height="140" rx="70" fill="#2a2f4a"/><ellipse cx="120" cy="95" rx="30" ry="35" fill="#8b5cf6" opacity="0.5"/><ellipse cx="120" cy="155" rx="48" ry="30" fill="#8b5cf6" opacity="0.3"/><rect x="230" y="80" width="120" height="100" rx="8" fill="#06b6d4" opacity="0.2"/><rect x="248" y="98" width="84" height="64" rx="4" fill="#06b6d4" opacity="0.3"/><line x1="195" y1="120" x2="225" y2="120" stroke="#14b8a6" stroke-width="3" stroke-dasharray="5,3"/><polygon points="220,113 232,120 220,127" fill="#14b8a6"/><text x="200" y="228" font-family="sans-serif" font-size="14" fill="#06b6d4" text-anchor="middle" opacity="0.9">Background Remover</text></svg>')}`,
      featured: false,
    },
  ],
  languages: {
    fluent: ["English", "Bengali (Native)"],
    proficient: ["Hindi"],
  },
};

export default portfolioData;

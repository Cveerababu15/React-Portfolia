// Personal and professional content shared across pages.

export const profile = {
  name: "Veerababu Chakali",
  brand: "Veera.dev",
  role: "Full-stack developer",
  location: "Bengaluru, Karnataka",
  email: "devveerababu@gmail.com",
  resume:
    "https://drive.google.com/file/d/1ORgGQXiGiQYLaUWeAU_MrPqKElcbQQQz/view?usp=sharing",
  github: "https://github.com/Cveerababu15",
  githubUser: "Cveerababu15",
  linkedin: "https://www.linkedin.com/in/c-veerababu-771a35284/",
  leetcode: "https://leetcode.com/u/vicky8337284/",
};

export const experience = [
  {
    role: "MERN Stack Developer",
    employer: "Arpvo Tech",
    location: "Remote",
    dates: "Sep 2026 – Present",
    current: true,
    summary:
      "I contribute to full-stack applications built with Next.js, TypeScript, Node.js, Express.js, and MongoDB.",
    points: [
      "Build reusable UI components, modular REST APIs, and data schemas.",
      "Add validation middleware, centralized error handling, and clear API contracts.",
      "Take part in code reviews and investigate customer production issues.",
    ],
  },
  {
    role: "MERN Stack Intern",
    employer: "UptoSkills",
    location: "Remote",
    dates: "Oct 2026 – Present",
    current: true,
    summary:
      "I work through assigned GitHub issues in an existing codebase, from diagnosis to a reviewed pull request.",
    points: [
      "Diagnose bugs and submit tested pull requests, then address review feedback.",
      "Resolve frontend/backend integration issues.",
      "Document the features I work on.",
    ],
  },
  {
    role: "Web Development Intern",
    employer: "HashCode Technologies",
    location: "Bengaluru, Karnataka",
    dates: "Jan 2026 – Apr 2026",
    current: false,
    summary:
      "I built and maintained more than 10 reusable React components for production pages using JavaScript and Tailwind CSS.",
    points: [
      "Implemented Framer Motion transitions.",
      "Standardized navigation and typography across pages.",
      "Contributed to testing, code reviews, and UI improvements.",
    ],
  },
];

export const education = {
  degree: "Bachelor of Technology in Computer Science and Engineering",
  school: "SVPCET, Puttur",
  dates: "2021 – 2025",
  grade: "CGPA 8.03 / 10",
};

export const certifications = [
  { name: "Complete JavaScript with HTML5, CSS3 from Zero to Expert", issuer: "Udemy" },
  { name: "SQL Certification", issuer: "Cognitive Class" },
];

// `evidence` links a skill to a project ID where it is used.
export const skillGroups = [
  {
    title: "Languages",
    items: ["JavaScript (ES6+)", "TypeScript", "Python", "SQL"],
  },
  {
    title: "Frontend",
    items: [
      "React.js",
      "Next.js",
      "Redux Toolkit",
      "Zustand",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Material UI",
      "shadcn/ui",
      "Framer Motion",
    ],
  },
  {
    title: "Backend and data",
    items: [
      "Node.js",
      "Express.js",
      "REST API design",
      "MVC and modular architecture",
      "Middleware",
      "Error handling",
      "MongoDB",
      "Mongoose",
      "PostgreSQL",
      "Prisma",
      "Database design and query optimization",
    ],
  },
  {
    title: "Authentication and testing",
    items: [
      "JWT",
      "Role-based access control",
      "Authorization",
      "API validation",
      "Postman",
      "Unit and integration testing",
      "Debugging",
    ],
  },
  {
    title: "Tools and foundations",
    items: [
      "Git",
      "GitHub",
      "Docker",
      "Vercel",
      "Render",
      "Cloudinary",
      "Linux",
      "VS Code",
      "Data structures",
      "Algorithms",
      "OOP",
      "Agile workflows",
    ],
  },
];

export const skillEvidence = [
  { skill: "Socket.IO", text: "real-time messaging", projectId: 7 },
  { skill: "Multer + pdf-parse", text: "résumé PDF extraction", projectId: 13 },
  { skill: "JWT + role middleware", text: "farmer, restaurant, and driver access", projectId: 11 },
  { skill: "MongoDB $in queries", text: "the personalized For You feed", projectId: 14 },
  { skill: "Razorpay + Context API", text: "checkout and an account-bound cart", projectId: 15 },
];

export const ongoingProjects = [
  {
    title: "AI-Powered Job Portal Platform",
    status: "In Development",
    description:
      "A job platform with separate dashboards for HR teams and job seekers, covering registration, profile management, and AI-assisted job matching based on candidate profiles.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "AI Integration"],
  },
  {
    title: "Food-Order-Website",
    status: "Building UI",
    description:
      "A food-ordering application with a dynamic menu, live cart updates, and a responsive interface for desktop and mobile.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Framer Motion"],
  },
];

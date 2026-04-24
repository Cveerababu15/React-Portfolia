import movie from "../Images/Movie.png";
import aiResumeI from "../Images/Resume.png";
import Leet from "../Images/Leet.png";
import weatherImg from "../Images/weatherImg.png";
import virtualAssistantImg from "../Images/virtualAssistantImg.png";
import texttoimg from "../Images/text-2-image.png";
import chatWeb from '../Images/ChatWEB.png'
import ServiceBook from '../Images/ServiceBook.png'
import RestuarentWeb from '../Images/RestuarentWeb.png'
import Booking from '../Images/Booking.png';
import AgroConnect from '../Images/AgroConnect.png';
import RecipeFinder from '../Images/RecipeFinder.png'
import JobApplication from '../Images/JobApplication.png'
import NewsHub  from "../Images/NewsHub.png"
import Ecommerce from "../Images/Ecommerce.png"
export const projects = [
  {
    id: 1,
    title: "Leet.AI",
    description:
      "A smart DSA mentor for LeetCode that gives step-by-step solutions, optimal methods, dry-run examples, and code in multiple languages using React.js and Gemini API.",
    image: Leet,
    tech: ["React.js", "Gemini API"],
    github: "https://github.com/Cveerababu15/AI-Resume-Maker",
    live: "/",
    category: "AI / ML"
  },
  {
    id: 2,
    title: "AI-Resume-Builder",
    description:
      "An AI-powered resume and cover letter optimizer that generates tailored content and ATS analysis using React.js, Bootstrap, and Gemini API.",
    image: aiResumeI,
    tech: ["React.js", "Bootstrap", "Gemini API"],
    github: "https://github.com/Cveerababu15/AI-Resume-Maker",
    live: "/",
    category: "AI / ML"
  },
  {
    id: 3,
    title: "React Movie App",
    description:
      "A movie discovery platform fetching popular movies with favorites stored in localStorage.",
    image: movie,
    tech: ["React.js", "API Integration", "LocalStorage"],
    github: "https://github.com/Cveerababu15/Movie_WEB",
    live: "https://cveerababu15.github.io/Movie_WEB/",
    category: "React"
  },
  {
    id: 4,
    title: "Weather Website",
    description:
      "A responsive weather web application built with HTML, CSS, JavaScript using the OpenWeather API. Users can check real-time weather by entering any city.",
    image: weatherImg,
    tech: ["HTML", "CSS", "JavaScript", "OpenWeather API"],
    github: "https://github.com/Cveerababu15/Weather_Webiste",
    live: "https://cveerababu15.github.io/Weather_Webiste/",
    category: "API"
  },
  {
    id: 5,
    title: "Virtual Assistant",
    description:
      "A web-based virtual assistant built with JavaScript, HTML, CSS providing interactive responses and tasks in real-time.",
    image: virtualAssistantImg,
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Cveerababu15/Voice_Assistance",
    live: "https://cveerababu15.github.io/Voice_Assistance/",
    category: "JavaScript"
  },
  {
    id: 6,
    title: "Text-to-Image Generator",
    description:
      "A web app that generates images based on user input using the Unsplash API. Users can type a keyword and fetch related images dynamically using HTML, CSS, and JavaScript.",
    image: texttoimg,
    tech: ["HTML", "CSS", "JavaScript", "Unsplash API"],
    github: "",
    live: "",
    category: "API"
  },
  {
    id: 7,
    title: "ChitChat – Real-Time Chat App",
    description: "A full-stack real-time chat application built using MERN stack and Socket.io...",
    image: chatWeb,
    tech: ["MERN", "React.js", "Node.js", "Express.js", "Socket.io", "MongoDB", "CSS"],
    github: "https://github.com/Cveerababu15/ChitChat-WEB",
    live: "https://chit-chat-web-zeta.vercel.app/",
    new: true,
    category: "MERN"
  },
  {
    id: 8,
    title: "Service Booking Platform",
    description:
      "A full-stack service booking platform with user and admin roles, allowing users to book services and admins to manage services and bookings.",
    image: ServiceBook,
    tech: ["MERN", "React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Tailwind CSS"],
    github: "https://github.com/Cveerababu15/Service-Booking-Website",
    live: "https://service-booking-website-alpha.vercel.app/",
    category: "MERN"
  },
  {
    id: 9,
    title: "Restaurant Management System",
    description:
      "A full-stack restaurant management system to manage menus, orders, reservations, and admin operations with secure authentication.",
    image: RestuarentWeb,
    tech: ["MERN", "React.js", "Node.js", "Express.js", "MongoDB", "Cloudinary", "Tailwind CSS"],
    github: "",
    live: "",
    new: false,
    category: "MERN"
  },
  {
    id: 10,
    title: "Booking Website",
    description:
      "A full-stack booking website with a customer reservation system and a separate admin dashboard to manage bookings and availability.",
    image: Booking,
    tech: ["MERN", "React.js", "Node.js", "Express.js", "MongoDB"],
    github: "https://github.com/Cveerababu15/BookIng-Website",
    live: "https://book-ing-website.vercel.app/",
    new: false,
    category: "MERN"
  },
  {
    id: 11,
    title: "AgroConnect — Farm-to-Table Supply Chain Platform",
    description:
      "Built a full-stack farm-to-table platform connecting farmers, restaurants, and delivery drivers using the MERN stack. Features JWT-based authentication with role-based access, REST APIs for managing products and orders, and separate dashboards for each user role with responsive UI using React.js and Tailwind CSS.",
    image: AgroConnect,
    tech: ["MERN", "React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "JWT"],
    github: "https://github.com/Cveerababu15/AgroConnect",
    live: "https://agro-connect-wgmn.vercel.app/",
    new: true,
    category: "MERN"
  },
  {
    id: 12,
    title: "Recipe Finder — Modern Culinary Explorer",
    description: "Developed an interactive and eye-stunning single-page application for discovering global recipes. Features a modern glassmorphism UI, smooth hover micro-animations, dynamic search functionality, and a beautiful frosted-glass recipe details modal. Built using React and Vite, integrating TheMealDB API for live data.",
    image: RecipeFinder,
    tech: ["React.js", "Vite", "JavaScript", "CSS (Glassmorphism)", "TheMealDB API"],
    github: "https://github.com/Cveerababu15/Recipe-Web-React",
    live: "https://recipe-web-react.vercel.app/",
    new: true,
    category: "React"
  },
  {
    id: 13,
    title: "AI Job Application Tracker",
    description: "Most resumes get rejected before a human even reads them. This app reads your resume and the job description, then shows you a match score and the missing keywords — so you can fix your resume before applying. Built with the MERN stack, JWT auth, and PDF text extraction.",
    image: JobApplication,
    tech: ["MERN", "React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "JWT","multer","pdf-parse"],
    github: "https://github.com/Cveerababu15/AI-Job-Application-Tracker",
    live: "https://ai-job-application-tracker-ten.vercel.app/",
    new: true,
    category: "MERN"
  },
 {
  id: 14,
  title: "NewsHub — MERN News Platform with AI",
  description: "Built a full-stack news platform where users can read, post, like, bookmark, and comment on articles. Integrated the Hugging Face Inference API with a personal access token to auto-summarize every article on creation. Features a personalized For You feed using MongoDB $in operator that matches articles to each user's saved interests, with an automatic fallback to trending news for new users. Also includes Optimistic UI for real-time view counts, JWT authentication, Cloudinary image uploads via Multer, and recursive comment-reply threads using nested MongoDB subdocuments.",
  image: NewsHub,
  tech: ["MERN", "React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "JWT", "Hugging Face API", "Cloudinary", "Multer", "Framer Motion"],
  github: "https://github.com/Cveerababu15/",
  live: "https://news-hub-weld.vercel.app/",
  new: true,
  category: "MERN"
},
 {
  id: 15,
  title: "VeeraStore — Full Stack E-Commerce Platform",
  description: "Built a complete e-commerce platform where users can browse products, add to cart, and checkout securely. Integrated Razorpay payment gateway with server-side signature verification for end-to-end transaction security. Features dual-role access for Users and Admins — Admins can manage products, categories, and orders through a dedicated dashboard. Cart state is handled with React Context API and synced with MongoDB so users never lose their cart across sessions or devices. Also includes Cloudinary image uploads via Multer, JWT authentication with Bcrypt password hashing, and a dynamic product filtering engine that builds nested subcategory sidebars directly from live MongoDB data.",
  image: VeeraStore,
  tech: ["MERN", "React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "JWT", "Razorpay", "Cloudinary", "Multer", "Framer Motion", "Context API", "Bcrypt"],
  github: "https://github.com/Cveerababu15/Ecommerce_Website",
  live: "https://ecommerce-website-leyo.vercel.app/",
  new: true,
  category: "MERN"
},
];

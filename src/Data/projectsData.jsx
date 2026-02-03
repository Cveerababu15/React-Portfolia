import movie from "../Images/Movie.png";
import aiResumeI from "../Images/Resume.png";
import Leet from "../Images/Leet.png";
import weatherImg from "../Images/weatherImg.png";
import virtualAssistantImg from "../Images/virtualAssistantImg.png";
import texttoimg from "../Images/text-2-image.png";
import chatWeb from '../Images/chatWeb.png'
import ServiceBook from '../Images/ServiceBook.png'
import RestuarentWeb from '../Images/RestuarentWeb.png'
import Booking from '../Images/Booking.png'
export const projects = [
  {
    id: 1,
    title: "Leet.AI",
    description:
      "A smart DSA mentor for LeetCode that gives step-by-step solutions, optimal methods, dry-run examples, and code in multiple languages using React.js and Gemini API.",
    image: Leet,
    tech: ["React.js", "Gemini API"],
    github: "https://github.com/yourusername/leetai",
    live: "https://leetai.live",
  },
  {
    id: 2,
    title: "AI-Resume-Builder",
    description:
      "An AI-powered resume and cover letter optimizer that generates tailored content and ATS analysis using React.js, Bootstrap, and Gemini API.",
    image: aiResumeI,
    tech: ["React.js", "Bootstrap", "Gemini API"],
    github: "https://github.com/yourusername/ai-resume-builder",
    live: "https://ai-resume-builder.live",
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
  },
  {
    id: 5,
    title: "Virtual Assistant",
    description:
      "A web-based virtual assistant built with JavaScript, HTML, CSS providing interactive responses and tasks in real-time.",
    image: virtualAssistantImg,
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Cveerababu15/Voice_Assistance",
    live: "https://cveerababu15.github.io/Veera-s-Assistance/",
  },
  {
    id: 6,
    title: "Text-to-Image Generator",
    description:
      "A web app that generates images based on user input using the Unsplash API. Users can type a keyword and fetch related images dynamically using HTML, CSS, and JavaScript.",
    image: texttoimg,
    tech: ["HTML", "CSS", "JavaScript", "Unsplash API"],
    github: "https://github.com/Cveerababu15/Text_2_Image",
    live: "https://cveerababu15.github.io/Text_2_Image/",
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
    // featured: true     
  },
  {
    id: 8,
    title: "Service Booking Platform",
    description:
      "A full-stack service booking platform with user and admin roles, allowing users to book services and admins to manage services and bookings.",
    image: ServiceBook, 
    tech: ["MERN", "React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Tailwind CSS"],
    category: "MERN"
  },
  {
    id: 9,
    title: "Restaurant Management System",
    description:
      "A full-stack restaurant management system to manage menus, orders, reservations, and admin operations with secure authentication.",
    image: RestuarentWeb, 
    tech: ["MERN", "React.js", "Node.js", "Express.js", "MongoDB", "Cloudinary", "Tailwind CSS"],
    category: "MERN"
  },
  {
    id: 10,
    title: "Booking Website",
    description:
      "A full-stack booking website with a customer reservation system and a separate admin dashboard to manage bookings and availability.",
    image: "", // add image later
    tech: ["MERN", "React.js", "Node.js", "Express.js", "MongoDB"],
    category: "MERN"
  }
  
];

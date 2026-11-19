import movie from "../Images/Movie.png";
import aiResumeI from "../Images/Resume.png";
import Leet from "../Images/Leet.png";
import weatherImg from "../Images/weatherImg.png";
import virtualAssistantImg from "../Images/virtualAssistantImg.png";
import texttoimg from "../Images/text-2-image.png";
import chatWeb from "../Images/ChatWEB.png";
import ServiceBook from "../Images/ServiceBook.png";
import RestuarentWeb from "../Images/RestuarentWeb.png";
import Booking from "../Images/Booking.png";
import AgroConnect from "../Images/AgroConnect.png";
import RecipeFinder from "../Images/RecipeFinder.png";
import JobApplication from "../Images/JobApplication.png";
import NewsHub from "../Images/NewsHub.png";
import Ecommerce from "../Images/Ecommerce.png";

/*
 * Single source of truth for every project on the site.
 *
 * Original fields (id, title, description, image, tech, github, live,
 * category, new) are unchanged in meaning. Fields added for the redesign:
 *   name        – short display name
 *   summary     – one sentence: what someone can do with the app
 *   imageWidth / imageHeight – intrinsic pixel size of `image`
 *   imageKind   – "screenshot" or "illustration"
 *   imageAlt    – descriptive alt text
 *   caption     – one sentence about something visible in the image
 *   caseStudy   – long-form content for featured projects
 *   note        – one plain-English implementation note (smaller projects)
 */
export const projects = [
  {
    id: 1,
    title: "Leet.AI",
    name: "Leet.AI",
    summary:
      "Paste a LeetCode problem and get a step-by-step explanation, a dry run, and code in several languages from the Gemini API.",
    description:
      "A smart DSA mentor for LeetCode that gives step-by-step solutions, optimal methods, dry-run examples, and code in multiple languages using React.js and Gemini API.",
    image: Leet,
    imageWidth: 2160,
    imageHeight: 1440,
    imageKind: "screenshot",
    tech: ["React.js", "Gemini API"],
    github: "https://github.com/Cveerababu15/Leet.AI",
    live: "https://leet-ai-eight.vercel.app/",
    category: "AI / ML",
  },
  {
    id: 2,
    title: "AI-Resume-Builder",
    name: "AI Resume Builder",
    summary:
      "Generate a tailored résumé, a cover letter, and an ATS-style review through a Gemini API integration.",
    description:
      "An AI-powered resume and cover letter optimizer that generates tailored content and ATS analysis using React.js, Bootstrap, and Gemini API.",
    image: aiResumeI,
    imageWidth: 2160,
    imageHeight: 1440,
    imageKind: "screenshot",
    tech: ["React.js", "Bootstrap", "Gemini API"],
    github: "https://github.com/Cveerababu15/AI-Resume-Maker",
    live: "",
    category: "AI / ML",
  },
  {
    id: 3,
    title: "React Movie App",
    name: "React Movie App",
    summary:
      "Browse popular movies from a public API and keep a favorites list that stays in your browser.",
    description:
      "A movie discovery platform fetching popular movies with favorites stored in localStorage.",
    image: movie,
    imageWidth: 2160,
    imageHeight: 1440,
    imageKind: "screenshot",
    tech: ["React.js", "API Integration", "LocalStorage"],
    github: "https://github.com/Cveerababu15/Movie_WEB",
    live: "https://cveerababu15.github.io/Movie_WEB/",
    category: "React",
  },
  {
    id: 4,
    title: "Weather Website",
    name: "Weather Website",
    summary: "Search for any city and see its current weather from the OpenWeather API.",
    description:
      "A responsive weather web application built with HTML, CSS, JavaScript using the OpenWeather API. Users can check real-time weather by entering any city.",
    image: weatherImg,
    imageWidth: 2160,
    imageHeight: 1440,
    imageKind: "screenshot",
    tech: ["HTML", "CSS", "JavaScript", "OpenWeather API"],
    github: "https://github.com/Cveerababu15/Weather_Webiste",
    live: "https://cveerababu15.github.io/Weather_Webiste/",
    category: "API",
  },
  {
    id: 5,
    title: "Virtual Assistant",
    name: "Virtual Assistant",
    summary: "Ask a browser-based assistant for quick answers and simple tasks.",
    description:
      "A web-based virtual assistant built with JavaScript, HTML, CSS providing interactive responses and tasks in real-time.",
    image: virtualAssistantImg,
    imageWidth: 2160,
    imageHeight: 1440,
    imageKind: "screenshot",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Cveerababu15/Voice_Assistance",
    live: "https://cveerababu15.github.io/Voice_Assistance/",
    category: "JavaScript",
  },
  {
    id: 6,
    title: "Text-to-Image Generator",
    name: "Text-to-Image Generator",
    summary: "Type a keyword and fetch matching photos from the Unsplash API.",
    description:
      "A web app that finds images based on user input using the Unsplash API. Users can type a keyword and fetch related images dynamically using HTML, CSS, and JavaScript.",
    image: texttoimg,
    imageWidth: 2160,
    imageHeight: 1440,
    imageKind: "screenshot",
    tech: ["HTML", "CSS", "JavaScript", "Unsplash API"],
    github: "",
    live: "",
    category: "API",
  },
  {
    id: 7,
    title: "ChitChat – Real-Time Chat App",
    name: "ChitChat",
    summary:
      "Send and receive messages in real time through Socket.IO on a MERN backend.",
    description:
      "A full-stack real-time chat application built with the MERN stack and Socket.IO.",
    image: chatWeb,
    imageWidth: 2115,
    imageHeight: 1345,
    imageKind: "screenshot",
    tech: [
      "MERN",
      "React.js",
      "Node.js",
      "Express.js",
      "Socket.io",
      "MongoDB",
      "CSS",
    ],
    github: "https://github.com/Cveerababu15/ChitChat-WEB",
    live: "https://chit-chat-web-zeta.vercel.app/",
    new: true,
    category: "MERN",
  },
  {
    id: 8,
    title: "Service Booking Platform",
    name: "Service Booking Platform",
    summary:
      "Book a service as a customer, or manage services and bookings from a separate admin role.",
    description:
      "A full-stack service booking platform with user and admin roles, allowing users to book services and admins to manage services and bookings.",
    image: ServiceBook,
    imageWidth: 2158,
    imageHeight: 1184,
    imageKind: "screenshot",
    tech: [
      "MERN",
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Tailwind CSS",
    ],
    github: "https://github.com/Cveerababu15/Service-Booking-Website",
    live: "https://service-booking-website-alpha.vercel.app/",
    category: "MERN",
  },
  {
    id: 9,
    title: "Restaurant Management System",
    name: "Restaurant Management System",
    summary:
      "Manage menus, orders, and reservations from an authenticated admin panel.",
    description:
      "A full-stack restaurant management system to manage menus, orders, reservations, and admin operations with secure authentication.",
    image: RestuarentWeb,
    imageWidth: 2090,
    imageHeight: 1236,
    imageKind: "screenshot",
    tech: [
      "MERN",
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Cloudinary",
      "Tailwind CSS",
    ],
    github: "",
    live: "",
    new: false,
    category: "MERN",
  },
  {
    id: 10,
    title: "Booking Website",
    name: "Booking Website",
    summary:
      "Reserve as a customer while admins manage bookings and availability from their own dashboard.",
    description:
      "A full-stack booking website with a customer reservation system and a separate admin dashboard to manage bookings and availability.",
    image: Booking,
    imageWidth: 1587,
    imageHeight: 1103,
    imageKind: "screenshot",
    tech: ["MERN", "React.js", "Node.js", "Express.js", "MongoDB"],
    github: "https://github.com/Cveerababu15/BookIng-Website",
    live: "https://book-ing-website.vercel.app/",
    new: false,
    category: "MERN",
  },
  {
    id: 11,
    title: "AgroConnect — Farm-to-Table Supply Chain Platform",
    name: "AgroConnect",
    summary:
      "Farmers list produce, restaurants order it, and drivers deliver it — each from their own dashboard.",
    description:
      "Built a full-stack farm-to-table platform connecting farmers, restaurants, and delivery drivers using the MERN stack. Features JWT-based authentication with role-based access, REST APIs for managing products and orders, and separate dashboards for each user role with responsive UI using React.js and Tailwind CSS.",
    image: AgroConnect,
    imageWidth: 1024,
    imageHeight: 1024,
    imageKind: "illustration",
    imageAlt:
      "Illustration of a farmer, a chef, and a delivery driver passing a crate of vegetables around a circular supply loop.",
    caption:
      "Concept illustration from the AgroConnect repository showing its three roles. It is not a product screenshot.",
    tech: [
      "MERN",
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "JWT",
    ],
    github: "https://github.com/Cveerababu15/AgroConnect",
    live: "https://agro-connect-wgmn.vercel.app/",
    new: true,
    category: "MERN",
    caseStudy: {
      kicker: "Farm-to-table supply platform",
      question:
        "How does one order move between a farmer, a restaurant, and a driver?",
      shortAnswer:
        "Each role has its own dashboard, and JWT authentication with role-based middleware decides what each one may do. A farmer lists produce, a restaurant orders it, and a driver updates the delivery status that all three see.",
      purpose:
        "AgroConnect lets restaurants buy produce directly from farmers and hands each order to a delivery driver. I built it as a multi-role MERN application with a dedicated dashboard for each role.",
      flowTitle: "One order, three roles",
      flow: [
        {
          label: "Farmer",
          text: "Lists produce from the farmer dashboard. Only accounts with the farmer role can create or edit listings.",
        },
        {
          label: "Restaurant",
          text: "Browses the catalog and places an order, which the orders API records against the restaurant's account.",
        },
        {
          label: "Driver",
          text: "Picks up the order and updates its delivery status from the driver dashboard.",
        },
        {
          label: "All roles",
          text: "Each status change is saved on the order, so every dashboard shows the same delivery state when it loads.",
        },
      ],
      answer: [
        "JWT authentication identifies who is making a request, and role-based middleware checks that person's role before the request reaches a controller. A farmer can manage listings, a restaurant can place orders, and a driver can move an order through delivery — none of them can act as another role.",
        "On the client, a role-aware route guard sends each user to their own dashboard, so a restaurant account can't open the driver view by changing the URL.",
      ],
      details: [
        "More than 15 REST endpoints, organized MVC-style, for the product catalog, order placement, and delivery tracking.",
        "JWT authentication with role-based middleware on the API and role-aware routes in React.",
        "Separate dashboards for farmers, restaurants, and drivers, built with React and Tailwind CSS.",
        "Automated Postman collections covering authentication, authorization, and order processing.",
      ],
    },
  },
  {
    id: 12,
    title: "Recipe Finder — Modern Culinary Explorer",
    name: "Recipe Finder",
    summary:
      "Search recipes from TheMealDB and open the full ingredients and instructions in a detail view.",
    description:
      "Developed an interactive single-page application for discovering global recipes. Features a glassmorphism UI, hover micro-animations, dynamic search, and a frosted-glass recipe details modal. Built using React and Vite, integrating TheMealDB API for live data.",
    image: RecipeFinder,
    imageWidth: 2086,
    imageHeight: 1237,
    imageKind: "screenshot",
    tech: [
      "React.js",
      "Vite",
      "JavaScript",
      "CSS (Glassmorphism)",
      "TheMealDB API",
    ],
    github: "https://github.com/Cveerababu15/Recipe-Web-React",
    live: "https://recipe-web-react.vercel.app/",
    new: true,
    category: "React",
  },
  {
    id: 13,
    title: "JobTracker AI — Job Application Tracker and Résumé Analyzer",
    name: "JobTracker AI",
    summary:
      "Track job applications and upload a résumé PDF to get a match estimate against a job description.",
    description:
      "Most resumes get rejected before a human even reads them. This app reads your resume and the job description, then shows you a match score and the missing keywords — so you can fix your resume before applying. Built with the MERN stack, JWT auth, and PDF text extraction.",
    image: JobApplication,
    imageWidth: 2059,
    imageHeight: 1235,
    imageKind: "screenshot",
    imageAlt:
      "JobTracker AI home screen with Dashboard, Jobs, Add Job, and Resume AI in the top bar, and cards for pipeline stats, résumé insights, and JWT security.",
    caption:
      "Resume AI in the top bar opens the upload flow that compares a résumé PDF with a job description.",
    mobileCrop: { aspect: "4 / 3", position: "60% 0%", scale: 2.2 },
    tech: [
      "MERN",
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "JWT",
      "multer",
      "pdf-parse",
      "DeepSeek API",
    ],
    github: "https://github.com/Cveerababu15/AI-Job-Application-Tracker",
    live: "https://ai-job-application-tracker-ten.vercel.app/",
    new: true,
    category: "MERN",
    caseStudy: {
      kicker: "Job tracker and résumé analyzer",
      question: "What happens when the AI service is unavailable?",
      shortAnswer:
        "The résumé PDF is parsed on the server and sent to the DeepSeek API for a match score. If that call fails, a keyword comparison takes over, so the user still gets a match estimate.",
      homeCaption:
        "Resume AI in the top bar starts the upload, extraction, and analysis flow.",
      purpose:
        "JobTracker AI keeps job applications, interview schedules, and stage notes in one authenticated dashboard, and checks a résumé against a job description before you apply.",
      flowTitle: "From PDF to match estimate",
      flow: [
        {
          label: "Upload",
          text: "You upload a résumé PDF. Multer receives the file on the Express server.",
        },
        {
          label: "Extract",
          text: "pdf-parse pulls the plain text out of the PDF so it can be compared.",
        },
        {
          label: "Analyze",
          text: "The résumé text and the job description go to the DeepSeek API, which returns a match score and skill recommendations.",
        },
        {
          label: "Fallback",
          text: "If that call fails, a keyword-based comparison runs instead, so you still get a result.",
        },
      ],
      answer: [
        "The analysis doesn't depend on a single external service. When the DeepSeek request fails, the server compares keywords from the job description with the extracted résumé text and returns a simpler score.",
        "The dashboard presents either result as the application's match estimate — a guide for editing your résumé, not a prediction of a hiring decision.",
      ],
      details: [
        "JWT-authenticated dashboard for applications, interview schedules, and stage notes.",
        "PDF upload with Multer and text extraction with pdf-parse.",
        "DeepSeek API integration with a keyword-based fallback during API failures.",
        "Progress and match-score views, with Postman tests for authentication and document-analysis endpoints.",
      ],
    },
  },
  {
    id: 14,
    title: "NewsHub — MERN News Platform with AI",
    name: "NewsHub",
    summary:
      "Read, publish, bookmark, and discuss articles, each with an AI-generated digest preview.",
    description:
      "Built a full-stack news platform where users can read, post, like, bookmark, and comment on articles. Integrated the Hugging Face Inference API with a personal access token to auto-summarize every article on creation. Features a personalized For You feed using MongoDB $in operator that matches articles to each user's saved interests, with an automatic fallback to trending news for new users. Also includes Optimistic UI for real-time view counts, JWT authentication, Cloudinary image uploads via Multer, and recursive comment-reply threads using nested MongoDB subdocuments.",
    image: NewsHub,
    imageWidth: 2077,
    imageHeight: 1213,
    imageKind: "screenshot",
    imageAlt:
      "NewsHub reader home: a search bar, a + Create button in the header, and rows of topic chips including All, For You, Politics, and Technology, with region filters below.",
    caption:
      "The + Create button opens the publishing form; each new article is sent to Hugging Face for a digest preview.",
    mobileCrop: { aspect: "4 / 3", position: "55% 0%", scale: 2.2 },
    tech: [
      "MERN",
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "JWT",
      "Hugging Face API",
      "Cloudinary",
      "Multer",
      "Framer Motion",
    ],
    github: "https://github.com/Cveerababu15/News-Hub",
    live: "https://news-hub-weld.vercel.app/",
    new: true,
    category: "MERN",
    caseStudy: {
      kicker: "AI-assisted news platform",
      question: "What does a new reader see before choosing any interests?",
      shortAnswer:
        "Trending articles. The For You feed checks for saved interests and falls back to trending news until there are some, and every preview already carries a digest generated when the article was published.",
      homeCaption:
        "For You sits beside the topic chips; until a reader saves interests, it shows trending stories.",
      purpose:
        "NewsHub is a publishing platform where readers follow topics and writers publish articles that arrive with an AI-generated digest preview.",
      flowTitle: "The reader's path",
      flow: [
        {
          label: "First visit",
          text: "A reader with no saved interests gets trending articles in For You, so the first feed is never empty.",
        },
        {
          label: "Interests",
          text: "Once interests are saved, a MongoDB $in query matches articles whose topic is in that list.",
        },
        {
          label: "Publishing",
          text: "When a writer publishes, the server sends the article to the Hugging Face Inference API and stores the returned digest with it.",
        },
        {
          label: "Reading",
          text: "Readers see the digest in the preview, then bookmark, like, or reply in nested comment threads.",
        },
      ],
      answer: [
        "Personalization only works once a reader has told the app what they like, so the For You feed checks for saved interests first. If there are none, it falls back to trending articles instead of showing an empty page.",
        "Summaries are generated once, when an article is created, rather than on every read. That keeps the feed fast and means every preview a reader scans already has its digest.",
      ],
      details: [
        "JWT-protected APIs for publishing, likes, and bookmarks.",
        "Nested comment replies stored as MongoDB subdocuments.",
        "Cloudinary media uploads through Multer.",
        "Optimistic UI for view counts, with Postman tests for authentication, publishing, and bookmarking.",
      ],
    },
  },
  {
    id: 15,
    title: "VeeraStore — Full Stack E-Commerce Platform",
    name: "VeeraStore",
    summary:
      "Browse products, keep a cart that follows your account, and check out with Razorpay.",
    description:
      "Built a complete e-commerce platform where users can browse products, add to cart, and check out. Integrated the Razorpay payment gateway: the server creates a Razorpay order for each checkout. Features dual-role access for Users and Admins — Admins can manage products, categories, and orders through a dedicated dashboard. The cart is stored in MongoDB against each user's account and read through React Context, so it carries across sessions and devices. Also includes Cloudinary image uploads via Multer, JWT authentication with Bcrypt password hashing, and a product filter that builds nested subcategory sidebars from live MongoDB data.",
    image: Ecommerce,
    imageWidth: 2136,
    imageHeight: 1178,
    imageKind: "screenshot",
    imageAlt:
      "VeeraStore storefront with Home, Products, and My Orders links, a cart button, and a Login button in the header above a fashion collection banner.",
    caption:
      "The cart button in the header reads the signed-in customer's cart from MongoDB, so its count is the same on any device.",
    mobileCrop: { aspect: "4 / 3", position: "85% 0%", scale: 2 },
    tech: [
      "MERN",
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "JWT",
      "Razorpay",
      "Cloudinary",
      "Multer",
      "Framer Motion",
      "Context API",
      "Bcrypt",
    ],
    github: "https://github.com/Cveerababu15/Ecommerce_Website",
    live: "https://ecommerce-website-leyo.vercel.app/",
    new: true,
    category: "MERN",
    note: {
      title: "What happens to the cart when a customer comes back",
      body: "The cart isn't kept in the browser. It's a MongoDB document tied to the customer's account, and when a signed-in customer returns, the app requests it with their token. Whatever they added last week, or on another device, is still there.",
    },
  },
];

/** Homepage order for selected work. */
export const FEATURED_IDS = [11, 13, 14];

export const getProject = (id) => projects.find((p) => p.id === Number(id));

/** True only for real absolute URLs (filters out "" and "/"). */
export const isExternalUrl = (url) => typeof url === "string" && /^https?:\/\//.test(url);

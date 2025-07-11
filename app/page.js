"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import {
  Moon,
  Sun,
  Github,
  Mail,
  Phone,
  MapPin,
  Code,
  Palette,
  Trophy,
  User,
  GraduationCap,
  Award,
  ExternalLink,
  Globe,
  Brain,
  Database,
} from "lucide-react"

const travelImages = [
  { src: "/images/jaflong.JPG", alt: "Jaflong" },
  { src: "/images/lake.jpg", alt: "Lake" },
  { src: "/images/marine_drive.JPG", alt: "Marine Drive" },
  { src: "/images/ratargul.png", alt: "Ratargul" },
  { src: "/images/sunset.JPG", alt: "sunset" },
  { src: "/images/sunrise.jpeg", alt: "sunrise" },
  { src: "/images/boat.JPG", alt: "boat" },
  { src: "/images/nightlight.JPG", alt: "nightlight" },
  { src: "/images/bridge.jpg", alt: "bridge" },
  { src: "/images/jaflong_cover.jpg", alt: "jaflong_cover" },
  { src: "/images/shei_pic.jpg", alt: "Shei_pic" }
]

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false)
  const [activeSection, setActiveSection] = useState("overview")
  const [currentRole, setCurrentRole] = useState("")
  const [roleIndex, setRoleIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [travelIndex, setTravelIndex] = useState(0)

  const roles = ["Software Engineer", "Tech Enthusiast", "Graphics Designer", "Gamer"]

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["overview", "about", "skills", "projects", "more", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Typing animation effect
  useEffect(() => {
    const typeSpeed = 100
    const deleteSpeed = 50
    const pauseTime = 2000

    const timer = setTimeout(
      () => {
        const currentRoleText = roles[roleIndex]

        if (!isDeleting && charIndex < currentRoleText.length) {
          setCurrentRole(currentRoleText.substring(0, charIndex + 1))
          setCharIndex(charIndex + 1)
        } else if (isDeleting && charIndex > 0) {
          setCurrentRole(currentRoleText.substring(0, charIndex - 1))
          setCharIndex(charIndex - 1)
        } else if (!isDeleting && charIndex === currentRoleText.length) {
          setTimeout(() => setIsDeleting(true), pauseTime)
        } else if (isDeleting && charIndex === 0) {
          setIsDeleting(false)
          setRoleIndex((roleIndex + 1) % roles.length)
        }
      },
      isDeleting ? deleteSpeed : typeSpeed,
    )

    return () => clearTimeout(timer)
  }, [charIndex, isDeleting, roleIndex, roles])

  useEffect(() => {
    const interval = setInterval(() => {
      setTravelIndex((prev) => (prev + 1) % travelImages.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const toggleTheme = () => {
    setDarkMode(!darkMode)
  }

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  const skills = {
    programming: ["C", "C++", "Java", "Python", "JavaScript", "SQL", "PHP"],
    web: ["HTML", "CSS","next.js", "React.js", "Node.js", "Express.js"],
    database: ["SQLite", "MySQL", "MongoDB"],
    tools: ["Linux", "GitHub", "VS Code", "IntelliJ", "Unity", "Docker", "Maven","Selenium","Wireshark"],
    concepts: ["REST APIs", "MVC", "Clean Architecture", "Microservices"],
  }

  const projects = [
    {
      title: "Smart Library System",
      description:"Backend for a smart library management system that follows micro service architecture for scalability and maintainability.It wass a part of my academic project where i had built the system step by step going through a total of 6 phases. Each phase introduced new perspectives and functionalities that converted the system from a monolithic structure to a micro service architecture.",
      tech: [ "Node.js", "MongoDB", "Express.js"],
      category: "Backend Development",
      github: "https://github.com/habi8/smart-library-system/tree/master",
      demo: "https://smart-library-system.vercel.app",
      status: "Live",
      icon: Globe,
    },
    
    {
      title: "Conserve The Deep",
      description:
        "An underwater species conservation platform connecting users with the marine life and conservation needs of the Bay of Bengal. Through interactive exploration and a pollution-cleanup game, it educates users on biodiversity, conservation, and environmental impact.",
      tech: [ "Node.js", "MongoDB", "Express.js","CSS","JavaScript"],
      category: "Web Development",
      github: "https://github.com/habi8/conserve-the-deep",
      demo: "https://conserve-the-deep.vercel.app",
      status: "Live",
      icon: Globe,
    },
    {
      title: "Gomoku AI Game",
      description:
        "Python implementation of classic Gomoku with AI opponent using Minimax algorithm and Alpha-Beta pruning. Features Pygame-based graphical interface with intelligent gameplay.",
      tech: ["Python", "Pygame", "AI Algorithms"],
      category: "Game Development",
      github: "https://github.com/habi8/gomoku-ai",
      demo: null,
      status: "Repository",
      icon: Brain,
    },
    {
      title: "Memeify",
      description:"A web application where people can search meme templates , create their own memes and download them :D",
      tech: [ "Node.js", "MongoDB", "Express.js"],
      category: "Web Development",
      github: "https://github.com/habi8/memeify",
      demo: "https://memeify.vercel.app",
      status: "Live",
      icon: Globe,
    },
    {
      title: "Data Structure Simulator",
      description:
        "Visual and interactive learning platform for data structures and sorting algorithms. Helps beginners understand stacks, queues, graphs, trees, and sorting techniques with real-time visualization.",
      tech: ["C"],
      category: "Educational Tool",
      github: "https://github.com/habi8/data-structure-simulator",
      demo: "https://ds-simulator.netlify.app",
      status: "Live",
      icon: Database,
     
    },
  ]

  // const activities = [
  //   "ISSB 89th BMA (Long Course) Green Card",
  //   "Red Crescent Moulvibazar District Representative",
  //   "Executive Member at IITSEC",
  //   "IIT Annual Futsal Champion",
  //   "ITverse Organizing Team Member",
  //   "Parliamentary Debate Competition Regional 3rd",
  // ]

  return (
    <div className={`min-h-screen transition-all duration-500 font-mono ${darkMode ? "dark bg-black" : "bg-gray-50"}`}>
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 backdrop-blur-md transition-all duration-300 ${
          darkMode ? "bg-black/90 border-yellow-500/30" : "bg-gray-50/90 border-red-300/50"
        } border-b-2`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <div
                className={`text-2xl font-bold ${
                  darkMode
                    ? "bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent"
                    : "bg-gradient-to-r from-red-600 to-yellow-600 bg-clip-text text-transparent"
                }`}
              >
                {"<Habib/>"}
              </div>
              <div className="hidden md:flex space-x-6">
                {["overview", "about", "skills", "projects", "more", "contact"].map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={`capitalize transition-all duration-300 font-medium ${
                      activeSection === section
                        ? darkMode
                          ? "text-yellow-400 border-b-2 border-yellow-400"
                          : "text-red-600 border-b-2 border-red-600"
                        : darkMode
                          ? "text-gray-300 hover:text-yellow-400"
                          : "text-gray-700 hover:text-red-600"
                    }`}
                  >
                    {section}
                  </button>
                ))}
              </div>
            </div>
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-all duration-300 hover:scale-110 ${
                darkMode
                  ? "bg-yellow-500/20 text-yellow-400 hover:bg-yellow-500/30"
                  : "bg-red-100 text-red-600 hover:bg-red-200"
              }`}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
    <section
      id="overview"
      className="min-h-screen flex flex-col justify-center items-center text-center px-4 pt-24 pb-12 relative overflow-hidden"
    >
        <div className="absolute inset-0 z-0 pointer-events-none">
  {[
    { className: "top-1/4 left-1/4", size: "w-60 h-60", delay: "delay-0" },
    { className: "top-3/4 right-1/4", size: "w-72 h-72", delay: "delay-500" },
    { className: "top-1/2 left-1/2", size: "w-56 h-56", delay: "delay-1000" },
    { className: "top-1/3 right-1/3", size: "w-40 h-40", delay: "delay-1500" },
    { className: "bottom-1/4 left-1/5", size: "w-48 h-48", delay: "delay-2000" },
  ].map((bubble, idx) => (
    <div
      key={idx}
      className={`absolute ${bubble.className} ${bubble.size} rounded-full blur-3xl opacity-30 animate-float-slow ${bubble.delay}
        ${
          darkMode
            ? "bg-gradient-to-r from-yellow-400 to-red-500"
            : "bg-gradient-to-r from-red-300 to-yellow-300"
        }`}
    ></div>
  ))}
</div>


        <div className="absolute inset-0">
          <div
            className={`absolute top-1/4 left-1/4 w-64 h-64 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse ${
              darkMode ? "bg-gradient-to-r from-yellow-400 to-red-500" : "bg-gradient-to-r from-red-300 to-yellow-300"
            }`}
          ></div>
          <div
            className={`absolute top-3/4 right-1/4 w-64 h-64 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000 ${
              darkMode ? "bg-gradient-to-r from-red-400 to-yellow-500" : "bg-gradient-to-r from-yellow-300 to-red-300"
            }`}
          ></div>
        </div>

        <div className="relative z-10 flex flex-col items-center max-w-xl w-full">
          <div className="mb-6">
            <div
              className={`w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mx-auto rounded-full overflow-hidden border-4 shadow-lg ${
                darkMode ? "bg-gradient-to-r from-yellow-400 to-red-500" : "bg-gradient-to-r from-red-500 to-yellow-500"
              }`}
            >
              <Image
                src="/images/profile.jpeg"
                alt="Habibur Rahman"
                width={192}
                height={192}
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            {/* <div
              className={`absolute -top-2 -right-2 w-12 h-12 rounded-full flex items-center justify-center animate-bounce ${
                darkMode ? "bg-gradient-to-r from-yellow-400 to-red-500" : "bg-gradient-to-r from-red-500 to-yellow-500"
              }`}
            >
              <Code className="text-white" size={24} />
            </div> */}
          </div>


          <h1 className={`text-3xl sm:text-5xl md:text-7xl font-bold mb-6 whitespace-nowrap text-center ${darkMode ? "text-white" : "text-gray-900"}`}>
              <span
                className={`${
                      darkMode
                      ? "bg-gradient-to-r from-yellow-400 via-red-500 to-yellow-400 bg-clip-text text-transparent"
                      : "bg-gradient-to-r from-red-600 via-yellow-600 to-red-600 bg-clip-text text-transparent"
                      }`}
              >
                      Habibur Rahman Mahin
              </span>
            </h1>


          {/* Animated Typing Effect */}
          <div className="mb-8 h-16 flex items-center justify-center">
            <div className={`text-2xl md:text-3xl font-bold ${darkMode ? "text-yellow-400" : "text-red-600"}`}>
              {currentRole}
              <span className="animate-pulse">|</span>
            </div>
          </div>

          <p
            className={`text-xl mb-8 max-w-2xl mx-auto ${darkMode ? "" : "text-gray-700"}`}
            style={darkMode ? { color: "#fff" } : {}}
          >
          Passionate Software Engineering student at University of Dhaka, crafting digital experiences and pushing the
          boundaries of technology while excelling in sports and creative pursuits.
        </p>

          <div className="flex justify-center space-x-4">
            <button
              onClick={() => scrollToSection("projects")}
              className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 ${
                darkMode
                  ? "bg-gradient-to-r from-yellow-500 to-red-600 text-black hover:shadow-lg hover:shadow-yellow-500/25"
                  : "bg-gradient-to-r from-red-600 to-yellow-600 text-white hover:shadow-lg hover:shadow-red-500/25"
              }`}
            >
              {"<View_Projects/>"}
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className={`px-8 py-3 border-2 rounded-lg font-semibold transition-all duration-300 hover:scale-105 ${
                darkMode
                  ? "border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black"
                  : "border-red-600 text-red-600 hover:bg-red-600 hover:text-white"
              }`}
            >
              {"<Contact/>"}
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-20 ${darkMode ? "bg-gray-900" : "bg-white"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold mb-4 ${darkMode ? "text-white" : "text-gray-900"}`}>
              {"<About"}{" "}
              <span
                className={`${
                  darkMode
                    ? "bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent"
                    : "bg-gradient-to-r from-red-600 to-yellow-600 bg-clip-text text-transparent"
                }`}
              >
                Me
              </span>
              {"/>"}
            </h2>
            <div
              className={`w-24 h-1 mx-auto ${
                darkMode ? "bg-gradient-to-r from-yellow-400 to-red-500" : "bg-gradient-to-r from-red-600 to-yellow-600"
              }`}
            ></div>
            <br></br>
            <p className="dark:text-white text-gray-900">
          Hi! I’m Habib, a Software Engineering student at the University of Dhaka with a passion for learning, leadership, and exploring beyond code.

I love traveling across Bangladesh, capturing nature through my lens. Gaming is my hobby—from FIFA to CS and Valorant.

As a striker for the IIT Football Team, I helped win the 2024 Futsal Championship, learning teamwork and resilience.

I earned an ISSB Green Card (89th BMA), represented Red Crescent at the 30th National Youth Camp, and serve as an IITSEC executive.

I strive to balance ambition with passion—and I’m excited for what’s ahead.
</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="relative group">
                  <Image
                    src="/images/alternate-profile.jpeg"
                    alt="Casual photo"
                    width={200}
                    height={250}
                    className="rounded-lg shadow-lg group-hover:shadow-xl transition-all duration-300 w-full h-64 object-cover"
                  />
                  <div
                    className={`absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                      darkMode
                        ? "bg-gradient-to-t from-yellow-500/20 to-transparent"
                        : "bg-gradient-to-t from-red-500/20 to-transparent"
                    }`}
                  ></div>
                </div>
                <div className="relative group mt-8">
                  <Image
                    src="/images/coffee.jpg"
                    alt="Football kit"
                    width={200}
                    height={250}
                    className="rounded-lg shadow-lg group-hover:shadow-xl transition-all duration-300 w-full h-64 object-cover"
                  />
                  <div
                    className={`absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                      darkMode
                        ? "bg-gradient-to-t from-red-500/20 to-transparent"
                        : "bg-gradient-to-t from-yellow-500/20 to-transparent"
                    }`}
                  ></div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div
                className={`p-6 rounded-xl ${darkMode ? "bg-black border border-yellow-500/30" : "bg-gray-50 border border-red-200"} shadow-lg`}
              >
                <div className="flex items-center mb-4">
                  <GraduationCap className={`mr-3 ${darkMode ? "text-yellow-500" : "text-red-600"}`} size={24} />
                  <h3 className={`text-xl font-semibold ${darkMode ? "text-white" : "text-gray-900"}`}>
                    {"<Education/>"}
                  </h3>
                </div>
                <div className="space-y-3">
                  <div>
                    <p className={`font-medium ${darkMode ? "text-white" : "text-gray-900"}`}>
                      Bachelor of Science in Software Engineering
                    </p>
                    <p className={`${darkMode ? "text-yellow-500" : "text-red-600"}`}>University of Dhaka</p>
                    {/* <p className={`text-sm ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                      CGPA: 3.58/4.0 (till 5th semester)
                    </p> */}
                  </div>
                  <div>
                    <p className={`font-medium ${darkMode ? "text-white" : "text-gray-900"}`}>
                      Higher Secondary Certificate
                    </p>
                    <p className={`${darkMode ? "text-red-500" : "text-yellow-600"}`}>Notre Dame College, Dhaka</p>
                  </div>

                  <div>
                    <p className={`font-medium ${darkMode ? "text-white" : "text-gray-900"}`}>
                      Secondary School Certificate
                    </p>
                    <p className={`${darkMode ? "text-red-500" : "text-yellow-600"}`}>The Flowers KG and High School, Moulvibazar</p>
                  </div>
                </div>
              </div>

              {/* <div
                className={`p-6 rounded-xl ${darkMode ? "bg-black border border-red-500/30" : "bg-gray-50 border border-yellow-200"} shadow-lg`}
              >
                 <div className="flex items-center mb-4">
                  <Award className={`mr-3 ${darkMode ? "text-red-500" : "text-yellow-600"}`} size={24} />
                  <h3 className={`text-xl font-semibold ${darkMode ? "text-white" : "text-gray-900"}`}>
                    {"<Activities/>"}
                  </h3>
                </div>
                <div className="grid grid-cols-1 gap-2">
                  {activities.slice(0, 4).map((activity, index) => (
                    <div key={index} className="flex items-center">
                      <div
                        className={`w-2 h-2 rounded-full mr-3 ${
                          darkMode
                            ? "bg-gradient-to-r from-yellow-400 to-red-500"
                            : "bg-gradient-to-r from-red-600 to-yellow-600"
                        }`}
                      ></div>
                      <p className={`text-sm ${darkMode ? "text-gray-300" : "text-gray-600"}`}>{activity}</p>
                    </div>
                  ))}
                </div> 
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className={`py-20 ${darkMode ? "bg-black" : "bg-gray-50"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold mb-4 ${darkMode ? "text-white" : "text-gray-900"}`}>
              {"<Technical"}{" "}
              <span
                className={`${
                  darkMode
                    ? "bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent"
                    : "bg-gradient-to-r from-red-600 to-yellow-600 bg-clip-text text-transparent"
                }`}
              >
                Skills
              </span>
              {"/>"}
            </h2>
            <div
              className={`w-24 h-1 mx-auto ${
                darkMode ? "bg-gradient-to-r from-yellow-400 to-red-500" : "bg-gradient-to-r from-red-600 to-yellow-600"
              }`}
            ></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, skillList], index) => (
              <div
                key={category}
                className={`p-6 rounded-xl transition-all duration-300 hover:scale-105 ${
                  darkMode
                    ? "bg-gray-900 border border-yellow-500/20 hover:border-yellow-500/50"
                    : "bg-white border border-red-200 hover:border-red-400"
                } shadow-lg hover:shadow-xl`}
              >
                <h3 className={`text-xl font-semibold mb-4 capitalize ${darkMode ? "text-white" : "text-gray-900"}`}>
                  {"<" + category.replace(/([A-Z])/g, " $1").trim() + "/>"}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className={`px-3 py-1 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 ${
                        index % 4 === 0
                          ? darkMode
                            ? "bg-gradient-to-r from-yellow-400 to-red-500 text-black"
                            : "bg-gradient-to-r from-red-500 to-yellow-500 text-white"
                          : index % 4 === 1
                            ? darkMode
                              ? "bg-gradient-to-r from-red-400 to-yellow-500 text-black"
                              : "bg-gradient-to-r from-yellow-500 to-red-500 text-white"
                            : index % 4 === 2
                              ? darkMode
                                ? "bg-yellow-500 text-black"
                                : "bg-red-500 text-white"
                              : darkMode
                                ? "bg-red-500 text-white"
                                : "bg-yellow-500 text-black"
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`py-20 ${darkMode ? "bg-gray-900" : "bg-white"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold mb-4 ${darkMode ? "text-white" : "text-gray-900"}`}>
              {"<Featured"}{" "}
              <span
                className={`${
                  darkMode
                    ? "bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent"
                    : "bg-gradient-to-r from-red-600 to-yellow-600 bg-clip-text text-transparent"
                }`}
              >
                Projects
              </span>
              {"/>"}
            </h2>
            <div
              className={`w-24 h-1 mx-auto ${
                darkMode ? "bg-gradient-to-r from-yellow-400 to-red-500" : "bg-gradient-to-r from-red-600 to-yellow-600"
              }`}
            ></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group relative overflow-hidden ${
                  darkMode
                    ? "bg-black border border-yellow-500/30 hover:border-yellow-500/60"
                    : "bg-gray-50 border border-red-200 hover:border-red-400"
                }`}
              >
                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  <span
                    className={`px-2 py-1 rounded-lg text-xs font-medium ${
                      project.status === "Live"
                        ? darkMode
                          ? "bg-yellow-500 text-black"
                          : "bg-green-500 text-white"
                        : darkMode
                          ? "bg-red-500 text-white"
                          : "bg-blue-500 text-white"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>

                {/* Project Icon */}
                <div className="flex items-center mb-4">
                  <div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center mr-4 ${
                      index % 3 === 0
                        ? darkMode
                          ? "bg-gradient-to-r from-yellow-400 to-red-500"
                          : "bg-gradient-to-r from-red-500 to-yellow-500"
                        : index % 3 === 1
                          ? darkMode
                            ? "bg-gradient-to-r from-red-400 to-yellow-500"
                            : "bg-gradient-to-r from-yellow-500 to-red-500"
                          : darkMode
                            ? "bg-yellow-500"
                            : "bg-red-500"
                    }`}
                  >
                    <project.icon className="text-white" size={24} />
                  </div>
                  <span
                    className={`px-3 py-1 rounded-lg text-xs font-medium ${
                      index % 3 === 0
                        ? darkMode
                          ? "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30"
                          : "bg-red-100 text-red-600 border border-red-200"
                        : index % 3 === 1
                          ? darkMode
                            ? "bg-red-500/20 text-red-400 border border-red-500/30"
                            : "bg-yellow-100 text-yellow-600 border border-yellow-200"
                          : darkMode
                            ? "bg-gradient-to-r from-yellow-500/20 to-red-500/20 text-yellow-400 border border-yellow-500/30"
                            : "bg-gradient-to-r from-red-100 to-yellow-100 text-red-600 border border-red-200"
                    }`}
                  >
                    {project.category}
                  </span>
                </div>

                <h3 className={`text-xl font-semibold mb-3 ${darkMode ? "text-white" : "text-gray-900"}`}>
                  {"<" + project.title.replace(/\s+/g, "_") + "/>"}
                </h3>

                <p className={`text-sm mb-4 ${darkMode ? "text-gray-300" : "text-gray-600"} line-clamp-4`}>
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`px-2 py-1 rounded text-xs font-mono ${
                        darkMode
                          ? "bg-gray-800 text-gray-300 border border-gray-700"
                          : "bg-gray-200 text-gray-700 border border-gray-300"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex gap-3 mt-auto">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center px-4 py-2 rounded-lg border-2 transition-all duration-300 hover:scale-105 flex-1 ${
                      darkMode
                        ? "border-yellow-500/50 text-yellow-400 hover:border-yellow-500 hover:bg-yellow-500/10"
                        : "border-red-300 text-red-600 hover:border-red-500 hover:bg-red-50"
                    }`}
                  >
                    <Github size={16} className="mr-2" />
                    <span className="text-sm font-medium">{"<Code/>"}</span>
                  </a>

                  {project.demo ? (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center justify-center px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105 flex-1 ${
                        index % 3 === 0
                          ? darkMode
                            ? "bg-gradient-to-r from-yellow-400 to-red-500 text-black hover:shadow-lg hover:shadow-yellow-500/25"
                            : "bg-gradient-to-r from-red-500 to-yellow-500 text-white hover:shadow-lg hover:shadow-red-500/25"
                          : index % 3 === 1
                            ? darkMode
                              ? "bg-gradient-to-r from-red-400 to-yellow-500 text-black hover:shadow-lg hover:shadow-red-500/25"
                              : "bg-gradient-to-r from-yellow-500 to-red-500 text-white hover:shadow-lg hover:shadow-yellow-500/25"
                            : darkMode
                              ? "bg-yellow-500 text-black hover:shadow-lg hover:shadow-yellow-500/25"
                              : "bg-red-500 text-white hover:shadow-lg hover:shadow-red-500/25"
                      }`}
                    >
                      <ExternalLink size={16} className="mr-2" />
                      <span className="text-sm font-medium">{"<Demo/>"}</span>
                    </a>
                  ) : (
                    <div
                      className={`flex items-center justify-center px-4 py-2 rounded-lg flex-1 cursor-not-allowed ${
                        darkMode
                          ? "bg-gray-800 text-gray-500 border border-gray-700"
                          : "bg-gray-200 text-gray-500 border border-gray-300"
                      }`}
                    >
                      <ExternalLink size={16} className="mr-2" />
                      <span className="text-sm font-medium">{"<Desktop/>"}</span>
                    </div>
                  )}
                </div>

                {/* Hover Effect Overlay */}
                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-xl ${
                    index % 3 === 0
                      ? darkMode
                        ? "bg-gradient-to-br from-yellow-500/5 to-red-500/5"
                        : "bg-gradient-to-br from-red-500/5 to-yellow-500/5"
                      : index % 3 === 1
                        ? darkMode
                          ? "bg-gradient-to-br from-red-500/5 to-yellow-500/5"
                          : "bg-gradient-to-br from-yellow-500/5 to-red-500/5"
                        : darkMode
                          ? "bg-yellow-500/5"
                          : "bg-red-500/5"
                  }`}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="more
      " className={`py-20 ${darkMode ? "bg-black" : "bg-gray-50"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold mb-4 ${darkMode ? "text-white" : "text-gray-900"}`}>
              {"<Beyond"}{" "}
              <span
                className={`${
                  darkMode
                    ? "bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent"
                    : "bg-gradient-to-r from-red-600 to-yellow-600 bg-clip-text text-transparent"
                }`}
              >
                Code
              </span>
              {"/>"}
            </h2>
            <div
              className={`w-24 h-1 mx-auto ${
                darkMode ? "bg-gradient-to-r from-yellow-400 to-red-500" : "bg-gradient-to-r from-red-600 to-yellow-600"
              }`}
            ></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
           <div className="relative w-full h-80 rounded-xl shadow-2xl overflow-hidden">
         {/* Image Slides */}
          {travelImages.map((img, idx) => (
          <Image
          key={img.src}
          src={img.src}
          alt={img.alt}
          fill
          sizes="(max-width: 768px) 100vw, 600px"
          className={`rounded-xl object-cover absolute inset-0 transition-opacity duration-1000 ${travelIndex === idx ? "opacity-100 z-10" : "opacity-0 z-0"}`}
          style={{ objectPosition: "center" }}
          />
          ))}

          {/* Gradient Overlay (stays fixed) */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none z-20 rounded-xl"></div>

          {/* Fixed Text Overlay */}
          <div className="absolute bottom-4 left-4 text-white z-30 pointer-events-none">
          <p className="text-lg font-semibold font-mono">{"// Capturing moments, creating memories"}</p>
          </div>
          </div>


            <div className="space-y-6">
              <div
                className={`p-6 rounded-xl transition-all duration-300 hover:scale-105 ${
                  darkMode
                    ? "bg-gray-900 border border-yellow-500/30 hover:border-yellow-500/60"
                    : "bg-white border border-red-200 hover:border-red-400"
                } shadow-lg hover:shadow-xl`}
              >
                <div className="flex items-center mb-3">
                  <Trophy className={`mr-3 ${darkMode ? "text-yellow-500" : "text-red-600"}`} size={24} />
                  <h3 className={`text-lg font-semibold ${darkMode ? "text-white" : "text-gray-900"}`}>
                    {"<Sports_Excellence/>"}
                  </h3>
                </div>
                <p className={`text-sm ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                  Striker at IIT Football Team and IIT Annual Futsal Champion. Sports taught me teamwork, leadership,
                  and perseverance.
                </p>
              </div>

              <div
                className={`p-6 rounded-xl transition-all duration-300 hover:scale-105 ${
                  darkMode
                    ? "bg-gray-900 border border-red-500/30 hover:border-red-500/60"
                    : "bg-white border border-yellow-200 hover:border-yellow-400"
                } shadow-lg hover:shadow-xl`}
              >
                <div className="flex items-center mb-3">
                  <User className={`mr-3 ${darkMode ? "text-red-500" : "text-yellow-600"}`} size={24} />
                  <h3 className={`text-lg font-semibold ${darkMode ? "text-white" : "text-gray-900"}`}>
                    {"<Leadership_Service/>"}
                  </h3>
                </div>
                <p className={`text-sm ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                  Executive member at IITSEC, Red Crescent representative, and active in community service and youth
                  development programs.
                </p>
              </div>

              <div
                className={`p-6 rounded-xl transition-all duration-300 hover:scale-105 ${
                  darkMode
                    ? "bg-gray-900 border border-yellow-500/30 hover:border-yellow-500/60"
                    : "bg-white border border-red-200 hover:border-red-400"
                } shadow-lg hover:shadow-xl`}
              >
                <div className="flex items-center mb-3">
                  <Palette className={`mr-3 ${darkMode ? "text-yellow-500" : "text-red-600"}`} size={24} />
                  <h3 className={`text-lg font-semibold ${darkMode ? "text-white" : "text-gray-900"}`}>
                    {"<Traveling/>"}
                  </h3>
                </div>
                <p className={`text-sm ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                  I find joy in exploring the world around me, one journey at a time.
                   With a deep love for travel and a passion for capturing the beauty of nature through my lens,
                    I dream of discovering every corner of Bangladesh—and someday, the world.
                     Each place I visit is more than just a destination; it’s a story waiting to be told through landscapes,
                      light, and moments frozen in time. Through my travels, I seek not just adventure,
                   but connection—with places, people, and the raw beauty of our planet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-20 ${darkMode ? "bg-gray-900" : "bg-white"}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold mb-4 ${darkMode ? "text-white" : "text-gray-900"}`}>
              {"<Let's"}{" "}
              <span
                className={`${
                  darkMode
                    ? "bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent"
                    : "bg-gradient-to-r from-red-600 to-yellow-600 bg-clip-text text-transparent"
                }`}
              >
                Connect
              </span>
              {"/>"}
            </h2>
            <div
              className={`w-24 h-1 mx-auto mb-6 ${
                darkMode ? "bg-gradient-to-r from-yellow-400 to-red-500" : "bg-gradient-to-r from-red-600 to-yellow-600"
              }`}
            ></div>
            <p className={`text-lg ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
              {"// Ready to collaborate on exciting projects or discuss opportunities?"}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div
              className={`p-6 rounded-xl shadow-lg text-center transition-all duration-300 hover:scale-105 ${
                darkMode
                  ? "bg-black border border-yellow-500/30 hover:border-yellow-500/60"
                  : "bg-gray-50 border border-red-200 hover:border-red-400"
              }`}
            >
              <div
                className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                  darkMode
                    ? "bg-gradient-to-r from-yellow-400 to-red-500"
                    : "bg-gradient-to-r from-red-500 to-yellow-500"
                }`}
              >
                <Mail className="text-white" size={24} />
              </div>
              <h3 className={`text-lg font-semibold mb-2 ${darkMode ? "text-white" : "text-gray-900"}`}>
                {"<Email/>"}
              </h3>
              <p
                className={`transition-colors duration-300 ${darkMode ? "text-yellow-500 hover:text-yellow-400" : "text-red-600 hover:text-red-500"}`}
              >
                bsse1422@iit.du.ac.bd
              </p>
            </div>

            <div
              className={`p-6 rounded-xl shadow-lg text-center transition-all duration-300 hover:scale-105 ${
                darkMode
                  ? "bg-black border border-red-500/30 hover:border-red-500/60"
                  : "bg-gray-50 border border-yellow-200 hover:border-yellow-400"
              }`}
            >
              <div
                className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                  darkMode
                    ? "bg-gradient-to-r from-red-400 to-yellow-500"
                    : "bg-gradient-to-r from-yellow-500 to-red-500"
                }`}
              >
                <Phone className="text-white" size={24} />
              </div>
              <h3 className={`text-lg font-semibold mb-2 ${darkMode ? "text-white" : "text-gray-900"}`}>
                {"<Phone/>"}
              </h3>
              <p
                className={`transition-colors duration-300 ${darkMode ? "text-red-500 hover:text-red-400" : "text-yellow-600 hover:text-yellow-500"}`}
              >
                +8801700808679
              </p>
            </div>

            <div
              className={`p-6 rounded-xl shadow-lg text-center transition-all duration-300 hover:scale-105 ${
                darkMode
                  ? "bg-black border border-yellow-500/30 hover:border-yellow-500/60"
                  : "bg-gray-50 border border-red-200 hover:border-red-400"
              }`}
            >
              <div
                className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                  darkMode ? "bg-yellow-500" : "bg-red-500"
                }`}
              >
                <MapPin className="text-white" size={24} />
              </div>
              <h3 className={`text-lg font-semibold mb-2 ${darkMode ? "text-white" : "text-gray-900"}`}>
                {"<Location/>"}
              </h3>
              <p
                className={`transition-colors duration-300 ${darkMode ? "text-yellow-500 hover:text-yellow-400" : "text-red-600 hover:text-red-500"}`}
              >
                Dhaka, Bangladesh
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="flex justify-center space-x-6">
  <a
    href="https://github.com/habi8"
    target="_blank"
    rel="noopener noreferrer"
    className={`w-12 h-12 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 ${
      darkMode
        ? "bg-gradient-to-r from-gray-700 to-gray-900 hover:shadow-lg hover:shadow-gray-500/25"
        : "bg-gradient-to-r from-gray-600 to-gray-800 hover:shadow-lg hover:shadow-gray-500/25"
    }`}
  >
    <Github size={24} />
  </a>
  <a
    href="https://www.facebook.com/leo.Hbb/"
    target="_blank"
    rel="noopener noreferrer"
    className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 ${
      darkMode
        ? "bg-gradient-to-r from-blue-700 to-blue-900 hover:shadow-lg hover:shadow-blue-500/25"
        : "bg-gradient-to-r from-blue-600 to-blue-800 hover:shadow-lg hover:shadow-blue-500/25"
    }`}
  >
    <img src="/images/facebook.png" alt="Facebook" className="w-full h-full object-contain" />
  </a>
  <a
    href="https://www.instagram.com/se7en_8_9/"
    target="_blank"
    rel="noopener noreferrer"
    className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 ${
      darkMode
        ? "bg-gradient-to-r from-pink-500 to-yellow-500 hover:shadow-lg hover:shadow-pink-500/25"
        : "bg-gradient-to-r from-pink-400 to-yellow-400 hover:shadow-lg hover:shadow-pink-500/25"
    }`}
  >
    <img src="/images/insta.png" alt="Instagram" className="w-full h-full object-contain" />
  </a>
  <a
    href="https://www.linkedin.com/in/habibur-rahman-536b04313/"
    target="_blank"
    rel="noopener noreferrer"
    className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 ${
      darkMode
        ? "bg-gradient-to-r from-blue-400 to-blue-700 hover:shadow-lg hover:shadow-blue-500/25"
        : "bg-gradient-to-r from-blue-300 to-blue-600 hover:shadow-lg hover:shadow-blue-500/25"
    }`}
  >
    <img src="/images/linkedin.png" alt="LinkedIn" className="w-full h-full object-contain" />
  </a>
</div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 ${darkMode ? "bg-black border-yellow-500/30" : "bg-gray-50 border-red-200"} border-t-2`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className={`${darkMode ? "text-gray-400" : "text-gray-600"}`}>
              {"// © 2024 Habibur Rahman. Crafted with passion and code."}
            </p>
            <div className="mt-2">
              <span
                className={`font-semibold ${
                  darkMode
                    ? "bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent"
                    : "bg-gradient-to-r from-red-600 to-yellow-600 bg-clip-text text-transparent"
                }`}
              >
                {"<Software_Engineer/> • <Tech_Enthusiast/> • <Creative_Mind/>"}
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

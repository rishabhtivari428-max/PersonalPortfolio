import React from "react";
import Image from '../assets/Image.jpg';
import Image2 from '../assets/Image2.jpg';
import Image3 from '../assets/Image3.jpg';
import Image4 from '../assets/Image4.jpg'

const frontendProjects = [
  {
    title: "Notes App",
    description: "A responsive Notes App built with React and Tailwind CSS with CRUD functionality and LocalStorage support.",
    tech: ["React", "Tailwind", "JS"],
    image: Image,
    demo: "https://vite-react-iyi1.vercel.app/",
    github: "https://github.com/rishabhtivari428-max/notes-app"
  },
  {
    title: "Weather App",
    description: "A responsive weather application built using React.js that fetches real-time weather data from an external API. Users can search for any city to view current weather conditions including temperature, humidity, and weather status.",
    tech: ["React", "TailwindCss"],
    image: Image2,
    demo: "https://weather-app-delta-neon.vercel.app/",
    github: "https://github.com/rishabhtivari428-max/Weather-app"
  },
  {
    title: "Expense Tracker",
    description: "Manage your money effortlessly with the Expense Tracker app. Keep track of your daily expenses, monitor your spending habits, and stay on top of your budget.",
    tech: ["React", "Tailwind"],
    image: Image3,
    demo: "https://expensetracker-tau-ten.vercel.app/",
    github: "https://github.com/rishabhtivari428-max/expensetracker"
  },
]

const fullstackProjects = [
  {
    title: "BlogInsta",
    description: "A full stack blogging platform where users can register, login, and manage their blogs. Built with a REST API backend and a responsive modern UI.",
    tech: ["Nodejs", "Reactjs", "MongoDB", "Express"],
    image: Image4,
    demo: "https://bloginstaa.netlify.app/",
    github: "https://github.com/rishabhtivari428-max/BlogInsta/tree/main"
  },
]

const ProjectCard = ({ project }) => (
  <div className="bg-black rounded-lg shadow-lg overflow-hidden hover:scale-105 transform transition duration-300">
    <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
    <div className="p-5">
      <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
      <p className="text-white mb-3">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-3">
        {project.tech.map((tech, i) => (
          <span key={i} className="bg-lime-500 text-white font-bold text-xs px-2 py-1 rounded">
            {tech}
          </span>
        ))}
      </div>
      <div className="flex gap-4">
        
         <a href={project.demo}
          target="_blank"
          rel="noreferrer"
          className="text-white bg-blue-500 px-3 py-1 rounded hover:bg-blue-600 transition"
        >
          Demo
        </a>
        
        <a  href={project.github}
          target="_blank"
          rel="noreferrer"
          className="text-white bg-gray-800 px-3 py-1 rounded hover:bg-gray-900 transition"
        >
          GitHub
        </a>
      </div>
    </div>
  </div>
)

const Projects = () => {
  return (
    <section className="py-16" id="projects">
      <div className="container mx-auto px-4">

        <h2 className="text-3xl font-bold mb-8 text-center text-lime-400">Frontend Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {frontendProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>

        <h2 className="text-3xl font-bold mb-8 text-center text-lime-400">Full Stack Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {fullstackProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>

      </div>
    </section>
  )
}

export default Projects
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image  from '../assets/Image.jpg'
import Image2 from '../assets/Image2.jpg'
import Image3 from '../assets/Image3.jpg'
import Image4 from '../assets/Image4.jpg'
import Image5 from '../assets/Image5.jpg'
import Image6 from '../assets/Image6.jpg'

gsap.registerPlugin(ScrollTrigger)

const frontendProjects = [
  {
    title: 'Notes App',
    description:
      'A responsive Notes App built with React and Tailwind CSS with CRUD functionality and LocalStorage support.',
    tech: ['React', 'Tailwind CSS', 'JS'],
    image: Image,
    demo: 'https://vite-react-iyi1.vercel.app/',
    github: 'https://github.com/rishabhtivari428-max/notes-app',
  },
  {
    title: 'Weather App',
    description:
      'A responsive weather application built using React.js that fetches real-time weather data from an external API.',
    tech: ['React', 'Tailwind CSS'],
    image: Image2,
    demo: 'https://weather-app-delta-neon.vercel.app/',
    github: 'https://github.com/rishabhtivari428-max/Weather-app',
  },
  {
    title: 'Expense Tracker',
    description:
      'Manage your money effortlessly with the Expense Tracker app. Keep track of your daily expenses and stay on top of your budget.',
    tech: ['React', 'Tailwind CSS'],
    image: Image3,
    demo: 'https://expensetracker-tau-ten.vercel.app/',
    github: 'https://github.com/rishabhtivari428-max/expensetracker',
  },
]

const fullstackProjects = [
  {
    title: 'BlogInsta — Blog App',
    description:
      'A full stack blogging platform where users can register, login, and manage their blogs. Built with a REST API backend and a responsive modern UI.',
    tech: ['Node.js', 'React', 'MongoDB', 'Express'],
    image: Image4,
    demo: 'https://bloginstaa.netlify.app/',
    github: 'https://github.com/rishabhtivari428-max/BlogInsta/tree/main',
  },
  {
    title: 'Dashh — Productivity Dashboard',
    description:
      'A full-stack productivity dashboard built with the MERN stack, featuring JWT-based authentication, notes management, Pomodoro timer, and an activity planner.',
    tech: ['Node.js', 'React', 'MongoDB', 'Express'],
    image: Image5,
    demo: 'https://productivity-dashboard-4.onrender.com/',
    github: 'https://github.com/rishabhtivari428-max/Productivity-Dashboard',
  },
  {
    title: 'CareerLink — Job Portal',
    description:
      'A fullstack job portal where recruiters and company managers find candidates and can select them for interviews; candidates can apply for jobs easily.',
    tech: ['Node.js', 'React', 'MongoDB', 'Express'],
    image: Image6,
    demo: 'https://career-link-ey8l-blush.vercel.app/',
    github: 'https://github.com/rishabhtivari428-max/CareerLink',
  },
]

const ProjectCard = ({ project }) => (
  <div className='project-card group bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800 hover:border-lime-400 transition-all duration-400 hover:shadow-[0_0_24px_rgba(163,230,53,0.2)]'>
    <div className='overflow-hidden h-48'>
      <img
        src={project.image}
        alt={project.title}
        className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
      />
    </div>
    <div className='p-5'>
      <h3 className='text-xl font-bold mb-2 text-white'>{project.title}</h3>
      <p className='text-zinc-400 text-sm mb-4 leading-relaxed'>{project.description}</p>
      <div className='flex flex-wrap gap-2 mb-4'>
        {project.tech.map((tech, i) => (
          <span
            key={i}
            className='bg-lime-400/10 text-lime-400 border border-lime-400/30 font-semibold text-xs px-3 py-1 rounded-full'
          >
            {tech}
          </span>
        ))}
      </div>
      <div className='flex gap-3'>
        <a
          href={project.demo}
          target='_blank'
          rel='noreferrer'
          className='flex-1 text-center text-sm font-semibold text-black bg-lime-400 px-3 py-2 rounded-lg hover:bg-lime-300 transition-colors duration-300'
        >
          Live Demo
        </a>
        <a
          href={project.github}
          target='_blank'
          rel='noreferrer'
          className='flex-1 text-center text-sm font-semibold text-white border border-zinc-600 px-3 py-2 rounded-lg hover:border-zinc-400 hover:bg-zinc-800 transition-all duration-300'
        >
          GitHub
        </a>
      </div>
    </div>
  </div>
)

const Projects = () => {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.projects-heading', {
        immediateRender: false,
        scrollTrigger: {
          trigger: '.projects-heading',
          start: 'top 85%',
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power4.out',
      })

      gsap.from('.project-card', {
        immediateRender: false,
        scrollTrigger: {
          trigger: '.project-card',
          start: 'top 88%',
        },
        y: 70,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: 'power3.out',
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id='projects' ref={sectionRef} className='py-20'>
      <div className='container mx-auto px-6 sm:px-12'>
        <h2 className='projects-heading text-3xl sm:text-4xl font-bold mb-3 text-center text-lime-400'>
          Frontend Projects
        </h2>
        <div className='flex justify-center mb-10'>
          <div className='w-20 h-[2px] bg-lime-400 rounded-full'></div>
        </div>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20'>
          {frontendProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>

        <h2 className='projects-heading text-3xl sm:text-4xl font-bold mb-3 text-center text-lime-400'>
          Full Stack Projects
        </h2>
        <div className='flex justify-center mb-10'>
          <div className='w-20 h-[2px] bg-lime-400 rounded-full'></div>
        </div>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {fullstackProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
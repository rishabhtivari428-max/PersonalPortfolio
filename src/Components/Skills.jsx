import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  SiCanva,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiAdobelightroom,
  SiAdobepremierepro,
  SiCss3,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiThreedotjs,
} from 'react-icons/si'

gsap.registerPlugin(ScrollTrigger)

const devSkills = [
  { icon: <SiReact />, color: 'text-blue-400', bg: 'bg-white', label: 'React' },
  { icon: <SiNodedotjs />, color: 'text-green-500', bg: 'bg-white', label: 'Node.js' },
  { icon: <SiMongodb />, color: 'text-green-400', bg: 'bg-zinc-900', label: 'MongoDB' },
  { icon: <SiJavascript />, color: 'text-yellow-300', bg: 'bg-zinc-900', label: 'JavaScript' },
  { icon: <SiHtml5 />, color: 'text-orange-500', bg: 'bg-white', label: 'HTML5' },
  { icon: <SiCss3 />, color: 'text-blue-500', bg: 'bg-white', label: 'CSS3' },
  { icon: <SiTailwindcss />, color: 'text-cyan-400', bg: 'bg-white', label: 'Tailwind' },
  { icon: <SiGithub />, color: 'text-zinc-900', bg: 'bg-white', label: 'GitHub' },
  { icon: <SiThreedotjs />, color: 'text-white', bg: 'bg-zinc-800', label: 'Three.js' },
]

const designSkills = [
  { icon: <SiCanva />, color: 'text-[#2A89DA]', bg: 'bg-white', label: 'Canva' },
  { icon: <SiAdobephotoshop />, color: 'text-[#001d34]', bg: 'bg-blue-300', label: 'Photoshop' },
  { icon: <SiAdobeillustrator />, color: 'text-amber-900', bg: 'bg-amber-400', label: 'Illustrator' },
  { icon: <SiAdobelightroom />, color: 'text-[#001d34]', bg: 'bg-blue-300', label: 'Lightroom' },
  { icon: <SiAdobepremierepro />, color: 'text-[#0601a2]', bg: 'bg-blue-300', label: 'Premiere Pro' },
]

const SkillIcon = ({ icon, color, bg, label }) => (
  <div className='skill-icon flex flex-col items-center gap-2 group cursor-pointer'>
    <div
      className={`text-5xl sm:text-6xl ${color} ${bg} p-2 rounded-xl group-hover:scale-110 group-hover:shadow-[0_0_16px_rgba(163,230,53,0.4)] transition-all duration-300`}
    >
      {icon}
    </div>
    <span className='text-xs text-zinc-400 group-hover:text-lime-400 transition-colors duration-300 font-medium'>
      {label}
    </span>
  </div>
)

const Skills = () => {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.skills-heading', {
        immediateRender: false,
        scrollTrigger: {
          trigger: '.skills-heading',
          start: 'top 85%',
        },
        x: -60,
        opacity: 0,
        duration: 1,
        ease: 'power4.out',
      })

      gsap.from('.skill-icon', {
        immediateRender: false,
        scrollTrigger: {
          trigger: '.skill-icon',
          start: 'top 88%',
        },
        scale: 0.4,
        opacity: 0,
        duration: 0.6,
        stagger: 0.08,
        ease: 'back.out(1.7)',
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <div id='skills' ref={sectionRef} className='text-white flex flex-col px-6 sm:px-16 mt-24'>
      <h1 className='skills-heading text-5xl sm:text-7xl lg:text-8xl font-bold font-[Bison]'>
        <span className='text-lime-400 font-extrabold'>AREAS</span> WHERE I EXCEL
      </h1>

      <h3 className='text-2xl sm:text-3xl font-bold mt-10'>Development Skills</h3>
      <div className='w-40 h-[3px] bg-lime-400 rounded-full mt-2 mb-6'></div>
      <div className='flex flex-wrap gap-8 mt-2'>
        {devSkills.map((skill, i) => (
          <SkillIcon key={i} {...skill} />
        ))}
      </div>

      <h3 className='text-2xl sm:text-3xl font-bold mt-12'>Designing Skills</h3>
      <div className='w-40 h-[3px] bg-lime-400 mt-2 rounded-full mb-6'></div>
      <div className='flex flex-wrap gap-8 mt-2'>
        {designSkills.map((skill, i) => (
          <SkillIcon key={i} {...skill} />
        ))}
      </div>
    </div>
  )
}

export default Skills
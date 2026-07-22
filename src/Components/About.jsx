import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const About = () => {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.about-heading', {
        immediateRender: false,
        scrollTrigger: {
          trigger: '.about-heading',
          start: 'top 85%',
        },
        y: 60,
        opacity: 0,
        duration: 1,
        ease: 'power4.out',
      })

      gsap.from('.about-line', {
        immediateRender: false,
        scrollTrigger: {
          trigger: '.about-line',
          start: 'top 85%',
        },
        scaleX: 0,
        transformOrigin: 'left',
        duration: 0.8,
        ease: 'power3.out',
      })

      gsap.from('.about-content', {
        immediateRender: false,
        scrollTrigger: {
          trigger: '.about-content',
          start: 'top 85%',
        },
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: 'power3.out',
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <div id='about' ref={sectionRef} className='text-center mt-30 text-white px-4'>
      <h1 className='about-heading text-5xl md:text-6xl font-bold text-lime-400'>
        About Me
      </h1>
      <div className='flex justify-center mt-4'>
        <div className='about-line w-32 h-[3px] bg-lime-400 rounded-full'></div>
      </div>

      <p className='about-content text-3xl md:text-4xl mt-8'>Hi! I Am Rishabh Sharma</p>

      <h2 className='about-content mt-4 text-xl'>
        Judges a book by its <span className='text-lime-400'>cover...</span>
      </h2>
      <p className='about-content opacity-80'>
        Because if the cover does not impress you what else can?
      </p>

      <h2 className='about-content mt-6 text-2xl font-semibold'>
        I'm a Full-Stack Developer
      </h2>
      <p className='about-content mt-2 text-lg opacity-90'>
        Full-Stack Developer focused on building complete, scalable, and production-ready web
        applications.
      </p>
      <p className='about-content mt-4 max-w-3xl mx-auto opacity-80 leading-relaxed'>
        A passionate full-stack developer who loves turning ideas into complete, production-ready web
        applications. From crafting clean, responsive UIs to building robust REST APIs and managing
        databases — I focus on writing meaningful code that solves real problems and delivers
        seamless user experiences.
      </p>
    </div>
  )
}

export default About
import React, { useEffect } from 'react'
import gsap from 'gsap'

const Hero = () => {
  useEffect(() => {
    const tl = gsap.timeline()

    tl.from('.hero-name', {
      y: 100,
      opacity: 0,
      duration: 1.2,
      ease: 'power4.out',
    })
      .from(
        '.hero-subtitle',
        {
          y: 50,
          opacity: 0,
          duration: 1,
          ease: 'power4.out',
        },
        '-=0.6'
      )
      .from(
        '.hero-buttons',
        {
          y: 50,
          opacity: 0,
          duration: 1,
          ease: 'power4.out',
        },
        '-=0.6'
      )
      .from(
        '.hero-bottom',
        {
          y: 40,
          opacity: 0,
          duration: 1,
          ease: 'power4.out',
        },
        '-=0.5'
      )
  }, [])

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div
      id='hero'
      className='relative text-white flex flex-col items-center justify-center mt-20 sm:mt-40 px-4'
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        className='fixed top-0 left-0 w-full h-full object-cover -z-10'
        src='/video/home.mp4'
      />

      <h1 className='hero-name shimmer-text font-bold font-[HelveticaNeue-Black] text-4xl sm:text-5xl md:text-7xl text-center'>
        RISHABH SHARMA
      </h1>

      <p className='hero-subtitle mt-6 text-base sm:text-lg text-center tracking-widest'>
        <span className='text-lime-400'>UI/UX</span> Designer &amp; Web Developer
      </p>

      <div className='hero-buttons mt-10 flex flex-col sm:flex-row gap-4 items-center'>
        <button
          onClick={() => scrollTo('projects')}
          className='border-2 border-white px-8 py-2 text-xl sm:text-2xl font-bold cursor-pointer hover:bg-lime-400 hover:text-black hover:border-lime-400 transition-all duration-300'
        >
          VIEW PROJECTS
        </button>
        <button className='border-2 px-8 py-2 text-xl sm:text-2xl bg-lime-400 text-black cursor-pointer font-bold border-lime-400 hover:bg-lime-300 transition-all duration-300'>
          DOWNLOAD CV
        </button>
      </div>

      <div className='hero-bottom flex justify-between w-full px-6 sm:px-16 mt-16 sm:mt-30 text-sm text-white'>
        <div>
          <p className='text-base sm:text-xl font-bold'>BCA Student</p>
          <p className='text-base sm:text-xl font-bold'>Computer Applications</p>
        </div>
        <div className='text-right'>
          <p className='text-base sm:text-xl font-bold'>From</p>
          <p className='text-base sm:text-xl font-bold'>Mathura Uttar Pradesh</p>
        </div>
      </div>
    </div>
  )
}

export default Hero

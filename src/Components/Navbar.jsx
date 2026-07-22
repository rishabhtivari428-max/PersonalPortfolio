import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'

const Navbar = (props) => {
  const navRef = useRef(null)

  useEffect(() => {
    gsap.from(navRef.current, {
      y: -80,
      opacity: 0,
      duration: 1,
      ease: 'power4.out',
    })
  }, [])

  const handleScroll = (e, id) => {
    e.preventDefault()
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div
      ref={navRef}
      className='flex flex-col sm:flex-row justify-between items-center px-6 sm:px-16 py-5 text-white font-semibold gap-4'
    >
      <h4 className='hover:text-lime-400 font-[Bison] text-2xl sm:text-3xl transition-colors duration-300 cursor-pointer'>
        {props.Name}
      </h4>
      <ul className='flex justify-between gap-4 sm:gap-8 font-[Bison] text-lg sm:text-2xl'>
        <a
          href='#hero'
          onClick={(e) => handleScroll(e, 'hero')}
          className='hover:text-lime-400 transition-colors duration-300'
        >
          Home
        </a>
        <a
          href='#about'
          onClick={(e) => handleScroll(e, 'about')}
          className='hover:text-lime-400 transition-colors duration-300'
        >
          About
        </a>
        <a
          href='#projects'
          onClick={(e) => handleScroll(e, 'projects')}
          className='hover:text-lime-400 transition-colors duration-300'
        >
          Projects
        </a>
        <a
          href='#contact'
          onClick={(e) => handleScroll(e, 'contact')}
          className='hover:text-lime-400 transition-colors duration-300'
        >
          Contact
        </a>
      </ul>
    </div>
  )
}

export default Navbar
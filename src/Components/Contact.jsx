import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Contact = () => {
  const headingRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.contact-word', {
        immediateRender: false,
        scrollTrigger: {
          trigger: headingRef.current,
          start: 'top 80%',
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.06,
        ease: 'power3.out',
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <div id='contact' className='px-6 sm:px-16 py-20'>
      <h1
        ref={headingRef}
        className='text-white text-4xl sm:text-6xl lg:text-7xl text-center font-bold leading-tight'
      >
        {'FEEL FREE TO CONNECT WITH ME VIA'.split(' ').map((word, i) => (
          <span key={i} className='contact-word inline-block mr-[0.25em]'>
            {word}
          </span>
        ))}
        <br />
        <a href='https://mail.google.com/' className='inline-block contact-word'>
          <span className='text-transparent stroke-text'>MAIL</span>
        </a>{' '}
        <span className='contact-word inline-block'>OR</span>{' '}
        <br />
        <a
          href='https://www.instagram.com/rishabh_sharma14____'
          className='inline-block contact-word'
        >
          <span className='text-transparent stroke-text'>INSTAGRAM</span>
        </a>{' '}
        <span className='contact-word inline-block'>OR</span>{' '}
        <a
          href='https://www.linkedin.com/in/rishabh-sharma-77b899397'
          className='inline-block contact-word'
        >
          <span className='text-transparent stroke-text'>LINKEDIN</span>
        </a>
      </h1>
    </div>
  )
}

export default Contact
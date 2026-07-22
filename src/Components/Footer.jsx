import React from 'react'
import { GoHeartFill } from 'react-icons/go'
import { RiInstagramLine, RiLinkedinLine, RiGithubLine, RiWhatsappLine, RiTwitterXLine } from 'react-icons/ri'

const Footer = () => {
  return (
    <footer className='flex flex-col sm:flex-row items-center justify-between gap-4 px-8 py-6 text-lime-400 mt-8 border-t border-zinc-800'>
      <div className='flex items-center gap-5'>
        <a
          href='https://www.instagram.com/rishabh_sharma14____?igsh=aGhmZzMxZXp0ZzV6'
          aria-label='Instagram'
        >
          <RiInstagramLine className='hover:text-pink-500 transition-colors duration-300 text-2xl cursor-pointer' />
        </a>
        <a
          href='https://www.linkedin.com/in/rishabh-sharma-77b899397'
          aria-label='LinkedIn'
        >
          <RiLinkedinLine className='hover:text-blue-500 transition-colors duration-300 text-2xl cursor-pointer' />
        </a>
        <a
          href='https://github.com/rishabhtivari428-max/rishabhtivari428-max'
          aria-label='GitHub'
        >
          <RiGithubLine className='hover:text-zinc-300 transition-colors duration-300 text-2xl cursor-pointer' />
        </a>
        <a href='https://web.whatsapp.com/' aria-label='WhatsApp'>
          <RiWhatsappLine className='hover:text-green-400 transition-colors duration-300 text-2xl cursor-pointer' />
        </a>
        <a href='https://twitter.com' aria-label='Twitter'>
          <RiTwitterXLine className='hover:text-blue-400 transition-colors duration-300 text-2xl cursor-pointer' />
        </a>
      </div>
      <p className='flex items-center gap-1 text-white text-base'>
        Made with <GoHeartFill className='text-lime-400' /> by Rishabh
      </p>
    </footer>
  )
}

export default Footer
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'

const Hero = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animId
    let particles = []

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const LIME = { r: 163, g: 230, b: 53 }
    const COUNT = 90

    class Particle {
      constructor() { this.reset(true) }
      reset(initial = false) {
        this.x = Math.random() * canvas.width
        this.y = initial ? Math.random() * canvas.height : canvas.height + 10
        this.size = Math.random() * 1.8 + 0.4
        this.speedY = -(Math.random() * 0.4 + 0.15)
        this.speedX = (Math.random() - 0.5) * 0.25
        this.alpha = Math.random() * 0.55 + 0.15
        this.pulse = Math.random() * Math.PI * 2
        this.pulseSpeed = Math.random() * 0.015 + 0.005
      }
      update() {
        this.y += this.speedY
        this.x += this.speedX
        this.pulse += this.pulseSpeed
        this.alpha = 0.25 + Math.sin(this.pulse) * 0.25
        if (this.y < -10) this.reset()
      }
      draw() {
        ctx.save()
        ctx.globalAlpha = this.alpha
        ctx.fillStyle = `rgb(${LIME.r},${LIME.g},${LIME.b})`
        ctx.shadowColor = `rgba(${LIME.r},${LIME.g},${LIME.b},0.8)`
        ctx.shadowBlur = 8
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()
      }
    }

    /* Grid lines */
    const drawGrid = (t) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      /* Radial glow spots */
      const g1 = ctx.createRadialGradient(
        canvas.width * 0.2, canvas.height * 0.3, 0,
        canvas.width * 0.2, canvas.height * 0.3, canvas.width * 0.42
      )
      g1.addColorStop(0, 'rgba(163,230,53,0.07)')
      g1.addColorStop(1, 'transparent')
      ctx.fillStyle = g1
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      const g2 = ctx.createRadialGradient(
        canvas.width * 0.8, canvas.height * 0.7, 0,
        canvas.width * 0.8, canvas.height * 0.7, canvas.width * 0.35
      )
      g2.addColorStop(0, 'rgba(163,230,53,0.05)')
      g2.addColorStop(1, 'transparent')
      ctx.fillStyle = g2
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      /* Animated perspective grid */
      const cols = 14, rows = 10
      const cellW = canvas.width / cols
      const cellH = canvas.height / rows
      const shift = (t * 0.00008) % 1

      ctx.strokeStyle = 'rgba(163,230,53,0.06)'
      ctx.lineWidth = 0.6
      ctx.beginPath()
      for (let c = 0; c <= cols; c++) {
        ctx.moveTo(c * cellW, 0)
        ctx.lineTo(c * cellW, canvas.height)
      }
      for (let r = 0; r <= rows; r++) {
        const y = ((r / rows + shift) % 1) * canvas.height
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
      }
      ctx.stroke()
    }

    for (let i = 0; i < COUNT; i++) particles.push(new Particle())

    const loop = (t) => {
      drawGrid(t)
      particles.forEach(p => { p.update(); p.draw() })
      animId = requestAnimationFrame(loop)
    }
    animId = requestAnimationFrame(loop)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  /* ── GSAP entrance animations ── */
  useEffect(() => {
    const tl = gsap.timeline()
    tl.from('.hero-name', { y: 100, opacity: 0, duration: 1.2, ease: 'power4.out' })
      .from('.hero-subtitle', { y: 50, opacity: 0, duration: 1, ease: 'power4.out' }, '-=0.6')
      .from('.hero-buttons', { y: 50, opacity: 0, duration: 1, ease: 'power4.out' }, '-=0.6')
      .from('.hero-bottom', { y: 40, opacity: 0, duration: 1, ease: 'power4.out' }, '-=0.5')
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
      {/* ── Canvas background ── */}
      <canvas
        ref={canvasRef}
        className='fixed top-0 left-0 w-full h-full -z-10 pointer-events-none'
        style={{ background: '#09090b' }}
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

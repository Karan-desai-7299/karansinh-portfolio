import React, { useState } from 'react'
import { motion } from 'framer-motion'
import "../CSS/Home.css"

// 🖼️ Import Assets
import photo from '../../public/photo.jpg'
import githubLogo from '../../public/github.png'
import linkedinLogo from '../../public/linkedin.png'
import gmailLogo from '../../public/gmail.png'
import whatsappLogo from '../../public/whatsapp.png'
import instagramLogo from '../../public/insta.png'


export default function Home() {
  const [copied, setCopied] = useState(false)
  const email = 'karansinhdesai91@gmail.com'

  const handleEmailClick = (e) => {
    e.preventDefault()
    navigator.clipboard.writeText(email)
      .then(() => {
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      })
      .catch(() => {
        // Clipboard API blocked (e.g. no HTTPS, old browser) — fall back to mailto
        window.location.href = `mailto:${email}`
      })
  }

  const professions = [
    'Full Stack Developer',
    'MERN Stack & Python Developer',
    'GenAI Explorer',
    'Problem Solver',
  ]

  const quickLinks = [
    { img: githubLogo, title: 'GitHub', link: 'https://github.com/Karan-desai-7299' },
    { img: linkedinLogo, title: 'LinkedIn', link: 'https://www.linkedin.com/in/karansinh-desai/' },
    { img: gmailLogo, title: 'Email', link: 'mailto:karansinhdesai91@gmail.com' },
    { img: whatsappLogo, title: 'WhatsApp', link: 'https://wa.me/918830678600' },
    // TODO: replace with your real Instagram handle
    { img: instagramLogo, title: 'Instagram', link: 'https://www.instagram.com/karan.desai16?igsh=dGl6bnV0NnV2Zmo1' },

  ]

  return (
    <section className="home-section">
      {/* Typing Effect Styles */}
      <style>
        {`
          @keyframes typing { from { width: 0; } to { width: 100%; } }
          @keyframes blink { 50% { border-color: transparent; } }
        `}
      </style>

      {/* Top Section: Photo + Info */}
      <div className="home-top">
        {/* Left: Glowing Photo */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="photo-container"
        >
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            className="photo-ring"
          />
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="photo-frame"
          >
            <motion.img
              src={photo}
              alt="Karansinh Desai"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
              className="profile-photo"
            />
          </motion.div>
        </motion.div>

        {/* Right: Info Section */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="home-info"
        >
          <h1 className="home-title">
            Hi, I’m {' '}
            <motion.span
              animate={{ backgroundPositionX: ['0%', '200%'] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
              className="home-name"
            >
              Karansinh Desai
            </motion.span>
          </h1>

          {/* Typing Animated Text */}
          <p className="typing-effect">
            Full Stack Developer | AI/ML Engineer | GenAI Explorer
          </p>

          {/* Profession Tags */}
          <motion.div className="profession-tags">
            {professions.map((role, i) => (
              <motion.div key={i} whileHover={{ scale: 1.05, background: 'linear-gradient(90deg,var(--accent),var(--accent-2))' }} transition={{ type: 'spring', stiffness: 200 }} className="profession-tag">
                {role}
              </motion.div>
            ))}
          </motion.div>

          {/* Info Cards */}
          <motion.div className="info-cards">
            {[
              { label: '📍 Location', value: 'Kolhapur, Maharashtra, India' },
              { label: '💼 Expertise', value: 'MERN Stack, Python (Fask & Fast Api)' },
              { label: '📧 Contact', value: 'karansinhdesai91@gmail.com' },
            ].map((info, i) => (
              <motion.div key={i} whileHover={{ y: -4, scale: 1.05 }} transition={{ type: 'spring', stiffness: 250 }} className="info-card">
                <strong>{info.label}</strong>
                <p>{info.value}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Quick Links */}
      <motion.div className="home-connect">
        <h2 className="home-connect-title">Connect with me</h2>
        <div className="home-connect-list">
          {quickLinks.map((item, i) => {
            const isExternal = item.link.startsWith('http')
            const isEmail = item.title === 'Email'
            return (
            <motion.a
              key={i}
              href={item.link}
              title={isEmail ? `${email} (click to copy)` : item.title}
              target={isExternal ? '_blank' : undefined}
              rel={isExternal ? 'noopener noreferrer' : undefined}
              onClick={isEmail ? handleEmailClick : undefined}
              style={{ position: 'relative' }}
              whileHover={{ scale: 1.15, rotate: 5 }}
              transition={{ type: 'spring', stiffness: 250 }}
            >
              <motion.img
                src={item.img}
                alt={item.title}
                whileHover={{ filter: 'drop-shadow(0 0 15px var(--accent)) brightness(1.2)' }}
                className="quick-link-img"
              />
              {isEmail && copied && (
                <motion.span
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="copied-tooltip"
                >
                  Copied!
                </motion.span>
              )}
            </motion.a>
            )
          })}
        </div>
      </motion.div>

    </section>
  )
}

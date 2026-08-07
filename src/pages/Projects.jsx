import React from 'react'
import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'
import '../CSS/projects.css'

const PROJECTS = [
{
  title: '🤖 AI Resume ATS Scorer',
  desc: 'An AI-powered resume screening platform that evaluates resumes against job descriptions using NLP, semantic similarity, ATS scoring, and LLM-generated improvement suggestions.',
  ss: '/project/Screenshot 2026-08-06 194835.png',
  tech: [
    'Python',
    'FastAPI',
    'Streamlit',
    'spaCy',
    'Sentence Transformers',
    'Groq Llama 3',
    'Supabase'
  ],
  live: 'https://frontend-react-ten-gamma.vercel.app/',
  code: 'https://github.com/Karan-desai-7299/ATS-Resume-Scorer'
},
{
  title: '📸 SnapClass AI Attendance',
  desc: 'An AI-powered attendance system using face recognition, voice recognition, QR-based enrollment, Supabase authentication, and a teacher verification workflow.',
  ss: '/project/Screenshot 2026-08-06 195716.png',
  tech: [
    'Python',
    'Streamlit',
    'Flask',
    'Supabase',
    'OpenCV',
    'Face Recognition',
    'Resemblyzer'
  ],
  live: 'https://snapclass-aipowered-attendancesystem-karand16.vercel.app/',
  code: 'https://github.com/Karan-desai-7299/SnapClass-Making-Attendance-Faster-using-Ai',
},

{
  title: '✂️ AI Text Summarizer',
  desc: 'Transformer-based AI application that generates concise summaries from lengthy documents and articles through an intuitive web interface.',
  ss: '/project/Screenshot 2026-08-06 200948.png',
  tech: [
    'Python',
    'FastAPI',
    'Transformers',
    'Hugging Face'
  ],
  live: '#',
  code: 'https://github.com/Karan-desai-7299/ai-text-summarizer'
},

{
  title: '🚗 Ride Hailing Web Application',
  desc: 'A full-stack MERN ride-hailing platform featuring Google Maps integration, live ride tracking, OTP-secured rides, Socket.IO communication, fare estimation, and dedicated rider and captain dashboards.',
  ss: '/project/Screenshot 2026-08-06 200112.png',
  tech: [
    'React',
    'Vite',
    'Tailwind CSS',
    'GSAP',
    'Node.js',
    'Express.js',
    'MongoDB',
    'Socket.IO',
    'Google Maps API'
  ],
  live: 'https://uber-by-karansinh-desai879-jug.vercel.app/',
  code: 'https://github.com/Karan-desai-7299/ride-hailing-application'
},
{
  title: '🏠 RentConnect',
  desc: 'A full-stack rental platform connecting tenants and property owners with smart property search, nearby recommendations, visit booking, JWT authentication, real-time chat, and owner analytics.',
  ss: '/project/Screenshot 2026-08-06 200347.png',
  tech: [
    'React',
    'Node.js',
    'Express.js',
    'MongoDB',
    'Socket.IO',
    'JWT',
    'ImageKit'
  ],
  live: 'https://rentconnect-by-karansinhdesai-837kd.vercel.app/',
  code: 'https://github.com/Karan-desai-7299/RentConnect-'
},
{
  title: '🎵 Symphony Music Streaming',
  desc: 'A full-stack MERN music streaming platform featuring secure authentication, playlists, artist dashboard, music streaming, dark/light themes, and a modern responsive UI.',
  ss: '/project/Screenshot 2026-08-06 201712.png',
  tech: [
    'React',
    'Vite',
    'Node.js',
    'Express.js',
    'MongoDB',
    'JWT',
    'Zustand',
    'Tailwind CSS'
  ],
  live: 'https://spotify-clone-karan-desai-7299.vercel.app/',
  code: 'https://github.com/Karan-desai-7299/symphony-music-player'
},
{
  title: '📱 Social Media Web App',
  desc: 'A full-stack MERN social media application that enables users to create posts, upload images, and browse a dynamic real-time content feed with MongoDB-powered backend integration.',
  ss: '/project/Screenshot 2026-08-06 202141.png',
  tech: [
    'React.js',
    'Node.js',
    'Express.js',
    'MongoDB Atlas',
    'REST API',
    'Vercel'
  ],
  live: 'https://mini-phase1-frontend.vercel.app/',
  code: 'Karan-desai-7299/social-media-mini-frontend'
},
{
  title: '🖼️ React Image Gallery',
  desc: 'A modern and responsive image gallery application built with React and Vite that fetches images from the Picsum API. Features include image search, pagination, responsive layouts, image preview, downloads, and smooth loading animations.',
  ss: '/project/Screenshot 2026-08-06 202446.png',
  tech: [
    'React.js',
    'Vite',
    'Axios',
    'Tailwind CSS',
    'Picsum API',
    'JavaScript'
  ],
  live: 'https://image-gallery-mocha-five.vercel.app/',
  code: 'https://github.com/Karan-desai-7299/Image-Gallery'
},
{
  title: '📝 To-Do Web App',
  desc: 'A responsive task management application built with HTML, CSS, and JavaScript that enables users to create, organize, and manage daily tasks through a clean and intuitive interface.',
  ss: '/project/Screenshot 2026-08-06 202957.png',
  tech: [
    'HTML5',
    'CSS3',
    'JavaScript',
    'Responsive Design'
  ],
  live: 'https://karan-desai-7299.github.io/To-Do-WebApp/',
  code: 'https://github.com/Karan-desai-7299/To-Do-WebApp'
},




]

export default function Projects() {
  return (
    <motion.section
      className="container"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      id="projects"
    >
      <div className="card" style={{ background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 30 }}>
        <motion.h2
          className="text-4xl font-semibold text-cyan-400 mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          🚀 Projects
        </motion.h2>
        <p className="text-gray-400 mb-10">
          A collection of my major works — blending research, AI innovation.
        </p>

        <div className="projects-grid" style={{ display: 'grid', gap: 24, gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
          {PROJECTS.map((p, idx) => (
            <motion.div
              key={idx}
              className="project-card"
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.4, delay: idx * 0.15 }}
              whileHover={{ scale: 1.03 }}
              viewport={{ once: true }}
              style={{
                background: 'linear-gradient(145deg, rgba(20,20,20,0.9), rgba(10,10,10,0.9))',
                border: '1px solid rgba(0,255,255,0.1)',
                borderRadius: 16,
                padding: 16,
                overflow: 'hidden',
                boxShadow: '0 0 20px rgba(0,255,255,0.08)'
              }}
            >
              <motion.div className="ss" whileHover={{ scale: 1.05 }} style={{ borderRadius: 12, overflow: 'hidden' }}>
                <img
                  src={p.ss}
                  alt={p.title}
                  style={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover',
                    borderRadius: 12
                  }}
                />
              </motion.div>

              <div style={{ marginTop: 12 }}>
                <h3 style={{ fontSize: 18, color: '#0ea5e9', marginBottom: 6 }}>{p.title}</h3>
                <p style={{ fontSize: 14, color: '#bbb', marginBottom: 8, lineHeight: 1.6 }}>{p.desc}</p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 10 }}>
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      style={{
                        background: 'rgba(0,255,255,0.05)',
                        border: '1px solid rgba(0,255,255,0.1)',
                        padding: '3px 8px',
                        borderRadius: 6,
                        fontSize: 12,
                        color: '#aaf'
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 10 }}>
                  <motion.a
                    href={p.code}
                    target="_blank"
                    rel="noreferrer"
                    className="btn"
                    whileHover={{ scale: 1.08 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 5,
                      background: 'rgba(255,255,255,0.05)',
                      color: '#0ea5e9',
                      padding: '6px 12px',
                      borderRadius: 8,
                      fontSize: 13,
                      border: '1px solid rgba(0,255,255,0.1)',
                      textDecoration: 'none'
                    }}
                  >
                    <Github size={14} /> Code
                  </motion.a>
                  <motion.a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    className="btn"
                    whileHover={{ scale: 1.08 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 5,
                      background: 'linear-gradient(90deg, #06b6d4, #0891b2)',
                      color: '#fff',
                      padding: '6px 12px',
                      borderRadius: 8,
                      fontSize: 13,
                      textDecoration: 'none'
                    }}
                  >
                    <ExternalLink size={14} /> Live
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

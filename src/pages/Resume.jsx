import React from "react";
import { motion } from "framer-motion";
import "../CSS/Resume.css";

export default function Resume() {
  return (
    <section className="container resume-container" style={{ padding: "60px 0" }}>
      <motion.div
        className="card resume-card"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          background: "#0b0b0b",
          borderRadius: 16,
          padding: "40px 30px",
          color: "#e5e5e5",
          boxShadow: "0 0 25px rgba(0, 153, 255, 0.1)",
        }}
      >
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{ fontSize: 28, color: "#00b4ff", marginBottom: 12 }}
        >
          📄 Resume
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          style={{ color: "#aaa", marginBottom: 25 }}
        >
          A quick glance at my journey.
        </motion.p>

        {/* Profile Header */}
        <motion.div
          className="resume-profile"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap",
            gap: 20,
            background: "rgba(255,255,255,0.03)",
            padding: "24px 20px",
            borderRadius: 12,
          }}
        >
          <div>
            <h3 style={{ fontSize: 24, color: "#00b4ff", marginBottom: 4 }}>
              👨‍💻 Karansinh Rajendra Desai
            </h3>
            <p style={{ margintop: 10, fontSize: 15, color: "#ccc" }}>
              4th Year B.Tech — Computer Science & Engineering (CSE) <br />
    Ashokrao Mane Group of Institutions (AMGOI)
            </p>
            <p style={{ margin: "4px 0", fontSize: 14, color: "#aaa" }}>
              📍 Kolhapur, Maharashtra, India
            </p>
            <p style={{ margin: "4px 0", fontSize: 14, color: "#aaa" }}>
              ✉️ karansinhdesai91@gmail.com | 📞 +91 8830678600
            </p>
          </div>

          <motion.div
            className="profile-summary"
            whileHover={{ scale: 1.05 }}
            style={{
              background: "linear-gradient(135deg, #00b4ff44, #0b0b0b)",
              borderRadius: 12,
              padding: "14px 20px",
              border: "1px solid rgba(255,255,255,0.1)",
              maxWidth: 560,
              fontSize: 14,
              lineHeight: 1.6,
            }}
          >
            <strong style={{ color: "#00b4ff" }}>Professional Summary:</strong>
            <p style={{ marginTop: 6, color: "#ccc" }}>
  Passionate Computer Science Engineering student with hands-on experience in
  Full Stack Web Development, Artificial Intelligence, and Machine Learning.
  Skilled in JavaScript, React.js, Node.js, Express.js, MongoDB, Python, and
  modern AI technologies. Experienced in developing MERN stack applications,
  AI-powered systems, and responsive web solutions. Passionate about solving
  real-world problems through innovative software and continuously learning new
  technologies while seeking opportunities to contribute as a Software Engineer.
</p>

          </motion.div>
        </motion.div>

        {/* Education Section with Border Box */}
        <motion.div
          className="resume-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          style={{
            marginTop: 40,
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 12,
            padding: "20px 24px",
            background: "rgba(255,255,255,0.03)",
          }}
        >
<h4 style={{ fontSize: 20, color: "#00b4ff", marginBottom: 12 }}>
  🎓 Education
</h4>

<ul
  style={{
    listStyle: "none",
    padding: 0,
    margin: 0,
    lineHeight: 1.8,
  }}
>
  <li>
    <strong>B.Tech in Computer Science & Engineering (CSE)</strong> —
    Shri Balasaheb Mane Shikshan Prasarak Mandal's Ashokrao Mane Group of
    Institutions (AMGOI), Kolhapur, Maharashtra (DBATU University)
    <br />
    <span style={{ color: "#aaa" }}>
      2023 – 2027 | CGPA: 7.90 (Current)
    </span>
  </li>

  <li style={{ marginTop: 10 }}>
    <strong>Higher Secondary Education (12th)</strong> —
    Anandi Arts, Commerce & Science Junior College,
    Kalambe, Kolhapur, Maharashtra
    <br />
    <span style={{ color: "#aaa" }}>
      Maharashtra State Board | 2023 | Percentage: 60%
    </span>
  </li>

  <li style={{ marginTop: 10 }}>
    <strong>Secondary School Certificate (10th)</strong> —
    Adarsh Highschool Bhamate,
    Kolhapur, Maharashtra
    <br />
    <span style={{ color: "#aaa" }}>
      Maharashtra State Board | 2021 | Percentage: 87.60%
    </span>
  </li>
</ul>
        </motion.div>

{/* Featured Projects */}
<motion.div
  className="resume-section featured-projects"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.8 }}
  style={{ marginTop: 40 }}
>
  <h4
    style={{
      fontSize: 20,
      color: "#00b4ff",
      marginBottom: 12,
    }}
  >
    💼 Featured Projects
  </h4>

  <ul
    style={{
      listStyle: "none",
      padding: 0,
      margin: 0,
      lineHeight: 1.9,
    }}
  >
    <li>
      🤖 <strong>AI Resume ATS Scorer</strong> — AI-powered resume analysis,
      ATS scoring, semantic similarity, and LLM-generated feedback using
      FastAPI, NLP, and Groq Llama 3.
    </li>

    <li>
      📸 <strong>SnapClass AI Attendance System</strong> — AI-based attendance
      management using face recognition, voice verification, QR enrollment,
      and Supabase authentication.
    </li>

    <li>
      🚖 <strong>Ride Hailing Web Application (MERN)</strong> — Full-stack ride-booking platform
      featuring JWT authentication, Google Maps API, Socket.io, ride tracking,
      and real-time communication.
    </li>

    <li>
      🏠 <strong>RentConnect</strong> — Property rental platform built with the
      MERN stack, enabling property listings, user authentication, and rental
      management.
    </li>

    <li>
      🎵 <strong>Symphony Music Streaming</strong> — Spotify-inspired MERN
      application with secure authentication, playlists, artist dashboard, and
      responsive music streaming interface.
    </li>

    <li>
      📄 <strong>AI Text Summarizer</strong> — NLP-based web application that
      generates concise summaries from long documents using Transformer models
      and Python.
    </li>

    <li>
      📱 <strong>Social Media Web App</strong> — MERN-based social networking
      platform with authentication, image uploads, post creation, and dynamic
      content feeds.
    </li>

    <li>
      🖼️ <strong>React Image Gallery</strong> — Responsive image gallery using
      React, Vite, Axios, and the Picsum API with search, pagination, and image
      preview functionality.
    </li>
  </ul>
</motion.div>

        {/* Skills */}
        <motion.div
          className="resume-section resume-skills-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          style={{ marginTop: 40 }}
        >
          <h4 style={{ fontSize: 20, color: "#00b4ff", marginBottom: 12 }}>⚙️ Skills</h4>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {[
 "JavaScript",
  "Python",
  "C",
  "C++",
  "React.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "MySQL",
  "HTML5",
  "CSS3",
  "REST APIs",
  "FastAPI",
  "Flask",
  "TensorFlow",
  "PyTorch",
  "Scikit-learn",
  "OpenCV",
  "Machine Learning",
  "Deep Learning",
  "Natural Language Processing (NLP)",
  "Generative AI",
  "Git",
  "GitHub",
  "Docker",
  "Postman",
  "Problem Solving",
  "Team Collaboration",
  "Communication"
            ].map((skill) => (
              <motion.span
                key={skill}
                whileHover={{ scale: 1.1, backgroundColor: "rgba(0,180,255,0.3)" }}
                style={{
                  background: "rgba(255,255,255,0.05)",
                  padding: "6px 12px",
                  borderRadius: 8,
                  fontSize: 13,
                  color: "#ccc",
                }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
          className="resume-links"
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 30,
            marginTop: 40,
          }}
        >
          {[
            { name: "🏆 LeetCode", link: "https://leetcode.com/u/karan_desai_/" },
            { name: "💻 GitHub", link: "https://github.com/Karan-desai-7299" },
            { name: "💼 LinkedIn", link: "https://www.linkedin.com/in/karansinh-desai/" },
          ].map((site) => (
            <motion.a
              key={site.name}
              href={site.link}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.1, color: "#00b4ff" }}
              style={{
                color: "#ccc",
                textDecoration: "none",
                fontSize: 15,
                fontWeight: 500,
              }}
            >
              {site.name}
            </motion.a>
          ))}
        </motion.div>



{/* PDF Viewer */}
<motion.div
  className="resume-pdf"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 1.2 }}
  style={{
    marginTop: 50,
    borderRadius: 12,
    overflow: "hidden",
    border: "1px solid rgba(255,255,255,0.1)",
  }}
>
  <iframe
    src="/karanCopy.pdf"
    title="Karansinh Desai Resume"
    style={{
      width: "100%",
      height: "650px",
      border: "none",
      background: "#111",
    }}
  />
</motion.div>

{/* Download Button */}
<motion.a
  className="resume-download"
  href="/karanCopy.pdf"
  download
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  style={{
    display: "inline-block",
    marginTop: 20,
    background: "#00b4ff",
    color: "#fff",
    padding: "10px 22px",
    borderRadius: 8,
    textDecoration: "none",
    fontWeight: 500,
    letterSpacing: 0.3,
  }}
>
  ⬇️ Download Resume
</motion.a>


      </motion.div>
    </section>
  );
}

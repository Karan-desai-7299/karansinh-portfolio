import React from "react";
import { motion } from "framer-motion";
import { FaUniversity, FaSchool, FaGraduationCap } from "react-icons/fa";
import "../CSS/About.css";

const educationHistory = [
  {
    icon: <FaUniversity size={40} className="edu-icon" />,
    title: "B.Tech in Computer Science and Engineering",
    institute:
      "Shri Balasaheb Mane Shikshan Prasarak Mandal's Ashokrao Mane Group of Institutions (AMGOI) — Kolhapur, Maharashtra",
    details: "4th Year (Pursuing) | CGPA: 7.9",
    period: "2023 – 2027",
  },
  {
    icon: <FaGraduationCap size={38} className="edu-icon" />,
    title: "Higher Secondary Education (12th Grade)",
    institute:
      "Anandi Arts Commerce & Science Junior College — Kalambe, Kolhapur, Maharashtra",
    details: "Maharashtra Board | Percentage: 60%",
    period: "Completed in 2023",
  },
  {
    icon: <FaSchool size={36} className="edu-icon" />,
    title: "Secondary Education (10th Grade)",
    institute: "Adarsh Highschool Bhamate — Kolhapur, Maharashtra",
    details: "Maharashtra Board | Percentage: 87.60%",
    period: "Completed in 2021",
  },
];

const AboutMe = () => {
  return (
    <div className="about-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="about-card"
      >
        <h2 className="about-header">About Me</h2>

        <p className="about-text">
          Hi, I'm <strong>Karansinh Desai</strong>, a passionate Computer
          Science Engineering student with a strong interest in{" "}
          <strong>Full Stack Web Development</strong>,{" "}
          <strong>Artificial Intelligence</strong>, and{" "}
          <strong>Machine Learning</strong>. I enjoy transforming ideas into
          real-world applications by building scalable web solutions and
          exploring intelligent technologies that solve practical problems.
        </p>

        <p className="about-text">
          My journey in technology has been driven by curiosity and
          continuous learning. From developing MERN Stack applications like{" "}
          <strong>RentConnect</strong> and an <strong>Ride Hailing Web Application</strong> to
          working on AI-powered projects such as an{" "}
          <strong>AI Resume ATS Scorer</strong> and a{" "}
          <strong>Text Summarizer</strong>, I love creating projects that
          combine innovation, functionality, and user experience.
        </p>

        <p className="about-text">
          I am proficient in JavaScript, Python, React.js, Node.js,
          Express.js, MongoDB, HTML, CSS, and REST APIs, with growing
          knowledge of Machine Learning, Deep Learning, and Generative AI. I
          also enjoy learning new technologies, solving coding challenges, and
          improving my problem-solving skills through hands-on development.
        </p>

        <p className="about-text">
          Currently, I am pursuing my B.Tech in Computer Science Engineering
          and actively seeking internship opportunities where I can apply my
          technical skills, collaborate with experienced developers, and
          contribute to impactful software and AI-driven solutions. My
          long-term goal is to become a Software Engineer specializing in
          Artificial Intelligence, building products that create meaningful
          real-world impact.
        </p>

        {/* --- Education Section --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="education-section"
        >
          <h3 className="education-header">Education</h3>

          <div className="education-cards">
            {educationHistory.map((edu, i) => (
              <motion.div
                key={i}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 0 25px rgba(0,255,200,0.15)",
                }}
                transition={{ duration: 0.3 }}
                className="edu-card"
              >
                {edu.icon}
                <div>
                  <h4 className="edu-title">{edu.title}</h4>
                  <p className="edu-institute">
                    <strong>{edu.institute}</strong>
                  </p>
                  <p className="edu-details">{edu.details}</p>
                  <p className="edu-details">{edu.period}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutMe;
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

/* Floating orb icons — core, logo-friendly technologies only.
   Everything else lives in the detailed grid below. */
const SKILLS = [
  { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "C++", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
  { name: "C", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
  { name: "HTML5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Express", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
  { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "AWS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" },
  { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain.svg" },
  { name: "TensorFlow", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
  { name: "PyTorch", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
];

/* Detailed skills grid — organized from your notes into a clean 3x3 layout. */
const ROWS = [
  [
    { title: "💻 Programming Languages", items: ["JavaScript", "Python", "C++", "C", "SQL"] },
    { title: "🌐 Frontend Development", items: ["HTML5", "CSS3", "JavaScript", "React.js", "Vite", "Responsive Web Design", "Framer Motion"] },
    { title: "⚙️ Backend Development", items: ["Node.js", "Express.js", "REST APIs", "JWT Authentication", "Socket.io", "FastAPI", "Flask"] },
  ],
  [
    { title: "🗄️ Databases & Tools", items: ["MongoDB", "MySQL", "Git", "GitHub", "AWS", "Postman", "VS Code", "ImageKit"] },
    { title: "🤖 AI / Machine Learning", items: ["Machine Learning", "Deep Learning", "Generative AI", "Natural Language Processing (NLP)", "Prompt Engineering", "Data Preprocessing", "Model Evaluation"] },
    { title: "📚 Frameworks & Libraries", items: ["React.js", "Express.js", "Node.js", "NumPy", "Pandas", "Scikit-learn", "TensorFlow (Basics)", "PyTorch (Basics)"] },
  ],
  [
    { title: "📖 CS Fundamentals", items: ["Data Structures & Algorithms", "Object-Oriented Programming (OOP)", "Database Management Systems (DBMS)", "Operating Systems", "Computer Networks", "Software Engineering", "Git Version Control"] },
    { title: "🧩 Soft Skills", items: ["Problem Solving", "Team Collaboration", "Communication", "Leadership", "Time Management", "Adaptability", "Continuous Learning"] },
    { title: "☁️ Currently Learning", items: ["Advanced MERN Stack", "Artificial Intelligence", "Large Language Models (LLMs)", "LangChain", "RAG Applications", "Docker", "AWS Cloud"] },
  ],
];

/* All styling lives here, inside the component file itself. No external
   Skills.css import — that kept failing to resolve / load in the project,
   so this removes the possibility entirely. */
const STYLES = `
.skills-container {
  background: #050505;
  padding: 60px 0 80px;
  width: 100%;
}
.skills-header {
  text-align: left;
  margin: 10px 0 12px 4%;
  padding: 0;
  max-width: calc(100% - 8%);
}
.skills-header h2 {
  font-size: 1.25rem;
  color: #382cec;
  font-weight: 600;
  margin: 0;
  line-height: 1.05;
}
.skills-header .underline {
  width: 60px;
  height: 2px;
  background: #382cec;
  margin: 6px 0 8px 0;
}
.skills-header p {
  color: #b0b0b0;
  font-size: 0.95rem;
  margin: 0;
  padding: 0;
}
.skills-stage {
  position: relative;
  width: 94%;
  max-width: 1200px;
  height: 360px;
  margin: 20px auto;
  border-radius: 14px;
  background: radial-gradient(circle at 50% 50%, #080808, #0f0f0f);
  box-shadow: inset 0 0 40px rgba(0, 255, 255, 0.08);
  overflow: hidden;
}
.skills-stage .skill-circle {
  position: absolute;
  top: 0;
  left: 0;
  box-sizing: border-box;
  width: 68px;
  height: 68px;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(0, 255, 255, 0.04);
  border: 1px solid rgba(0, 255, 255, 0.18);
  backdrop-filter: blur(6px);
  cursor: pointer;
  overflow: hidden;
  transition: transform 0.22s ease, box-shadow 0.22s ease, background 0.22s ease;
}
.skills-stage .skill-circle:hover {
  transform: scale(1.3);
  box-shadow: 0 0 35px 10px rgba(19, 23, 119, 0.6);
  background: rgba(0, 255, 255, 0.12);
  z-index: 5;
}
.skills-stage .skill-circle img {
  width: 28px;
  height: 28px;
  max-width: 28px;
  flex-shrink: 0;
  margin-bottom: 2px;
  filter: drop-shadow(0 0 6px rgba(0, 255, 255, 0.36)) brightness(1.1);
  object-fit: contain;
  transition: filter 0.3s ease, transform 0.3s ease;
}
.skills-stage .skill-circle:hover img {
  filter: drop-shadow(0 0 12px rgba(54, 40, 188, 0.9)) brightness(1.6);
  transform: rotate(6deg);
}
.skills-stage .skill-circle span {
  font-size: 10px;
  color: rgba(180, 255, 255, 0.9);
  line-height: 1;
  margin: 0;
  padding: 0;
  text-align: center;
  white-space: nowrap;
}
.skills-table {
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 94%;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
}
.skills-row {
  display: flex;
  justify-content: center;
  gap: 32px;
  flex-wrap: wrap;
}
.skill-box {
  background: linear-gradient(145deg, #080808 0%, #0f0f0f 100%);
  border: 1px solid rgba(0, 255, 255, 0.12);
  border-radius: 12px;
  padding: 18px 22px;
  width: 300px;
  text-align: left;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}
.skill-box:hover {
  border-color: rgba(0, 255, 255, 0.35);
  box-shadow: 0 0 25px rgba(0, 255, 255, 0.08);
}
.skill-box h3 {
  color: #382cec;
  font-size: 1rem;
  font-weight: 600;
  margin: 0 0 12px 0;
  letter-spacing: 0.2px;
}
.skill-box ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.skill-box li {
  color: rgba(200, 220, 220, 0.85);
  font-size: 0.85rem;
  line-height: 1.3;
  cursor: default;
  transition: color 0.2s ease, transform 0.2s ease;
}
.skill-box li:hover {
  color: #382cec;
  transform: translateX(6px);
}
@media (max-width: 768px) {
  .skills-stage { height: 280px; }
  .skills-stage .skill-circle { width: 56px; height: 56px; }
  .skills-stage .skill-circle img { width: 22px; height: 22px; max-width: 22px; }
  .skills-stage .skill-circle span { font-size: 9px; }
  .skill-box { width: 100%; max-width: 340px; }
}
`;

export default function Skills() {
  const stageRef = useRef();

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    const circles = Array.from(stage.querySelectorAll(".skill-circle"));
    const rect = stage.getBoundingClientRect();
    const placed = [];

    const isOverlapping = (x, y, size) =>
      placed.some((p) => {
        const dx = p.x - x;
        const dy = p.y - y;
        return Math.sqrt(dx * dx + dy * dy) < p.size / 2 + size / 2 + 24;
      });

    circles.forEach((circle) => {
      const size = circle.offsetWidth;
      let x, y, tries = 0;
      do {
        x = Math.random() * (rect.width - size - 20);
        y = Math.random() * (rect.height - size - 20);
        tries++;
      } while (isOverlapping(x, y, size) && tries < 150);

      placed.push({ x, y, size });
      circle.style.left = `${x}px`;
      circle.style.top = `${y}px`;

      const dx = (Math.random() - 0.5) * 60;
      const dy = (Math.random() - 0.5) * 60;
      circle.animate(
        [{ transform: "translate(0, 0)" }, { transform: `translate(${dx}px, ${dy}px)` }],
        {
          duration: 5000 + Math.random() * 2000,
          direction: "alternate",
          iterations: Infinity,
          easing: "ease-in-out",
        }
      );
    });
  }, []);

  return (
    <section className="skills-container" id="skills">
      <style>{STYLES}</style>

      {/* Header */}
      <motion.div
        className="skills-header"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2>My Skills</h2>
        <div className="underline"></div>
        <p>✨ Technical expertise blended with creativity — explore my core competencies below.</p>
      </motion.div>

      {/* Floating Orbs */}
      <motion.div
        className="skills-stage"
        ref={stageRef}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        {SKILLS.map((s, i) => (
          <motion.div
            key={s.name}
            className="skill-circle"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.08, duration: 0.6, ease: "easeOut" }}
          >
            <img src={s.logo} alt={s.name} width={28} height={28} />
            <span>{s.name}</span>
          </motion.div>
        ))}
      </motion.div>

      {/* Skills Table (Text Section) */}
      <div className="skills-table">
        {ROWS.map((row, rowIndex) => (
          <div key={rowIndex} className="skills-row">
            {row.map((col, colIndex) => (
              <motion.div
                key={col.title}
                className="skill-box"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                transition={{
                  duration: 0.6,
                  delay: (rowIndex + colIndex) * 0.1,
                }}
              >
                <h3>{col.title}</h3>
                <ul>
                  {col.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
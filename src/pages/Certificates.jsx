import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../CSS/Certificates.css";

const CERTS = {
  tech: [
        {
      title: "Problem Solving (Basic)",
      org: "HackRank",
      date: "August 2026",
      description:"Happy to share that I’ve earned the **Problem Solving (Basic) Certificate** from **HackerRank**! 🎉💻 This certification is another step toward improving my problem-solving, logical thinking, and coding skills. Looking forward to learning more, solving more challenges, and growing as a developer. 🚀 #HackerRank #ProblemSolving #Coding #DSA #Programming #Learning #CareerGrowth",
      img: "/certificate/problem_solving.jpg", // TODO: this is just a placeholder graphic — replace
      live: "https://www.hackerrank.com/certificates/iframe/484ec408d08e",
    },

    {
      title: "Software Engineer",
      org: "HackRank",
      date: "July 2026",
      description:"🎉 Excited to share that I have earned the Software Engineer Role Certification from HackerRank.This certification validates my software engineering skills, including problem-solving, coding, debugging, and building efficient solutions using core computer science concepts.I’m continuously learning, building projects, and strengthening my skills to become a better Software Engineer.#HackerRank #SoftwareEngineer #Programming #Coding #ProblemSolving ",
      img: "/certificate/1784965619435.jpg", // TODO: this is just a placeholder graphic — replace
      live: "https://www.hackerrank.com/certificates/iframe/fc39ff052334",
    },
        {
      title: "AI/ML",
      org: "Apna College",
      date: "July 2026",
      description:"🚀 Excited to share that I've successfully completed the Prime AI/ML Course from Apna College! 🎉 This journey strengthened my skills in AI, Machine Learning, Deep Learning, Generative AI, LLMs, NLP, RAG, Python, SQL, FastAPI, Flask, and AI-powered Full Stack Development through hands-on projects. It has enabled me to build end-to-end AI applications and strengthened my problem-solving skills. Looking forward to building impactful AI-powered solutions! 🚀",
      img: "/certificate/ChatGPT Image Jul 19, 2026, 12_19_31 PM.png", // TODO: this is just a placeholder graphic — replace
      live: "/certificate/ChatGPT Image Jul 19, 2026, 12_19_31 PM.png",
    },

    {
      title: "Node (Basic)",
      org: "HackerRank ",
      date: "June 2026",
      description:"🚀 Excited to share that I have successfully earned the HackerRank Node (Basic) Skill Certification. This certification validated my understanding of Node.js fundamentals, including server-side development concepts and backend programming basics. Continuing to strengthen my full-stack development journey by learning and building practical projects. #HackerRank #NodeJS #BackendDevelopment #WebDevelopment #FullStackDevelopment #Learning #SoftwareDevelopment",
      img: "/certificate/1781704731031.jpg", // TODO: this is just a placeholder graphic — replace
      live: "https://www.hackerrank.com/certificates/iframe/b58ebf460ff3",
    },

   {
      title: "Database Management System(part: 1)",
      org: "Infosys Springboard",
      date: "May 2026",
      description:"Proud to complete the Database Management System Part 1 certification from Infosys Springboard. Gained strong foundational knowledge in SQL, database design, normalization, relational models, and efficient data management practices. #Database #SQL #SoftwareDevelopment #Infosys",
      img: "/certificate/e3304b53-f502-4fae-8ff0-21f0565cd748 (1)_page-0001.jpg", // TODO: this is just a placeholder graphic — replace
      live: "https://infyspringboard.onwingspan.com/public-assets/infosysheadstart/cert/lex_auth_01275806667282022456_shared/e3304b53-f502-4fae-8ff0-21f0565cd748.pdf",
    },
        {
      title: "Database Management System(part: 2)",
      org: "Infosys Springboard",
      date: "May 2026",
      description: "Proud to complete the Database Management System Part 1 certification from Infosys Springboard. Gained strong foundational knowledge in SQL, database design, normalization, relational models, and efficient data management practices. #Database #SQL #SoftwareDevelopment #Infosys",
      img: "/certificate/1779953692001.jpg", // TODO: this is just a placeholder graphic — replace
      live: "https://infyspringboard.onwingspan.com/public-assets/infosysheadstart/cert/lex_auth_0127673005629194241_shared/775822f8-98a6-4a87-a5d9-8149c988119d.pdf",
    },
        {
      title: "Software Product Developer",
      org: "MSDE Skill India",
      date: "May 2026",
      description:"Successfully completed the Software Product Developer course from Skill India Digital Hub & NASSCOM. Learned key concepts including SDLC, UI/UX Design, Software Testing, Generative AI, and Software Development practices. 🚀 #SoftwareDeveloper #SkillIndia #NASSCOM",
      img: "/certificate/1778684794761.jpg", // TODO: this is just a placeholder graphic — replace
      live: "https://skill-india-dev.s3.ap-south-1.amazonaws.com/certificate_generic/uploaded_elements/2025091195235953/certificate_ec617c10-cb20-4be9-ab46-0bd354db5dee.pdf?response-content-disposition=inline&response-content-type=application%2Fpdf&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20260726T080900Z&X-Amz-SignedHeaders=host&X-Amz-Expires=2000&X-Amz-Credential=AKIA3OJCFBJTPLAN4OGU%2F20260726%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Signature=49d146c316a5bc202fd34947dbcfd342dba22c87be7e201a789b7de8e9ea9840",
    },
        {
      title: "Software Engineer Intern",
      org: "HackerRank",
      date: "April 2026",
      description:"🎉 Excited to share that I have earned the Software Engineer Intern Certification from HackerRank. This role certification validates my ability to solve real-world coding problems, apply data structures & algorithms, and build efficient, scalable solutions. This milestone strengthens my journey toward becoming a skilled Software Engineer. #SoftwareEngineering #HackerRank #DSA #Programming #Coding",
      img: "/certificate/1777116311352.jpg", // TODO: this is just a placeholder graphic — replace
      live: "https://www.hackerrank.com/certificates/iframe/d243acf92199",
    },
        {
      title: "Frontend Developer (React)",
      org: "HackerRank",
      date: "April 2026",
      description:"🎉 Excited to share that I have earned the Frontend Developer (React) Certification from HackerRank. This role certification validates my ability to build modern, responsive, and scalable frontend applications using React, including component-based architecture, hooks, state management, routing, and UI optimization. This achievement strengthens my journey toward becoming a full-stack and frontend-focused software engineer. #React #FrontendDevelopment #HackerRank #WebDevelopment #SoftwareEngineer",
      img: "/certificate/1776095053587.jpg", // TODO: this is just a placeholder graphic — replace
      live: "https://www.hackerrank.com/certificates/iframe/5f40b034788a",
    },
            {
      title: "AWS AI & ML Scholars - 2026 Challenge Completion",
      org: "Udacity",
      date: "April 2026",
      description:"🚀 Proud to complete the **AWS AI & ML Scholars 2026 Challenge**. Through this program, I strengthened my foundation in **Artificial Intelligence, Machine Learning, and cloud-based technologies** while expanding my practical knowledge of modern AI concepts. Grateful to **AWS** and **Udacity** for this valuable learning opportunity. #AWS #ArtificialIntelligence #MachineLearning #CloudComputing #Udacity #Tech #Learning",
      img: "/certificate/Screenshot 2026-07-26 135511.jpg", // TODO: this is just a placeholder graphic — replace
      live: "https://cdn.getblueshift.com/bee/images/ed5b8755-0989-4944-9ca5-287bb68e4a22/Challenge%20Completion%20Badge_Light.png",
    },
    {
      title: "React",
      org: "HackerRank",
      date: "April 2026",
      description:"🎉 Excited to share that I have earned the React (Basic) Certification from HackerRank. This certification validates my understanding of React fundamentals, reusable components, props, state management, hooks, and building interactive user interfaces. Looking forward to applying these skills in modern frontend and full-stack projects. #React #FrontendDevelopment #HackerRank #WebDevelopment #JavaScript",
      img: "/certificate/1775192782910.jpg", // TODO: this is just a placeholder graphic — replace
      live: "https://www.hackerrank.com/certificates/iframe/aee124efce1f",
    },
    {
      title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
      org: "Oracle",
      date: "March 2026",
      description:"🚀 Excited to share that I have earned the Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate certification from Oracle University. This certification strengthened my understanding of Artificial Intelligence fundamentals, machine learning concepts, and cloud-based AI services on Oracle Cloud Infrastructure (OCI). Looking forward to applying these skills in AI-driven applications and cloud technologies as I continue my learning journey.",
      img: "/certificate/1773414547725.jpg", // TODO: this is just a placeholder graphic — replace
      live: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=E62DC3767FE042D9F59BB8DAE60B9E3823A13F02B5779D0E2A16914FD828E6C4",
    },
            {
      title: "SQL (Advanced)",
      org: "HackerRank",
      date: "March 2026",
      description:"🎉 Excited to share that I have earned the SQL (Advanced) Certification from HackerRank. This certification validates my ability to work with advanced SQL concepts such as complex queries, joins, subqueries, window functions, and data analysis techniques. Looking forward to applying these skills in data-driven applications and backend development. #SQL #HackerRank #DataEngineering #Database #Programming",
      img: "/certificate/1773496701742.jpg", // TODO: this is just a placeholder graphic — replace
      live: "https://www.hackerrank.com/certificates/iframe/45d5423af5b4",
    },
        {
      title: "Certificate of Completion: Al Fluency Framework & Foundations",
      org: "Anthropic",
      date: "March 2026",
      description:"🎉 Proud to share that I have successfully completed the AI Fluency: Framework & Foundations course offered by Anthropic. This program enhanced my understanding of AI fundamentals, responsible AI practices, prompt engineering, and practical frameworks for working with modern AI systems. It has strengthened my foundation in Generative AI and prepared me to apply AI effectively in real-world projects. Looking forward to continuing my AI learning journey and building impactful AI-powered solutions.",
      img: "/certificate/certificate-iby7py623pjb-1773157402.jpg", // TODO: this is just a placeholder graphic — replace
      live: "https://verify.skilljar.com/c/iby7py623pjb",
    },
        {
      title: "Certificate of completion: Claude 101",
      org: "Anthropic",
      date: "March 2026",
      description:"🚀 Excited to share that I have successfully completed the Claude 101 course offered by Anthropic. This course strengthened my understanding of Claude AI, prompt engineering fundamentals, responsible AI usage, and effective interaction with large language models. I'm excited to apply these concepts to build smarter AI-powered applications and continue expanding my knowledge in Generative AI. Grateful to Anthropic for this valuable learning opportunity.",
      img: "/certificate/certificate-6mm634mkra97-1773155889.jpg", // TODO: this is just a placeholder graphic — replace
      live: "https://verify.skilljar.com/c/6mm634mkra97",
    },
            {
      title: "CS250: Python for Data Science",
      org: "Saylor University",
      date: "March 2026",
      description:"Happy to share that I have successfully completed CS250: Python for Data Science from Saylor Academy. This 67-hour course helped me strengthen my understanding of Python for data analysis, data processing, and data science concepts, and I achieved a 95.43% score in the course. Excited to continue exploring data science and AI applications using Python. 🚀 #Python #DataScience #SaylorAcademy #MachineLearning #Programming",
      img: "/certificate/Screenshot 2026-07-26 143758.jpg", // TODO: this is just a placeholder graphic — replace
      live: "https://learn.saylor.org/pluginfile.php/1/tool_certificate/issues/1772373318/0204724390KD.pdf",
    },
     {
      title: "Web Design & Development course",
      org: "National Skill Development Corporation",
      date: "March 2026",
description:"Happy to share that I have successfully completed the Web Design & Development course offered by NSDC through Skill India Digital Hub (SIDH). This course helped me strengthen my understanding of web development fundamentals and modern web design concepts. Looking forward to applying these skills while building more web projects. 🚀 #WebDevelopment #WebDesign #SkillIndia #NSDC #Learning",
      img: "/certificate/certificate_0e985123-f259-488a-9a41-a316980ea081_page-0001.jpg", // TODO: this is just a placeholder graphic — replace
      live: "https://skill-india-dev.s3.ap-south-1.amazonaws.com/certificate_generic/uploaded_elements/2025091195235953/certificate_0e985123-f259-488a-9a41-a316980ea081.pdf?response-content-disposition=inline&response-content-type=application%2Fpdf&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20260726T091512Z&X-Amz-SignedHeaders=host&X-Amz-Expires=2000&X-Amz-Credential=AKIA3OJCFBJTPLAN4OGU%2F20260726%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Signature=9ed3da6d8ecea540c87f2aa04d3a9db69c5eaadd1e4f6256dd0c28845eec886b",
    },
        {
      title: "SQL (Intermediate)",
      org: "HackerRank",
      date: "March 2026",
      description:"Proud to share that I’ve earned the SQL (Intermediate) Certification from HackerRank 📊🚀 This certification validates my ability to work with more advanced SQL concepts such as joins, subqueries, aggregations, and complex data queries. Excited to continue strengthening my database and data-handling skills. #SQL #Database #HackerRank #DataSkills #Programming",
      img: "/certificate/1772902919720.jpg", // TODO: this is just a placeholder graphic — replace
      live: "https://www.hackerrank.com/certificates/iframe/b81dcb48f2cd",
    },
        {
      title: "SQL (Basic)",
      org: "HackerRank",
      date: "March 2026",
      description : "Excited to share that I’ve earned the SQL (Basic) Certification from HackerRank 📊✅ This certification validates my understanding of essential SQL concepts including SELECT queries, filtering, sorting, joins, and basic data manipulation. Looking forward to enhancing my database skills further. #SQL #HackerRank #Data #Programming #Database",
      img: "/certificate/1772464437796.jpg", // TODO: this is just a placeholder graphic — replace
      live: "https://www.hackerrank.com/certificates/iframe/22ad9f724659",
    },
            {
      title: "Unlocking AI for Everyone",
      org: "National Council for Vocational Education and Training (NCVET), MSDE, Government of India",
      date: "February 2026",
      description:"Happy to share that I have completed the “Unlocking AI for Everyone (Beginner)” certification recognized under the National Skills Qualification Framework (NSQF) and supported by Microsoft CSR initiatives. This program helped me understand the fundamentals of Artificial Intelligence and its real-world applications. Excited to continue learning and exploring the world of AI and emerging technologies. 🚀 #ArtificialIntelligence #AI #Microsoft #SkillDevelopment #Learning",
      img: "/certificate/certificate_658a7e4d-dadd-4922-8f22-9593b904f690_page-0001.jpg", // TODO: this is just a placeholder graphic — replace
      live: "https://api-fe.skillindiadigital.gov.in/api/registry-course/getCertificatePresignedUrl/2025091195235953-658a7e4d-dadd-4922-8f22-9593b904f690",
    },
      {
      title: " JavaScript (Intermediate)",
      org: "HackerRank",
      date: "February 2026",
      description:"Proud to share that I’ve earned the JavaScript (Intermediate) Certification from HackerRank 🚀 This certification validates my skills in advanced JavaScript concepts including asynchronous programming, closures, scopes, data structures, and problem-solving. Excited to continue strengthening my frontend development journey. #JavaScript #HackerRank #FrontendDevelopment #WebDevelopment #Programming",
      img: "/certificate/1771598977579.jpg", // TODO: this is just a placeholder graphic — replace
      live: "https://www.hackerrank.com/certificates/iframe/7655bb0d81df",
    },
            {
      title: "JavaScript Basic",
      org: "HackerRank",
      date: "February 2026",
      description:"🎉 Earned the JavaScript Certification from HackerRank This certification validates my understanding of JavaScript fundamentals including variables, functions, loops, arrays, and basic problem-solving concepts. Excited to continue building dynamic and interactive web applications using JavaScript. #JavaScript #HackerRank #WebDevelopment #Frontend #Programming",
      img: "/certificate/1770989018757.jpg", // TODO: this is just a placeholder graphic — replace
      live: "https://www.hackerrank.com/certificates/iframe/631b15d5cc44",
    },
        {
      title: "CSS",
      org: "HackerRank",
      date: "January 2026",
      description:"🎉 Earned CSS Certification from HackerRank This certification validates my understanding of CSS fundamentals, styling, and layout concepts. I also have good knowledge of HTML and regularly practice building webpages using HTML & CSS together to create clean and responsive designs. Looking forward to strengthening my frontend development skills further. #CSS #HTML #HackerRank #FrontendDevelopment #WebDevelopment #Learning",
      img: "/certificate/1770989117609.jpg",
      live: "https://www.hackerrank.com/certificates/iframe/4ab2e7114a0d",
    },
      {
      title: "Python",
      org: "HackerRank",
      date: "December 2025",
      description:"🎉 Earned Python (Basic) Certification from HackerRank Successfully validated my Python fundamentals including data types, control flow, collections, iteration, and basic OOP concepts. 📌 Looking forward to applying these skills in real-world problem solving and advancing further in Python & DSA. #Python #HackerRank #Programming #Certification #Learning #SoftwareDevelopment",
      img: "/certificate/1770989176970.jpg",
      live: "https://www.hackerrank.com/certificates/iframe/c3f9dbfb2dcf",
    },
        {
      title: "AWS - Solutions Architecture Job Simulation",
      org: "Forage",
      date: "December 2025",
      description:"Glad to share that I have successfully completed the AWS Solutions Architecture Job Simulation on Forage. This experience strengthened my understanding of designing simple, scalable, and cost-effective cloud hosting architectures using AWS services. Grateful for the hands-on learning and real-world exposure!",
      img: "/certificate/1766120163410.jpg",
      live: "https://www.theforage.com/completion-certificates/pmnMSL4QiQ9JCgE3W/kkE9HyeNcw6rwCRGw_pmnMSL4QiQ9JCgE3W_642QMe5WbNLxBcTxi_1766076496900_completion_certificate.pdf",
    },
        {
      title: "Generative Al Mastermind",
      org: "Outskill",
      date: "November 2025",
      description:"Earned the Generative AI Mastermind certification from Outskill, validating my expertise in advanced generative AI concepts. Looking forward to applying these skills in real-world projects and innovation.",
      img: "/certificate/1762352746566.jpg",
      live: "/certificate/1762352746566.jpg",
    },
        {
      title: "Python Fundamentals",
      org: "Infosys Springboard",
      date: "November 2025",
      description:"💻 I’m pleased to share that I have completed the Python Fundamentals course on Infosys Springboard. This learning experience reinforced my understanding of Python programming, strengthened my coding practices, and improved my confidence in developing real-world applications. Continuous learning is an essential part of my journey, and I look forward to leveraging these skills in Full Stack Development, AI, and software",
      img: "/certificate/1-8b233646-9ed4-4ad2-ae84-d34e508857d7 (1)_page-0001.jpg",
      live: "https://infyspringboard.onwingspan.com/public-assets/infosysheadstart/cert/lex_auth_0130944398173634562594_shared/1-8b233646-9ed4-4ad2-ae84-d34e508857d7.pdf",
    },
        {
      title: "Programming Fundamentals using Python – Part 2",
      org: "Infosys Springboard",
      date: "October 2025",
      description:"🌟 Delighted to announce that I have successfully completed Programming Fundamentals using Python – Part 2 on Infosys Springboard. This course expanded my understanding of Python by introducing more advanced programming concepts, improving my problem-solving abilities, and encouraging me to write cleaner and more efficient code. Every learning milestone brings me one step closer to becoming a skilled Software Engineer, and I am excited to continue building innovative applications with Python.",
      img: "/certificate/1-f4effa3b-a7d0-45c3-90c6-213d9da51387_page-0001.jpg",
      live: "https://infyspringboard.onwingspan.com/public-assets/infosysheadstart/cert/lex_auth_012734003600908288382_shared/1-f4effa3b-a7d0-45c3-90c6-213d9da51387.pdf",
    },
        {
      title: "Programming Fundamentals using Python – Part 1",
      org: "Infosys Springboard",
      date: "September 2025",
      description:"🎉 Happy to share that I have completed Programming Fundamentals using Python – Part 1 on Infosys Springboard. Through this course, I gained hands-on knowledge of Python fundamentals, including writing efficient code, decision-making, loops, functions, and structured programming. The practical exercises enhanced my logical thinking and coding confidence, motivating me to continue exploring Python for software development and automation.",
      img: "/certificate/1-591dc889-1500-44ce-b693-7d0f24954aa6_page-0001.jpg",
      live: "https://infyspringboard.onwingspan.com/public-assets/infosysheadstart/cert/lex_auth_0125409616243425281061_shared/1-591dc889-1500-44ce-b693-7d0f24954aa6.pdf",
    },
        {
      title: "Fundamentals of Python Programming",
      org: "Infosys Springboard",
      date: "September 2025",
      description:"🚀 Excited to share that I have successfully completed the Fundamentals of Python Programming course on Infosys Springboard. This course helped me build a strong foundation in Python by covering core programming concepts, syntax, variables, data types, operators, control statements, functions, and problem-solving techniques. It has strengthened my programming skills and provided a solid base for learning advanced technologies like Full Stack Development, Data Science, and Artificial Intelligence. Looking forward to applying these skills in real-world projects.",
      img: "/certificate/1-330aa175-edbe-485e-b2f2-fbb8b038fc1d_page-0001.jpg",
      live: "https://infyspringboard.onwingspan.com/public-assets/infosysheadstart/cert/lex_auth_0138417469820436482586_shared/1-330aa175-edbe-485e-b2f2-fbb8b038fc1d.pdf",
    },

            {
      title: "ReactJS",
      org: "Infosys Springboard",
      date: "August 2025",
      description:"Thrilled to announce that I have successfully completed the intensive 62-hour ReactJS course from Infosys Springboard! 🚀 This program challenged me to dive deep into modern front-end development, covering essential concepts such as component-based architecture, hooks, state management, and more. Over 62 hours, I gained not just technical knowledge, but also hands-on experience building dynamic and interactive web applications. A big thank you to Infosys Springboard for this fantastic learning",
      img: "/certificate/1756712146812.jpg",
      live: "/certificate/1756712146812.jpg",
    },
            {
      title: "Skyscanner - Front-End Software Engineering Job Simulation",
      org: "Forage",
      date: "August 2025",
      description:"Excited to share the completion of Skyscanner’s Front-End Software Engineering Job Simulation with Forage! This program helped me strengthen my React skills by creating a Backpack web app—enhancing my understanding of modern front-end development. It provided hands-on experience in building interactive user interfaces and writing clean, efficient code. Grateful for the opportunity to learn alongside industry experts and further expand my web development toolkit. Looking forward to applying these",
      img: "/certificate/1756712041728.jpg",
      live: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/skoQmxqhtgWmKv2pm/km4rw7dihDr3etqom_skoQmxqhtgWmKv2pm_642QMe5WbNLxBcTxi_1755349914940_completion_certificate.pdf",
    },
            {
      title: "MongoDB - The complete MongoDB developers Course",
      org: "Udemy",
      date: "August 2025",
      description:"Happy to share that I’ve successfully completed MongoDB - The Complete MongoDB Developers Course on Udemy. Strengthening my skills in NoSQL databases and excited to apply this knowledge in real-world projects.🚀 #MongoDB #DatabaseDevelopment #LearningJourney #Udemy",
      img: "/certificate/1756287074965.jpg",
      live: "https://www.udemy.com/certificate/UC-1b376275-fbae-4850-99b0-c16add23978d/",
    },
            {
      title: "Accenture Nordics - Software Engineering Job Simulation",
      org: "Forage",
      date: "August 2025",
      description:"Thrilled to announce the successful completion of Accenture’s Software Engineering Job Simulation with Forage! This immersive program sharpened my skills in architecture, security, programming, testing, and agile methodologies through hands-on tasks. The experience gave me practical exposure to the key aspects of modern software development and boosted my confidence in tackling real-world technical challenges. Grateful to Accenture and Forage for providing such valuable learning opportunities.",
      img: "/certificate/1756711658168.jpg",
      live: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/xhih9yFWsf6AYfngd/HNpZwZcuYwona2d8Y_xhih9yFWsf6AYfngd_642QMe5WbNLxBcTxi_1755348818707_completion_certificate.pdf",
    },
    {
      title: "JavaScript",
      org: "Infosys Springboard",
      date: "July 2025",
      description:"Excited to share that I have successfully completed the JavaScript course from Infosys Springboard! Looking forward to applying these new skills in real-world projects and continuing my journey in web development. Thank you, Infosys, for this opportunity! #JavaScript #Infosys #WebDevelopment #ContinuousLearning.",
      img: "/certificate/1756712239961.jpg",
      live: "/certificate/1756712239961.jpg",
    },

            {
      title: "CSS3",
      org: "Infosys Springboard",
      date: "June 2025",
      description:"Successfully completed the CSS3 course from Infosys Springboard. This course helped me strengthen my understanding of modern web design principles including styling, layouts, responsive design, and visual enhancements — an essential step forward in my frontend development journey.",
      img: "/certificate/1750396086397.jpg",
      live: "/certificate/1750396086397.jpg",
    },
            {
      title: "HTML5 – The Language",
      org: "Infosys Springboard",
      date: "May 2025",
      description:"Successfully completed the HTML5 – The Language course offered by Infosys Springboard. This course helped me gain a strong understanding of HTML5 elements, structure, semantics, and best practices — forming a solid foundation for frontend web development.",
      img: "/certificate/1750395975403.jpg",
      live: "/certificate/1750395975403.jpg",
    },
                {
      title: "Mastering Python",
      org: "Infosys Springboard",
      date: "January 2025",
      description:"Completed a comprehensive course on Python programming through Infosys Springboard. Gained hands-on experience in Python syntax, data structures, and algorithms, equipping me with the skills to develop efficient Python applications and solve complex programming problems.",
      img: "/certificate/1736519700162.jpg",
      live: "/certificate/1736519700162.jpg",
    },
                {
      title: "BCG - GenAI Job Simulation",
      org: "Forage",
      date: "January 2025",
      description:"🚀 Excited to share that I have successfully completed the GenAI Job Simulation offered by BCG X through Forage! During this virtual experience, I worked on practical tasks involving data extraction, data analysis, and the development of an AI-powered financial chatbot, gaining valuable insights into how Generative AI is applied to solve real-world business challenges. This experience strengthened my problem-solving skills and enhanced my understanding of AI-driven solutions in the consulting and technology domain. Looking forward to applying these learnings in future projects and continuing my journey in AI and software development.",
      img: "/certificate/1756711109652.jpg",
      live: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/SKZxezskWgmFjRvj9/gabev3vXhuACr48eb_SKZxezskWgmFjRvj9_642QMe5WbNLxBcTxi_1736910960674_completion_certificate.pdf",
    },
                {
      title: "Electronic Arts - Software Engineering Job Simulation",
      org: "Forage",
      date: "January 2025",
      description:"Thrilled to have completed the EA Software Engineering Job Simulation with Forage! This hands-on experience allowed me to enhance my skills by writing feature proposals, creating game object classes, improving inventory systems, and tackling live bugfixes. Excited to bring these practical skills to future tech challenges! ",
      img: "/certificate/1756711026731.jpg",
      live: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/j43dGscQHtJJ57N54/a77WE3de8qrxWferQ_j43dGscQHtJJ57N54_642QMe5WbNLxBcTxi_1736840765152_completion_certificate.pdf",
    },
    {
  title: "Getting Started with Artificial Intelligence",
  org: "IBM SkillsBuild",
  date: "October 2024",
  description:
    "Completed IBM SkillsBuild's 'Getting Started with Artificial Intelligence' course, gaining foundational knowledge of AI concepts, machine learning basics, real-world AI applications, and intelligent systems.",
  img: "/certificate/aa (1).jpg",
  live: "https://www.credly.com/go/2GPotzYR"
},
{
  title: "Getting Started with Artificial Intelligence (Digital Badge)",
  org: "IBM SkillsBuild",
  date: "October 2024",
  description:
    "Earned the IBM SkillsBuild digital badge after successfully completing the 'Getting Started with Artificial Intelligence' learning path, demonstrating foundational AI knowledge and commitment to continuous learning.",
  img: "/certificate/aa (2).jpg",
  live: "https://www.credly.com/go/2GPotzYR"
},
            {
      title: "CSS properties",
      org: "Great Learning",
      date: "September 2024",
      description:"Excited to share that I have completed the CSS Properties course from Great Learning Academy! This journey has helped me deepen my understanding of web design essentials and sharpen my ability to style digital interfaces. I truly enjoyed learning new techniques and applying advanced CSS concepts to improve the look and feel of web projects.",
      img: "/certificate/1756711167995.jpg",
      live: "https://www.mygreatlearning.com/certificate/MCXXEUYB",
    },

            {
      title: "Introduction to HTML",
      org: "Simplilearn",
      date: "April 2024",
      description:"🚀 Excited to share that I have successfully completed the Introduction to HTML course from Simplilearn SkillUp. This course strengthened my understanding of the fundamentals of web development, including HTML structure, semantic elements, forms, tables, links, images, and page layouts. It has provided a strong foundation for building responsive websites and has motivated me to continue enhancing my frontend development skills. Looking forward to applying these concepts in real-world web development projects. #Simplilearn #SkillUp #HTML #WebDevelopment",
      img: "/certificate/_Introduction_to_HTML_.jpg",
      live: "",
    },
            {
      title: "Learn Advanced C++ Course Online",
      org: "Simplilearn",
      date: "April 2024",
      description:"🌟 Delighted to announce that I have successfully completed the Learn Advanced C++ course from Simplilearn SkillUp. This course expanded my knowledge of advanced C++ concepts, object-oriented programming, memory management, and efficient coding practices while improving my problem-solving and programming skills. Every new certification brings me closer to becoming a better Software Engineer, and I look forward to applying these advanced concepts in competitive programming and real-world software development projects.",
      img: "/certificate/20240403_090912_0000.png",
      live: "",
    },
                {
      title: "Introduction to C++",
      org: "Simplilearn",
      date: "April 2024",
      description:"🎉 Happy to share that I have successfully completed the Introduction to C++ course from Simplilearn SkillUp. Through this course, I strengthened my understanding of C++ programming fundamentals, including variables, data types, operators, control statements, functions, arrays, and object-oriented programming basics. This learning experience enhanced my logical thinking and problem-solving abilities, providing a solid foundation for software development and data structures. Excited to continue my programming journey with more advanced concepts.",
      img: "/certificate/20240330_135021_0000.png",
      live: "",
    },
                {
      title: "C programming",
      org: "Great Learning",
      date: "October 2023",
      description:"Proud to complete the C Programming in Hindi course from Great Learning Academy! This certification has strengthened my foundation in core programming concepts and hands-on coding with C language. Learning in Hindi made complex topics accessible and enjoyable, helping me solve problems more effectively and increase my programming confidence. Grateful for the opportunity to upgrade my technical skills and take a step closer toward building robust applications.",
      img: "/certificate/1756711372280.jpg",
      live: "https://www.mygreatlearning.com/certificate/FGGUIPYN",
    },

  ],



  Internship: [
        {
  title: "Virtual Internship - Generative AI, Deep Learning & Language Models.",
  org: "EduSkills | AICTE | National Internship Portal",
  date: "August 2026",
  description:"🎉 Proud to share that I have successfully completed the AICTE–EduSkills Virtual Internship in Generative AI, Deep Learning & Language Models. During this internship, I gained hands-on experience in PyTorch, Transformers, Hugging Face, LoRA, QLoRA, RAG, Vector Databases, AI Agents, and Prompt Engineering. Grateful to AICTE, EduSkills Academy, and my institution for this valuable learning opportunity. 🚀",
  img: "/certificate/Generative AI, Deep Learning & Language Models Virtual Internship_page-0001.jpg",
  live: "https://certificate.eduskillsfoundation.org/verify/418e9586b9890dd7716d/418e9586b9890dd7716d",
},
    {
  title: "Virtual Internship - Python Full Stack Development",
  org: "EduSkills | AICTE | National Internship Portal",
  date: "March 2026",
  description:
    "Successfully completed the 10-week Python Full Stack Development with Project Virtual Internship under AICTE and EduSkills, gaining hands-on experience in frontend, backend, databases, and project development.",
  img: "/certificate/Python_Full_Stack_Development_With_Project_Virtual_Internship_page-0001.jpg",
  live: "https://certificate.eduskillsfoundation.org/verify/4ca591fa6b0106a790fe/4ca591fa6b0106a790fe",
},
{
  title: "Virtual Internship - AI & Machine Learning",
  org: "Google for Developers | EduSkills | AICTE",
  date: "June 2026",
  description:
    "Successfully completed the 8-week AI-ML Virtual Internship supported by Google for Developers, AICTE, and EduSkills, strengthening practical knowledge in Artificial Intelligence, Machine Learning, and industry-focused applications.",
  img: "/certificate/AI-ML Virtual Internship_page-0001.jpg",
  live: "https://certificate.eduskillsfoundation.org/verify/4468a52fd956d4c78081/4468a52fd956d4c78081",
},
    {
  title: "Offer Letter - Zaalima Development",
  org: "Zaalima Development Pvt. Ltd.",
  date: "March 2026",
  description:
    "Received an Internship Offer Letter from Zaalima Development Pvt. Ltd. for the Web Development Internship Program. The internship provides industry exposure, real-world project experience, remote collaboration, and opportunities to strengthen web development skills.",
  img: "/certificate/Screenshot_20260323_202041.jpg",
  live: "",
},
{
  title: "Course Completion - Artificial Intelligence & Machine Learning",
  org: "Microsoft Elevate | AICTE",
  date: "February 2026",
  description:
    "Successfully completed the 20-hour Artificial Intelligence & Machine Learning course under the Microsoft Elevate Internship Program in collaboration with AICTE, covering AI fundamentals and practical machine learning concepts.",
  img: "/certificate/1772954095345.jpg",
  live: "",
},
{
  title: "Certificate of Appreciation - Oasis Infobyte",
  org: "Oasis Infobyte",
  date: "February 2025",
  description:
    "Awarded the Star Performer Certificate of Appreciation by Oasis Infobyte for exceptional dedication, outstanding performance, and valuable contributions during the AICTE Web Development Internship.",
  img: "/certificate/Karansinh Rajendra Desai Certificate_page-0001.jpg",
  live: "",
},
{
  title: "Internship Completion Certificate - Oasis Infobyte",
  org: "Oasis Infobyte",
  date: "February 2025",
  description:
    "Successfully completed the 1-month AICTE OIB-SIP Internship in Web Development and Designing, gaining practical experience in frontend development, responsive web design, and real-world project implementation.",
  img: "/certificate/Karansinh Rajendra Desai Certificate-1_page-0001.jpg",
  live: "",
},
    {
  title: "Offer Letter - Cognifyz Technologies",
  org: "Cognifyz Technologies",
  date: "January 2025",
  description:
    "Received an Internship Offer Letter for the Front-end Development Intern position at Cognifyz Technologies. The internship focuses on responsive web development, UI design, and building user-friendly interfaces using modern frontend technologies while gaining practical industry experience.",
  img: "/certificate/Karansinh Rajendra Desai (5)_page-0001.jpg",
  live: "",
},
     {
  title: "Offer Letter - Oasis Infobyte",
  org: "Oasis Infobyte",
  date: "January 2025",
  description:
    "Selected as a Web Development and Designing Intern at Oasis Infobyte. The internship offers hands-on experience in web development, frontend design, practical project implementation, and learning modern development practices in a professional environment.",
  img: "/certificate/Karansinh Rajendra Desai Offer Letter_page-0001.jpg",
  live: "",
},

  ],




  other: [
        {
      title: "TENZOR National Ai Hacthon",
      org: "Poonawalla Fincorp",
      date: "July 2026",
      description:"🚀 Excited to share that I participated in the TenzorX National AI Hackathon 2026, organized by Poonawalla Fincorp in collaboration with Unstop.This hackathon provided an excellent opportunity to explore AI-driven problem solving, collaborate with innovative minds, and gain exposure to real-world challenges in Artificial Intelligence and Machine Learning. Grateful for this learning experience and looking forward to participating in more innovation and AI-focused competitions in the future.",
      img: "/certificate/1784306656721.jpg", // TODO: this is just a placeholder graphic — replace
      live: "https://pfl-personalized-creatives.poonawallafincorp.com/creatives_20260713_112657/11004.jpg?Expires=1785153772&Signature=kRDPt~91IeJwUevCkRP0mNUHKSw8ySK9py9-YvnUH-u~xnUud-ixy~VfMJKWHF0yyapwXIZyGcbO40TDT2QLbHlEL9AyFuKcBatcKROj39Ilroidf3KexvQL47iOA5GolIAoCE18w34-OKYnUNZ-ZaNEX2sDNmROgDuQcQoWr2CXwW4pGoEg2tA75ldaT6d5aSGFvwmUvSUmBLuX2IXL7RNTPmSFQWVfqVPEDm5mYLPOob5Z5byg5vNES1WQ~3l5RjHC9Wt4jF0f4omvLkvT~tm1u1557KeL85h58n7O~4fPv96QJF90YuFXydoId8izgYMoJZS-T4WWvKJZLOhhkg__&Key-Pair-Id=K28PI5P91POVR4",
    },

    {
      title: "Certificate of Participation in Executive Submission Round of Eureka Challenge 3.0",
      org: "Unstop",
      date: "June 2026",
      description:"Proud to participate in Eureka Challenge 3.0 – Executive Submission Round organized by Varroc. A great experience to explore innovation, technical thinking, and solution design while competing with talented participants. #Hackathon #Innovation #Varroc #Engineering",
      img: "/certificate/1781027803453.jpg", // TODO: this is just a placeholder graphic — replace
      live: "https://unstop.com/certificate-preview/347e5d5e-b65c-4433-9f96-15e381be2d07?utm_campaign=",
    },
        {
      title: "IndiaSkills Competition 2025-26 (Web Technologies)",
      org: "MSDE Skill India",
      date: "February 2026",
      description:"Proud to share my Certificate of Participation from the Maharashtra State Skills Competition – IndiaSkills 2025 in the Web Technologies trade, held at Don Bosco Centre for Learning, Kurla, Mumbai. 🚀 This experience strengthened my practical skills in web development, problem-solving, UI design, and real-time project execution under competition pressure. Grateful for this opportunity and excited for the journey ahead! 💻🏆 #IndiaSkills2025 #WebDevelopment #MSSDS #SkillIndia",
      img: "/certificate/IMG-20260204-WA0050.jpg", // TODO: this is just a placeholder graphic — replace
      live: "/certificate/IMG-20260204-WA0050.jpg",
    },

        {
      title: "Inter-Institutional Innovation Hackathon",
      org: "AMGOI",
      date: "February 2026",
      description:"Participated in an Innovation Hackathon on Sustainable Development, where our team proposed “AI-Powered Urban Air Quality Digital Twin Network.” The concept focuses on integrating IoT sensors, AI forecasting models, and real-time visualization dashboards to monitor and predict urban air pollution",
      img: "/certificate/1772955500124.jpg", // TODO: this is just a placeholder graphic — replace
      live: "/certificate/1772955500124.jpg",
    },
            {
      title: "Naukri Campus Young Turks 2025",
      org: "Naukri.com",
      date: "September 2025",
      description:"Thrilled to share that I have secured a 96.08 percentile in the Aptitude Test (Round 1) of Naukri Campus Young Turks 2025 – India’s largest skill contest. Honored to receive this Certificate of Merit and excited to move ahead to the next round with continued learning and growth!",
      img: "/certificate/young_turks25_round_1_achievement_page-0001.jpg",
      live: "https://www.naukri.com/campus/certificates/young_turks25_round_1_achievement/v0/68d9c914782243438972c7aa?utm_source=certificate&utm_medium=share&utm_campaign=68d9c914782243438972c7aa",
    },
      {
      title: "Introduction to Computers",
      org: "Spoken Tutorial, EduPyramids, SINE, IIT Bombay",
      date: "June 2025",
      description:"Proud to have successfully completed the Introduction to Computers training with full marks through the Spoken Tutorial Project developed at IIT Bombay. This foundational course has deepened my understanding of core computer concepts and strengthened my journey as a Computer Science student. #SpokenTutorial #IITBombay #Certificate #ComputerScience #LearningJourney #LinkedInCertificates #EngineeringStudent",
      img: "/certificate/1750498560837.jpg",
      live: "/certificate/1750498560837.jpg",
    },
    {
  title: "Dr. B.R. Ambedkar Quiz 2025",
  org: "Ministry of Social Justice & Empowerment, Government of India",
  date: "2025",
  description:
    "Participated in the Dr. B.R. Ambedkar Quiz 2025 organized by the Ministry of Social Justice & Empowerment through MyGov, enhancing knowledge about the life, vision, and contributions of Dr. B.R. Ambedkar.",
  img: "/certificate/certificate.jpg",
  live: "",
},

        {
      title: "Coding War",
      org: "AMGOI",
      date: "September 2024",
      description:"Proud to have participated in the Coding War event at TECHFEST 2K24. It was a fantastic opportunity to test my problem-solving skills and compete with some of the brightest minds in the field of programming. This experience has further strengthened my coding proficiency.",
      img: "/certificate/Karansinh Rajendra Desai (1)_page-0001.jpg",
      live: "",
    },

    {
      title: "General Aptitude Challenge",
      org: "AMGOI",
      date: "September 2024",
      description:"I participated in the General Aptitude Challenge at TECHFEST 2K24. This event sharpened my logical reasoning and quantitative skills, preparing me to tackle complex challenges in future projects.",
      img: "/certificate/Karansinh Rajendra Desai (3)_page-0001.jpg",
      live: "",
    },
        {
      title: "Paper Presentation",
      org: "AMGOI",
      date: "September 2024",
      description:"Presented my research at TECHFEST 2K24’s Paper Presentation event. This experience helped me hone my public speaking and technical presentation skills, which are essential in both academic and professional settings.",
      img: "/certificate/1727867766556.jpg",
      live: "",
    },
        {
      title: "Maths Marathon",
      org: "AMGOI",
      date: "September 2024",
      description:"Participated in the Maths Marathon event at TECHFEST 2K24, where I tackled advanced mathematical problems. This competition tested my analytical thinking and mathematical abilities.",
      img: "/certificate/Karansinh Rajendra Desai (2)_page-0001.jpg",
      live: "",
    },
        {
      title: "Code Quest Carnival",
      org: "Government college of engineering kolhapur",
      date: "March 2024",
      description:"Aarambha 2K24 (Code Quest Carnival): Proud to have taken part in the Aarambha 2K24 technical event. Participating in the Code Quest Carnival was a great way to push my coding skills and collaborate with like-minded peers. ",
      img: "/certificate/Aarambha 2K24.jpg",
      live: "",
    },
    {
  title: "Placement Preparation Programme",
  org: "Indian Institute of Placement & Abhyuday IIT Bombay",
  date: "March 2024",
  description:
    "Successfully attended a 2-day Placement Preparation Programme organized by the Indian Institute of Placement in association with Abhyuday IIT Bombay, gaining insights into aptitude, interview preparation, communication skills, and career readiness.",
  img: "/certificate/20240407_184651_0000.png",
  live: "",
},
        {
      title: "Speak for India - Maharashtra Edition (District Level)",
      org: "Speak For India",
      date: "January 2024",
      description:"Speak for India (District Level): Thrilled to have participated in the district level of Speak for India - Maharashtra Edition, a platform that sharpened my debating and public speaking skills. It was an enriching experience! ",
      img: "/certificate/Speak for India.jpg",
      live: "",
    },
      {
      title: "TechZest - Cognizance",
      org: "",
      date: "December 2023",
      description:"Honored to have actively participated in TECHZEST-WARTECH, a university-level technical event organized by CSI at KIT’s College of Engineering, Kolhapur. This experience enabled me to engage with innovative ideas, collaborate with talented peers, and broaden my perspective on emerging technologies. Grateful for the opportunity to contribute and learn in a dynamic and inspiring environment. Appreciation to the organizers and faculty for encouraging continuous engagement and growth.",
      img: "/certificate/TechZest Cognizance.png",
      live: "https://certificate.givemycertificate.com/c/2862a55c-7f66-4247-b974-90011d2f24d6",
    },
                {
      title: "Algo-Expert",
      org: "AMGOI",
      date: "November 2023",
      description:"REFLEX 2023 (Algo-Expert): Honored to have participated in the National Level Technical Symposium REFLEX 2023 under the Algo-Expert event. Grateful for the opportunity to expand my skills and network with talented individuals in the field of computer science.",
      img: "/certificate/REFLEX 2023.jpg",
      live: "",
    },
                {
      title: "Business plan Presentation",
      org: "Annasaheb Dange College of Engineering and Technology, ASHTA",
      date: "October 2023",
      description:"Grateful to have had the opportunity to participate in Discovery 2K23, a National Level Symposium organized by Annasaheb Dange College of Engineering & Technology. It was a fantastic experience to contribute and learn from this event. #Discovery2K23 #participate #Engineering #participated_Certificate",
      img: "/certificate/IMG20231101153414.jpg",
      live: "",
    },
                {
      title: "technical paper presentation",
      org: "Annasaheb Dange College of Engineering and Technology, ASHTA",
      date: "October 2023",
      description:"technical paper presentation- Annasaheb Dange College of Engineering and Technology, Ashta, organized a National level Symposium. The Symposium named Discovery 2k23.",
      img: "/certificate/technical paper presentation.jpg",
      live: "",
    },
    {
  title: "Mr. Freshers 2023",
  org: "Ashokrao Mane Group of Institutions (AMGOI)",
  date: "November 2023",
  description:
    "Honored with the 'Mr. Freshers 2023' title at Ashokrao Mane Group of Institutions (AMGOI) in recognition of overall personality, confidence, communication skills, and active participation in the Freshers' event.",
  img: "/certificate/IMG_20231103_192829.jpg",
  live: "",
},

  
  ],
};

export default function Certificates() {
  const [tab, setTab] = useState("tech");
  const [selectedCert, setSelectedCert] = useState(null);

  const tabs = [
    { key: "tech", label: `Tech (${CERTS.tech.length})` },
    { key: "Internship", label: `Internship (${CERTS.Internship.length})` },
    { key: "other", label: `Others (${CERTS.other.length})` },
  ];

  return (
    <section className="certs-section container">
      <div className="certs-card card">
        <h2>Certificates 🏅</h2>

        <p className="lead">
          {CERTS.tech.length +
            CERTS.Internship.length +
            CERTS.other.length}
          + Certifications across Technical, Internship, and Other categories.
        </p>

        {/* Tabs */}
        <div className="certs-tabs">
          {tabs.map((item) => (
            <button
              key={item.key}
              onClick={() => setTab(item.key)}
              className={tab === item.key ? "tab active" : "tab"}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Certificates Grid */}
        <div className="certs-grid">
          <AnimatePresence mode="wait">
            {CERTS[tab]?.length > 0 ? (
              CERTS[tab].map((c, idx) => (
                <motion.div
                  key={c.title}
                  className="cert card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{
                    duration: 0.4,
                    delay: idx * 0.05,
                  }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="cert-img-wrap">
                    <img src={c.img} alt={c.title} />
                  </div>

                  <strong className="cert-title">
                    {c.title}
                  </strong>

                  <div className="muted">
                    {c.org} • {c.date}
                  </div>

                  {c.description && (
                    <div className="cert-desc-wrap">
                      <p className="cert-desc">
                        {c.description}
                      </p>
                    </div>
                  )}

                  <div className="cert-actions">
                    <button
                      className="btn"
                      onClick={() => setSelectedCert(c)}
                    >
                      View Image
                    </button>

                    {c.live ? (
                      <a
                        className="btn btn-outline"
                        href={c.live}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live
                      </a>
                    ) : (
                      <button
                        className="btn btn-outline"
                        disabled
                        title="No live link available"
                      >
                        Live
                      </button>
                    )}
                  </div>
                </motion.div>
              ))
            ) : (
              <p className="muted">
                No certificates available in this category.
              </p>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Modal Preview */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            className="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
          >
            <motion.img
              src={selectedCert.img}
              alt={selectedCert.title}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
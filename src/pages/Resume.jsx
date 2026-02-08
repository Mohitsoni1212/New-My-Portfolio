import React from "react";
import { motion } from "framer-motion";
import resumePdf from "../images/Mohit-Soni-Resume.pdf";


export default function Resume() {
  return (
    <section className="container" style={{ padding: "60px 0" }}>
      <motion.div
        className="card"
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
              👨‍💻 Mohit Soni
            </h3>
            <p style={{ margintop: 10, fontSize: 15, color: "#ccc" }}>
              2nd-Year MCA — Full Stack Web Developer| JECRC University
            </p>
            <p style={{ margin: "4px 0", fontSize: 14, color: "#aaa" }}>
              📍Vidhani, Sitapura Extension, Jaipur-303905, Rajasthan, India
            </p>
            <p style={{ margin: "4px 0", fontSize: 14, color: "#aaa" }}>
              ✉️ mohitsoni2241@gmail.com | 📞 +91 7877790117
            </p>
          </div>

          <motion.div
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
              2nd-year MCA student with hands-on experience in web development and programming.
              Skilled in HTML, CSS, JavaScript, React, Node.js, MySQL, C, and C++.
              Passionate about building responsive web applications, writing clean code, and continuously learning modern technologies.
              Actively seeking opportunities to work on real-world projects and grow as a software developer.
            </p>
          </motion.div>
        </motion.div>

        {/* Education Section with Border Box */}
        <motion.div
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
          <ul style={{ listStyle: "none", padding: 0, margin: 0, lineHeight: 1.8 }}>
            <li>
              <strong>MCA in Full Stack Web Development</strong> — <img src="public/logos/jecrfc.jpg" className="icon" />JECRC University
              2024–2026 <br />
              <span style={{ color: "#aaa" }}>GPA: 7.5</span>
            </li>
            <li>
              <strong>BCA</strong> — <img src="public/logos/subodh.jpg" className="icon" /> SS Jain Subodh PG College
              2021–2024 <br />
              <span style={{ color: "#aaa" }}>GPA: 7.4</span>
            </li>
            <li style={{ marginTop: 8 }}>
              <strong>12th Board — Navjeevan Sen.Sec.Shi.San.Kanwat Senior Secondary School
              </strong>(RBSE Board
              , 2021) <br />
              <span style={{ color: "#aaa" }}>Percentage: 82%</span>
            </li>

          </ul>
        </motion.div>

        {/* Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          style={{ marginTop: 40 }}
        >
          <h4 style={{ fontSize: 20, color: "#00b4ff", marginBottom: 12 }}>💼 Projects</h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, lineHeight: 1.8 }}>
            <li>
              1️⃣ <strong>Pink City Junction</strong> – Responsive website showcasing products and services with clean UI/UX.
              <a href="https://pinkcityjunction.netlify.app/" target="_blank" rel="noopener noreferrer"><li></li>View Project</a>
            </li>
            <li>
              2️⃣ <strong>CodeBox404</strong> – Developer-focused website with code snippets and tutorials, built using React for dynamic content.
              <a href="https://codebox404.netlify.app/" target="_blank" rel="noopener noreferrer"><li></li>View Project</a>
            </li>
            <li>
              3️⃣ <strong>Shopping24x7</strong> – Mock e-commerce site with product listings and interactive UI, built with React & CSS.
              <a href="https://shopping24x7.netlify.app/" target="_blank" rel="noopener noreferrer"><li></li>View Project</a>
            </li>
            <li>
              4️⃣ <strong>Personal Portfolio Website</strong> – My own portfolio website to showcase skills, projects, and blogs, built with React and smooth animations.
              <a href="https://mohitsoni-portfolioweb.netlify.app/" target="_blank" rel="noopener noreferrer"><li></li>View Portfolio</a>
            </li>
          </ul>


        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          style={{ marginTop: 40 }}
        >
          <h4 style={{ fontSize: 20, color: "#00b4ff", marginBottom: 12 }}>⚙️ Skills</h4>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {[

              "C",
              "C++",
              "JavaScript",
              "HTML",
              "CSS",
              "NODE.js",
              "React",
              "MySQL",
              "MongoDB",
              "Git",
              "GitHub",
              "Problem Solving",
              "Teamwork",
              "Adaptability",
              "Creativity",
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
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 30,
            marginTop: 40,
          }}
        >
          {[
            { name: "🏆 LeetCode", link: "https://leetcode.com/u/Kunj_2803/" },
            { name: "💻 GitHub", link: "https://github.com/Mohitsoni1212'" },
            { name: "💼 LinkedIn", link: "https://www.linkedin.com/in/mohit-soni-2422702a5" },
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
  src={resumePdf}
  title="Mohit Soni Resume"
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
  href={resumePdf}
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
  }}
>
  ⬇️ Download Resume
</motion.a>



      </motion.div>
    </section>
  );
}

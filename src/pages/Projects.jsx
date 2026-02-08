import React from 'react'
import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'
import codeboxImg from "../images/codebox404.png";
import pinkcityImg from "../images/pinkcity.png";
import indianMarketImg from "../images/indianmarket.png";
import oldPortfolioImg from "../images/oldportfoliyo.png";
import shoppingImg from "../images/shopping24x7.png";
import newPortfolioImg from "../images/newportfolio.png"; 

// 👆 agar file ka naam alag ho to wahi exact likhna


const PROJECTS = [
  {
    title: "CodeBox404",
    desc: "Developer-focused platform to browse, copy, and preview HTML, CSS, and JavaScript snippets with live preview support.",
    ss: codeboxImg,
    tech: ["HTML", "CSS", "JavaScript", "Netlify"],
    live: "https://codebox404.netlify.app",
    code: "https://github.com/Mohitsoni1212/code-box"
  },
  {
    title: "Pink City Junction",
    desc: "Tourism website showcasing Jaipur’s attractions, hotels, and destinations with responsive UI.",
    ss: pinkcityImg,
    tech: ["HTML", "CSS", "JavaScript"],
    live: "https://pinkcityjunction.netlify.app",
    code: "https://github.com/Mohitsoni1212/Pink-City-Jaipur"
  },
  {
    title: "Indian Market",
    desc: "Responsive e-commerce web app showcasing traditional and modern Indian products.",
    ss: indianMarketImg,
    tech: ["React.js", "JavaScript", "CSS"],
    live: "#",
    code: "https://github.com/Mohitsoni1212/Indian-market-eCommers-websit"
  },
  {
    title: "Old Portfolio Website",
    desc: "My first personal portfolio built using HTML, CSS, and JavaScript.",
    ss: oldPortfolioImg,
    tech: ["HTML", "CSS", "JavaScript"],
    live: "https://mohitsoni1212.github.io/My-Portfolio/",
    code: "#"
  },
  {
    title: "Shopping 24x7",
    desc: "Modern responsive e-commerce website with smooth UI and product navigation.",
    ss: shoppingImg,
    tech: ["React.js", "HTML", "CSS", "JavaScript"],
    live: "https://shopping24x7.netlify.app/",
    code: "#"
  },
   {
    title: "New Portfolio Website",
    desc: "Modern portfolio built using React and Framer Motion with smooth animations.",
    ss: newPortfolioImg,
    tech: ["React.js", "Framer Motion", "Netlify"],
    live: "#",
    code: "https://github.com/Mohitsoni1212/My-Portfolio"
  }
];



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

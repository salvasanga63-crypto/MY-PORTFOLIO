import { useEffect, useState } from 'react'
import {
  ArrowUpRight,
  Mail,
  Menu,
  Moon,
  Sun,
  X,
} from 'lucide-react'
import './App.css'

const profileUrl = 'https://github.com/salvasanga63-crypto'

const projects = [
  {
    number: '01',
    name: 'AI-Driven Health Intelligence System',
    description:
      'An AI-driven healthcare platform concept focused on intelligent health information, predictive analytics and AI-assisted health insights.',
    problem: 'Health information is often fragmented, difficult to interpret and disconnected from useful context.',
    approach: 'Designing a connected intelligence layer that combines data, AI models and accessible software experiences.',
    technologies: ['Python', 'AI/ML', 'Data', 'APIs', 'Software Engineering'],
    status: 'In Development',
  },
  {
    number: '02',
    name: 'AI Video Agent',
    description:
      'An AI system designed to generate videos from user-provided images and text through AI-powered generation pipelines.',
    problem: 'Turning simple creative inputs into coherent, usable video can require many disconnected tools.',
    approach: 'Exploring an automated pipeline that connects user inputs, AI generation services and media processing.',
    technologies: ['Python', 'AI', 'APIs', 'FFmpeg', 'Streamlit'],
    status: 'In Development',
  },
  {
    number: '03',
    name: 'Vortex Gaming Zone',
    description:
      'A modern gaming platform concept designed to organize and provide access to PC gaming experiences through a web-based interface.',
    problem: 'Finding and organizing available PC gaming experiences can feel scattered across different platforms.',
    approach: 'Building a focused web interface that brings discovery, organization and access into one system.',
    technologies: ['JavaScript', 'Web Development', 'APIs'],
    status: 'In Development',
  },
]

const researchTopics = [
  'AI in Healthcare',
  'Predictive Healthcare',
  'Computer Vision',
  'IoT',
  'AI Signal Processing',
  'Cybersecurity',
  'Data Intelligence',
  'Intelligent Systems',
  'Digital Transformation',
]

const journey = [
  'Programming',
  'Python & Data',
  'Artificial Intelligence',
  'Software Systems',
  'IoT & Signal Processing',
  'AI for Healthcare',
  'Intelligent Systems',
]

function SectionLabel({ children }) {
  return <p className="section-label">{children}</p>
}

function ButtonLink({ children, href = '#', secondary = false, disabled = false }) {
  return (
    <a className={`button ${secondary ? 'button-secondary' : ''} ${disabled ? 'is-disabled' : ''}`} href={href} aria-disabled={disabled} onClick={disabled ? (event) => event.preventDefault() : undefined}>
      {children}
      {!disabled && <ArrowUpRight size={16} strokeWidth={1.8} />}
    </a>
  )
}

function Navbar({ darkMode, setDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const links = ['About', 'Projects', 'Research', 'Skills', 'Contact']

  return (
    <header className="site-header">
      <nav className="nav-shell" aria-label="Main navigation">
        <a href="#home" className="brand" onClick={() => setMenuOpen(false)}>
          SALVATORY<span className="brand-dot">.</span>
        </a>
        <div className={`nav-links ${menuOpen ? 'is-open' : ''}`}>
          <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
          {links.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{link}</a>
          ))}
        </div>
        <div className="nav-actions">
          <button className="icon-button theme-button" type="button" onClick={() => setDarkMode(!darkMode)} aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}>
            {darkMode ? <Sun size={17} /> : <Moon size={17} />}
          </button>
          <button className="icon-button menu-button" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={menuOpen}>
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </nav>
    </header>
  )
}

function SystemVisual() {
  return (
    <div className="system-visual" aria-label="Abstract intelligent system diagram" role="img">
      <div className="visual-caption mono">SYSTEM / 001</div>
      <div className="visual-grid" />
      <div className="orbit orbit-one" /><div className="orbit orbit-two" />
      <div className="node node-core"><span>AI</span></div>
      <div className="node node-top"><span>DATA</span></div>
      <div className="node node-right"><span>API</span></div>
      <div className="node node-bottom"><span>IoT</span></div>
      <div className="node node-left"><span>ML</span></div>
      <div className="connection connection-a" /><div className="connection connection-b" />
      <div className="connection connection-c" /><div className="connection connection-d" />
      <div className="signal signal-one" /><div className="signal signal-two" />
      <div className="visual-footer mono"><span>CONNECTED SYSTEMS</span><span>● ONLINE</span></div>
    </div>
  )
}

function Hero() {
  return (
    <section className="hero section-frame" id="home">
      <div className="hero-copy">
        <SectionLabel>AI <span>•</span> SOFTWARE <span>•</span> SYSTEMS</SectionLabel>
        <h1>Building intelligent systems for <em>real-world problems.</em></h1>
        <p className="hero-intro">I explore the intersection of artificial intelligence, software, data and connected systems to build technology that can solve meaningful real-world problems.</p>
        <div className="hero-actions"><ButtonLink href="#projects">View Projects</ButtonLink><ButtonLink href={profileUrl} secondary>GitHub</ButtonLink></div>
        <div className="hero-meta mono"><span>BASED IN TANZANIA</span><span>AVAILABLE FOR COLLABORATION</span></div>
      </div>
      <SystemVisual />
    </section>
  )
}

function About() {
  return (
    <section className="section-frame about-section" id="about">
      <div className="section-heading"><SectionLabel>01 / ABOUT</SectionLabel><h2>Systems thinking,<br /><em>built with intent.</em></h2></div>
      <div className="about-content">
        <div className="about-copy"><p className="large-copy">I am focused on building intelligent systems by combining software engineering, artificial intelligence, data and emerging technologies.</p><p>My long-term direction is to understand not only how to write software, but how complete intelligent systems are designed, connected, deployed and used to solve real-world problems.</p></div>
        <div className="builder-card"><div className="builder-top mono"><span>BUILDER_PROFILE</span><span>01—07</span></div><div className="builder-mark">S<span>/</span></div><div className="builder-bottom"><span>TECHNOLOGY<br />BUILDER</span><span className="builder-line" /><span>LEARNING<br />BY BUILDING</span></div></div>
      </div>
    </section>
  )
}

function Skills() {
  const groups = [['AI & DATA', ['Python', 'Machine Learning', 'Data Analysis', 'Computer Vision', 'AI Systems']], ['SOFTWARE', ['Python', 'JavaScript', 'React', 'HTML', 'CSS', 'REST APIs', 'System Architecture']], ['EMERGING TECHNOLOGY', ['IoT', 'Signal Processing', 'Cybersecurity', 'Cryptography']]]
  return <section className="section-frame skills-section" id="skills"><div className="section-heading"><SectionLabel>02 / TECHNICAL STACK</SectionLabel><h2>Tools for turning<br /><em>ideas into systems.</em></h2></div><div className="skill-groups">{groups.map(([title, skills]) => <div className="skill-group" key={title}><h3>{title}</h3><div className="tag-list">{skills.map((skill) => <span className="tag" key={skill}>{skill}</span>)}</div></div>)}</div></section>
}

function ProjectCard({ project }) {
  return <article className="project-card"><div className="project-top"><span className="project-number mono">PROJECT / {project.number}</span><span className="status"><i />{project.status}</span></div><h3>{project.name}</h3><p className="project-description">{project.description}</p><div className="project-details"><div><span className="detail-label">PROBLEM</span><p>{project.problem}</p></div><div><span className="detail-label">APPROACH</span><p>{project.approach}</p></div></div><div className="project-footer"><div className="project-tags">{project.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div><div className="project-links"><ButtonLink href={profileUrl} secondary>GitHub</ButtonLink><ButtonLink disabled>Live Demo</ButtonLink></div></div></article>
}

function Projects() {
  return <section className="projects-section" id="projects"><div className="section-frame"><div className="section-heading projects-heading"><SectionLabel>03 / SELECTED WORK</SectionLabel><h2>Ideas in motion,<br /><em>systems in progress.</em></h2><p>Early-stage projects exploring how software and intelligence can meet practical needs.</p></div><div className="project-list">{projects.map((project) => <ProjectCard project={project} key={project.number} />)}</div></div></section>
}

function Research() {
  return <section className="section-frame research-section" id="research"><div className="research-intro"><SectionLabel>04 / EXPLORING</SectionLabel><h2>Questions worth<br /><em>building around.</em></h2><p>Areas I am actively learning about, experimenting with and connecting into a broader picture of intelligent systems.</p></div><div className="research-topics">{researchTopics.map((topic, index) => <div className="topic" key={topic}><span className="topic-index mono">0{index + 1}</span><span>{topic}</span><ArrowUpRight size={17} /></div>)}</div></section>
}

function Journey() {
  return <section className="section-frame journey-section"><div className="journey-heading"><SectionLabel>05 / THE JOURNEY</SectionLabel><h2>A direction, not<br /><em>a destination.</em></h2></div><div className="timeline">{journey.map((step, index) => <div className="timeline-step" key={step}><span className="timeline-dot">{String(index + 1).padStart(2, '0')}</span><span>{step}</span></div>)}</div></section>
}

function GithubSection() {
  return <section className="github-section"><div className="section-frame github-card"><div><SectionLabel>06 / OPEN SOURCE</SectionLabel><h2>Find the work<br /><em>in the open.</em></h2></div><div className="github-copy"><span className="github-glyph" aria-hidden="true">GH</span><p>Follow my public work, experiments and ongoing projects on GitHub.</p><ButtonLink href={profileUrl}>Visit GitHub Profile</ButtonLink><span className="mono github-handle">@salvasanga63-crypto</span></div></div></section>
}

function Contact() {
  return <section className="section-frame contact-section" id="contact"><SectionLabel>07 / CONTACT</SectionLabel><h2>Have an idea<br /><em>worth building?</em></h2><p>Let's explore how technology can turn it into a working system.</p><div className="contact-actions"><ButtonLink href={profileUrl}>GH&nbsp; GitHub</ButtonLink><ButtonLink href="#contact" secondary disabled>in&nbsp; LinkedIn</ButtonLink><ButtonLink href="#contact" secondary disabled><Mail size={16} /> Email</ButtonLink></div><span className="placeholder-note mono">LINKS AVAILABLE SOON</span></section>
}

function Footer() {
  return <footer className="site-footer"><div className="section-frame footer-inner"><a href="#home" className="brand">SALVATORY<span className="brand-dot">.</span></a><span className="footer-mark mono">AI • SOFTWARE • SYSTEMS</span><span className="footer-copy">© 2026 Salvatory</span><div className="footer-links"><a href={profileUrl}>GitHub</a><a href="#contact">LinkedIn</a></div></div></footer>
}

function App() {
  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    document.documentElement.dataset.theme = darkMode ? 'dark' : 'light'
  }, [darkMode])

  return (
    <><Navbar darkMode={darkMode} setDarkMode={setDarkMode} /><main><Hero /><About /><Skills /><Projects /><Research /><Journey /><GithubSection /><Contact /></main><Footer /></>
  )
}

export default App

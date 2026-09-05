import { profileUrl } from '../data/projectData'
import SectionLabel from './SectionLabel'
import ButtonLink from './ButtonLink'
import SystemVisual from './SystemVisual'

export default function Hero() {
  return (
    <section className="hero section-frame" id="home">
      <div className="hero-copy">
        <SectionLabel>AI <span>•</span> SOFTWARE <span>•</span> SYSTEMS</SectionLabel>
        <h1>Building intelligent systems for <em>real-world problems.</em></h1>
        <p className="hero-subtitle">AI &amp; Software Developer&ensp;|&ensp;System Builder&ensp;|&ensp;Data Thinker</p>
        <p className="hero-intro">
          I explore the intersection of artificial intelligence, software, data and connected
          systems to build technology that can solve meaningful real-world problems.
        </p>
        <div className="hero-actions">
          <ButtonLink href="#projects">View My Projects</ButtonLink>
          <ButtonLink href={profileUrl} secondary>GitHub</ButtonLink>
          <ButtonLink href="#contact" secondary>Contact Me</ButtonLink>
        </div>
        <div className="hero-meta mono">
          <span>BASED IN TANZANIA</span>
          <span>AVAILABLE FOR COLLABORATION</span>
        </div>
      </div>
      <SystemVisual />
    </section>
  )
}

import { projects } from '../data/projectData'
import SectionLabel from './SectionLabel'
import ProjectCard from './ProjectCard'

export default function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="section-frame">
        <div className="section-heading projects-heading">
          <SectionLabel>03 / SELECTED WORK</SectionLabel>
          <h2>Ideas in motion,<br /><em>systems in progress.</em></h2>
          <p>Early-stage projects exploring how software and intelligence can meet practical needs.</p>
        </div>
        <div className="project-list">
          {projects.map((project) => (
            <ProjectCard project={project} key={project.number} />
          ))}
        </div>
      </div>
    </section>
  )
}

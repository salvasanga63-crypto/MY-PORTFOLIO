import ButtonLink from './ButtonLink'

export default function ProjectCard({ project }) {
  const githubHref = project.github || '#'
  const githubDisabled = !project.github
  const demoHref = project.demo || '#'
  const demoDisabled = !project.demo
  const demoLabel = project.demoLabel || 'Live Demo'
  const githubLabel = githubDisabled
    ? `${project.name} — GitHub Coming Soon`
    : `View ${project.name} on GitHub`
  const demoAriaLabel = demoDisabled
    ? `${project.name} — Live Demo Coming Soon`
    : `Open ${project.name} ${demoLabel}`

  return (
    <article className="project-card">
      <div className="project-top">
        <span className="project-number mono">PROJECT / {project.number}</span>
        <span className="status">
          <i />
          {project.status}
        </span>
      </div>
      <h3>{project.name}</h3>
      <p className="project-description">{project.description}</p>
      <div className="project-details">
        <div>
          <span className="detail-label">PROBLEM</span>
          <p>{project.problem}</p>
        </div>
        <div>
          <span className="detail-label">SOLUTION</span>
          <p>{project.approach}</p>
        </div>
      </div>
      {project.areas && project.areas.length > 0 && (
        <div className="project-areas">
          <span className="detail-label">AREAS OF INTEREST</span>
          <div className="project-tags">
            {project.areas.map((area) => (
              <span key={area}>{area}</span>
            ))}
          </div>
        </div>
      )}
      <div className="project-footer">
        {project.technologies.length > 0 ? (
          <div className="project-tags">
            {project.technologies.map((technology) => (
              <span key={technology}>{technology}</span>
            ))}
          </div>
        ) : (
          <span className="tech-note mono">{project.technologyNote}</span>
        )}
        <div className="project-links">
          <ButtonLink href={githubHref} secondary disabled={githubDisabled} ariaLabel={githubLabel}>
            GitHub{!project.github ? ' — Coming Soon' : ''}
          </ButtonLink>
          <ButtonLink href={demoHref} disabled={demoDisabled} ariaLabel={demoAriaLabel}>
            {demoLabel}{demoDisabled ? ' — Coming Soon' : ''}
          </ButtonLink>
        </div>
      </div>
    </article>
  )
}

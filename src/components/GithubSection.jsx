import { profileUrl, contactInfo } from '../data/projectData'
import SectionLabel from './SectionLabel'
import ButtonLink from './ButtonLink'

export default function GithubSection() {
  return (
    <section className="github-section" id="github">
      <div className="section-frame github-card">
        <div>
          <SectionLabel>06 / OPEN SOURCE</SectionLabel>
          <h2>Find the work<br /><em>in the open.</em></h2>
        </div>
        <div className="github-copy">
          <span className="github-glyph" aria-hidden="true">GH</span>
          <p>Follow my public work, experiments and ongoing projects on GitHub.</p>
          <ButtonLink href={profileUrl}>Visit GitHub Profile</ButtonLink>
          <span className="mono github-handle">{contactInfo.githubHandle}</span>
        </div>
      </div>
    </section>
  )
}

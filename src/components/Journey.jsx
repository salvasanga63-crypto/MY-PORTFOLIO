import { journey } from '../data/projectData'
import SectionLabel from './SectionLabel'

export default function Journey() {
  return (
    <section className="section-frame journey-section" id="journey">
      <div className="journey-heading">
        <SectionLabel>05 / THE JOURNEY</SectionLabel>
        <h2>A direction, not<br /><em>a destination.</em></h2>
      </div>
      <div className="timeline">
        {journey.map((step, index) => (
          <div className="timeline-step" key={step}>
            <span className="timeline-dot">
              {String(index + 1).padStart(2, '0')}
            </span>
            <span>{step}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

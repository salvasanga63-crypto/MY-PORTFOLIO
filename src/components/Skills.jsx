import { BrainCircuit, Code2, Network } from 'lucide-react'
import { skillGroups } from '../data/projectData'
import SectionLabel from './SectionLabel'

const groupIcons = { BrainCircuit, Code2, Network }

export default function Skills() {
  return (
    <section className="section-frame skills-section" id="skills">
      <div className="section-heading">
        <SectionLabel>02 / TECHNICAL STACK</SectionLabel>
        <h2>Tools for turning<br /><em>ideas into systems.</em></h2>
      </div>
      <div className="skill-groups">
        {skillGroups.map((group) => {
          const Icon = groupIcons[group.icon]
          return (
            <div className="skill-group" key={group.title}>
              <div className="skill-head">
                {Icon && <Icon size={18} strokeWidth={1.6} aria-hidden="true" />}
                <h3>{group.title}</h3>
              </div>
              <p className="skill-descr">{group.description}</p>
              <div className="tag-list">
                {group.skills.map((skill) => (
                  <span className="tag" key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

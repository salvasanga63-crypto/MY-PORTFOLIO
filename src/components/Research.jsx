import {
  ArrowUpRight,
  Stethoscope,
  HeartPulse,
  ScanEye,
  Wifi,
  AudioWaveform,
  Shield,
  KeyRound,
  Database,
  Workflow,
  Globe,
  Code2,
} from 'lucide-react'
import { researchTopics } from '../data/projectData'
import SectionLabel from './SectionLabel'

const topicIcons = {
  Stethoscope,
  HeartPulse,
  ScanEye,
  Wifi,
  AudioWaveform,
  Shield,
  KeyRound,
  Database,
  Workflow,
  Globe,
  Code2,
}

export default function Research() {
  return (
    <section className="section-frame research-section" id="research">
      <div className="research-intro">
        <SectionLabel>04 / EXPLORING</SectionLabel>
        <h2>Questions worth<br /><em>building around.</em></h2>
        <p>
          Areas I am actively learning about, experimenting with and connecting
          into a broader picture of intelligent systems.
        </p>
      </div>
      <div className="research-topics">
        {researchTopics.map((topic, index) => {
          const Icon = topicIcons[topic.icon]
          return (
            <div className="topic" key={topic.name}>
              <span className="topic-index mono">
                {String(index + 1).padStart(2, '0')}
              </span>
              {Icon && <Icon size={16} strokeWidth={1.6} aria-hidden="true" />}
              <span>{topic.name}</span>
              <ArrowUpRight size={17} aria-hidden="true" />
            </div>
          )
        })}
      </div>
    </section>
  )
}

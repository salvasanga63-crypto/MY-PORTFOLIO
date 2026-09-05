import { Mail, Phone } from 'lucide-react'
import { contactInfo } from '../data/projectData'
import SectionLabel from './SectionLabel'
import BrandIcon from './BrandIcon'

export default function Contact() {
  return (
    <section className="section-frame contact-section" id="contact">
      <SectionLabel>07 / CONTACT</SectionLabel>
      <h2>Have an idea<br /><em>worth building?</em></h2>
      <p>Let's explore how technology can turn it into a working system.</p>
      <div className="contact-grid">
        <a
          href={`mailto:${contactInfo.email}`}
          className="contact-card"
          aria-label={`Send an email to ${contactInfo.email}`}
        >
          <Mail size={20} strokeWidth={1.5} />
          <span className="contact-card-label mono">EMAIL</span>
          <span className="contact-card-value">{contactInfo.email}</span>
        </a>
        <a
          href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
          className="contact-card"
          aria-label={`Call ${contactInfo.phone}`}
        >
          <Phone size={20} strokeWidth={1.5} />
          <span className="contact-card-label mono">PHONE</span>
          <span className="contact-card-value">{contactInfo.phone}</span>
        </a>
        <a
          href={contactInfo.github}
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card"
          aria-label={`Open GitHub profile ${contactInfo.githubHandle}`}
        >
          <BrandIcon type="github" size={20} />
          <span className="contact-card-label mono">GITHUB</span>
          <span className="contact-card-value">{contactInfo.githubHandle}</span>
        </a>
        <a
          href={contactInfo.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card"
          aria-label={`Open LinkedIn profile ${contactInfo.name}`}
        >
          <BrandIcon type="linkedin" size={20} />
          <span className="contact-card-label mono">LINKEDIN</span>
          <span className="contact-card-value">{contactInfo.name}</span>
        </a>
      </div>
    </section>
  )
}

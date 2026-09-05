import { contactInfo, profileUrl } from '../data/projectData'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="section-frame footer-inner">
        <a href="#home" className="brand">
          SALVATORY<span className="brand-dot">.</span>
        </a>
        <span className="footer-mark mono">AI • SOFTWARE • SYSTEMS</span>
        <span className="footer-copy">© {new Date().getFullYear()} Salvatory Marko Sanga</span>
        <div className="footer-links">
          <a href={profileUrl} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href={`mailto:${contactInfo.email}`}>Email</a>
        </div>
      </div>
    </footer>
  )
}

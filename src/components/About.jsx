import SectionLabel from './SectionLabel'

export default function About() {
  return (
    <section className="section-frame about-section" id="about">
      <div className="section-heading">
        <SectionLabel>01 / ABOUT</SectionLabel>
        <h2>Systems thinking,<br /><em>built with intent.</em></h2>
      </div>
      <div className="about-content">
        <div className="about-copy">
          <p className="large-copy">
            I am focused on building intelligent systems that combine software engineering,
            artificial intelligence, data and emerging technologies to solve real-world problems.
          </p>
          <p>
            My interests span AI and machine learning, software systems, data intelligence,
            IoT, cybersecurity and AI applications in healthcare.
          </p>
          <p>
            I approach technology from a system-building perspective, focusing not only on
            individual models or applications, but on how software, data, intelligent algorithms
            and connected technologies can work together to create useful solutions.
          </p>
        </div>
        <div className="builder-card">
          <div className="builder-top mono">
            <span>BUILDER_PROFILE</span>
            <span>01—07</span>
          </div>
          <div className="builder-mark">S<span>/</span></div>
          <div className="builder-bottom">
            <span>TECHNOLOGY<br />BUILDER</span>
            <span className="builder-line" />
            <span>LEARNING<br />BY BUILDING</span>
          </div>
        </div>
      </div>
    </section>
  )
}

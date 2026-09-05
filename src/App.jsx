import { Fragment } from 'react'
import profileImage from './assets/profile.jpg'
import resume from './data/resume.json'

function SectionTitle({ eyebrow, title, text }) {
  return (
    <div className="section-heading">
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2>{title}</h2>
      {text ? <p className="section-text">{text}</p> : null}
    </div>
  )
}

function PillList({ items }) {
  return (
    <div className="pill-list">
      {items.map((item) => (
        <span className="pill" key={item}>{item}</span>
      ))}
    </div>
  )
}

export default function App() {
  const {
    basics,
    highlights,
    about,
    skills,
    experience,
    projectTypes,
    caseStudies,
    education,
    languages,
    interests,
    ui,
  } = resume

  return (
    <div className="page-shell">
      <header className="hero">
        <div className="hero-copy">
          <p className="eyebrow">{ui.portfolioEyebrow}</p>
          <h1>{basics.name}</h1>
          <p className="hero-role">{basics.headline}</p>
          <p className="hero-summary">{basics.summary}</p>
          <div className="hero-actions">
            {ui.actions.map((action) => (
              <a
                href={action.target === 'email' ? `mailto:${basics.email}` : action.href}
                className={`button ${action.style}`}
                download={action.download || undefined}
                key={action.label}
              >
                {action.label}
              </a>
            ))}
          </div>
          <div className="hero-stats">
            {highlights.map((highlight) => (
              <div key={highlight.label}>
                <strong>{highlight.value}</strong>
                <span>{highlight.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="hero-card">
          <img height={450} width={450} src={profileImage} alt={basics.profileImageAlt} className="profile-image" />
          <div className="contact-card">
            <p className="card-label">{ui.contactLabel}</p>
            <a href={`mailto:${basics.email}`}>{basics.email}</a>
            <p>
              <a href={basics.linkedin.url}>{basics.linkedin.label}</a>
            </p>
          </div>
        </div>
      </header>

      <main>
        <section className="section section-grid">
          <div>
            <SectionTitle
              eyebrow={ui.sections.about.eyebrow}
              title={ui.sections.about.title}
              text={about.text}
            />
          </div>
          <div className="info-card">
            {about.facts.map((fact) => (
              <Fragment key={fact.title}>
                <h3>{fact.title}</h3>
                <p>{fact.text}</p>
              </Fragment>
            ))}
          </div>
        </section>

        <section className="section">
          <SectionTitle eyebrow={ui.sections.skills.eyebrow} title={ui.sections.skills.title} />
          <div className="card-stack">
            {skills.map((skillGroup) => (
              <div className="info-card" key={skillGroup.title}>
                <h3>{skillGroup.title}</h3>
                <PillList items={skillGroup.items} />
              </div>
            ))}
          </div>
        </section>

        <section className="section" id="experience">
          <SectionTitle eyebrow={ui.sections.experience.eyebrow} title={ui.sections.experience.title} />
          <div className="timeline">
            {experience.map((job) => (
              <article className="timeline-item" key={`${job.company}-${job.period}`}>
                <div className="timeline-meta">
                  <p className="timeline-period">{job.period}</p>
                  <h3>{job.company}</h3>
                  <p className="timeline-role">{job.role}</p>
                </div>
                <ul>
                  {job.achievements.map((achievement) => (
                    <li key={achievement}>{achievement}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section section-grid">
          <div className="info-card">
            <SectionTitle eyebrow={ui.sections.projects.eyebrow} title={ui.sections.projects.title} />
            <PillList items={projectTypes} />
          </div>
          <div className="info-card">
            <SectionTitle eyebrow={ui.sections.caseStudies.eyebrow} title={ui.sections.caseStudies.title} />
            <div className="case-list">
              {caseStudies.map((item) => (
                <article className="case-item" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-grid">
          <div className="info-card">
            <SectionTitle eyebrow={ui.sections.education.eyebrow} title={ui.sections.education.title} />
            <ul className="simple-list">
              {education.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        </section>

        <section className="section section-grid">
          <div className="info-card">
            <SectionTitle eyebrow={ui.sections.languages.eyebrow} title={ui.sections.languages.title} />
            <ul className="simple-list">
              {languages.map((language) => (
                <li key={language.name}>
                  <strong>{language.name}</strong> — {language.level}
                </li>
              ))}
            </ul>
          </div>
          <div className="info-card">
            <SectionTitle eyebrow={ui.sections.interests.eyebrow} title={ui.sections.interests.title} />
            <ul className="simple-list">
              {interests.map((interest) => <li key={interest}>{interest}</li>)}
            </ul>
          </div>
        </section>
      </main>
    </div>
  )
}

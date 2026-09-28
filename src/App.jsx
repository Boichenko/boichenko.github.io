import { Fragment, useState } from 'react'
import profileImage from './assets/profile.jpg'
import resume from './data/resume.json'

const ANALYTICS_CONSENT_KEY = 'analytics_consent'

function readAnalyticsConsent() {
  try {
    const storedConsent = localStorage.getItem(ANALYTICS_CONSENT_KEY)
    return ['granted', 'denied'].includes(storedConsent) ? storedConsent : null
  } catch {
    return null
  }
}

function AnalyticsConsent() {
  const [consent, setConsent] = useState(readAnalyticsConsent)
  const [isOpen, setIsOpen] = useState(consent === null)

  const updateConsent = (nextConsent) => {
    const wasGranted = consent === 'granted'

    try {
      localStorage.setItem(ANALYTICS_CONSENT_KEY, nextConsent)
    } catch {
      // Consent still applies for the current page when storage is unavailable.
    }

    window.analyticsConsent = nextConsent

    window.gtag?.('consent', 'update', {
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
      analytics_storage: nextConsent,
    })

    if (nextConsent === 'granted' && !wasGranted) {
      window.gtag?.('event', 'page_view', {
        page_location: window.location.href,
        page_path: `${window.location.pathname}${window.location.search}`,
        page_title: document.title,
      })
    }

    setConsent(nextConsent)
    setIsOpen(false)
  }

  if (!isOpen) {
    return (
      <button
        type="button"
        className="analytics-settings"
        onClick={() => setIsOpen(true)}
      >
        Analytics settings
      </button>
    )
  }

  return (
    <aside className="consent-banner" aria-label="Analytics consent">
      <div className="consent-copy">
        <strong>Analytics cookies</strong>
        <p>
          I use Google Analytics to understand how this portfolio is used. Accept
          to enable analytics cookies. If you decline, only limited cookieless
          signals may be sent.
        </p>
      </div>
      <div className="consent-actions">
        <button
          type="button"
          className="button secondary"
          onClick={() => updateConsent('denied')}
        >
          Decline
        </button>
        <button
          type="button"
          className="button primary"
          onClick={() => updateConsent('granted')}
        >
          Accept analytics
        </button>
      </div>
    </aside>
  )
}

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

  const primaryActions = ui.actions.filter((action) => !action.download)
  const downloadAction = ui.actions.find((action) => action.download)

  return (
    <>
      <div className="page-shell">
        <header className="hero">
          <div className="hero-copy">
            <p className="eyebrow">{ui.portfolioEyebrow}</p>
            <h1>{basics.name}</h1>
            <p className="hero-role">{basics.headline}</p>
            <p className="hero-summary">{basics.summary}</p>
            <div className="hero-actions">
              {primaryActions.map((action) => (
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
              <p>{basics.location}</p>
              <a href={`mailto:${basics.email}`}>{basics.email}</a>
              <p>
                <a href={basics.linkedin.url}>{basics.linkedin.label}</a>
              </p>
              <p>
                <a href={basics.phone.url}>{basics.phone.label}</a>
              </p>
              <p>
                <a href={basics.telegram.url}>{basics.telegram.label}</a>
              </p>
            </div>
            {downloadAction ? (
              <a
                href={downloadAction.href}
                className={`button ${downloadAction.style} hero-card-action`}
                download={downloadAction.download || undefined}
              >
                {downloadAction.label}
              </a>
            ) : null}
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
              <div className="info-card project-types-card">
                <SectionTitle eyebrow={ui.sections.projects.eyebrow} title={ui.sections.projects.title} />
                <PillList items={projectTypes} />
              </div>
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
          <div className="info-card case-studies-card">
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
      <AnalyticsConsent />
    </>
  )
}

import profileImage from './assets/profile.jpg'

const experience = [
  {
    company: 'deBridge',
    role: 'Project Manager',
    period: 'Feb 2025 — Present',
    achievements: [
      'Lead end-to-end delivery coordination across concurrent Web3, blockchain, and AI initiatives in a distributed product environment.',
      'Turn business goals and technical inputs into delivery plans, ownership maps, milestones, release readiness criteria, and executive-level status reporting.',
      'Coordinate engineering, product, design, analytics, compliance, legal, and finance stakeholders across complex cross-team dependencies.',
      'Introduced structured planning, risk and dependency tracking, and recurring reporting routines that made ownership, blockers, and delivery status more visible.',
      'Drive critical-path issues to resolution by clarifying decisions, escalating risks early, and following deliverables through release.',
      'Support requirements definition, prioritization, capacity planning, budget tracking, and OKR alignment while keeping delivery plans realistic.',
    ],
  },
  {
    company: 'VBGL — NDA',
    role: 'Project Management Officer',
    period: 'Feb 2024 — Jan 2025',
    achievements: [
      'Coordinated delivery across multiple Web3, crypto, and digital asset initiatives, from planning and requirements alignment through release follow-up.',
      'Established consistent planning, status reporting, meeting follow-ups, and risk and dependency tracking across active workstreams.',
      'Connected technical and business stakeholders, translated priorities into actionable plans, and surfaced delivery trade-offs early.',
      'Balanced scope, timelines, resources, budgets, and cross-team dependencies while maintaining visibility for leadership.',
      'Reviewed deliverables against agreed requirements, coordinated issue resolution, and helped teams reach release readiness under changing priorities.',
    ],
  },
  {
    company: 'Fively',
    role: 'Project Management Officer, Product Manager, Presale Lead',
    period: 'Nov 2020 — Jan 2024',
    achievements: [
      'Managed multiple software projects at different stages with both T&M and fixed-price delivery models.',
      'Connected project management, product discovery, and presale work to improve delivery quality and client alignment.',
      'Prepared plans, roadmaps, status reports, meeting notes, and delivery documentation.',
      'Handled risks, resource allocation, budgets, ceremonies, quality reviews, and one-on-one sessions with team members.',
      'Processed 90+ RFPs and shaped solution approaches for clients across several domains.',
    ],
  },
  {
    company: 'ITechArt',
    role: 'Software Developer',
    period: 'Nov 2017 — Oct 2020',
    achievements: [
      'Built production software in .NET and JavaScript environments, including React.js and Node.js.',
      'Contributed to architecture discussions, code structure, and engineering collaboration.',
      'Gained practical experience working inside teams of different sizes, including large delivery teams.',
    ],
  },
  {
    company: 'Andersen',
    role: 'Software Developer',
    period: 'Jul 2015 — Nov 2017',
    achievements: [
      'Worked on .NET, JavaScript, and Go projects.',
      'Designed application architecture and supported code organization.',
      'Collaborated with Polotsk State University on development courses aimed at identifying strong students.',
    ],
  },
  {
    company: 'Polotsk State University',
    role: 'Software Development Teacher',
    period: 'Aug 2015 — Nov 2016',
    achievements: [
      'Taught software development courses with theory and lab work.',
      'Coordinated first-year students and supported thesis project management and quality control.',
    ],
  },
]

const primarySkills = [
  'Project Management',
  'Technical Delivery',
  'Crypto Project Delivery',
  'Web3 Delivery',
  'Blockchain Product Delivery',
  'AI Project Coordination',
  'NFT / Token Feature Coordination',
  'Release Management',
  'Requirements Management',
  'Dependency Management',
  'Process Design',
  'Web3 Integrations',
  'Team Leadership',
  'Operational Efficiency',
  'OKR Development',
  'Cross-Functional Collaboration',
  'Reporting Systems',
  'Stakeholder Management',
  'Risk Management',
  'Budget Management',
  'Vendor Coordination',
  'Product Discovery',
  'Presale',
]

const tools = [
  'Jira',
  'Confluence',
  'Miro',
  'Notion',
  'Trello',
  'Shortcut',
  'ZenHub',
  'GitLab',
  'Bitbucket',
  'Figma',
  'Draw.io',
  'Sketch',
  'Instagantt',
  'MS Office',
  'MS Excel',
]

const methodologies = ['Agile', 'Scrum', 'Kanban', 'Scrumban', 'Waterfall', 'T&M', 'Fixed-price']

const projects = [
  'Blockchain-enabled Products',
  'Web3 Products',
  'Crypto Platforms',
  'Digital Asset Products',
  'NFT / Token Feature Discovery',
  'AI Products',
  'Fintech Platforms',
  'B2B SaaS Products',
]

const caseStudies = [
  {
    title: 'Web3 delivery operations',
    text: 'Built a transparent operating rhythm for NDA-protected initiatives: delivery plans, ownership, milestones, dependencies, risk tracking, and leadership reporting across distributed functions.',
  },
  {
    title: 'Cross-functional release coordination',
    text: 'Aligned product, engineering, design, analytics, compliance, legal, and business stakeholders around requirements, readiness criteria, unresolved decisions, and critical-path deliverables.',
  },
  {
    title: 'AI and digital product delivery',
    text: 'Converted evolving business needs into actionable workstreams, coordinated priorities and capacity, and kept delivery moving as scope and technical constraints changed.',
  },
]

const education = [
  'Google Project Management Certificate (2023–2024)',
  'BA Courses by MyMonday (2020)',
  'PM Courses by MyMonday (2020, 2022)',
  'UX/UI Courses by TeachMeSkills (2020)',
  'Bachelor’s Degree in Software Engineering, Polotsk State University (2010–2015)',
]

const languages = [
  { name: 'English', level: 'Upper Intermediate' },
  { name: 'Belarusian', level: 'Native' },
  { name: 'Russian', level: 'Native' },
  { name: 'Polish', level: 'Intermediate' },
]

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
  return (
    <div className="page-shell">
      <header className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Portfolio</p>
          <h1>Hanna Boychenko</h1>
          <p className="hero-role">Technical Project Manager | Web3, Blockchain & AI</p>
          <p className="hero-summary">
            Technical project management leader with 13+ years in IT, including Web3, crypto, blockchain, and AI delivery experience.
            I coordinate distributed technical, product, design, compliance, and business teams, manage timelines, scope,
            risks, resources, and dependencies, and drive critical deliverables to completion. My 7 years of hands-on
            Web2 software engineering experience help me translate between business and engineering, validate requirements,
            and keep release plans realistic.
          </p>
          <div className="hero-actions">
            <a href="mailto:hanna.boychenko@gmail.com" className="button primary">Email me</a>
            <a href="/Hanna-Boychenko-Technical-PM-Web3-AI-CV.pdf" download className="button secondary">Download CV</a>
            <a href="#experience" className="button secondary">View experience</a>
          </div>
          <div className="hero-stats">
            <div>
              <strong>13+</strong>
              <span>years in IT</span>
            </div>
            <div>
              <strong>5+</strong>
              <span>years in PM</span>
            </div>
            <div>
              <strong>7</strong>
              <span>years in development</span>
            </div>
          </div>
        </div>
        <div className="hero-card">
          <img height={450} width={450} src={profileImage} alt="Hanna Boychenko" className="profile-image" />
          <div className="contact-card">
            <p className="card-label">Contact</p>
            <a href="mailto:hanna.boychenko@gmail.com">hanna.boychenko@gmail.com</a>
            <p>
              <a href="https://www.linkedin.com/in/hannaboychenko/">LinkedIn</a>
            </p>
          </div>
        </div>
      </header>

      <main>
        <section className="section section-grid">
          <div>
            <SectionTitle
              eyebrow="About"
              title="A technical PM with engineering depth"
              text="I have worked in two Web3 companies and participated in multiple Web3, crypto, digital asset, and AI initiatives. My Web2 development background helps me translate between technical and business contexts, define realistic requirements, inspect deliverables, and keep remote teams moving through complex dependencies."
            />
          </div>
          <div className="info-card">
            <h3>Industries</h3>
            <p>Web3, Crypto, Blockchain, Digital Assets, AI, Finance, E-commerce</p>
            <h3>Team scope</h3>
            <p>Managed teams of up to 14 people across product, engineering, design, analytics, and business functions.</p>
            <h3>Technical foundation</h3>
            <p>Technical education and 7 years of Web2 software development experience before moving into project and product management.</p>
          </div>
        </section>

        <section className="section">
          <SectionTitle eyebrow="Core capabilities" title="Skills and methods" />
          <div className="card-stack">
            <div className="info-card">
              <h3>Primary skills</h3>
              <PillList items={primarySkills} />
            </div>
            <div className="info-card">
              <h3>Methods and delivery models</h3>
              <PillList items={methodologies} />
            </div>
            <div className="info-card">
              <h3>Tools</h3>
              <PillList items={tools} />
            </div>
          </div>
        </section>

        <section className="section" id="experience">
          <SectionTitle eyebrow="Career" title="Work experience" />
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
            <SectionTitle eyebrow="Delivery history" title="Selected project types" />
            <PillList items={projects} />
          </div>
          <div className="info-card">
            <SectionTitle eyebrow="Selected work" title="NDA-safe delivery examples" />
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
            <SectionTitle eyebrow="Education" title="Courses and academic background" />
            <ul className="simple-list">
              {education.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        </section>

        <section className="section section-grid">
          <div className="info-card">
            <SectionTitle eyebrow="Languages" title="Communication" />
            <ul className="simple-list">
              {languages.map((language) => (
                <li key={language.name}>
                  <strong>{language.name}</strong> — {language.level}
                </li>
              ))}
            </ul>
          </div>
          <div className="info-card">
            <SectionTitle eyebrow="Additional" title="Interests" />
            <ul className="simple-list">
              <li>Open to expanding responsibilities and learning new areas.</li>
              <li>Singing, piano, and guitar.</li>
              <li>Cycling, outdoor activities, and sports.</li>
              <li>Books, meetups, and conferences for continuous learning.</li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  )
}

import profileImage from './assets/profile.jpg'

const experience = [
  {
    company: 'deBridge',
    role: 'CPMO',
    period: 'Feb 2025 — Present',
    achievements: [
      'Lead project operations and delivery coordination across Web3 and AI initiatives.',
      'Build project management processes, reporting systems, and transparent delivery routines for cross-functional teams.',
      'Coordinate developers, product, design, analytics, compliance, legal, and finance stakeholders.',
      'Manage resource allocation, delivery risks, budgets, priorities, and OKR alignment.',
      'Support project discovery and execution in fast-changing product environments where technical context matters.',
    ],
  },
  {
    company: 'VBGL',
    role: 'Project Management Officer',
    period: 'Feb 2024 — Feb 2025',
    achievements: [
      'Supported delivery management for Web3 and crypto-related projects.',
      'Improved team coordination, planning discipline, status reporting, and stakeholder visibility.',
      'Balanced scope, resources, timelines, and budgets across active initiatives.',
      'Worked closely with technical teams and business stakeholders to keep delivery decisions grounded and realistic.',
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
      'Handled risks, resource allocation, budgets, ceremonies, and one-on-one sessions with team members.',
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
  'Web3 Delivery',
  'AI Project Coordination',
  'Team Leadership',
  'Operational Efficiency',
  'OKR Development',
  'Cross-Functional Collaboration',
  'Reporting Systems',
  'Strategic Thinking',
  'Financial Management',
  'Stakeholder Management',
  'Risk Management',
  'Budget Management',
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
  'Web3 Products',
  'Crypto Platforms',
  'AI Products',
  'PIM System',
  'Fintech Startup from Scratch',
  'Virtualized Service Platform',
  'Phone Number Research Tool',
  'Email Management System',
  'Research Employees Platform',
  'Scheduler',
  'Test Automation Tool',
  'Insurances',
  'Industrial KPI Provider',
  'Mercedes Cafe',
  'Land Rover / Jaguar Observer',
  'Clinic Management System',
  'Real Estate System',
  'Clinical Trials SaaS Platform',
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
          <p className="hero-role">Web3 & AI Project Management Officer</p>
          <p className="hero-summary">
            Project management leader with 12 years in IT, strong Web3 and AI delivery experience, and 7 years of hands-on
            software engineering background before moving into PM and product operations. I connect business, product, and
            technical teams, bringing structure to complex initiatives without losing the engineering reality behind them.
          </p>
          <div className="hero-actions">
            <a href="mailto:hanna.boychenko@gmail.com" className="button primary">Email me</a>
            <a href="#experience" className="button secondary">View experience</a>
          </div>
          <div className="hero-stats">
            <div>
              <strong>12+</strong>
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
              <a href="https://www.linkedin.com/in/hanna-boychenko-a48b3078/">LinkedIn</a>
            </p>
          </div>
        </div>
      </header>

      <main>
        <section className="section section-grid">
          <div>
            <SectionTitle
              eyebrow="About"
              title="A Web3 and AI PM with engineering depth"
              text="I have worked in two Web3 companies and participated in multiple Web3, crypto, and AI initiatives. My software development background helps me translate between technical and business contexts, reduce misunderstandings, and keep delivery decisions practical."
            />
          </div>
          <div className="info-card">
            <h3>Industries</h3>
            <p>Web3, Crypto, AI, Finance, E-commerce</p>
            <h3>Team scope</h3>
            <p>Managed teams of up to 14 people across multiple disciplines.</p>
            <h3>Technical foundation</h3>
            <p>Technical education and 7 years of software development experience before moving into project and product management.</p>
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
            <SectionTitle eyebrow="Delivery history" title="Project types" />
            <PillList items={projects} />
          </div>
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

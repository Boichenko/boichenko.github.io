import profileImage from './assets/profile.jpg'

const experience = [
  {
    company: 'QWERTY',
    role: 'CPMO',
    period: 'Feb 2024 — Present',
    achievements: [
      'Managed resource allocation for AI and crypto projects, balancing team capacity and budgets.',
      'Developed project management processes, reporting systems, and coordination practices across teams.',
      'Led cross-functional delivery involving developers, designers, and analysts.',
      'Controlled budgets, tracked risks, supported OKR management, and improved transparency for stakeholders.',
      'Worked with internal functions such as Compliance, Legal, and Finance to keep initiatives aligned with company standards.',
    ],
  },
  {
    company: 'Fively',
    role: 'Project Management Officer, Product Manager, Presale Lead',
    period: 'Nov 2020 — Jan 2024',
    achievements: [
      'Managed multiple projects at different stages with both T&M and fixed-price delivery models.',
      'Integrated project management and presale processes to improve delivery coordination and efficiency.',
      'Prepared plans, status reports, and meeting notes to maintain clear communication.',
      'Handled risks, resource allocation, budgets, ceremonies, and one-on-one sessions with team members.',
      'Processed 90+ RFPs and designed solution approaches as a presale consultant.',
    ],
  },
  {
    company: 'ITechArt',
    role: 'Software Developer',
    period: 'Nov 2017 — Oct 2020',
    achievements: [
      'Designed software architecture and contributed to code structure and engineering collaboration.',
      'Worked across .NET and JavaScript projects, including React.js and Node.js.',
      'Collaborated with teams of different sizes, including large project teams.',
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
  'Backlog Refinement',
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
  'Software Engineering, Polotsk State University (2010–2015)',
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
          <p className="hero-role">Project Management Officer</p>
          <p className="hero-summary">
            PM leader with 12 years in IT, including hands-on software development and the last 5 years focused on project management.
            Experienced in AI, crypto, finance, and e-commerce projects, with a strong focus on cross-functional coordination,
            budgeting, delivery structure, and operational efficiency.
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
              <strong>90+</strong>
              <span>RFPs processed</span>
            </div>
          </div>
        </div>
        <div className="hero-card">
          <img src={profileImage} alt="Hanna Boychenko" className="profile-image" />
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
              title="A PM with a technical background"
              text="My development experience helps me translate between technical and business contexts, reduce misunderstandings, and improve delivery flow across teams."
            />
          </div>
          <div className="info-card">
            <h3>Industries</h3>
            <p>AI, Crypto, Finance, E-commerce</p>
            <h3>Team scope</h3>
            <p>Managed teams of up to 14 people across multiple disciplines.</p>
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

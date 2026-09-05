import { readFile, writeFile } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const resumePath = resolve(projectRoot, 'src/data/resume.json')
const outputPath = resolve(projectRoot, 'dist/index.html')
const rootPlaceholder = '<div id="root"></div>'

const escapeHtml = (value) => String(value)
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')
  .replaceAll("'", '&#39;')

const requiredString = (value, field) => {
  if (typeof value !== 'string' || value.trim() === '') {
    throw new TypeError(`Expected a non-empty string at ${field}`)
  }

  return escapeHtml(value)
}

const requiredArray = (value, field) => {
  if (!Array.isArray(value)) {
    throw new TypeError(`Expected an array at ${field}`)
  }

  return value
}

const renderItems = (items, field, renderItem) => requiredArray(items, field)
  .map((item, index) => renderItem(item, `${field}[${index}]`))
  .join('\n')

const renderPills = (items, field) => renderItems(
  items,
  field,
  (item, itemField) => `                <span class="pill">${requiredString(item, itemField)}</span>`,
)

const renderTextList = (items, field) => renderItems(
  items,
  field,
  (item, itemField) => `              <li>${requiredString(item, itemField)}</li>`,
)

const renderSectionHeading = (section, field, description = '', headingId = '') => {
  const eyebrow = requiredString(section?.eyebrow, `${field}.eyebrow`)
  const title = requiredString(section?.title, `${field}.title`)
  const idAttribute = headingId ? ` id="${escapeHtml(headingId)}"` : ''

  return `          <div class="section-heading">
            <p class="eyebrow">${eyebrow}</p>
            <h2${idAttribute}>${title}</h2>${description ? `
            <p class="section-text">${description}</p>` : ''}
          </div>`
}

const renderResume = (resume) => {
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
    ui,
  } = resume

  const name = requiredString(basics?.name, 'basics.name')
  const headline = requiredString(basics?.headline, 'basics.headline')
  const summary = requiredString(basics?.summary, 'basics.summary')
  const aboutText = requiredString(about?.text, 'about.text')

  const renderedHighlights = renderItems(highlights, 'highlights', (highlight, field) => `            <div>
              <strong>${requiredString(highlight?.value, `${field}.value`)}</strong>
              <span>${requiredString(highlight?.label, `${field}.label`)}</span>
            </div>`)

  const renderedAboutFacts = renderItems(about?.facts, 'about.facts', (fact, field) => `            <h3>${requiredString(fact?.title, `${field}.title`)}</h3>
            <p>${requiredString(fact?.text, `${field}.text`)}</p>`)

  const renderedSkills = renderItems(skills, 'skills', (skill, field) => `        <article class="info-card">
          <h3>${requiredString(skill?.title, `${field}.title`)}</h3>
          <div class="pill-list">
${renderPills(skill?.items, `${field}.items`)}
          </div>
        </article>`)

  const renderedExperience = renderItems(experience, 'experience', (job, field) => `        <article class="timeline-item">
          <header class="timeline-meta">
            <p class="timeline-period">${requiredString(job?.period, `${field}.period`)}</p>
            <h3>${requiredString(job?.company, `${field}.company`)}</h3>
            <p class="timeline-role">${requiredString(job?.role, `${field}.role`)}</p>
          </header>
          <ul>
${renderTextList(job?.achievements, `${field}.achievements`)}
          </ul>
        </article>`)

  const renderedCaseStudies = renderItems(caseStudies, 'caseStudies', (study, field) => `            <article class="case-item">
              <h3>${requiredString(study?.title, `${field}.title`)}</h3>
              <p>${requiredString(study?.text, `${field}.text`)}</p>
            </article>`)

  const renderedLanguages = renderItems(languages, 'languages', (language, field) => `              <li><strong>${requiredString(language?.name, `${field}.name`)}</strong> — ${requiredString(language?.level, `${field}.level`)}</li>`)

  return `<div id="root">
  <div class="page-shell" data-prerendered="true">
    <header class="hero">
      <div class="hero-copy">
        <p class="eyebrow">${requiredString(ui?.portfolioEyebrow, 'ui.portfolioEyebrow')}</p>
        <h1>${name}</h1>
        <p class="hero-role">${headline}</p>
        <p class="hero-summary">${summary}</p>
        <div class="hero-stats">
${renderedHighlights}
        </div>
      </div>
    </header>

    <main>
      <section class="section section-grid" aria-labelledby="about-heading">
        <div>
${renderSectionHeading(ui?.sections?.about, 'ui.sections.about', aboutText, 'about-heading')}
        </div>
        <div class="info-card">
${renderedAboutFacts}
        </div>
      </section>

      <section class="section" aria-labelledby="skills-heading">
${renderSectionHeading(ui?.sections?.skills, 'ui.sections.skills', '', 'skills-heading')}
        <div class="card-stack">
${renderedSkills}
        </div>
      </section>

      <section class="section" id="experience" aria-labelledby="experience-heading">
${renderSectionHeading(ui?.sections?.experience, 'ui.sections.experience', '', 'experience-heading')}
        <div class="timeline">
${renderedExperience}
        </div>
      </section>

      <section class="section section-grid" aria-label="Projects and selected work">
        <div class="info-card">
${renderSectionHeading(ui?.sections?.projects, 'ui.sections.projects')}
          <div class="pill-list">
${renderPills(projectTypes, 'projectTypes')}
          </div>
        </div>
        <div class="info-card">
${renderSectionHeading(ui?.sections?.caseStudies, 'ui.sections.caseStudies')}
          <div class="case-list">
${renderedCaseStudies}
          </div>
        </div>
      </section>

      <section class="section section-grid" aria-label="Education and languages">
        <div class="info-card">
${renderSectionHeading(ui?.sections?.education, 'ui.sections.education')}
          <ul class="simple-list">
${renderTextList(education, 'education')}
          </ul>
        </div>
        <div class="info-card">
${renderSectionHeading(ui?.sections?.languages, 'ui.sections.languages')}
          <ul class="simple-list">
${renderedLanguages}
          </ul>
        </div>
      </section>
    </main>
  </div>
</div>`
}

const [resumeSource, outputHtml] = await Promise.all([
  readFile(resumePath, 'utf8'),
  readFile(outputPath, 'utf8'),
])

const placeholderCount = outputHtml.split(rootPlaceholder).length - 1
if (placeholderCount !== 1) {
  throw new Error(`Expected exactly one ${rootPlaceholder} in dist/index.html; found ${placeholderCount}`)
}

const resume = JSON.parse(resumeSource)
const prerenderedHtml = outputHtml.replace(rootPlaceholder, renderResume(resume))

await writeFile(outputPath, prerenderedHtml, 'utf8')
console.log('Prerendered resume content into dist/index.html')

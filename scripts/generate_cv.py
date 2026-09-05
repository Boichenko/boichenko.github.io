#!/usr/bin/env python3
"""Generate the downloadable CV from the same JSON used by the website."""

import argparse
import html
import json
from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.platypus import (
    BaseDocTemplate,
    Frame,
    KeepTogether,
    PageBreak,
    PageTemplate,
    Paragraph,
    Spacer,
)


REPOSITORY_ROOT = Path(__file__).resolve().parents[1]
DATA_PATH = REPOSITORY_ROOT / "src" / "data" / "resume.json"
DEFAULT_OUTPUT = REPOSITORY_ROOT / "public" / "Hanna-Boychenko-Technical-PM-Web3-AI-CV.pdf"

ACCENT = colors.HexColor("#B13A2F")
TEXT = colors.HexColor("#2D2D2D")
MUTED = colors.HexColor("#595959")


def pdf_text(value: str) -> str:
    """Escape ReportLab markup and use ATS-friendly ASCII dashes."""
    normalized = value.translate(str.maketrans({"–": "-", "—": "-", "‑": "-"}))
    return html.escape(normalized, quote=False)


def build_styles():
    sample = getSampleStyleSheet()
    return {
        "title": ParagraphStyle(
            "Title",
            parent=sample["Title"],
            fontName="Helvetica",
            fontSize=24,
            leading=27,
            textColor=TEXT,
            alignment=TA_LEFT,
            spaceAfter=2,
        ),
        "subtitle": ParagraphStyle(
            "Subtitle",
            parent=sample["Normal"],
            fontName="Helvetica",
            fontSize=11.5,
            leading=14,
            textColor=ACCENT,
            spaceAfter=5,
        ),
        "contact": ParagraphStyle(
            "Contact",
            parent=sample["Normal"],
            fontName="Helvetica",
            fontSize=7.8,
            leading=9.5,
            textColor=MUTED,
            spaceAfter=13,
        ),
        "section": ParagraphStyle(
            "Section",
            parent=sample["Heading2"],
            fontName="Helvetica",
            fontSize=9.5,
            leading=11.5,
            textColor=ACCENT,
            spaceBefore=8,
            spaceAfter=5,
        ),
        "body": ParagraphStyle(
            "Body",
            parent=sample["BodyText"],
            fontName="Helvetica",
            fontSize=8.2,
            leading=10.4,
            textColor=TEXT,
            spaceAfter=5,
        ),
        "skill": ParagraphStyle(
            "Skill",
            parent=sample["BodyText"],
            fontName="Helvetica",
            fontSize=7.9,
            leading=9.7,
            textColor=TEXT,
            spaceAfter=2,
        ),
        "job_title": ParagraphStyle(
            "JobTitle",
            parent=sample["Heading3"],
            fontName="Helvetica",
            fontSize=10.5,
            leading=12.3,
            textColor=TEXT,
            spaceBefore=4,
            spaceAfter=1,
        ),
        "job_date": ParagraphStyle(
            "JobDate",
            parent=sample["BodyText"],
            fontName="Helvetica",
            fontSize=7.5,
            leading=8.5,
            textColor=MUTED,
            spaceAfter=2,
        ),
        "bullet": ParagraphStyle(
            "Bullet",
            parent=sample["BodyText"],
            fontName="Helvetica",
            fontSize=7.8,
            leading=9.5,
            textColor=TEXT,
            leftIndent=9,
            firstLineIndent=-7,
            spaceAfter=1.1,
        ),
    }


def paragraph(value, style):
    return Paragraph(pdf_text(value), style)


def section_title(value, styles):
    return paragraph(value.upper(), styles["section"])


def job_block(job, styles):
    elements = [
        paragraph(f'{job["company"]} - {job["role"]}', styles["job_title"]),
        paragraph(job["period"], styles["job_date"]),
    ]
    elements.extend(
        paragraph(f"- {achievement}", styles["bullet"])
        for achievement in job["achievements"]
    )
    elements.append(Spacer(1, 3))
    return KeepTogether(elements)


def generate(output_path: Path):
    resume = json.loads(DATA_PATH.read_text(encoding="utf-8"))
    basics = resume["basics"]
    styles = build_styles()

    output_path.parent.mkdir(parents=True, exist_ok=True)
    document = BaseDocTemplate(
        str(output_path),
        pagesize=A4,
        rightMargin=45,
        leftMargin=45,
        topMargin=42,
        bottomMargin=42,
        invariant=1,
        pageCompression=1,
        title=f'{basics["name"]} - {basics["headline"]}',
        author=basics["name"],
        creator="scripts/generate_cv.py",
    )
    frame = Frame(
        document.leftMargin,
        document.bottomMargin,
        document.width,
        document.height,
        id="content",
    )
    document.addPageTemplates(PageTemplate(id="resume", frames=[frame]))

    email = pdf_text(basics["email"])
    linkedin_url = html.escape(basics["linkedin"]["url"], quote=True)
    linkedin_label = pdf_text(
        basics["linkedin"]["url"]
        .removeprefix("https://www.")
        .removesuffix("/")
    )

    story = [
        paragraph(basics["name"], styles["title"]),
        paragraph(basics["headline"], styles["subtitle"]),
        Paragraph(
            f'{pdf_text(basics["location"])} | Email: <link href="mailto:{email}" color="#595959">{email}</link>'
            f' | LinkedIn: <link href="{linkedin_url}" color="#595959">{linkedin_label}</link>',
            styles["contact"],
        ),
        section_title("Professional summary", styles),
        paragraph(basics["summary"], styles["body"]),
        section_title("Core skills", styles),
    ]

    for skill_group in resume["skills"]:
        title = pdf_text(skill_group["title"])
        items = pdf_text(", ".join(skill_group["items"]))
        story.append(Paragraph(f"<b>{title}:</b> {items}.", styles["skill"]))

    story.append(section_title("Professional experience", styles))
    for job in resume["experience"]:
        if job["section"] != "Professional experience":
            continue
        story.append(job_block(job, styles))

    story.extend([PageBreak(), section_title("Technical background", styles)])
    for job in resume["experience"]:
        if job["section"] != "Technical background":
            continue
        story.append(job_block(job, styles))

    story.extend(
        [
            section_title("Project types", styles),
            paragraph(
                f'{", ".join(resume["projectTypes"])}. Client and product details are protected by NDA.',
                styles["body"],
            ),
            section_title("Education and certifications", styles),
        ]
    )
    story.extend(
        paragraph(f"- {item}", styles["bullet"])
        for item in resume["education"]
    )

    languages = " | ".join(
        f'{language["name"]} - {language["level"]}'
        for language in resume["languages"]
    )
    story.extend(
        [
            section_title("Languages", styles),
            paragraph(languages, styles["body"]),
        ]
    )

    document.build(story)


def parse_args():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--output", type=Path, default=DEFAULT_OUTPUT)
    return parser.parse_args()


if __name__ == "__main__":
    arguments = parse_args()
    generate(arguments.output.resolve())
    print(arguments.output.resolve())

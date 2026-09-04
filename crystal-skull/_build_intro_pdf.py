#!/usr/bin/env python3
"""Render the Crystal Skull intro as a clean PDF (reportlab, no external deps)."""
import os
import re
from reportlab.lib.pagesizes import LETTER
from reportlab.lib.units import inch
from reportlab.lib.colors import HexColor
from reportlab.lib.enums import TA_LEFT
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, HRFlowable, ListFlowable, ListItem
)
from reportlab.lib.styles import ParagraphStyle

SRC = os.path.join(os.path.dirname(os.path.abspath(__file__)), "crystal-skull-intro.md")
OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "crystal-skull-intro.pdf")

DARK = HexColor("#1e3a2f")     # deep forest
ACCENT = HexColor("#4a7c59")   # moss green
GRAY = HexColor("#4a5568")
LIGHT = HexColor("#f3f6f4")

def parse_md(path):
    """Tiny markdown renderer for this doc: #, ##, -, numbered lists, bold, inline code."""
    with open(path, encoding="utf-8") as f:
        raw = f.read()
    lines = raw.splitlines()
    blocks = []
    i = 0
    def inline(text):
        # code spans -> monospace-ish styling via font tag (use a NON-greedy match)
        text = re.sub(r"`([^`]+?)`", r'<font face="Courier" size="8.5">\1</font>', text)
        # bold: match **...** with lazy content and explicit lookahead, bounded
        text = re.sub(r"\*\*([^*\n]+?)\*\*", r"<b>\1</b>", text)
        # italic: match *...* (not already bold) -> <i>
        text = re.sub(r"(?<!\*)\*([^*\n]+?)\*(?!\*)", r"<i>\1</i>", text)
        return text
    while i < len(lines):
        ln = lines[i]
        if not ln.strip():
            i += 1
            continue
        if ln.startswith("# "):
            blocks.append(("title", inline(ln[2:].strip())))
            i += 1
        elif ln.startswith("## "):
            blocks.append(("h2", inline(ln[3:].strip())))
            i += 1
        elif ln.startswith("### "):
            blocks.append(("h3", inline(ln[4:].strip())))
            i += 1
        elif re.match(r"^\d+\.\s", ln.strip()):
            items = []
            while i < len(lines) and re.match(r"^\d+\.\s", lines[i].strip()):
                items.append(inline(re.sub(r"^\d+\.\s", "", lines[i].strip())))
                i += 1
            blocks.append(("num", items))
        elif ln.strip().startswith("- "):
            items = []
            while i < len(lines) and lines[i].strip().startswith("- "):
                items.append(inline(lines[i].strip()[2:]))
                i += 1
            blocks.append(("bul", items))
        elif ln.strip() == "---":
            blocks.append(("rule", None))
            i += 1
        else:
            buf = []
            while i < len(lines) and lines[i].strip() and not lines[i].strip().startswith(("#", "-", "---")) and not re.match(r"^\d+\.\s", lines[i].strip()):
                buf.append(lines[i].strip())
                i += 1
            blocks.append(("p", inline(" ".join(buf))))
    return blocks

def build():
    styles = {
        "title": ParagraphStyle("title", fontName="Helvetica-Bold", fontSize=20,
                                leading=24, textColor=DARK, spaceAfter=2),
        "subtitle": ParagraphStyle("subtitle", fontName="Helvetica-Oblique", fontSize=11,
                                   leading=14, textColor=ACCENT, spaceAfter=8),
        "h2": ParagraphStyle("h2", fontName="Helvetica-Bold", fontSize=13,
                             leading=16, textColor=DARK, spaceBefore=14, spaceAfter=5),
        "h3": ParagraphStyle("h3", fontName="Helvetica-Bold", fontSize=11,
                             leading=14, textColor=ACCENT, spaceBefore=8, spaceAfter=3),
        "p": ParagraphStyle("p", fontName="Helvetica", fontSize=9.7, leading=13.5,
                            textColor=GRAY, spaceAfter=5, alignment=TA_LEFT),
        "item": ParagraphStyle("item", fontName="Helvetica", fontSize=9.7, leading=13.5,
                               textColor=GRAY, spaceAfter=2),
    }

    doc = SimpleDocTemplate(OUT, pagesize=LETTER,
                            leftMargin=0.9 * inch, rightMargin=0.9 * inch,
                            topMargin=0.8 * inch, bottomMargin=0.8 * inch,
                            title="The Crystal Skull — Your Family's Elder",
                            author="Village RPG")
    story = []
    blocks = parse_md(SRC)
    for kind, content in blocks:
        if kind == "title":
            story.append(Paragraph(content, styles["title"]))
        elif kind == "subtitle":
            story.append(Paragraph(content, styles["subtitle"]))
        elif kind == "h2":
            story.append(Spacer(1, 2))
            story.append(Paragraph(content, styles["h2"]))
        elif kind == "h3":
            story.append(Paragraph(content, styles["h3"]))
        elif kind == "p":
            story.append(Paragraph(content, styles["p"]))
        elif kind == "num":
            lf = ListFlowable(
                [ListItem(Paragraph(c, styles["item"]), leftIndent=16) for c in content],
                bulletType="1", start=1, leftIndent=18, bulletFontName="Helvetica-Bold",
                bulletFontSize=9.7, bulletColor=ACCENT, spaceAfter=2)
            story.append(lf)
        elif kind == "bul":
            lf = ListFlowable(
                [ListItem(Paragraph(c, styles["item"]), leftIndent=14) for c in content],
                bulletType="bullet", leftIndent=16, bulletFontName="Helvetica",
                bulletFontSize=9.7, bulletColor=ACCENT, spaceAfter=2)
            story.append(lf)
        elif kind == "rule":
            story.append(Spacer(1, 4))
            story.append(HRFlowable(width="100%", thickness=0.8, color=HexColor("#c8d6cc")))
            story.append(Spacer(1, 4))
    doc.build(story)
    print(f"Wrote {OUT} ({os.path.getsize(OUT)} bytes)")

if __name__ == "__main__":
    build()
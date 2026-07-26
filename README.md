# Pedagogical Friction in the Age of Generative AI and Tertiary Algorithmicity: Interactive Literature Review Hub

An interactive, digitally immersive, and gamified literature review web application created as an extension of Micah J. Miner's dissertation research ecosystem (`minerclass.github.io`, `micahminer.com`, `github.com/minerclass`).

## Overview

Grounded in Chapters 1–3 of Micah Miner's doctoral dissertation proposal at National Louis University (*Pedagogical Friction in the Age of Generative AI and Tertiary Algorithmicity: A Qualitative-Dominant Convergent Mixed Methods Study*), this web application translates complex theoretical literature into an interactive practitioner-scholar experience.

### Core Features

1. **Media Ecology 5-Stage Journey**: Interactive timeline tracing Ong's media stages (Primary Orality through Broadcast Secondary Orality) and Miner's extensions (Algorithmic Secondary Orality and Tertiary Algorithmicity). Explores the 3 ruptured Ong assumptions and the 4 media-ecological pressures.
2. **Dialectical Crucible Matrix**: Synthesizes 4 foundational theoretical streams (Media Ecology, Critical Algorithm Studies, Learning Sciences, DisCrit/Equity) into the Pedagogical Friction Framework.
3. **Gamified Practitioner Friction Classifier**: Interactive scenario simulator where scholars evaluate K–12 instructional dilemmas, classifying decisions into Productive Friction (*Noetic*, *Rhetorical*, *Existential*, *Infrastructural*), Exclusionary Friction, and Bypassed Friction (*Unproductive Success*).
4. **Scholar Citation Nexus**: Searchable network card explorer covering key scholars (Ong, McLuhan, Postman, Stiegler, Floridi, Bjork, Kapur, Sweller, Annamma, Dolmage, Creswell & Plano Clark, etc.).
5. **Chapters 1–3 Deep Synthesis Reader**: Tabbed reader covering research questions, problem statement, literature synthesis, theoretical counterargument stress-tests, and the qualitative-dominant convergent mixed methods design.
6. **Reflection Audit Trail & Academic Handoff**: Generates exportable/printable summary reports for doctoral colloquia or committee review.

## Terminology (current as of the submitted July 2026 draft)

Several sibling repos carry **stale** wording. This repo follows the submitted Chapters 1–3:

- **Design:** *qualitative-dominant convergent mixed methods study* (QUAL + quan), per Creswell &
  Plano Clark (2018). The **case-study framing was dropped** — do not reintroduce "case study,"
  Merriam, Stake, Yin, "bounded case," or "embedded role groups."
- **Citations:** Miner **2026a** = Zenodo secondary-data companion; Miner **2026b** = the
  *i.e.: inquiry in education* article (the framework source). Older sibling repos state this
  pair differently; the submitted draft governs.
- **Framework:** three **learner-facing** dimensions (noetic/head, rhetorical/room,
  existential/world) over **infrastructural friction (system) as the conditioning layer**.
  Not four co-equal peers.
- **Five stages:** primary orality, literacy, secondary orality, **algorithmic secondary
  orality** (Miner), **tertiary algorithmicity** (Miner).
- **Proposal stage.** No findings are reported; data collection has not occurred.

## Technology Stack

- **HTML5 & Vanilla CSS**: Standard responsive layout using custom design tokens matching `minerclass.github.io` (`--mjm-gold`, `--mjm-teal`, `--mjm-violet`, `--mjm-blue`, `--mjm-rust`, `--mjm-rose`).
- **JavaScript (ES6+)**: Zero-dependency interactive state management, scenario quiz engine, and search filtering.
- **Accessibility & Reduced Motion**: WCAG 2.2 compliant keyboard navigation, ARIA landmarks, focus indicators, and print stylesheet.

## Local Development & Viewing

To run locally:
```bash
# Navigate to repository folder
cd dissertation-litreview

# Start a local web server (Python)
python -m http.server 8000
```
Open `http://localhost:8000` in your browser.

## GitHub Pages Deployment

This repository is designed for deployment via GitHub Pages at:
`https://minerclass.github.io/dissertation-litreview/`

To deploy:
1. Commit all files to the `main` branch.
2. In GitHub settings under **Pages**, set source to `main` branch / root `/`.

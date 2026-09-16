# PRD — Harmeet Kour Personal Portfolio / Professional History Page

## Original Problem Statement
"Hey i need to build my own web page which will contain all the Professional history, am building this to add this in my CV so if recruiters want they can check the web page"

## Product
A dark, Awwwards-grade single-page portfolio for Harmeet Kour to link from her CV for recruiters. Built from her actual uploaded CV (Harmeet_Kour_CV.pdf).

## Architecture
- Frontend: React 19 + Tailwind + framer-motion + lenis (smooth scroll) + sonner (toasts). Single-page, anchor navigation.
- Backend: FastAPI template (no active endpoints needed yet — page is fully static content driven).
- Content source of truth: /app/frontend/src/data/profile.js (single editable data file).
- Design system: /app/design_guidelines.json (Cybernetic Obsidian theme: #0A0A0E bg, #00F0FF cyan accent, #8B5CF6 violet; Syne display / Plus Jakarta Sans body / JetBrains Mono).

## User Personas
- Recruiters/hiring managers arriving from the CV link — need fast scan of experience, proof of impact, easy contact.
- Harmeet — needs an editable, credible page that matches her CV.

## Core Requirements (static)
1. Professional history (experience timeline) — done
2. Skills showcase — done
3. Projects/initiatives — done
4. Contact section with links — done
5. Dark & modern aesthetic, award-level motion (masked hero reveal, marquee, lenis, parallax) — done
6. Recruiter-friendly: CV download, copy email, availability badge — done

## Implemented (July 2026)
- Kinetic hero: masked line-by-line name reveal, availability + location badges, 3D mouse-tilt monogram card with key stats, scroll parallax fade
- Slow editorial skills marquee (pauses on hover)
- Ch 01 Manifesto: executive summary verbatim from CV + three positioning pillars
- Ch 02 Experience: numbered timeline with expandable roles (MARCOM Head current, Business Analyst, Network Ops — all Bharti Airtel) with full CV bullets
- Ch 03 Skills: asymmetric bento (4 categories) + Daily Toolkit strip
- Ch 04 Projects: 5 signature Airtel initiatives (Branding Bot, Service Camp workflows, GIS maps, Amarnath campaign, Airtel Mubarak)
- Ch 05 Credentials: education, 5 certifications, 6 achievements/recognition
- Ch 06 Contact: email mailto card, copy-email with sonner toast, phone, LinkedIn, CV download (links to uploaded PDF), footer
- Sticky glassmorphism nav with mobile menu; grain texture; reduced-motion support; responsive (verified mobile 390px)
- Browser tab title + meta description updated

## Known Gaps / Placeholders
- LinkedIn link is a PLACEHOLDER (linkedin.com homepage) — replace with real profile URL in /app/frontend/src/data/profile.js
- No backend contact form (user did not select it); contact is mailto/phone/links
- No photo of Harmeet used (avoids misleading stock portrait); monogram card instead

## Backlog
- P0: Replace LinkedIn placeholder with real URL
- P1: Contact form that saves recruiter enquiries to MongoDB + email notification
- P1: Add Harmeet's real photo to hero card
- P2: Print-friendly / CV-export view
- P2: Custom domain for a clean CV link
- P2: Light mode toggle

## Next Tasks
1. Get real LinkedIn URL from user, update profile.js
2. Optional: add recruiter contact form (backend endpoint + sonner feedback)
3. Optional: photo upload integration for hero

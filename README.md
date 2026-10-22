# Miltah Mazvanhi | Digital Marketing Portfolio

A responsive portfolio for Miltah Mazvanhi, a junior digital marketer based in Harare, Zimbabwe. It introduces her, highlights skills and services, presents campaign concepts, and provides contact options.

## Getting Started

### Requirements

- Node.js (current LTS recommended)
- npm

### Install and run

```bash
npm install
npm run dev
```

Vite prints the local development URL in the terminal.

### Other commands

```bash
npm run lint      # Check the code with ESLint
npm run build     # Create a production build in dist/
npm run preview   # Preview the production build locally
```

## Pages

- `/` - Homepage with an introduction, skills and tools, services, selected work, and a contact call to action.
- `/about` - Profile, working approach, work experience, and certificates.
- `/projects` - Campaign gallery with category filters. Each project opens a lightbox with the full document, and inline video where a video was produced.
- `/contact` - Contact details, LinkedIn and WhatsApp links, and an email form.

The appearance toggle switches between light and dark themes and remembers the selection in the browser.

## Project Structure

```text
src/
  assets/             Local image assets
  components/         Shared navigation, footer, transitions, and UI
    home/             Homepage sections
  data/site.js        Contact details, socials, services, projects, certificates, and experience
  pages/              Home, About, Projects, and Contact routes
public/
  Miltah-Mazvanhi-CV.pdf   The CV available for download
  work/                    Project imagery
```

## Contact details

All contact details live in one place — `contact` and `socials` in `src/data/site.js` — and are consumed by the Contact page, the footer, and the homepage call to action.

| Channel | Value |
| --- | --- |
| Email | miltahmazvanhi@gmail.com |
| Phone | +263 786 826 703 |
| WhatsApp | https://wa.me/263786826703 |
| LinkedIn | https://linkedin.com/in/miltah-mazvanhi-381b1527b |
| Location | Harare, Zimbabwe |

Only channels that genuinely exist are listed. Instagram and TikTok are deliberately absent because no verified accounts are available — add them to `socials` in `src/data/site.js` if real accounts are created.

The contact form opens a prefilled email in the visitor's default mail app. It does not submit to a server; connect a form service or backend if direct web submissions are needed.

## Certificates

The six certifications from the CV are listed in `certificates` in `src/data/site.js`. Two have published scans and are shown as images; the other four are rendered as text cards because no scans exist yet. Add a `pdf` or `image` path to a certificate entry once a scan is available and the card picks it up automatically.

## Before Launch

- Replace any remaining placeholder imagery in `public/work/` with final approved campaign visuals.
- Re-check the project result labels in `src/data/site.js` — campaign goals (such as "400 reservations targeted") are labelled as targets rather than achieved results.
- Replace `public/favicon.svg` if a personal logo becomes available.


import { Megaphone, PenTool, Target, Mail } from "lucide-react";

export const cvUrl = "/Miltah-Mazvanhi-CV.pdf";

export const brands = [
  "Coca-Cola",
  "Foodies Zimbabwe",
  "The Velvet Fork",
  "Coursera",
  "Uxcel",
  "Zapier",
];

export const services = [
  {
    icon: Megaphone,
    title: "Social Media Strategy",
    text: "Platform-first strategies that build an engaged audience and a recognisable voice.",
  },
  {
    icon: PenTool,
    title: "Content Marketing",
    text: "Stories, campaigns and content calendars that keep your brand top of mind.",
  },
  {
    icon: Target,
    title: "Paid Advertising",
    text: "Targeted ad campaigns focused on measurable returns, not vanity metrics.",
  },
  {
    icon: Mail,
    title: "Email & Automation",
    text: "Lifecycle emails and automations that turn subscribers into loyal customers.",
  },
];

// Real portfolio work. `cover` is the rendered first page, `pages` are extra
// rendered spreads shown in the lightbox, `pdf` / `video` open the full file.
export const projects = [
  {
    id: 1,
    title: "Foodies Zimbabwe Launch Campaign",
    client: "Foodies Zimbabwe",
    category: "Social Media",
    year: "2026",
    result: "16-page strategy · +40% engagement goal",
    description:
      "A full digital marketing campaign strategy for a Harare-based food and restaurant business, built around five objectives: growing online visibility, lifting social engagement by 40% over 90 days, attracting first-time customers, driving restaurant visits and improving retention through community.",
    tags: ["Campaign strategy", "Social media", "Content planning"],
    image: "/work/foodies-cover.jpg",
    pages: ["/work/foodies-p3.jpg", "/work/foodies-p5.jpg"],
    pdf: "/work/foodies.pdf",
  },
  {
    id: 2,
    title: "The Velvet Fork Restaurant Launch",
    client: "The Velvet Fork",
    category: "Campaign",
    year: "2026",
    result: "400 reservations · 1,000 email subscribers targeted",
    description:
      "A pre-launch and grand-opening campaign for a premium restaurant in Harare. Includes a detailed buyer persona, SMART objectives and a channel plan across Instagram, TikTok and Facebook, in-store branding and a giveaway-driven email capture sequence.",
    tags: ["Go-to-market", "Buyer persona", "Email capture"],
    image: "/work/velvet-fork-cover.jpg",
    pages: ["/work/velvet-fork-p3.jpg", "/work/velvet-fork-p4.jpg"],
    pdf: "/work/velvet-fork.pdf",
  },
  {
    id: 3,
    title: "Coca-Cola Website Performance Audit",
    client: "Coca-Cola",
    category: "SEO Audit",
    year: "2026",
    result: "88 pages crawled · 27 structured-data issues found",
    description:
      "A technical SEO audit of www.coca-colacompany.com using SEMrush Site Audit. The report surfaces 27 structured-data errors, duplicate and missing meta descriptions, duplicated H1 + title tags, and confirms zero 404/5XX errors, with a prioritised fix list.",
    tags: ["Technical SEO", "SEMrush", "Site audit"],
    image: "/work/coke-audit-cover.jpg",
    pages: ["/work/coke-audit-p5.jpg"],
    pdf: "/work/coke-audit.pdf",
  },
  {
    id: 4,
    title: "Coca-Cola Brand Voice Guide",
    client: "Coca-Cola",
    category: "Branding",
    year: "2026",
    result: "One-page voice system + 9:16 brand kit",
    description:
      "A one-page brand voice guide defining three voice adjectives — optimistic, friendly and inclusive — with clear do's and don'ts and ready-to-use voice examples, paired with a vertical brand kit motion piece.",
    tags: ["Brand voice", "Guidelines", "Messaging"],
    image: "/work/coke-voice-cover.jpg",
    pages: [],
    pdf: "/work/coke-voice.pdf",
    video: "/work/coke-brand-kit.mp4",
    videoPoster: "/work/coke-voice-cover.jpg",
  },
  {
    id: 5,
    title: "Zapier Lead Automation",
    client: "The Velvet Fork",
    category: "Automation",
    year: "2026",
    result: "Google Forms → Sheets → Gmail, fully automated",
    description:
      "A no-code lead acquisition workflow for a restaurant. New Google Forms submissions are logged to Google Sheets and trigger an instant personalised welcome email via Gmail, so no booking enquiry slips through a slow inbox.",
    tags: ["Zapier", "Automation", "Lead capture"],
    image: "/work/zapier-cover.jpg",
    pages: ["/work/zapier-p3.jpg"],
    pdf: "/work/zapier.pdf",
  },
  {
    id: 6,
    title: "“Together We Care” Charity Event",
    client: "Community project",
    category: "Design",
    year: "2026",
    result: "Event flyer · live music, food & donation drive",
    description:
      "A poster and identity for a community fundraising event at Africa Unity Square, Harare, combining live music and performance, a food and donation drive and youth empowerment activities under a warm, compassion-led message.",
    tags: ["Graphic design", "Event", "Print"],
    image: "/work/charity-cover.jpg",
    pages: [],
    pdf: "/work/charity.pdf",
  },
];

export const certificates = [
  {
    title: "Foundations of Digital Marketing & E-commerce",
    provider: "Google · Coursera",
    issued: "July 2026",
    image: "/work/cert-digital-cover.jpg",
    pdf: "/work/cert-digital.pdf",
  },
  {
    title: "UX Design Foundations",
    provider: "Uxcel",
    issued: "March 2026",
    image: "/work/cert-ux-cover.jpg",
    pdf: "/work/cert-ux.pdf",
  },
];


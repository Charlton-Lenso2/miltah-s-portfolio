import { Megaphone, PenTool, Target, Mail } from "lucide-react";

export const brands = [
  "Northwind",
  "Lumen",
  "Halcyon",
  "Bloomly",
  "Aster & Co",
  "Vertex",
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

export const projects = [
  {
    id: 1,
    title: "Bloomly Spring Launch Campaign",
    category: "Social Media",
    result: "+240% engagement in 8 weeks",
    image: "https://picsum.photos/seed/miltah-p1/1600/800",
  },
  {
    id: 2,
    title: "Halcyon Lead Generation Funnel",
    category: "Paid Ads",
    result: "4.8x return on ad spend",
    image: "https://picsum.photos/seed/miltah-p2/1000/800",
  },
  {
    id: 3,
    title: "Aster & Co Content Rebrand",
    category: "Content",
    result: "3x organic reach in one quarter",
    image: "https://picsum.photos/seed/miltah-p3/1000/800",
  },
];

export const testimonials = [
  {
    quote:
      "Miltah turned our scattered social presence into a clear strategy. Our engagement has never been higher.",
    name: "Client Name",
    role: "Founder, Bloomly",
  },
  {
    quote:
      "Organised, creative and genuinely obsessed with results. She made the whole process feel effortless.",
    name: "Client Name",
    role: "Marketing Lead, Halcyon",
  },
  {
    quote:
      "Our ad spend finally makes sense. Every campaign came with clear reporting and real growth.",
    name: "Client Name",
    role: "Owner, Aster & Co",
  },
];

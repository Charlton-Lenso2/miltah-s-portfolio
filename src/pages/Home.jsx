import { Link } from "react-router";
import { motion } from "motion/react";
import { ArrowUpRight, Play } from "lucide-react";

import Container from "../components/Container";
import DownloadCVButton from "../components/DownloadCVButton";
import AboutIntro from "../components/home/AboutIntro";
import Services from "../components/home/Services";
import FeaturedProjects from "../components/home/FeaturedProjects";
import SkillsTools from "../components/home/SkillsTools";
import CTA from "../components/home/CTA";
import ProjectLightbox from "../components/ProjectLightbox";
import { projects } from "../data/site";
import { useState } from "react";

const ease = [0.22, 1, 0.36, 1];
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease } },
};

function Hero() {
  const [activeProject, setActiveProject] = useState(null);
  // The brand-kit video project opens inline from the hero.
  const videoProject = projects.find((p) => p.video);
  const collage = projects.slice(0, 3);

  return (
    <Container className="pt-28 md:pt-32">
      <div className="grid items-center gap-10 rounded-[2rem] border border-line bg-paper p-5 shadow-[0_20px_60px_rgba(0,0,0,0.04)] sm:p-8 md:grid-cols-[1.1fr_0.9fr] md:gap-12 md:rounded-[2.5rem] md:p-12">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="py-4 md:py-8"
        >
          <motion.span
            variants={item}
            className="inline-flex rounded-full border border-line bg-canvas px-4 py-1.5 text-xs font-medium"
          >
            Junior Digital Marketer
          </motion.span>

          <motion.h1
            variants={item}
            className="mt-7 max-w-2xl text-5xl font-semibold leading-[1.02] tracking-[-0.04em] sm:text-6xl"
          >
            Curious about what makes people{" "}
            <span className="font-serif font-normal italic text-accent">
              click.
            </span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
          >
            I&apos;m Miltah, a junior digital marketer based in Harare, building
            campaigns across social media, content, branding and digital
            advertising.
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm text-paper transition-colors hover:bg-accent"
            >
              View projects <ArrowUpRight size={16} />
            </Link>
            <DownloadCVButton variant="outline" className="px-6 py-3" />
            <Link
              to="/contact"
              className="rounded-full border border-line bg-paper px-6 py-3 text-sm transition-colors hover:border-ink"
            >
              Get in touch
            </Link>
          </motion.div>
        </motion.div>

        {/* A collage of real, rendered client work instead of a stock portrait. */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="relative aspect-[4/5] w-full">
            {/* Main featured piece */}
            <button
              type="button"
              onClick={() => setActiveProject(collage[0])}
              className="group absolute inset-0 overflow-hidden rounded-[1.5rem] md:rounded-[2rem]"
              aria-label={`Open ${collage[0].title}`}
            >
              <img
                src={collage[0].image}
                alt={collage[0].title}
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <span className="absolute left-4 top-4 rounded-full border border-white/40 bg-paper/90 px-4 py-2 text-xs font-medium text-ink backdrop-blur-sm md:left-6 md:top-6">
                {collage[0].client}
              </span>
            </button>

            {/* Stacked secondary pieces */}
            <button
              type="button"
              onClick={() => setActiveProject(collage[1])}
              aria-label={`Open ${collage[1].title}`}
              className="absolute -left-4 top-8 hidden w-24 -rotate-6 overflow-hidden rounded-xl border-2 border-paper shadow-xl transition-transform duration-300 hover:scale-105 sm:block"
            >
              <img
                src={collage[1].image}
                alt={collage[1].title}
                className="h-32 w-full object-cover"
              />
            </button>

            {videoProject && (
              <button
                type="button"
                onClick={() => setActiveProject(videoProject)}
                aria-label={`Play ${videoProject.title}`}
                className="absolute -right-4 bottom-16 w-24 rotate-6 overflow-hidden rounded-xl border-2 border-paper shadow-xl transition-transform duration-300 hover:scale-105 sm:w-28"
              >
                <video
                  src={videoProject.video}
                  muted
                  loop
                  autoPlay
                  playsInline
                  className="h-36 w-full object-cover"
                />
                <span className="absolute inset-0 flex items-center justify-center bg-ink/20">
                  <Play size={20} className="text-white" fill="white" />
                </span>
              </button>
            )}

            <span className="absolute bottom-4 left-4 rounded-full border border-white/40 bg-paper/90 px-4 py-2 text-xs font-medium text-ink backdrop-blur-sm md:bottom-6 md:left-6">
              Strategy · Content · Digital
            </span>
          </div>
        </motion.div>
      </div>

      <ProjectLightbox
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </Container>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <AboutIntro />
      <SkillsTools />
      <Services />
      <FeaturedProjects />
      <CTA />
    </>
  );
}

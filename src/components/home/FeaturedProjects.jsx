import { Link } from 'react-router'
import { ArrowUpRight } from 'lucide-react'
import Container from '../Container'
import Reveal from '../Reveal'
import SectionHeading from '../SectionHeading'
import { projects } from '../../data/site'

function ProjectCard({ project, featured }) {
  return (
    <Reveal className={featured ? 'md:col-span-2' : ''}>
      <Link
        to="/projects"
        className="group block rounded-[2rem] border border-line bg-paper p-3 transition-shadow duration-300 hover:shadow-[0_20px_60px_rgba(0,0,0,0.06)]"
      >
        <div
          className={`overflow-hidden rounded-[1.5rem] ${
            featured ? 'aspect-[16/8]' : 'aspect-[4/3]'
          }`}
        >
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </div>

        <div className="flex items-end justify-between gap-4 px-3 pb-3 pt-5">
          <div>
            <span className="rounded-full border border-line bg-canvas px-3 py-1 text-xs font-medium">
              {project.category}
            </span>
            <h3 className="mt-4 text-2xl font-semibold tracking-tight md:text-3xl">
              {project.title}
            </h3>
            <p className="mt-2 text-sm text-muted">{project.result}</p>
          </div>
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-line transition-colors group-hover:bg-ink group-hover:text-paper">
            <ArrowUpRight size={18} />
          </span>
        </div>
      </Link>
    </Reveal>
  )
}

export default function FeaturedProjects() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <SectionHeading tag="Selected work">
          Campaigns that moved the{' '}
          <span className="font-serif font-normal italic text-accent">needle.</span>
        </SectionHeading>

        <div className="grid gap-3 md:grid-cols-2">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} featured={i === 0} />
          ))}
        </div>

        <Reveal className="mt-10 flex justify-center">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 rounded-full border border-line bg-paper px-6 py-3 text-sm transition-colors hover:border-ink"
          >
            View all projects <ArrowUpRight size={16} />
          </Link>
        </Reveal>
      </Container>
    </section>
  )
}
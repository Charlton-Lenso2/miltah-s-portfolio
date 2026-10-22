import { ArrowUpRight, BadgeCheck } from "lucide-react";
import { Link } from "react-router";
import Container from "../components/Container";
import DownloadCVButton from "../components/DownloadCVButton";
import Reveal from "../components/Reveal";
import { certificates, experience } from "../data/site";

const approach = [
  {
    number: "01",
    title: "Listen first",
    text: "Start with the people, the context, and the reason behind the brief.",
  },
  {
    number: "02",
    title: "Make it meaningful",
    text: "Turn useful insights into clear content and thoughtful campaign ideas.",
  },
  {
    number: "03",
    title: "Learn as I go",
    text: "Pay attention to what resonates, then use that knowledge in the next iteration.",
  },
];

export default function About() {
  return (
    <div className="pb-20 pt-28 sm:pt-32">
      <Container>
        <section className="grid items-center gap-8 md:grid-cols-[1.05fr_0.95fr] md:gap-14">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.12em] text-accent">
              A little about me
            </p>
            <h1 className="mt-5 max-w-2xl text-5xl font-semibold leading-[1.04] sm:text-6xl">
              Digital marketing, led by{" "}
              <span className="font-serif font-normal italic text-accent">
                curiosity.
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              I’m Miltah, a junior digital marketer based in Harare, Zimbabwe.
              I’m drawn to the meeting point between people, good stories, and
              the digital spaces where ideas travel.
            </p>
            <p className="mt-4 max-w-xl leading-relaxed text-muted">
              I’m building my experience across social media, content, and
              digital advertising. I’m especially interested in the balance
              between creative thinking and thoughtful measurement: shaping a
              clear message, sharing it in the right places, and paying
              attention to how people respond.
            </p>
            <p className="mt-4 max-w-xl leading-relaxed text-muted">
              As a junior marketer, I’m strengthening my foundations in audience
              research, copywriting, content planning, and campaign reporting. I
              bring care, curiosity, and openness to feedback to each project,
              and I enjoy turning what I learn into a better next draft.
            </p>
            <p className="mt-4 max-w-xl leading-relaxed text-muted">
              Outside the brief, I’m drawn to the small details that give a
              brand its character: the words it chooses, the conversations it
              starts, and the consistency that helps people recognise and trust
              it.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm text-paper transition-colors hover:bg-accent"
              >
                See selected work <ArrowUpRight size={16} />
              </Link>
              <DownloadCVButton variant="outline" className="px-6 py-3" />
            </div>
          </Reveal>

          <Reveal delay={0.12} className="relative">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-canvas">
              <img
                src="/work/velvet-fork-cover.jpg"
                alt="The Velvet Fork launch campaign cover"
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <img
                src="/work/foodies-cover.jpg"
                alt="Foodies Zimbabwe campaign cover"
                loading="lazy"
                className="absolute -bottom-6 -right-4 hidden w-40 rotate-6 rounded-xl border-4 border-paper object-cover shadow-xl sm:block md:w-48"
              />
            </div>
            <div className="absolute bottom-4 left-4 rounded-xl border border-white/30 bg-paper/90 px-4 py-3 backdrop-blur-sm sm:bottom-6 sm:left-6">
              <p className="text-xs text-muted">Based in</p>
              <p className="mt-0.5 text-sm font-medium">Harare, Zimbabwe</p>
            </div>
          </Reveal>
        </section>

        <section className="mt-20 border-t border-line pt-12 md:mt-28 md:pt-16">
          <Reveal>
            <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.12em] text-accent">
                  How I think
                </p>
                <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
                  A thoughtful way of working.
                </h2>
              </div>
              <p className="max-w-sm text-sm leading-relaxed text-muted">
                Good work comes from staying curious, making with intention, and
                leaving room to improve.
              </p>
            </div>

            <div className="grid gap-8 border-y border-line py-8 sm:grid-cols-3 sm:gap-6">
              {approach.map((step) => (
                <article
                  key={step.number}
                  className="sm:border-l sm:border-line sm:pl-5"
                >
                  <p className="font-serif text-2xl italic text-accent">
                    {step.number}
                  </p>
                  <h3 className="mt-3 text-lg font-semibold">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {step.text}
                  </p>
                </article>
              ))}
            </div>
          </Reveal>
        </section>

        <section className="mt-20 border-t border-line pt-12 md:mt-28 md:pt-16">
          <Reveal>
            <div className="mb-9 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.12em] text-accent">
                  Where I&apos;ve worked
                </p>
                <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
                  Experience
                </h2>
              </div>
              <p className="max-w-md text-sm leading-relaxed text-muted">
                Hands-on marketing work and volunteer teaching, both centred
                on helping people understand and build things themselves.
              </p>
            </div>

            <div className="space-y-5">
              {experience.map((role) => (
                <article
                  key={role.role}
                  className="rounded-2xl border border-line bg-paper p-6 sm:p-8"
                >
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                    <div>
                      <h3 className="text-xl font-semibold sm:text-2xl">
                        {role.role}
                      </h3>
                      <p className="mt-1 text-sm text-muted">
                        {role.org} · {role.location}
                      </p>
                    </div>
                    <p className="shrink-0 rounded-full border border-line bg-canvas px-3 py-1.5 text-xs font-medium text-muted">
                      {role.period}
                    </p>
                  </div>
                  <ul className="mt-5 space-y-2.5">
                    {role.points.map((point) => (
                      <li
                        key={point}
                        className="flex gap-3 text-sm leading-relaxed text-muted"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent"
                        />
                        {point}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </Reveal>
        </section>

        <section className="mt-20 border-t border-line pt-12 md:mt-28 md:pt-16">
          <Reveal>
            <div className="mb-9 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.12em] text-accent">
                  Learning in progress
                </p>
                <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
                  Certificates &amp; learning
                </h2>
              </div>
              <p className="max-w-md text-sm leading-relaxed text-muted">
                Credentials I&apos;ve earned so far — and I&apos;m always adding
                to them.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {certificates.map((certificate) => (
                <article
                  key={certificate.title}
                  className="group overflow-hidden rounded-2xl border border-line bg-paper"
                >
                  <div className="relative aspect-[3/2] overflow-hidden bg-canvas">
                    {certificate.image ? (
                      <img
                        src={certificate.image}
                        alt={`${certificate.title} certificate`}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                      />
                    ) : (
                      <div className="flex h-full w-full flex-col items-center justify-center gap-2 p-6 text-center">
                        <BadgeCheck
                          size={28}
                          className="text-accent"
                          aria-hidden="true"
                        />
                        <p className="text-sm font-medium text-ink">
                          {certificate.title}
                        </p>
                        <p className="text-xs text-muted">
                          {certificate.provider}
                        </p>
                      </div>
                    )}
                  </div>
                  <div className="flex items-center justify-between gap-4 p-5">
                    <div>
                      <h3 className="text-lg font-semibold">
                        {certificate.title}
                      </h3>
                      <p className="mt-1.5 text-sm text-muted">
                        {certificate.provider} · {certificate.issued}
                      </p>
                    </div>
                    <div className="flex shrink-0 flex-col items-end gap-2">
                      {certificate.pdf && (
                        <a
                          href={certificate.pdf}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-sm transition-colors hover:border-ink"
                        >
                          View <ArrowUpRight size={15} />
                        </a>
                      )}
                      {certificate.verify && (
                        <a
                          href={certificate.verify}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex min-h-8 items-center gap-1.5 text-xs text-muted underline-offset-4 transition-colors hover:text-ink hover:underline"
                        >
                          <BadgeCheck size={14} /> Verify credential
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </Reveal>
        </section>

        <Reveal className="mt-14 flex flex-col items-start justify-between gap-5 rounded-2xl bg-ink p-6 text-paper sm:flex-row sm:items-center sm:p-8">
          <div>
            <p className="text-xs uppercase tracking-[0.12em] text-paper/60">
              Open to conversations
            </p>
            <h2 className="mt-2 text-2xl font-semibold">
              Let’s make something thoughtful.
            </h2>
          </div>
          <Link
            to="/contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-paper px-5 py-3 text-sm font-medium text-ink transition-colors hover:bg-accent hover:text-white"
          >
            Get in touch <ArrowUpRight size={16} />
          </Link>
        </Reveal>
      </Container>
    </div>
  );
}

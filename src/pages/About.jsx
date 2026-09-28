import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router";
import Container from "../components/Container";
import Reveal from "../components/Reveal";

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
              digital advertising. I bring curiosity, care, and a willingness to
              learn to every brief, and I’m interested in the thinking that
              makes creative work feel useful as well as memorable.
            </p>
            <Link
              to="/projects"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm text-paper transition-colors hover:bg-accent"
            >
              See selected work <ArrowUpRight size={16} />
            </Link>
          </Reveal>

          <Reveal delay={0.12} className="relative">
            <img
              src="https://picsum.photos/seed/miltah-about-page/1000/1200"
              alt="Placeholder portrait of Miltah"
              className="aspect-[4/5] w-full rounded-2xl object-cover"
            />
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

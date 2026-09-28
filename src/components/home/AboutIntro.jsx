import Container from "../Container";
import Reveal from "../Reveal";

export default function AboutIntro() {
  return (
    <section className="py-16 md:py-20">
      <Container>
        <Reveal className="grid gap-5 border-b border-line pb-12 md:grid-cols-[0.65fr_1.35fr] md:gap-12 md:pb-16">
          <p className="text-xs font-medium uppercase tracking-[0.12em] text-accent">
            A little about me
          </p>
          <div>
            <h2 className="max-w-3xl text-3xl font-semibold leading-tight sm:text-4xl">
              Good marketing starts with{" "}
              <span className="font-serif font-normal italic text-accent">
                listening.
              </span>
            </h2>
            <p className="mt-5 max-w-2xl leading-relaxed text-muted">
              I’m at the beginning of my digital marketing career, curious about
              people, ideas and the small details that make a message stick. I
              enjoy turning research into clear content and learning how
              thoughtful campaigns can help a brand find its audience.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

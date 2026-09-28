import Container from '../Container'
import Reveal from '../Reveal'
import SectionHeading from '../SectionHeading'
import { testimonials } from '../../data/site'

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <SectionHeading tag="Kind words">
          What clients{' '}
          <span className="font-serif font-normal italic text-accent">say.</span>
        </SectionHeading>

        <div className="grid gap-3 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={i} delay={i * 0.1} className="h-full">
              <figure className="flex h-full flex-col justify-between rounded-[2rem] border border-line bg-paper p-8">
                <blockquote className="font-serif text-2xl italic leading-snug">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-10 flex items-center gap-3">
                  <img
                    src={`https://picsum.photos/seed/miltah-t${i}/80`}
                    alt=""
                    className="h-11 w-11 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-sm font-semibold">{t.name}</p>
                    <p className="text-xs text-muted">{t.role}</p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
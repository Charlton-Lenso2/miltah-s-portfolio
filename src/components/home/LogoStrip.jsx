import { motion } from 'motion/react'
import { brands } from '../../data/site'

export default function LogoStrip() {
  return (
    <section className="py-12 md:py-16">
      <p className="mb-8 text-center text-sm text-muted">Trusted by growing brands</p>
      <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
        <motion.div
          className="flex w-max"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 30, ease: 'linear', repeat: Infinity }}
        >
          {[...brands, ...brands].map((brand, i) => (
            <span
              key={i}
              className="px-8 font-serif text-3xl italic text-muted/70 md:px-12 md:text-4xl"
            >
              {brand}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
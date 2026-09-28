import { Link } from 'react-router'
import Container from './Container'

const nav = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
]

const socials = ['LinkedIn', 'Instagram', 'TikTok']

export default function Footer() {
  return (
    <footer className="pb-3 pt-3 md:pb-5">
      <Container>
        <div className="flex flex-col gap-8 rounded-[2rem] border border-line bg-paper px-6 py-8 md:px-10">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
            <Link to="/" className="font-serif text-3xl italic tracking-tight">
              Miltah<span className="text-accent">.</span>
            </Link>

            <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
              {nav.map((n) => (
                <Link key={n.to} to={n.to} className="transition-colors hover:text-ink">
                  {n.label}
                </Link>
              ))}
            </nav>

            <div className="flex gap-4 text-sm text-muted">
              {socials.map((s) => (
                <a key={s} href="#" className="transition-colors hover:text-ink">
                  {s}
                </a>
              ))}
            </div>
          </div>

          <div className="border-t border-line pt-6 text-xs text-muted">
            © {new Date().getFullYear()} Miltah Mazvanhi. All rights reserved.
          </div>
        </div>
      </Container>
    </footer>
  )
}
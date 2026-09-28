import { useState } from "react";
import { AtSign, Globe, Mail, MapPin, Phone, Send } from "lucide-react";
import Container from "../components/Container";
import Reveal from "../components/Reveal";

const contactDetails = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@miltah.com",
    href: "mailto:hello@miltah.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+263 77 000 0000",
    href: "tel:+263770000000",
  },
  { icon: MapPin, label: "Location", value: "Harare, Zimbabwe" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleSubmit(event) {
    event.preventDefault();
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name}`);
    const body = encodeURIComponent(
      `${form.message}\n\nFrom: ${form.name}\nEmail: ${form.email}`,
    );
    window.location.href = `mailto:hello@miltah.com?subject=${subject}&body=${body}`;
  }

  function handleChange(event) {
    setForm((current) => ({
      ...current,
      [event.target.name]: event.target.value,
    }));
  }

  return (
    <div className="pb-20 pt-32 sm:pt-36">
      <Container>
        <Reveal>
          <section className="grid overflow-hidden rounded-2xl border border-line bg-paper shadow-[0_20px_60px_rgba(0,0,0,0.05)] md:grid-cols-[0.9fr_1.1fr]">
            <div className="flex flex-col justify-between gap-10 bg-canvas p-6 sm:p-9 md:p-10 lg:p-12">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.12em] text-accent">
                  Say hello
                </p>
                <h1 className="mt-3 text-4xl font-semibold leading-tight sm:text-5xl">
                  Let’s get in{" "}
                  <span className="font-serif font-normal italic text-accent">
                    touch.
                  </span>
                </h1>
                <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted sm:text-base">
                  Have a project, an opportunity, or an idea you’d like to talk
                  through? I’d love to hear from you.
                </p>
              </div>

              <div className="space-y-6">
                {contactDetails.map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line bg-paper text-accent">
                      <Icon size={16} />
                    </span>
                    <div className="min-w-0">
                      <p className="text-xs text-muted">{label}</p>
                      {href ? (
                        <a
                          href={href}
                          className="mt-1 inline-block break-words text-sm font-medium transition-colors hover:text-accent"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="mt-1 text-sm font-medium">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div>
                <p className="text-xs text-muted">Find me online</p>
                <div className="mt-3 flex gap-2">
                  <a
                    href="#instagram"
                    aria-label="Instagram placeholder"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-paper transition-colors hover:text-accent"
                  >
                    <AtSign size={17} />
                  </a>
                  <a
                    href="#linkedin"
                    aria-label="LinkedIn placeholder"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-paper transition-colors hover:text-accent"
                  >
                    <Globe size={17} />
                  </a>
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-9 md:p-10 lg:p-12">
              <form onSubmit={handleSubmit} className="flex h-full flex-col">
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block text-sm font-medium">
                    Your name
                    <input
                      name="name"
                      type="text"
                      autoComplete="name"
                      placeholder="Your name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      className="mt-2 h-12 w-full rounded-lg border border-line bg-canvas px-4 text-sm font-normal outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
                    />
                  </label>
                  <label className="block text-sm font-medium">
                    Email address
                    <input
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="you@example.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                      className="mt-2 h-12 w-full rounded-lg border border-line bg-canvas px-4 text-sm font-normal outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
                    />
                  </label>
                </div>

                <label className="mt-5 flex flex-1 flex-col text-sm font-medium">
                  Message
                  <textarea
                    name="message"
                    placeholder="Write your message..."
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={7}
                    className="mt-2 min-h-40 w-full flex-1 resize-y rounded-lg border border-line bg-canvas p-4 text-sm font-normal outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
                  />
                </label>

                <button
                  type="submit"
                  className="mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-ink"
                >
                  Send message <Send size={16} />
                </button>
              </form>
            </div>
          </section>
        </Reveal>
      </Container>
    </div>
  );
}

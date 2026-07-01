import MotionSection from "@/components/MotionSection";
import { FiArrowUpRight, FiFileText, FiMail } from "react-icons/fi";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const links = [
  { label: "Email", href: "mailto:hiroarmadhani@gmail.com", icon: FiMail },
  { label: "LinkedIn", href: "https://linkedin.com/in/armadhanihiro", icon: FaLinkedinIn },
  { label: "GitHub", href: "https://github.com/armadhanihiro", icon: FaGithub },
  { label: "Resume", href: "/documents/resume.pdf", icon: FiFileText },
];

export default function Contact() {
  return (
    <MotionSection id="contact" className="px-6 py-24">
      <div className="mx-auto grid max-w-6xl gap-8 rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl md:grid-cols-[1fr_0.75fr] md:p-10">
        <div>
          <p className="text-sm text-violet-400">Contact</p>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Interested in working together?
          </h2>

          <p className="mt-6 max-w-xl leading-relaxed text-zinc-400">
            Whether it is software engineering, AI applications, or data-driven
            products, I would love to hear from you.
          </p>

          <a
            href="mailto:hiroarmadhani@gmail.com"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 font-medium text-black transition hover:-translate-y-1 hover:bg-violet-200"
          >
            <FiMail />
            Contact Me
            <FiArrowUpRight />
          </a>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-1">
          {links.map((link) => {
            const Icon = link.icon;

            return (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/20 px-5 py-4 text-zinc-300 transition hover:border-violet-500/50 hover:bg-white/10 hover:text-white"
              >
                <span className="flex items-center gap-3">
                  <Icon className="text-violet-400" />
                  {link.label}
                </span>
                <FiArrowUpRight />
              </a>
            );
          })}
        </div>
      </div>
    </MotionSection>
  );
}

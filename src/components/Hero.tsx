import { FiFileText, FiMail } from "react-icons/fi";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SiNextdotjs, SiPython, SiReact, SiTypescript } from "react-icons/si";

const socials = [
  { icon: FaGithub, href: "https://github.com/armadhanihiro", label: "GitHub" },
  { icon: FaLinkedinIn, href: "https://linkedin.com/in/armadhanihiro", label: "LinkedIn" },
  { icon: FiMail, href: "mailto:hiroarmadhani@gmail.com", label: "Email" },
  { icon: FiFileText, href: "/documents/resume.pdf", label: "Resume" },
];

const floatingTech = [
  { icon: SiReact, className: "-left-4 top-10" },
  { icon: SiNextdotjs, className: "right-6 top-2" },
  { icon: SiPython, className: "-right-4 bottom-24" },
  { icon: SiTypescript, className: "left-10 -bottom-3" },
];

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden px-6 pt-32">
      <div className="absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-violet-600/20 blur-3xl" />

      <div className="relative mx-auto grid min-h-[76vh] max-w-6xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.2em] text-zinc-300 backdrop-blur-xl">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Available for opportunities
          </div>

          <h1 className="max-w-3xl text-5xl font-bold tracking-tight md:text-7xl">
            Software Developer
            <span className="block text-violet-400">& AI Enthusiast.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-400">
            I build intelligent software, AI applications, and data-driven
            solutions that turn real-world problems into useful digital products.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:-translate-y-1 hover:bg-violet-200"
            >
              View Projects →
            </a>

            <a
              href="/documents/resume.pdf"
              download
              className="rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-white transition hover:-translate-y-1 hover:border-violet-400 hover:bg-white/10"
            >
              Download CV ↓
            </a>
          </div>

          <div className="mt-8 flex gap-3">
            {socials.map((social) => {
              const Icon = social.icon;

              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/5 text-zinc-300 transition hover:-translate-y-1 hover:border-violet-500/50 hover:text-white"
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>
        </div>

        <div className="relative hidden lg:block">
          <div className="absolute inset-0 rounded-full bg-violet-600/25 blur-3xl" />

          {floatingTech.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className={`absolute z-20 grid h-14 w-14 place-items-center rounded-2xl border border-white/10 bg-black/50 text-violet-300 shadow-2xl backdrop-blur-xl ${item.className}`}
              >
                <Icon size={24} />
              </div>
            );
          })}

          <div className="relative rounded-[2rem] border border-white/10 bg-white/5 p-4 shadow-2xl shadow-violet-950/30 backdrop-blur-xl">
            <div className="rounded-[1.5rem] border border-white/10 bg-[#070711] p-5">
              <div className="mb-5 flex items-center justify-between">
                <div className="flex gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-400" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400" />
                  <span className="h-3 w-3 rounded-full bg-green-400" />
                </div>
                <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-zinc-500">
                  armadhanihiro.dev
                </span>
              </div>

              <div className="grid gap-4">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="text-sm text-zinc-500">Current project</p>
                  <h3 className="mt-2 text-2xl font-semibold">PlantPal AI</h3>
                  <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
                    <div className="h-full w-[76%] rounded-full bg-violet-500" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <p className="text-3xl font-bold">AI</p>
                    <p className="mt-1 text-sm text-zinc-500">Applications</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <p className="text-3xl font-bold">Data</p>
                    <p className="mt-1 text-sm text-zinc-500">Solutions</p>
                  </div>
                </div>

                <pre className="overflow-hidden rounded-2xl border border-white/10 bg-black/40 p-5 text-sm leading-7 text-zinc-300">
{`const hiro = {
  role: "Software Developer",
  focus: ["AI", "Web", "Data"],
  mission: "Build useful products"
};`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

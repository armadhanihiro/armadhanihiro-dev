import { FiMail, FiFileText } from "react-icons/fi";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const socials = [
  { icon: FaGithub, href: "https://github.com/armadhanihiro" },
  { icon: FaLinkedinIn, href: "https://linkedin.com/in/armadhanihiro" },
  { icon: FiMail, href: "mailto:hiroarmadhani@gmail.com" },
  { icon: FiFileText, href: "/documents/resume.pdf" },
];

export default function Hero() {
  return (
    <section id="home" className="min-h-screen px-6 pt-32">
        <div className="mx-auto max-w-6xl">
            <div className="grid min-h-[75vh] items-center gap-12 lg:grid-cols-2">
                <div>
                    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-zinc-300">
                        <span className="h-2 w-2 rounded-full bg-green-400" />
                        AVAILABLE FOR OPPORTUNITIES
                    </div>

                    <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
                        Hi, I&apos;m <br />
                        Armadhani <span className="text-violet-500">Hiro.</span>
                    </h1>

                    <p className="mt-5 text-xl text-zinc-300">
                        Software Developer & AI Enthusiast
                    </p>

                    <p className="mt-5 max-w-xl leading-relaxed text-zinc-400">
                        I build intelligent, scalable, and user-focused applications by
                        combining software engineering, data, and artificial intelligence.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-4">
                        <a href="#projects" className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black">
                            View My Work →
                        </a>
                        <a href="/documents/resume.pdf" download className="rounded-full border border-white/15
                            px-6 py-3 text-sm font-medium transition hover:bg-white hover:text-black">
                            Download CV ↓
                        </a>
                    </div>

                    <div className="mt-8 flex gap-3">
                        {socials.map((social) => {
                            const Icon = social.icon;
                            return (
                            <a key={social.href} href={social.href} target="_blank" className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/5 text-zinc-300 transition hover:-translate-y-1 hover:border-violet-500/50 hover:text-white">
                                <Icon size={18} />
                            </a>
                            );
                        })}
                    </div>
                </div>

                <div className="relative hidden lg:block">
                    <div className="absolute inset-0 rounded-full bg-violet-600/30 blur-3xl" />

                    <div className="relative rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                        <div className="mb-4 flex gap-2">
                            <span className="h-3 w-3 rounded-full bg-red-400" />
                            <span className="h-3 w-3 rounded-full bg-yellow-400" />
                            <span className="h-3 w-3 rounded-full bg-green-400" />
                        </div>

                        <pre className="overflow-hidden text-sm leading-7 text-zinc-300">
                    {`const developer = {
        name: "Armadhani Hiro",
        role: "Software Developer & AI Engineer",
        focus: ["Web Dev", "Data", "AI"],
        mission: "Build impactful products"
};`}
                        </pre>
                    </div>

                    <div className="absolute -bottom-8 -right-4 rounded-2xl border border-white/10 bg-black/50 p-5 backdrop-blur-xl">
                        <p className="text-3xl font-bold">3+</p>
                        <p className="text-sm text-zinc-400">
                            Years Learning<br />& Building
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}
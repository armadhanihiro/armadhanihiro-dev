import MotionSection from "@/components/MotionSection";
import { technologies } from "@/data/techStack";

export default function About() {
  return (
    <MotionSection id="about" className="px-6 py-24">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-lg font-semibold text-violet-400">About</p>

          <h2 className="mt-4 text-3xl font-bold md:text-5xl">
            Building products,
            <br />
            <span className="text-violet-400">not just writing code.</span>
          </h2>

          <p className="mt-6 leading-relaxed text-zinc-400">
            I&apos;m a software developer with a strong interest in artificial
            intelligence, software engineering, and data-driven applications.
          </p>

          <p className="mt-5 leading-relaxed text-zinc-400">
            I enjoy turning complex ideas into practical products, from
            AI-powered assistants and automation tools to analytics platforms
            that solve real-world problems.
          </p>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-lg font-semibold text-violet-400">Tech Stack</p>
              <h3 className="mt-2 text-2xl font-semibold">
                Technologies I enjoy working with.
              </h3>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            {technologies.map((tech) => {
              const Icon = tech.icon;

              return (
                <div
                  key={tech.name}
                  className="group flex items-center gap-2 rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-zinc-300 transition hover:-translate-y-1 hover:border-violet-500/50 hover:bg-white/10 hover:text-white"
                >
                  <Icon
                    size={18}
                    className="text-violet-400 transition group-hover:scale-110"
                  />
                  <span>{tech.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </MotionSection>
  );
}

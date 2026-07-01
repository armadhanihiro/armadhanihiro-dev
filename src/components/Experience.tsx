import { experiences } from "@/data/experiences";
import MotionSection from "@/components/MotionSection";

export default function Experience() {
  return (
    <MotionSection id="experience" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm text-violet-400">Experience</p>

        <h2 className="mt-3 text-4xl font-bold">Professional journey.</h2>

        <div className="mt-12 space-y-5">
          {experiences.map((experience) => (
            <article
              key={`${experience.company}-${experience.role}`}
              className="grid gap-5 rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition hover:border-violet-500/40 md:grid-cols-[0.25fr_0.75fr]"
            >
              <div>
                <p className="text-sm text-violet-400">{experience.period}</p>
                <p className="mt-2 text-sm text-zinc-500">{experience.type}</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">{experience.role}</h3>
                <p className="mt-1 text-violet-300">{experience.company}</p>

                <ul className="mt-5 space-y-2 text-sm leading-relaxed text-zinc-400">
                  {experience.description.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {experience.tech.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-zinc-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}

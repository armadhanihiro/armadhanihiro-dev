import Image from "next/image";
import { projects } from "@/data/projects";
import MotionSection from "@/components/MotionSection";
import { FiBookOpen, FiExternalLink, FiGithub } from "react-icons/fi";

export default function Projects() {
  return (
    <MotionSection id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm text-violet-400">Projects</p>

        <div className="mt-3 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <h2 className="max-w-2xl text-4xl font-bold">
            Selected work that shows how I build.
          </h2>
          <p className="max-w-sm text-sm leading-relaxed text-zinc-400">
            A mix of AI applications, data products, and automation tools built
            around practical problems.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-violet-500/50 hover:shadow-[0_0_45px_rgba(139,92,246,0.16)]"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  priority={index === 0}
                  className="object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050510] via-transparent to-transparent opacity-70" />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <p className="text-sm text-violet-400">{project.subtitle}</p>

                <h3 className="mt-2 text-2xl font-semibold">
                  {project.title}
                </h3>

                <p className="mt-4 text-sm leading-relaxed text-zinc-400">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex flex-wrap gap-4 pt-7 text-sm text-zinc-300">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 transition hover:text-violet-300"
                    >
                      <FiGithub />
                      Code
                    </a>
                  )}

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 transition hover:text-violet-300"
                    >
                      <FiExternalLink />
                      Live
                    </a>
                  )}

                  {project.caseStudy && (
                    <a
                      href={project.caseStudy}
                      className="flex items-center gap-2 transition hover:text-violet-300"
                    >
                      <FiBookOpen />
                      Case Study
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}

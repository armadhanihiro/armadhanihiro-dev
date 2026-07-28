import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";
import {
  FiArrowLeft,
  FiBookOpen,
  FiExternalLink,
  FiGithub,
} from "react-icons/fi";

export const metadata = {
  title: "Projects | Armadhani Hiro",
  description:
    "A collection of software development, artificial intelligence, data, and automation projects by Armadhani Hiro.",
};

export default function AllProjectsPage() {
  return (
    <main className="min-h-screen px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <Link
          href="/#projects"
          className="group inline-flex items-center gap-2 text-sm text-zinc-400 transition hover:text-white"
        >
          <FiArrowLeft className="transition-transform group-hover:-translate-x-1" />
          Back to portfolio
        </Link>

        <div className="mt-12">
          <p className="text-sm text-violet-400">Projects</p>

          <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">
            Software, AI, data, and automation projects.
          </h1>

          <p className="mt-6 max-w-2xl leading-relaxed text-zinc-400">
            A broader collection of products and technical projects I have
            developed to explore practical problems and modern technologies.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-violet-500/50 hover:shadow-[0_0_45px_rgba(139,92,246,0.16)]"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={index === 0}
                  className="object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#050510] via-transparent to-transparent opacity-70" />
              </div>

              <div className="flex flex-1 flex-col p-7">
                <p className="text-sm font-medium text-violet-400">
                  {project.subtitle}
                </p>

                <h2 className="mt-2 text-2xl font-semibold">
                  {project.title}
                </h2>

                <p className="mt-4 text-sm leading-relaxed text-zinc-400">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex flex-wrap gap-5 pt-8 text-sm text-zinc-300">
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
                      Live Demo
                    </a>
                  )}

                  {project.caseStudy && (
                    <Link
                      href={project.caseStudy}
                      className="flex items-center gap-2 transition hover:text-violet-300"
                    >
                      <FiBookOpen />
                      Case Study
                    </Link>
                  )}

                  {!project.github &&
                    !project.demo &&
                    !project.caseStudy && (
                      <span className="text-zinc-500">
                        Case study coming soon
                      </span>
                    )}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 border-t border-white/10 pt-8 text-sm text-zinc-500">
          More projects and detailed case studies will be added over time.
        </div>
      </div>
    </main>
  );
}
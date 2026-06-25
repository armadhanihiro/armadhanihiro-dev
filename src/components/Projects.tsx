import Image from "next/image";
import { projects } from "@/data/projects";
import MotionSection from "@/components/MotionSection";

import {
  FiGithub,
  FiExternalLink,
  FiBookOpen,
} from "react-icons/fi";

export default function Projects() {
    return (
        <MotionSection id="projects" className="px-6 py-28">
            <div className="mx-auto max-w-6xl">
                <p className="text-sm text-violet-400">
                    FEATURED PROJECTS
                </p>

                <h2 className="mt-3 text-4xl font-bold">
                    Things I&apos;ve Built
                </h2>

                <div className="mt-12 grid gap-6 md:grid-cols-2">
                    {projects.map((project) => (
                        <article key={project.title} className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl transition hover:-translate-y-2 hover:border-violet-500/50">

                            <div className="relative h-64">
                                <Image src={project.image} alt={project.title} fill sizes="(max-width: 768px) 100vw, 50vw" priority={project.title === "PlantPal AI"} className="object-cover transition duration-500 hover:scale-110"/>
                            </div>

                            <div className="p-7">
                                <h3 className="text-2xl font-semibold">
                                    {project.title}
                                </h3>

                                <p className="mt-4 text-sm leading-relaxed text-zinc-400">
                                    {project.description}
                                </p>

                                <div className="mt-5 flex flex-wrap gap-2">
                                    {project.tech.map((tech) => (
                                        <span key={tech} className="rounded-full bg-white/10 px-3 py-1 text-xs text-zinc-300">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="mt-7 flex gap-4">
                                    {project.github && (
                                        <a href={project.github} target="_blank" className="flex items-center gap-2 text-sm">
                                            <FiGithub />
                                            Code
                                        </a>
                                    )}

                                    {project.demo && (
                                        <a href={project.demo} target="_blank" className="flex items-center gap-2 text-sm">
                                            <FiExternalLink />
                                            Demo
                                        </a>
                                    )}

                                    {project.caseStudy && (
                                        <a href={project.caseStudy} className="flex items-center gap-2 text-sm">
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
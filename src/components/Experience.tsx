import { experiences } from "@/data/experiences";
import MotionSection from "@/components/MotionSection";

export default function Experience() {
    return (
        <MotionSection id="experience" className="px-6 py-28">
            <div className="mx-auto max-w-6xl">
                <p className="text-sm text-violet-400">
                    EXPERIENCE
                </p>

                <h2 className="mt-3 text-4xl font-bold">
                    My Journey
                </h2>

                <div className="mt-14 space-y-10 border-l border-white/10">
                    {experiences.map((experience) => (
                        <div key={experience.company} className="relative ml-8">
                            <span className="absolute -left-[41px] top-1 h-4 w-4 rounded-full bg-violet-500"/>

                            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                                <div className="flex flex-wrap justify-between gap-4">
                                    <div>
                                        <p className="text-sm text-zinc-400">
                                            {experience.period}
                                        </p>

                                        <h3 className="mt-2 text-xl font-semibold">
                                            {experience.role}
                                        </h3>

                                        <p className="text-violet-400">
                                            {experience.company}
                                        </p>
                                    </div>

                                    <span className="h-fit rounded-full bg-white/10 px-3 py-1 text-sm text-zinc-300">
                                        {experience.type}
                                    </span>

                                </div>

                                <ul className="mt-5 space-y-2 text-zinc-400">
                                    {experience.description.map((item) => (
                                        <li key={item} className="flex gap-2">
                                            <span className="text-violet-400">
                                                •
                                            </span>

                                            <span>
                                                {item}
                                            </span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="mt-5 flex flex-wrap gap-2">
                                    {experience.tech.map((item) => (
                                        <span key={item} className="rounded-full bg-white/10 px-3 py-1 text-xs text-zinc-300">
                                            {item}
                                        </span>
                                    ))}
                                </div>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </MotionSection>
    );
}
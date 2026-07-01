import MotionSection from "@/components/MotionSection";
import { technologies } from "@/data/techStack";

export default function TechStack() {
  return (
    <MotionSection id="skills" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">

        <p className="text-sm text-violet-400">
          Tech Stack
        </p>

        <h2 className="mt-3 text-4xl font-bold">
          Technologies I enjoy working with.
        </h2>

        <p className="mt-4 max-w-2xl text-zinc-400">
          A selection of technologies I use to build modern web,
          AI, and data-driven applications.
        </p>

        <div className="mt-12 flex flex-wrap gap-4">

          {technologies.map((tech) => {

            const Icon = tech.icon;

            return (

              <div
                key={tech.name}
                className="
                  group
                  flex
                  items-center
                  gap-3
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/5
                  px-5
                  py-4
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-violet-500/40
                  hover:bg-white/10
                "
              >

                <Icon
                  size={22}
                  className="
                    text-violet-400
                    transition-transform
                    duration-300
                    group-hover:scale-110
                  "
                />

                <span className="text-sm font-medium text-zinc-200">
                  {tech.name}
                </span>

              </div>

            );

          })}

        </div>

      </div>
    </MotionSection>
  );
}
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiPython,
  SiTensorflow,
  SiPostgresql,
  SiDocker,
} from "react-icons/si";

import MotionSection from "@/components/MotionSection";


const stacks = [
  {
    name: "React",
    icon: SiReact,
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
  },
  {
    name: "Python",
    icon: SiPython,
  },
  {
    name: "TensorFlow",
    icon: SiTensorflow,
  },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
  },
  {
    name: "Docker",
    icon: SiDocker,
  },
];


export default function TechStack() {
  return (
    <MotionSection id="skills" className="px-6 py-28">
        <div className="mx-auto max-w-6xl">
            <p className="text-sm text-violet-400">
                MY STACK
            </p>

            <h2 className="mt-3 text-4xl font-bold">
                Technologies I Work With
            </h2>


            <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
                {stacks.map((stack) => {
                    const Icon = stack.icon;


                    return (
                        <div key={stack.name} className="
                            group
                            rounded-2xl
                            border border-white/10
                            bg-white/5
                            p-6
                            transition
                            hover:-translate-y-2
                            hover:border-violet-500/50
                            "
                        >

                            <Icon className="text-3xl" />

                            <p className="mt-5">
                                {stack.name}
                            </p>
                        </div>
                    );
                })}

            </div>
        </div>
    </MotionSection>
  );
}
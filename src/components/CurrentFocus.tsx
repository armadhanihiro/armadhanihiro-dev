import MotionSection from "@/components/MotionSection";
import { FiBookOpen, FiBriefcase, FiCpu, FiMapPin } from "react-icons/fi";

const focusItems = [
  {
    icon: FiCpu,
    title: "Building",
    description: "AI-powered applications and practical software products.",
  },
  {
    icon: FiBookOpen,
    title: "Learning",
    description: "LLM engineering, RAG, agentic AI, and cloud AI services.",
  },
  {
    icon: FiBriefcase,
    title: "Open To",
    description: "Software Engineer, Backend Engineer, and AI Engineer roles.",
  },
  {
    icon: FiMapPin,
    title: "Based In",
    description: "Adelaide, South Australia.",
  },
];

export default function CurrentFocus() {
  return (
    <MotionSection className="px-6 pb-16">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm text-violet-400">Current Focus</p>

        <div className="mt-6 grid gap-4 md:grid-cols-4">
          {focusItems.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition hover:-translate-y-1 hover:border-violet-500/50 hover:bg-white/10"
              >
                <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-violet-500/15 text-violet-400 transition group-hover:scale-105">
                  <Icon size={22} />
                </div>

                <h3 className="font-semibold">{item.title}</h3>

                <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </MotionSection>
  );
}

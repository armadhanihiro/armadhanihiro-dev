import MotionSection from "@/components/MotionSection";
import { FiAward, FiBookOpen, FiGlobe, FiMic } from "react-icons/fi";

const highlights = [
  {
    icon: FiAward,
    title: "Cum Laude Graduate",
    description: "Graduated with distinction from Telkom University.",
  },
  {
    icon: FiBookOpen,
    title: "International Research Publication",
    description: "Published academic work on a movie recommendation system.",
  },
  {
    icon: FiMic,
    title: "Speaker at SummerCamp",
    description: "Shared data science and MySQL knowledge in learning sessions.",
  },
  {
    icon: FiGlobe,
    title: "Professional Experience in Australia",
    description: "Built adaptability across technical and operational environments.",
  },
];

export default function Highlights() {
  return (
    <MotionSection id="highlights" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="text-lg font-semibold text-violet-400">Highlights</p>

        <h2 className="mt-3 text-4xl font-bold">Milestones worth noting.</h2>

        <div className="mt-10 grid gap-4 md:grid-cols-4">
          {highlights.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition hover:-translate-y-1 hover:border-violet-500/50"
              >
                <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-violet-500/15 text-violet-400">
                  <Icon size={22} />
                </div>

                <h3 className="font-semibold">{item.title}</h3>

                <p className="mt-3 text-sm leading-relaxed text-zinc-400">
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

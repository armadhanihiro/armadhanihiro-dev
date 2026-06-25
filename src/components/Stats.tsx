import MotionSection from "@/components/MotionSection";

const stats = [
  {
    number: "3+",
    label: "Years Learning",
  },
  {
    number: "10+",
    label: "Projects Built",
  },
  {
    number: "5+",
    label: "Tech Stacks",
  },
  {
    number: "∞",
    label: "Curiosity",
  },
];

export default function Stats() {
  return (
    <MotionSection className="px-6">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl md:grid-cols-4">
            {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                    <h3 className="text-3xl font-bold text-violet-400">
                        {stat.number}
                    </h3>

                    <p className="mt-2 text-sm text-zinc-400">
                        {stat.label}
                    </p>
                </div>
            ))}
        </div>
    </MotionSection>
  );
}
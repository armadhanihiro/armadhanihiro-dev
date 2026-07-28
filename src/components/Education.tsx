import MotionSection from "@/components/MotionSection";
import { FiAward, FiBookOpen } from "react-icons/fi";

const certifications = [
  "Microsoft Azure AI",
  "AWS Cloud Practitioner",
  "Google Cloud",
  "Generative AI",
];

export default function Education() {
  return (
    <MotionSection id="education" className="px-6 py-24">
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-2">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-7 backdrop-blur-xl">
          <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-violet-500/15 text-violet-400">
            <FiBookOpen size={22} />
          </div>

          <p className="text-lg font-semibold text-violet-400">Education</p>

          <h2 className="mt-4 text-3xl font-bold">Bachelor of Informatics</h2>

          <p className="mt-3 text-zinc-300">Telkom University</p>
          <p className="mt-2 text-sm text-zinc-500">Indonesia</p>

          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300">
            <FiAward className="text-violet-400" />
            Cum Laude
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-7 backdrop-blur-xl">
          <p className="text-sm text-violet-400">Certifications</p>

          <h2 className="mt-4 text-3xl font-bold">Continuous learning.</h2>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {certifications.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-zinc-300"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </MotionSection>
  );
}

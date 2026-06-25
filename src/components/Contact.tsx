import { FiMail, FiArrowUpRight} from "react-icons/fi";
import MotionSection from "@/components/MotionSection";


export default function Contact() {
  return (
    <MotionSection id="contact" className="px-6 py-28">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-white/10 bg-white/5 p-10 text-center backdrop-blur-xl">
            <p className="text-sm text-violet-400">
                GET IN TOUCH
            </p>

            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
                Let&apos;s build something
                <br />
                amazing together.
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-zinc-400">
                I&apos;m always interested in discussing
                new opportunities, collaborations,
                and innovative ideas.
            </p>

            <a href="mailto:hiroarmadhani@gmail.com" className="mx-auto mt-8 inline-flex items-center gap-2 rounded-full bg-white 
            px-7 py-3 font-medium text-black transition hover:scale-105">
                <FiMail />

                Contact Me

                <FiArrowUpRight />
            </a>

        </div>
    </MotionSection>
  );
}
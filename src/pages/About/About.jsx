import HeroImg from "@/assets/images/jewel.png";
import techOptionsLogo from "@/assets/images/techOptions.svg";
import { AuroraText } from "@/components/magicui/aurora-text";
import { ShineBorder } from "@/components/magicui/shine-border";
import { TypingAnimation } from "@/components/magicui/typing-animation";
import Meteors from "@/components/ui/meteors";
import { ArrowRight } from "lucide-react";

const frontend = ["React", "Next.js", "JavaScript", "TypeScript", "Tailwind CSS"];
const backend  = ["Python", "FastAPI", "PostgreSQL", "REST APIs"];

export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-32 text-white bg-[#04081A]">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h1 className="text-4xl text-center font-bold tracking-tighter md:text-5xl lg:text-7xl">
            <AuroraText className="font-bold">About Me</AuroraText>
          </h1>
          <TypingAnimation className="text-xl md:text-2xl mt-2">
            Junior Software Engineer | Frontend Specialist
          </TypingAnimation>
        </div>

        <div className="lg:mt-12 md:mt-8 mt-6 mx-auto max-w-7xl space-y-8 px-6 md:space-y-16">
          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">

            {/* Image card — original style */}
            <div className="relative mb-6 sm:mb-0">
              <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl p-px from-zinc-300 overflow-hidden shadow-lg max-w-[1207px] mx-auto">
                <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />
                <Meteors number={60} />
                <img
                  src={HeroImg}
                  className="rounded-[15px] w-[1407px] lg:h-[729px] md:h-[550px] h-[450px] shadow block border border-green-900/40 p-3 z-10 relative"
                  alt="Jewel"
                  width={1207}
                  height={729}
                />
              </div>
            </div>

            {/* Bio — original style */}
            <div className="relative space-y-6">
              <p className="text-white text-justify leading-relaxed">
                Hello! I&apos;m <strong className="text-gradient">Din Muhammad Jewel</strong>, a passionate{" "}
                <strong>Software Engineer</strong> currently working as a{" "}
                <strong>Junior Software Engineer</strong> at{" "}
                <strong>techOptions</strong>. With 1.5 years of professional experience, my primary focus is
                frontend development — building responsive, performant, and visually polished web interfaces
                using React and Next.js. I hold a B.Sc. in Computer Science and Engineering from{" "}
                <b>Khulna University</b>.
              </p>
              <p className="text-white text-justify leading-relaxed">
                I am now actively expanding into backend engineering with a focused interest in{" "}
                <strong>Python</strong>, <strong>FastAPI</strong>, and <strong>PostgreSQL</strong> — working
                toward becoming a well-rounded full-stack engineer. I believe great user experiences and
                scalable architecture go hand-in-hand, and I work diligently to merge both in every project
                I undertake.
              </p>

              {/* Frontend → Backend highlight */}
              <div className="relative overflow-hidden rounded-xl border border-gray-800/60 bg-gray-900/60 backdrop-blur-sm p-5">
                <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />
                <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">

                  {/* Frontend */}
                  <div className="flex-1">
                    <p className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-3">
                      ⚡ Frontend
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {frontend.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-2.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <ArrowRight className="hidden sm:block w-5 h-5 text-gray-500 shrink-0" />

                  {/* Backend */}
                  <div className="flex-1">
                    <p className="text-xs font-mono text-purple-400 uppercase tracking-widest mb-3">
                      🚀 Growing Into
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {backend.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-2.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Blockquote — original style */}
              <div className="pt-4">
                <blockquote className="border-l-4 border-gradient-to-r from-pink-500 to-teal-400 pl-6 py-4 transform transition-all duration-300 hover:scale-105 hover:bg-gray-800/30">
                  <p className="text-white text-justify italic">
                    I am a lifelong learner, always striving to solve real-world problems with technology.
                    My goal is to build applications that not only meet user needs but also deliver
                    delightful, intuitive experiences — from pixel-perfect frontends to robust backend APIs.
                  </p>
                  <div className="mt-6 space-y-3">
                    <cite className="block font-medium text-white text-xl">
                      Din Muhammad Jewel, <span className="text-cyan-400 text-lg">Junior Software Engineer</span> at{" "}
                      <br />
                      <img
                        src={techOptionsLogo}
                        alt="techOptions"
                        className="inline-block h-8 mt-2"
                      />
                    </cite>
                  </div>
                </blockquote>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

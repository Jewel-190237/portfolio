/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { Code2} from "lucide-react";
import { RiLayoutMasonryLine } from "react-icons/ri";
import { AuroraText } from "@/components/magicui/aurora-text";
import { TypingAnimation } from "@/components/magicui/typing-animation";
import { FaReact } from "react-icons/fa";
import { ShineBorder } from "@/components/magicui/shine-border";
import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text";

const ExperienceCard = ({
  title,
  company,
  period,
  description,
  icon: Icon,
}) => (
  <div className="group relative overflow-hidden transform hover:-translate-y-2 transition-all duration-300">

    {/* Glass morphism effect */}
    <div className="absolute inset-0 backdrop-blur-lg bg-white/5 rounded-lg" />

    {/* Animated gradient border */}
    <div className="absolute -inset-[2px] bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-lg opacity-0 group-hover:opacity-100 animate-gradient-xy transition-all duration-500" />

    <div className="relative bg-gray-900/90 rounded-lg p-8 h-full border border-gray-800/50 shadow-xl backdrop-blur-xl">
      {/* Floating icon with pulse effect */}
      <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />
      <div className="relative mb-6 animate-bounce">
        {/* <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-25 rounded-full blur-xl group-hover:opacity-75 animate-pulse transition-all duration-500" /> */}
        <Icon className="w-12 h-12 text-cyan-400 relative z-10 transform group-hover:rotate-12 transition-transform duration-300" />
      </div>

      {/* Content with improved typography */}
      <div className="space-y-3">
        <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
          <AnimatedGradientText  >
            {title}
          </AnimatedGradientText>
        </h3>
        <div className="flex flex-col md:flex-row justify-between  text-gray-300">
          <span className="font-semibold text-blue-400 text-center">{company}</span>
          <span className="text-sm font-mono bg-blue-500/10 px-3 py-1 rounded-full text-center mt-2 md:mt-0">
            {period}
          </span>
        </div>
        <p className="text-gray-300 border-l-4 border-blue-500/50 pl-4 mt-4 leading-relaxed">
          {description}
        </p>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-4 right-4 w-20 h-20">
        <div className="absolute top-0 right-0 w-6 h-[2px] bg-cyan-500/50" />
        <div className="absolute top-0 right-0 w-[2px] h-6 bg-cyan-500/50" />
      </div>
      <div className="absolute bottom-4 left-4 w-20 h-20">
        <div className="absolute bottom-0 left-0 w-6 h-[2px] bg-purple-500/50" />
        <div className="absolute bottom-0 left-0 w-[2px] h-6 bg-purple-500/50" />
      </div>

    </div>
  </div>
);

const ExperienceSection = () => {
  const experiences = [
    {
      icon: FaReact,
      title: "Junior Software Engineer",
      company: "Appstick Limited",
      period: "2024 - Present",
      description:
        "Building and maintaining web applications, focusing on performance, scalability, and enhancing user experience with modern front-end technologies. Collaborating closely with cross-functional teams to deliver high-quality solutions.",
    },
    {
      icon: RiLayoutMasonryLine,
      title: "Front-End Developer Internship",
      company: "ICT Cell of Khulna University",
      period: "2022 - 2023",
      description:
      "Contributed to building responsive user interfaces with modern front-end technologies. Worked with senior developers to enhance UI/UX and optimize web application performance.",
    },
    {
      icon: Code2,
      title: "Full Stack Engineer",
      company: "Freelance Projects",
      period: "2023 - Present",
      description:
      "Built full-stack web applications, developed reusable JavaScript libraries, and improved framework features to enhance performance and maintainability. Created and maintained reusable component , optimized backend APIs for performance and scalability",
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b relative overflow-hidden xl:pt-32 lg:pt-20 md:pt-14 pt-0 pb-10">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-[#04081A]" />

        {/* Grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(50,50,70,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(50,50,70,0.15)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)]" />

        {/* Animated particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-blue-500/20 rounded-full animate-float"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>

        {/* Content container */}
        <div className="relative container mx-auto px-6 mt-10">
          <div className="mx-auto max-w-5xl px-6 text-center">
            <h1 className="text-4xl text-center font-bold tracking-tighter md:text-5xl lg:text-7xl">
              <AuroraText className="font-bold">Professional Experience</AuroraText>
            </h1>
            <TypingAnimation className='text-xl text-[#D1D5DB] md:text-2xl mt-3'>A Journey of Code and Creativity</TypingAnimation>
          </div>

          {/* Experience grid with improved layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto lg:mt-12 md:mt-8 mt-6">
            {experiences.map((exp, index) => (
              <ExperienceCard key={index} {...exp} />
            ))}
          </div>
        </div>

        {/* Enhanced background effects */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-500/10 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl animate-pulse delay-1000" />
      </div>
    </>
  );
};

export default ExperienceSection;

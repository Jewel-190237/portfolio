/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { RiLayoutMasonryLine } from "react-icons/ri";
import { AuroraText } from "@/components/magicui/aurora-text";
import { TypingAnimation } from "@/components/magicui/typing-animation";
import { FaReact } from "react-icons/fa";
import { ShineBorder } from "@/components/magicui/shine-border";
import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text";

const ExperienceCard = ({
  title,
  company,
  link,
  period,
  description,
  tags,
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
        <Icon className="w-12 h-12 text-cyan-400 relative z-10 transform group-hover:rotate-12 transition-transform duration-300" />
      </div>

      {/* Content with improved typography */}
      <div className="space-y-3">
        <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
          <AnimatedGradientText>
            {title}
          </AnimatedGradientText>
        </h3>
        <div className="flex flex-col md:flex-row justify-between text-gray-300">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-blue-400 hover:text-cyan-400 transition-colors duration-200 text-center md:text-left"
          >
            {company}
          </a>
          <span className="text-sm font-mono bg-blue-500/10 px-3 py-1 rounded-full text-center mt-2 md:mt-0">
            {period}
          </span>
        </div>
        <p className="text-gray-300 border-l-4 border-blue-500/50 pl-4 mt-4 leading-relaxed">
          {description}
        </p>
        {tags && (
          <div className="flex flex-wrap gap-2 mt-4">
            {tags.map((tag) => (
              <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300">
                {tag}
              </span>
            ))}
          </div>
        )}
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
      company: "TechOptions Limited",
      link: "https://techoptionsbd.com/",
      period: "2026 - Present",
      description:
        "Building responsive, performant web interfaces as a frontend-focused engineer. Working with React and Next.js to deliver scalable UI solutions, while actively expanding into backend development with Python, FastAPI, and PostgreSQL on the path to becoming a full-stack engineer.",
      tags: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Python", "FastAPI"],
    },
    {
      icon: FaReact,
      title: "Junior Software Engineer",
      company: "Appstick Limited",
      link: "https://appstick.com.bd/",
      period: "2024 - 2026",
      description:
        "Building and maintaining web applications, focusing on performance, scalability, and enhancing user experience with modern front-end technologies. Collaborating closely with cross-functional teams to deliver high-quality solutions.",
      tags: ["React", "Next.js", "JavaScript", "Tailwind CSS"],
    },
    {
      icon: RiLayoutMasonryLine,
      title: "Front-End Developer Intern",
      company: "ICT Cell, Khulna University",
      link: "https://ku.ac.bd/",
      period: "2022 - 2023",
      description:
        "Contributed to building responsive user interfaces with modern front-end technologies. Collaborated with senior developers to enhance UI/UX and optimize web application performance.",
      tags: ["HTML", "CSS", "JavaScript", "React"],
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

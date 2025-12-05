/* eslint-disable react/prop-types */
import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text";
import { AuroraText } from "@/components/magicui/aurora-text";
import { ShineBorder } from "@/components/magicui/shine-border";
import { ReactLenis } from "lenis/react";
import { FaReact, FaNodeJs, FaAws } from "react-icons/fa";
import { SiMongodb, SiExpress, SiTailwindcss, SiAntdesign, SiNextdotjs } from "react-icons/si";
import { Cpu } from "lucide-react";
import Marquee from "react-fast-marquee";
import { TypingAnimation } from "@/components/magicui/typing-animation";
const projects = [
  {
    name: "Travelstick",
    heading:
      "Smart & Scalable Travel Management System",
    image: "/travel.png",
    link: "https://travelstick.appstick.com.bd/",
    description: "A complete Smart & Scalable Travel Management System with three user roles: Admin, Manager, and User.It features package booking, hotel booking, offer management, and destination management.It also includes a tour- related mini e - commerce module, a visa management system, and an advanced HRM module.Additionally, it offers service provider management, a single - vendor setup with support for multiple payment gateways, and multilingual support.",
    technologies: [
      { name: "React", icon: FaReact },
      { name: "Express.js", icon: SiExpress },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Node.js", icon: FaNodeJs },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Ant Design", icon: SiAntdesign },
      { name: "AWS", icon: FaAws },
    ],
  },
  {
    name: "Agencistick",
    heading:
      "A complete Versatile Portfolio Agency Website",
    image: "/agency.png",
    link: "https://agency.appstick.com.bd/",
    description: "A complete and versatile portfolio agency website featuring a user-friendly interface. The platform includes blog management, event management, service and case study management, job and product management, as well as quote and advertisement management. It supports multiple payment gateways and offers multilingual support, enabling any agency to efficiently manage their portfolio and showcase their work with ease.",
    technologies: [
      { name: "React", icon: FaReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Express.js", icon: SiExpress },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Node.js", icon: FaNodeJs },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Ant Design", icon: SiAntdesign },
      { name: "AWS", icon: FaAws },
    ],
  },

  {
    name: "Taxstick",
    heading:
      "Complete Task Filing Management System",
    image: "/tax.png",
    link: "https://taxstick.appstick.com.bd/",
    description: "A comprehensive task filing management system designed to streamline the process of managing tax-related tasks. The platform features a user-friendly interface that allows users to easily navigate through various functionalities, including task management, document storage, and client communication. With its advanced search and filtering options, users can quickly locate specific tasks or documents, ensuring efficient organization and retrieval.",
    technologies: [
      { name: "React", icon: FaReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Express.js", icon: SiExpress },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Node.js", icon: FaNodeJs },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Ant Design", icon: SiAntdesign },
      { name: "AWS", icon: FaAws },
    ],
  },
  {
    name: "Petstick",
    heading:
      "Complete Petshop Management System with pet care",
    image: "/pet.png",
    link: "https://petstick.appstick.com.bd",
    description: "Petstick is a user-friendly platform that helps pet owners find and book services like grooming, training, veterinary care, boarding, and product purchases in one place. For businesses, it offers tools to manage appointments, track service requests, update products, and communicate with customers effectively. With its clean design and useful features, Petstick delivers a smooth and convenient experience for the pet-care community.",
    technologies: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "React", icon: FaReact },
      { name: "Express.js", icon: SiExpress },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Node.js", icon: FaNodeJs },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Ant Design", icon: SiAntdesign },
      { name: "AWS", icon: FaAws },
    ],
  },
];

export default function Projects() {
  return (
    <ReactLenis root>
      <main className="bg-black">
        <section className="text-white w-full mx-auto py-8 md:py-10 lg:py-12 xl:py-20">
          <div className="mx-auto max-w-5xl px-6 text-center">
            <h1 className="text-4xl text-center font-bold tracking-tighter md:text-5xl lg:text-7xl">
              <AuroraText className="font-bold">My Projects</AuroraText>
            </h1>
            <TypingAnimation className='text-xl md:text-2xl mt-3'> Dive into My Creative Ventures</TypingAnimation>
          </div>
          <div className="hidden lg:block lg:mt-10 md:mt-8 mt-8">
            <Marquee
              gradient={false}
              speed={50}
              pauseOnHover={true}
              className=""
            >
              {projects.map((project, i) => (
                <div key={`p_${i}`} className="w-[550px] px-3 last:mr-3">
                  <Card
                    url={project.link}
                    name={project.name}
                    image={project.image}
                    heading={project.heading}
                    description={project.description}
                    technologies={project.technologies}
                  />
                </div>
              ))}
            </Marquee>
          </div>
          <div className="block lg:hidden lg:mt-10 md:mt-8 mt-8">
            <div
              className=" gird grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto"
            >
              {projects.map((project, i) => (
                <div key={`p_${i}`} className="w-full px-3 mt-4 last:mr-3">
                  <Card
                    url={project.link}
                    name={project.name}
                    image={project.image}
                    heading={project.heading}
                    description={project.description}
                    technologies={project.technologies}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </ReactLenis>
  );
}

function Card({ name, heading, image, url, description, technologies }) {
  return (
    <div
      className={`relative  rounded-xl p-8 transition-all duration-300 bg-gray-900/50 backdrop-blur-sm `}
    >
      <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />
      <div className="space-y-6 hover:-translate-y-2 translation-all duration-500 ease-in-out transform ">
        <div className="space-y-2">
          <div className="flex items-center justify-center gap-3 animate-bounce">
            <img
              src={image}
              alt={name}
              className="w-10 h-10 p-1 rounded-full bg-black/20 border border-gray-700 shadow-md"
            />
            <AnimatedGradientText className="text-3xl font-semibold ">
              {name}
            </AnimatedGradientText>
          </div>
          <div className="flex items-center gap-3">
            <h3 className="text-2xl font-bold text-white">
              <AuroraText>{heading}</AuroraText>
            </h3>
          </div>
          <div className="py-3">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={url}
              className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-blue-500 to-teal-400 p-0.5 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_2rem_-0.5rem_#60A5FA]"
            >
              <span className="block w-full px-3 sm:px-4 py-2 rounded-[11px] bg-gray-900 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-teal-400">
                <span className="relative flex items-center justify-center gap-2 text-white font-medium">
                  <span>Preview Now</span>
                  <i className="fas fa-arrow-right transform transition-all duration-300 group-hover:translate-x-1"></i>
                </span>
              </span>
            </a>
          </div>
        </div>

        <p className="text-gray-300 text-sm italic border-l-2 border-teal-500 pl-3">
          {description}
        </p>

        <div className="space-y-3">
          <h4 className="text-sm font-semibold text-white flex items-center gap-2">
            <Cpu className="w-4 h-4 text-yellow-500" />
            Technologies Used
          </h4>
          <div className="flex flex-wrap gap-2 animate-pulse">
            {technologies.map((tech, i) => {
              const isObject = typeof tech === "object" && tech !== null;
              const Icon = isObject ? tech.icon : null;

              return (
                <div
                  key={i}
                  className="px-3 py-1 rounded-full bg-teal-500/10 text-teal-400 flex items-center gap-2 text-sm"
                >
                  {Icon && <Icon className="w-4 h-4" />}
                  <span>{isObject ? tech.name : tech}</span>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}




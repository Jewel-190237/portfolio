/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text";
import { AuroraText } from "@/components/magicui/aurora-text";
import { ShineBorder } from "@/components/magicui/shine-border";
import { ReactLenis } from "lenis/react";
import { Award, Calendar, Trophy } from "lucide-react";

const projects = [
  {
    name: "PetStick",
    heading:
      "Complete PetShop Management System",
    image: "/petshop.png",
    link: "https://petshop.appstick.com.bd/",
  },
  {
    name: "Agencistick",
    heading:
      "A complete Versatile Portfolio Agency Website",
    image: "/agency.png",
    link: "https://agency.appstick.com.bd/",
  },
  {
    name: "TaskStick",
    heading:
      "Complete Task Filing Management System",
    image: "/tax.png",
    link: "https://taxstick.appstick.com.bd/",
  },
  {
    name: "PathXFinder",
    heading:
      "E-Learning Platform with Workshop Management System",
    image: "/path.png",
    link: "https://pathxfinder.com/",
  },
  {
    name: "PetStick",
    heading:
      "Complete PetShop Management System",
    image: "rock.jpg",
    link: "https://i.postimg.cc/DwgWTfP0/Annotation-2025-03-19-113338.png",
  },
  {
    name: "PetStick",
    heading:
      "Complete PetShop Management System",
    image: "rock.jpg",
    link: "https://i.postimg.cc/DwgWTfP0/Annotation-2025-03-19-113338.png",
  },
];

export default function Projects() {

  return (
    <ReactLenis root>
      <main className="bg-black">
        <section className="text-white w-full grid gird-cols-2 md:grid-cols-3 gap-6 max-w-[1440px] mx-auto px-3 md:px-2 lg:px-0 xl:py-16 lg:py-12 md:py-10 py-8">
          {projects.map((project, i) => {
            return (
              <Card
                key={`p_${i}`}
                url={project.link}
                name={project.name}
                image={project.image}
                color={project.color}
                heading={project.heading}
                githubLink={project.githubLink}
                liveLink={project.liveLink}
              />
            );
          })}
        </section>
      </main>
    </ReactLenis>
  );
}

function Card({ name, heading, image, url, color, githubLink, liveLink }) {
  return (
    <div
      className={`relative  rounded-xl p-8 transition-all duration-300 bg-gray-900/50 backdrop-blur-sm `}
    >
      <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />
      <div className="space-y-6 hover:-translate-y-2 translation-all duration-500 ease-in-out transform  hover:scale-105">
        <div className="space-y-2">
          <div className="flex items-center justify-center gap-3 ">
            {/* <span className="">{url}</span> */}
            <img
              src={image}
              alt={name}
              className="w-10 h-10 p-1 rounded-full bg-black/20 border border-gray-700 shadow-md animate-pulse"
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
          {/* <div className="flex items-center gap-3 md:gap-5 lg:gap-8 xl:gap-10">
            <p className="text-gray-400 flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {edu.year}
            </p>
            <p className="text-gray-400 flex items-center gap-2">
              <IoLocation className="w-4 h-4" />
              {edu.location}
            </p>
          </div> */}
        </div>

        <p className="text-gray-300 text-sm italic border-l-2 border-teal-500 pl-3">
          {heading}
        </p>

        <div className="space-y-3">
          <h4 className="text-sm font-semibold text-white flex items-center gap-2">
            <Trophy className="w-4 h-4 text-yellow-500" />
            Key Achievements
          </h4>
          {/* <div className="flex flex-wrap gap-2">
            {edu.achievements.map((achievement, i) => (
              <div
                key={i}
                className="px-3 py-1 rounded-full bg-teal-500/10 text-teal-400 flex items-center gap-2 text-sm"
              >
                <Award className="w-4 h-4" />
                <span>{achievement}</span>
              </div>
            ))}
          </div> */}
        </div>

        {/* <div className="flex flex-wrap gap-2">
          {edu.skills.map((skill, i) => (
            <span
              key={i}
              className="px-2 py-1 text-xs rounded bg-blue-500/10 text-blue-300"
            >
              {skill}
            </span>
          ))}
        </div> */}
      </div>
    </div>
  );
}




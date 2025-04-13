import { useState } from "react";
import {
  Calendar,
} from "lucide-react";
import { motion } from "framer-motion";
import { AuroraText } from "@/components/magicui/aurora-text";
import { TypingAnimation } from "@/components/magicui/typing-animation";

import { FaBookReader, FaGraduationCap } from "react-icons/fa";
import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text";
import { MdCastForEducation } from "react-icons/md";

const EducationSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const educationData = [
    {
      degree: "BSc in Computer Science and Engineering (CSE)",
      school: "Khulna University",
      mascot: <FaGraduationCap className="text-[#35a9df] lg:text-5xl md:text-4xl text-3xl animate-bounce" />,
      year: "2019-2023",
      description:
      "Pursued an in-depth curriculum covering algorithms, data structures, operating systems, and computer architecture. Delved into software engineering, databases, computer networks, and machine learning. Participated in team-based projects, research initiatives, and coding competitions. Developed practical skills through building real-world applications using modern technologies such as JavaScript, React, Node.js, and MongoDB. Strengthened problem-solving abilities and system design thinking through rigorous coursework and hands-on lab sessions.",
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      school: "Khulna Alia Kamil Madrasah",
      mascot: <FaBookReader className="text-[#1b9759] lg:text-5xl md:text-4xl text-3xl animate-bounce" />,
      year: "2016-2018",
      description:
      "Completed Higher Secondary Certificate (HSC) in the Science stream with an outstanding GPA of 4.88. Earned a Merit Board Scholarship in recognition of academic excellence. Gained a solid foundation in core scientific subjects such as Physics, Chemistry, Biology, and Mathematics. This academic journey fostered a strong analytical mindset, disciplined study habits, and a deep understanding of scientific principles, which laid the groundwork for pursuing advanced studies in Computer Science and Engineering.",
    },
    {
      degree: "Higher Secondary Certificate (SSC)",
      school: "Assasuni Alia Madrasah",
      mascot: <MdCastForEducation className="text-[#35a9df] lg:text-5xl md:text-4xl text-3xl animate-bounce" />,
      year: "2014-2016",
      description:
      "Achieved outstanding academic success in the Science group, securing a perfect GPA of 5.00 in the Secondary School Certificate (SSC) examination. Ranked First in Assasuni Upazila and Second in Satkhira District, demonstrating academic leadership and dedication. Gained strong foundations in core science subjects including Physics, Chemistry, Biology, and Mathematics. Recognized for consistent top performance, critical thinking, and disciplined study habits, laying the groundwork for future academic and professional achievements.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="min-h-screen relative overflow-hidden xl:py-40 lg:py-32 md:py-20 py-12 bg-[#04081A]">
      {/* Grid Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:50px_50px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#04081A] via-transparent to-[#04081A]" />
        <div className="absolute inset-0 border border-white/[0.05] grid grid-cols-2 md:grid-cols-4" />
      </div>

      <div className="max-w-[1440px] mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="mx-auto max-w-7xl px-6 text-center">
            <h1 className="text-4xl text-center font-bold tracking-tighter md:text-5xl lg:text-7xl">
              <AuroraText className="font-bold">Educational Journey</AuroraText>
            </h1>
            <TypingAnimation className='text-xl md:text-2xl mt-3 text-white'>Discover my academic milestones and learning path</TypingAnimation>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className={`relative border rounded-xl p-8 transition-all duration-300 bg-gray-900/50 backdrop-blur-sm ${hoveredIndex === index
                ? "border-teal-500 scale-[1.02]"
                : "border-blue-400/20"
                }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="space-y-6">
                <div className="space-y-2">
                  <span className="">{edu.mascot}</span>
                  <div className="flex items-center gap-3">
                    <h3 className="text-2xl font-bold text-white">
                      <AuroraText>{edu.degree}</AuroraText>
                    </h3>
                  </div>
                  <AnimatedGradientText className='text-lg md:text-xl lg:text-2xl flex items-center gap-2 font-bold py-2'>
                      {edu.school}
                  </AnimatedGradientText>
                  <p className="text-gray-400 flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {edu.year}
                  </p>
                </div>
                <p className="text-justify text-gray-300 text-base italic border-l-2 border-teal-500 pl-3 ">
                  {edu.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;

import { useState } from "react";
import {
  Award,
  Calendar,
  BookOpen,
  Trophy,
} from "lucide-react";
import { motion } from "framer-motion";
import { AuroraText } from "@/components/magicui/aurora-text";
import { TypingAnimation } from "@/components/magicui/typing-animation";

import { FaGraduationCap } from "react-icons/fa";

const EducationSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const educationData = [
    {
      degree: "BSc in Computer Science and Engineering (CSE)",
      school: "Khulna University",
      mascot: <FaGraduationCap className="text-[#35a9df] lg:text-5xl md:text-4xl text-3xl animate-bounce" />,
      year: "2019-2023",
      achievements: ["GPA: 3.32", "Subject: Science"],
      skills: ["Mathematics", "Physics", "Chemistry", "Biology"],
      description:
        "Focused on core science subjects with emphasis on practical laboratory work and scientific research methodologies.",
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      school: "Dottopara Model Degree College",
      mascot: <FaGraduationCap className="text-[#35a9df] lg:text-5xl md:text-4xl text-3xl animate-bounce" />,
      year: "2021-2023",
      achievements: ["GPA: 4.25", "Subject: Arts"],
      skills: ["Literature", "Social Studies", "Economics", "History"],
      description:
        "Developed strong analytical and critical thinking skills through comprehensive study of humanities and social sciences.",
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      school: "Dottopara Model Degree College",
      mascot: <FaGraduationCap className="text-[#35a9df] lg:text-5xl md:text-4xl text-3xl animate-bounce" />,
      year: "2021-2023",
      achievements: ["GPA: 4.25", "Subject: Arts"],
      skills: ["Literature", "Social Studies", "Economics", "History"],
      description:
        "Developed strong analytical and critical thinking skills through comprehensive study of humanities and social sciences.",
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
    <section className="min-h-screen relative overflow-hidden py-40 bg-[#04081A]">
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
                  <p className="text-lg md:text-xl lg:text-2xl text-gray-50 flex items-center gap-2 py-2">
                    {edu.school}
                  </p>
                  <p className="text-gray-400 flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {edu.year}
                  </p>
                </div>

                <p className="text-gray-300 text-sm italic border-l-2 border-teal-500 pl-3">
                  {edu.description}
                </p>

                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-white flex items-center gap-2">
                    <Trophy className="w-4 h-4 text-yellow-500" />
                    Key Achievements
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.achievements.map((achievement, i) => (
                      <div
                        key={i}
                        className="px-3 py-1 rounded-full bg-teal-500/10 text-teal-400 flex items-center gap-2 text-sm"
                      >
                        <Award className="w-4 h-4" />
                        <span>{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {edu.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs rounded bg-blue-500/10 text-blue-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;

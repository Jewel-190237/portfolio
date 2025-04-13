
import {
  Award,
  Calendar,
  Trophy,
} from "lucide-react";
import { motion } from "framer-motion";
import { AuroraText } from "@/components/magicui/aurora-text";
import { TypingAnimation } from "@/components/magicui/typing-animation";
import { FaGraduationCap} from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text";
import { ShineBorder } from "@/components/magicui/shine-border";

const AdditionalExperience = () => {

  const educationData = [
    {
      title: "Lecturer in Information and Communication Technology (ICT)",
      heading: "Teacher",
      school: "AKIJ Ideal School and College",
      location: "Jashore, Bangladesh",
      mascot: <FaGraduationCap className="text-[#35a9df] lg:text-5xl md:text-4xl text-3xl " />,
      year: "2023-2024",
      achievements: ["Best Instructor Award", "Student Leadership Award"],
      skills: ["Curriculum Design", "ICT Instruction", "Educational Technology", "Assessment & Evaluation", "Student Engagement", "Problem Solving", "Communication"],
      description:
      "Designed and delivered ICT curriculum to secondary and higher secondary students, integrating educational technology to enhance learning outcomes. Fostered digital literacy, critical thinking, and problem-solving skills through interactive teaching methods and real-world applications.",
    },
    {
      title: "International and Community Service Director",
      heading: "Volunteer",
      school: "Roratact Club of Khulna University",
      location: "Khulna, Bangladesh",
      mascot: <FaGraduationCap className="text-[#35a9df] lg:text-5xl md:text-4xl text-3xl" />,
      year: "2021-2023",
      achievements: [ "Lifetime honor Award", "Shining Star Award", "Best Director Award"],
      skills: ["Management", "Problem Solving", "Time Management", "Public Speaking", "Leadership", "Communication", "Teamwork", "Adaptability", "Creativity"],
      description:
      "Led and coordinated community outreach programs, fostering international collaboration and local engagement. Developed strong leadership, communication, and organizational skills while making a meaningful impact through volunteer service at Khulna University.",
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
              <AuroraText className="font-bold">Additional Experience</AuroraText>
            </h1>
            <TypingAnimation className='text-xl md:text-2xl mt-3 text-white'> Explore my journey beyond academics — internships, volunteering, and more</TypingAnimation>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-8 "
        >
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className={`relative  rounded-xl p-8 transition-all duration-300 bg-gray-900/50 backdrop-blur-sm `}
            >
              <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />
              <div className="space-y-6 hover:-translate-y-2 translation-all duration-500 ease-in-out transform  hover:scale-105">
                <div className="space-y-2">
                  <div className="flex items-center gap-3 ">
                    <span className="">{edu.mascot}</span>
                    <AnimatedGradientText className="text-3xl font-semibold ">
                      {edu.heading}
                    </AnimatedGradientText>
                  </div>
                  <div className="flex items-center gap-3">
                    <h3 className="text-2xl font-bold text-white">
                      <AuroraText>{edu.title}</AuroraText>
                    </h3>
                  </div>
                  <p className="text-lg md:text-xl lg:text-2xl text-gray-50 flex items-center gap-2 py-2">
                    {edu.school}
                  </p>
                  <div className="flex flex-col md:flex-row items-start md:items-center  gap-3 md:gap-5 lg:gap-8 xl:gap-10">
                    <p className="text-gray-400 flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {edu.year}
                    </p>
                    <p className="text-gray-400 flex items-center gap-2 ">
                      <IoLocation className="w-4 h-4" />
                      {edu.location}
                    </p>
                  </div>
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

export default AdditionalExperience;

'use client'
import { FaReact, FaNodeJs, FaDatabase, FaTools } from "react-icons/fa";
import { motion } from "framer-motion";

type TechnologyCategory = {
  title: string;
  icon: React.ReactNode;
  technologies: string[];
};

const technologiesData: TechnologyCategory[] = [
  // {
  //   title: "Frontend",
  //   icon: <FaReact className="text-4xl bg-sky-600 rounded-lg p-1 text-white" />,
  //   technologies: ["React", "Next.js", "JavaScript", "TypeScript", "Tailwind CSS"],
  // },
  // {
  //   title: "Backend",
  //   icon: <FaNodeJs className="text-4xl bg-sky-600 rounded-lg p-1 text-white" />,
  //   technologies: ["Node.js", "Express"],
  // },
  // {
  //   title: "Databases",
  //   icon: <FaDatabase className="text-4xl bg-sky-600 rounded-lg p-1 text-white" />,
  //   technologies: ["MongoDB", "MySQL"],
  // },
  // {
  //   title: "Tools",
  //   icon: <FaTools className="text-4xl bg-sky-600 rounded-lg p-1 text-white" />,
  //   technologies: ["GitHub", "Jira", "Postman", "Supabase"],
  // },
  {
    title: "Programming Languages",
    icon: <FaTools className="text-4xl bg-sky-600 rounded-lg p-1 text-white" />,
    technologies: ["Typescript", "JavaScript", "SQL", "C", "C++"],
  },
  {
    title: "Frontend /UI",
    icon: <FaTools className="text-4xl bg-sky-600 rounded-lg p-1 text-white" />,
    technologies: ["HTML", "CSS", "React JS"],
  },
  {
    title: "Database",
    icon: <FaTools className="text-4xl bg-sky-600 rounded-lg p-1 text-white" />,
    technologies: ["Mongo DB", "Supabase", "MySQL"],
  },
  {
    title: "Frameworks & Libraries",
    icon: <FaTools className="text-4xl bg-sky-600 rounded-lg p-1 text-white" />,
    technologies: ["Bootstrap", "Express JS", "Node JS", "Tailwind CSS", "Next JS"],
  },
  {
    title: "Other technical skills",
    icon: <FaTools className="text-4xl bg-sky-600 rounded-lg p-1 text-white" />,
    technologies: ["Git", "GitHub", "Jira", "GSAP", "Technical tools handling", "Postman", "Thunder client", "DSA", "OOPS" ],
  },

];

const SkillLists: React.FC = () => {
  return (
    <div id="technologies" className="px-4 py-12 bg-white md:h-[100vh] dark:bg-slate-900">
      <h2 className="text-3xl font-bold text-center mb-6 tracking-wider">Technologies</h2>
      <div className="mt-6 border-t border-slate-600 pt-6 w-[80vw] mx-auto"></div>
      <motion.div initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2,
              y: { type: "spring", stiffness: 30 },
              opacity: { duration: 0.6 },
              ease: "easeInOut"
            }}
             className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-auto md:w-[70vw] w-[90vw] justify-center items-center">
        {technologiesData.map((category, index) => (
          <div
            key={index}
            className="bg-white dark:bg-slate-600 shadow-lg rounded-lg p-4 min-h-36"
          >
            <div className="flex items-center space-x-2 mb-8">
              {category.icon}
              <h3 className="text-lg font-semibold">{category.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {category.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="bg-slate-100 text-sky-700 tracking-wider font-semibold text-sm px-3 py-2 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default SkillLists;


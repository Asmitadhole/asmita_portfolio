"use client"
import React from "react";
import ProjectCard from "./ProjectCards";
import { motion } from "framer-motion";

const projects = [
  {
    title: "The Wild Oasis (Admin-App)",
    description:
      "The Wild Oasis (Admin App) is a comprehensive admin solution crafted to simplify cabin stay management for hotel staff.",
    tech: ["React", "React Query", "Supabase", "Component CSS"],
    images: ["/Project1.png", "/Project1.2.png", "/Project1.3.png"],
    github: "https://github.com/Asmitadhole/the-wild-oasis",
    live: "https://the-wild-oasis-inky-five.vercel.app/",
  },
  {
    title: "The Wild Oasis (Customer-App)",
    description:
      "This website allows users to explore, book, and manage cabin hotel stays effortlessly.",
    tech: ["Next.js", "Javascript", "Supabase", "React Query", "Tailwind CSS"],
    images: [
      "/Project2.png",
      "/Project2.2.png",
      "/Project2.3.png",
      "/Project2.4.png",
    ],
    github: "https://github.com/Asmitadhole/the-wild-oasis-userWebsite",
    live: "https://the-wild-oasis-user-website-nine.vercel.app/",
  },
  {
    title: "Online Pizza Store",
    description:
      "Online pizza store that allows users to browse, add pizzas to their cart, and place orders effortlessly.",
    tech: ["React", "Javascript"],
    images: ["/Project3.png", "/Project3.2.png"],
    github: "https://github.com/Asmitadhole/online-pizza-store",
    live: "https://online-pizza-store-topaz.vercel.app/",
  },
  {
    title: "The Quiz App",
    description:
      "The app allows users to answer multiple-choice questions, tracks their score in real time, and offers an interactive interface.",
    tech: ["React", "Javascript"],
    images: ["/Project6.png", "/Project6.2.png", "/Project6.3.png"],
    github: "https://github.com/Asmitadhole/the_quiz_app",
    live: "https://the-quiz-app-gamma.vercel.app/",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-2">
          <h2 className="text-4xl dark:text-white font-bold">My Projects</h2>
          <div className="mt-6 border-t border-slate-600 pt-6"></div>
        </div>
        

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ProjectCard project={project} index={index} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
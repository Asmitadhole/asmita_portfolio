"use client";
import { useEffect } from "react";
import Typed from "typed.js";
import Asmita from "../../../../public/photos/Photo.jpeg";
import contact from "../../../../public/icon/contact.png";
import Image from "next/image";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";

const Hero = () => {
  useEffect(() => {
    const typed = new Typed(".typing", {
      strings: [
        "Software Engineer",
        "Web Developer",
        "Full Stack Developer",
        "MERN Stack Developer",
      ],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true,
    });

    return () => {
      typed.destroy(); // Clean up the Typed.js instance
    };
  }, []);

  const handleDownload = () => {
    // Path to the resume in the public folder
    const resumeUrl = "/cv/Asmita_Dhole_Resume.pdf";

    // Create a temporary link and trigger the download
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.setAttribute("download", "Asmita_Dhole_Resume.pdf"); // You can customize the file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div id="home" className="md:pt-16 pt-36 w-full h-screen relative md:px-0 px-5 flex justify-center items-center dark:bg-slate-900">
        <div className="w-full xl:px-16 xs:px-8 md:flex gap-4 justify-center items-center">
          <div className="w-full tracking-wide">
            <motion.h4 initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: 0.2 }} className="text-4xl text-slate-800 dark:text-white font-semibold">
              Hey, I'm{' '}
              <span className="text-sky-800 dark:text-sky-300 text-4xl font-semibold font-serif">
                Asmita Dhole,
              </span>
            </motion.h4>
            <motion.h1 initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }} className="mt-4 text-xl">
              <span>I am a {' '}</span>
              <span className="typing text-slate-800 dark:text-slate-100"></span>
            </motion.h1>

            <motion.p  initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}className="mt-4 sm:text-lg xs:text-md capitalize py-3">
            A passionate Software Engineer, I craft dynamic and user-friendly web applications. With a love for innovation and collaboration, I thrive on building scalable solutions that blend creativity and technology.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }} className="flex gap-4 pt-4">
            <button
              onClick={handleDownload}
              className="flex w-auto items-center justify-center text-white gap-2 rounded-2xl bg-sky-700 p-5 py-3 font-semibold"
            >
              Resume
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </button>
            <ScrollLink to="contact"
            smooth={true}
            duration={500}
            activeClass="active"
            spy={true}>
              <button className="flex w-auto items-center justify-center text-white gap-2 rounded-2xl bg-sky-700 p-5 py-3 font-semibold">
                Contact Me
                <Image src={contact} alt='contact' className="h-6 w-6 font-extrabold"/>
              </button>
            </ScrollLink>
            </motion.div>
            
          </div>

          <motion.div initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }} className="">
            <Image
              className="rounded-sm rounded-br-[5rem] rounded-tl-[5rem] md:py-0 py-7"
              src={Asmita}
              alt="My Pic"
              width={700}
              height={700}
            />
          </motion.div>
        </div>
    </div>
  );
};

export default Hero;

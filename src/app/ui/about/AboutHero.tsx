'use client'
import Image from "next/image";
import About from "../../../../public/photos/About.jpg";
import { motion } from "framer-motion";

const AboutHero = () => {
  return (
    <div id="about" className="pt-16 py-3 md:px-10 px-4 md:h-[80vh] md:flex justify-center items-center dark:bg-slate-900">
        
        <div className="md:flex gap-3">
          <motion.div initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}>
          <h1 className="text-3xl font-extrabold dark:text-white text-gray-800 tracking-wider">
          About me
        </h1>
          <p className="text-lg text-gray-600 dark:text-gray-100 mt-4">
          I am a passionate Software Engineer who thrives on solving complex problems with simple, elegant solutions. I focus on delivering functional, efficient, and visually captivating products that provide real value. Always eager to learn, I stay ahead of industry trends and love collaborating with others to exchange ideas and drive innovation.
        </p>
        <p className="text-lg text-gray-600 dark:text-gray-100 mt-4">
        I believe in the power of mentorship and enjoy helping others grow while constantly refining my own skills. A strong communicator, I excel in collaborative environments and work well under pressure to meet deadlines. I embrace challenges that push me to think critically and creatively, always striving to exceed expectations.
        </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}>
            <Image
              src={About}
              alt="About Me"
              className="w-[100vw] h-auto object-cover rounded-md md:pt-0 py-5"
            />
          </motion.div>
        </div>
    </div>
  );
};

export default AboutHero;

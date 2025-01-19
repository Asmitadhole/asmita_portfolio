'use client'
import Link from 'next/link'
import { FaArrowRightLong } from 'react-icons/fa6'
import { motion } from "framer-motion";

const CtaCertifications = () => {
  return (
    <section>
      <Link href='/certifications_awards'>
        <motion.div initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              delay: 0.2,
              x: { type: "spring", stiffness: 30 },
              opacity: { duration: 0.6 },
              ease: "easeInOut"
            }} className='bg-slate-100 dark:bg-slate-800 dark:text-white flex flex-col sm:flex-row items-center justify-center gap-2 p-4 md:p-10'>
          <h3 className='text-xl md:text-2xl font-semibold animate-pulse ease-out duration-1000 bg-gradient-to-l from-black to-blue-950 bg-clip-text text-transparent tracking-wider dark:text-white'>To view Certifications & Awards!</h3>
          <div className='text-4xl font-bold animate-pulse ease-out duration-1000 text-black'><FaArrowRightLong className='text-sky-800 dark:text-sky-400'/></div>
        </motion.div>
        </Link>
      </section>
  )
}

export default CtaCertifications
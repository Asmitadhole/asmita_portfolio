"use client";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <section>
      <div className="dark:bg-slate-900 bg-gray-100">
        <div className="w-full mx-auto 2xl:max-w-7xl items-center flex flex-col justify-center relative px-8 py-10">
          <div className="prose text-gray-600 prose-sm prose-headings:font-normal prose-headings:text-xl mx-auto">
            <div className="text-3xl text-slate-900 dark:text-white font-bold tracking-wider">
              Education
            </div>
          </div>
          <div className="mt-6 border-t border-slate-600 pt-6">
            {/* Starts component */}
            {/* Dark Mode class */}
            <div className="dark:bg-slate-600 bg-white rounded-2xl p-6 border">
              {/* Your content here */}
              <div className="mx-auto grid grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:grid-cols-3">
                <motion.div initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              delay: 0.2,
              x: { type: "spring", stiffness: 30 },
              opacity: { duration: 0.6 },
              ease: "easeInOut"
            }}
            viewport={{ once: true }}>
                  <time
                    dateTime="March 2016"
                    className="flex items-center text-sm font-semibold leading-6 text-sky-600 dark:text-sky-400"
                  >
                    <svg
                      viewBox="0 0 4 4"
                      className="mr-4 h-1 w-1 flex-none"
                      aria-hidden="true"
                    >
                      <circle cx="2" cy="2" r="2" fill="currentColor"></circle>
                    </svg>
                    March 2016
                    <div
                      className="absolute -ml-2 h-px w-screen -translate-x-full bg-gray-500 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"
                      aria-hidden="true"
                    ></div>
                  </time>
                  <p className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900 dark:text-white">
                    SSC Board
                  </p>
                  <p className="mt-1 text-sm text-pretty leading-7 text-gray-500 dark:text-slate-300">
                    S. M. D. Bharati High School, Arni
                  </p>
                  <p className="mt-1 text-sm text-pretty leading-7 text-gray-500 dark:text-slate-300">
                    Percentage - 89.90%
                  </p>
                </motion.div>
                <motion.div initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              delay: 0.6,
              x: { type: "spring", stiffness: 30 },
              opacity: { duration: 0.6 },
              ease: "easeInOut"
            }}>
                  <time
                    dateTime="May 2019"
                    className="flex items-center text-sm font-semibold leading-6 text-sky-600 dark:text-sky-400"
                  >
                    <svg
                      viewBox="0 0 4 4"
                      className="mr-4 h-1 w-1 flex-none"
                      aria-hidden="true"
                    >
                      <circle cx="2" cy="2" r="2" fill="currentColor"></circle>
                    </svg>
                    May 2019
                    <div
                      className="absolute -ml-2 h-px w-screen -translate-x-full bg-gray-500 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"
                      aria-hidden="true"
                    ></div>
                  </time>
                  <p className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900 dark:text-white">
                    Diploma in Civil Engineering
                  </p>
                  <p className="mt-1 text-sm text-pretty leading-7 text-gray-500 dark:text-slate-300">
                    Government Polytechnic of Engineering, Yavatmal
                  </p>
                  <p className="mt-1 text-sm text-pretty leading-7 text-gray-500 dark:text-slate-300">
                    Percentage - 82.18%
                  </p>
                </motion.div>
                <motion.div initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              delay: 1,
              x: { type: "spring", stiffness: 30 },
              opacity: { duration: 0.6 },
              ease: "easeInOut"
            }}>
                  <time
                    dateTime="June 2023"
                    className="flex items-center text-sm font-semibold leading-6 text-sky-600 dark:text-sky-400"
                  >
                    <svg
                      viewBox="0 0 4 4"
                      className="mr-4 h-1 w-1 flex-none"
                      aria-hidden="true"
                    >
                      <circle cx="2" cy="2" r="2" fill="currentColor"></circle>
                    </svg>
                    June 2023
                    <div
                      className="absolute -ml-2 h-px w-screen -translate-x-full bg-gray-500 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"
                      aria-hidden="true"
                    ></div>
                  </time>
                  <p className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900 dark:text-white">
                    Bachlor of Engineering
                  </p>
                  <p className="mt-1 text-sm text-pretty leading-7 text-gray-500 dark:text-slate-300">
                    Shree Shankarprasad Agnihotri College of Engineering, Wardha
                  </p>
                  <p className="mt-1 text-sm text-pretty leading-7 text-gray-500 dark:text-slate-300">
                    CGPA - 6.88
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

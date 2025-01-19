"use client";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div id="experience" className="bg-gray-100 pb-10 md:h-[70vh] dark:bg-slate-900">
      <div className="w-[90vw] mx-auto md:p-8 p-3">
        <h1 className="text-3xl font-bold px-6 text-center tracking-wider">
          Experience
        </h1>
        <div className="mt-6 border-t border-slate-600 pt-6"></div>
        <div className="flow-root">
          <ul className="-mb-8">
            <motion.li
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.2,
                y: { type: "spring", stiffness: 30 },
                opacity: { duration: 0.6 },
                ease: "easeInOut",
              }}
              className="md:p-3 shadow-xl rounded-lg pb-4 dark:bg-slate-600"
            >
              <div className="relative pb-8">
                <span
                  className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200"
                  aria-hidden="true"
                ></span>
                <div className="relative flex items-start space-x-3">
                  <div>
                    <div className="relative px-1">
                      <div className="h-8 w-8 bg-sky-700 rounded-full ring-8 ring-white flex items-center justify-center">
                        <svg
                          className="text-white h-5 w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="min-w-0 flex-1 py-0">
                    <div className="text-md text-gray-500">
                      <div>
                        <span className="font-medium text-gray-900 dark:text-white mr-2">
                          Web Developer Intern
                        </span>
                        <span className="my-0.5 relative inline-flex items-center bg-white rounded-full border border-gray-300 px-3 py-0.5 text-sm">
                          <div className="absolute flex-shrink-0 flex items-center justify-center">
                            <span
                              className="h-1.5 w-1.5 rounded-full bg-sky-700"
                              aria-hidden="true"
                            ></span>
                          </div>
                          <div className="ml-3.5 font-medium text-gray-900">
                            Vionsys IT Solutions India Pvt. Ltd.
                          </div>
                        </span>
                      </div>
                      <span className="whitespace-nowrap text-sm dark:text-slate-300">
                        April 2024 - June 2024
                      </span>
                    </div>
                    <div className="mt-2 text-gray-700 dark:text-slate-200">
                      <p>
                        - Worked on front-end development using React and
                        Nextjs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.5,
                y: { type: "spring", stiffness: 30 },
                opacity: { duration: 0.6 },
                ease: "easeInOut",
              }}
              className="p-3 shadow-xl rounded-lg pt-8 mt-2 dark:bg-slate-600"
            >
              <div className="relative pb-8">
                <span
                  className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200"
                  aria-hidden="true"
                ></span>
                <div className="relative flex items-start space-x-3">
                  <div>
                    <div className="relative px-1">
                      <div className="h-8 w-8 bg-sky-700 rounded-full ring-8 ring-white flex items-center justify-center">
                        <svg
                          className="text-white h-5 w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="min-w-0 flex-1 py-0">
                    <div className="text-md text-gray-500">
                      <div>
                        <span className="font-medium text-gray-900 dark:text-white mr-2">
                          Software Engineer
                        </span>
                        <span className="my-0.5 relative inline-flex items-center bg-white rounded-full border border-gray-300 px-3 py-0.5 text-sm">
                          <div className="absolute flex-shrink-0 flex items-center justify-center">
                            <span
                              className="h-1.5 w-1.5 rounded-full bg-sky-700"
                              aria-hidden="true"
                            ></span>
                          </div>
                          <div className="ml-3.5 font-medium text-gray-900">
                            Vionsys IT Solutions India Pvt. Ltd.
                          </div>
                        </span>
                      </div>
                      <span className="whitespace-nowrap text-sm dark:text-slate-300">
                        July 2024 - Present
                      </span>
                    </div>
                    <div className="mt-2 text-gray-700 dark:text-slate-200">
                      <p>
                        - Developing and maintaining full-stack applications.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;

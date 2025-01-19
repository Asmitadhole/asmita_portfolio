"use client";
import React, { useState } from "react";
import Testing from "../../../../public/photos/Testing.jpeg";
import TcsNQT from "../../../../public/photos/TcsNQT.png";
import TcsYoung from "../../../../public/photos/TcsYoung.png";
import ApnaCollege from "../../../../public/photos/ApnaCollege.png";
import QuarterJune1 from "../../../../public/photos/QuarterJune-1.jpeg";
import QuarterJune2 from "../../../../public/photos/QuarterJune-2.jpeg";
import Image from "next/image";
import { motion } from "framer-motion";
import { PiCertificateLight } from "react-icons/pi";
import Link from "next/link";
import Loader from "@/app/Loader";

const Certifications = () => {
  const [openImageId, setOpenImageId] = useState(null); // Track which image is open
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  const togglePopup = (id: any) => {
    setOpenImageId(openImageId === id ? null : id); // Toggle the popup for the specific image
  };

  const Images = [
    {
      id: 1,
      pic: TcsNQT,
      alt: "TCS NQT - Cognitive Certificate",
      caption: "TCS NQT - Cognitive Certificate",
      desc: "Completed the TCS National Qualifier Test (NQT) - Cognitive, demonstrating proficiency in essential cognitive skills such as verbal ability, reasoning ability, and numerical ability. This certification validates my aptitude for various roles in IT services, consulting, and business solutions, aligning with industry standards and requirements.",
      IssuedBy: "Tata Consultancy Services",
      IssuedDate: "July 2023",
      Skills: "Verbal ability, Reasoning ability, and Numerical ability",
    },
    {
      id: 2,
      pic: TcsYoung,
      alt: "TCS iON Career Edge - Young Professional Certificate",
      caption: "TCS iON Career Edge - Young Professional Certificate",
      desc: "Completed the TCS iON Career Edge - Young Professional course, which equipped me with essential skills in communication, collaboration, business etiquette, and analytical thinking for success in diverse environments.",
      IssuedBy: "Tata Consultancy Services",
      IssuedDate: "July 2023",
      Skills:
        "Effective Email Writing, Interview Skills Training, Business Etiquette, Group Discussions, Resume Writing, Soft Skills, Presentation Skills, Communication",
    },
    {
      id: 3,
      pic: ApnaCollege,
      alt: "Full Stack Web Development - Delta Course Certificate",
      caption: "Full Stack Web Development - Delta Course Certificate",
      desc: "Completed the Full Stack Web Development Delta Course, gaining comprehensive skills in front-end and back-end development. Proficient in HTML, CSS, JavaScript, React, Node.js, and databases. Equipped with the knowledge to build, deploy, and maintain dynamic web applications.",
      IssuedBy: "Apna College",
      IssuedDate: "May 2024",
      Skills:
        "Node.js, SQL, Bootstrap (Framework), MongoDB, HTML, CSS, React.js, JavaScript, Express.js",
    },
    {
      id: 4,
      pic: Testing,
      alt: "Testing Program Certificate",
      caption: "Testing Program Certificate",
      desc: "Received a Certificate of Appreciation from The Social Continent Pvt. Ltd. for participating in their One-day Testing Program on the SOCON Application. This program enhanced my testing skills and provided hands-on experience with the latest testing methodologies and tools.",
      IssuedBy: "The Social Continent Pvt. Ltd.",
      IssuedDate: "June 2024",
      Skills: "Testing Methods",
    },
    {
      id: 5,
      pic: QuarterJune1,
      alt: "Champion of the Quarter Award - Vionsys",
      caption: "Champion of the Quarter - Vionsys",
      desc: "Awarded for exceptional performance during my web developer internship. Recognized for innovative problem-solving, dedication, and completing key projects that advanced technology and client satisfaction.",
      IssuedBy: "Vionsys IT Solutions India Pvt.Ltd.",
      IssuedDate: "June 2024",
      Skills:
        "Project Management, Quality Assurance, Technical Skills, Collaboration, Adaptation, Problem-Solving",
    },
    {
      id: 4,
      pic: QuarterJune2,
      alt: "Team of Quarter Award - Vionsys",
      caption: "Team of Quarter Award - Vionsys",
      desc: "Quarter of the Team Award for exceptional collaboration and innovative problem-solving, contributing to project success and organizational growth.",
      IssuedBy: "Vionsys IT Solutions India Pvt.Ltd.",
      IssuedDate: "June 2024",
      Skills:
        "Project Management, Communication, Critical thinking, Collaboration, Strategic planning, Leadership, Problem-Solving",
    },
  ];

  return (
    <div className="p-4 pt-24 dark:bg-slate-900">
      <Link href="/">
        <button
          onClick={handleClick}
          disabled={isLoading}
          className={`bg-black dark:border  text-white py-2 px-4 rounded transition duration-300 flex items-center justify-center ${
            isLoading ? "opacity-70 cursor-not-allowed" : "hover:bg-gray-800"
          }`}
        >
          {isLoading ? (
            <>
              <Loader /> Back
            </>
          ) : (
            "Back"
          )}
        </button>
      </Link>
      <h1 className="text-3xl font-bold pt-2 px-6 text-center">
        Certifications & Awards
      </h1>
      <div className="mt-6 border-t border-slate-600 pt-6"></div>
      <div className="flex flex-wrap">
        {Images.map((item) => (
          <div key={item.id} className="w-full px-4 md:w-1/2 lg:w-1/3">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.2,
                y: { type: "spring", stiffness: 30 },
                opacity: { duration: 0.6 },
                ease: "easeInOut",
              }}
              className="mb-9 rounded-xl md:py-8 md:px-7 px-3 py-3 shadow-md dark:shadow-slate-400 transition-all hover:shadow-xl sm:p-9 lg:px-6 xl:px-9"
            >
              <div className="mx-auto mb-2 inline-block">
                <PiCertificateLight size={50} className="text-sky-800 dark:text-sky-400" />
              </div>
              <div>
                <h3 className="mb-1 text-lg font-bold text-black dark:text-white md:text-xl">
                  {item.caption}
                </h3>
                <p className="text-base mb-3 text-slate-500">
                  {item.IssuedBy} - {item.IssuedDate}
                </p>
                <p className="text-base mb-3 dark:text-slate-200">{item.desc}</p>
                <div className="mb-3 dark:text-slate-200">
                  <span className="font-bold">Skills: </span>
                  {item.Skills}
                </div>
                <button
                  onClick={() => togglePopup(item.id)}
                  className="bg-sky-700 text-white py-2 px-4 rounded hover:bg-sky-800 transition duration-300"
                >
                  View Achievement
                </button>
              </div>
            </motion.div>

            {/* Popup Content */}
            {openImageId === item.id && (
              <div className="fixed inset-0 flex items-center justify-center z-50">
                {/* Overlay */}
                <div
                  className="fixed inset-0 bg-black opacity-50"
                  onClick={() => togglePopup(null)}
                ></div>

                {/* Popup Content */}
                <div className="bg-white dark:bg-slate-500 rounded-lg p-6 z-10 shadow-lg">
                  <Image
                    src={item.pic}
                    alt={item.alt}
                    className="max-w-[80vh] max-h-[80vh] mb-4 rounded"
                  />
                  <button
                    onClick={() => togglePopup(null)}
                    className="bg-orange-700 text-white py-2 px-4 rounded hover:bg-orange-600 transition duration-300"
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;

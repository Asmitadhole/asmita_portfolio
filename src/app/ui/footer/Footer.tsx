
import Link from "next/link";
import linkedin from "../../../../public/icon/linkedin.svg";
import { FaGithub, FaBriefcase, FaWhatsapp } from "react-icons/fa";
import Image from "next/image";

const Footer = () => {
  const message = 'Hello, I would like to chat!';
  
  return (
    <footer className="px-5 py-2 border-t-2 text-white">
      <div className="flex justify-between items-center">

        <p className="text-md font-medium text-sky-800 dark:text-sky-400">
          © {new Date().getFullYear()} Asmita Dhole
        </p>

        <p className="flex justify-center items-center">
              <Link
                href="https://github.com/Asmitadhole"
                target="_blank"
                title="GitHub"
              >
                <FaGithub className="p-1 mr-3 size-10 text-black hover:scale-110 transition-all duration-200 ease-linear hover:cursor-pointer" />
              </Link>
              <Link
                href={`https://wa.me/9272077636?text=${encodeURIComponent(message)}`}
                target="_blank"
                title="WhatApp"
              >
                <FaWhatsapp className="p-1 mr-3 size-8 bg-green-600 text-white rounded-xl hover:scale-110 transition-all duration-200 ease-linear hover:cursor-pointer" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/asmita-dhole06"
                target="_blank"
              >
                <Image
                  src={linkedin}
                  className="mr-3 size-10 hover:scale-105 transition-all duration-200 ease-linear  hover:cursor-pointer"
                  alt="LinkedIn"
                />
              </Link>
              <Link href="#" title="Portfolio">
                <FaBriefcase className="p-2 mr-3 size-9 rounded-xl hover:scale-105 bg-[#4F46E5] text-white transition-all duration-200 ease-linear  hover:cursor-pointer" />
              </Link>
            </p>
      </div>
    </footer>
  );
};

export default Footer;

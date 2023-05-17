import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaUser, FaEnvelope } from "react-icons/fa";
import { IoIosPaper } from "react-icons/io";
import { MdWork } from "react-icons/md";
import { BsTelephonePlusFill } from "react-icons/bs";
import About from "./about/About";
// import Sidenav from "./home/sidenav/Sidenav";
import Left from "./home/Left";
import Resume from "./resume/Resume";
import Projects from "./projects/Projects";
import Contact from "./contact/Contact";

const HomePage: React.FC = () => {
  const [about, setAbout] = useState<boolean>(true);
  const [resume, setResume] = useState<boolean>(false);
  const [projects, setProjects] = useState<boolean>(false);
  const [contact, setContact] = useState<boolean>(false);
  const [sidenav, setSidenav] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      if (
        ref.current &&
        e.target instanceof Node &&
        ref.current.contains(e.target)
      ) {
        setSidenav(false);
      }
    });
  }, []);
  return (
    <div className="w-full lgl:w-[85%] px-8 h-full lgl:h-[85%] bg-transparent text-white z-50 flex gap-x-4 items-center justify-between p-4 lgl:p-0">
      {/* ================= Left Icons End here ======================== */}
      <div className="w-12 h-full bg-transparent hidden lgl:flex flex-col items-center justify-center gap-4">
        <div className="w-full h-96 bg-bodyColor rounded-3xl flex flex-col items-center justify-between py-6">
          {/* About Icon */}
          <span
            onClick={() => {
              setAbout(true);
              setResume(false);
              setProjects(false);
              setContact(false);
            }}
            className={`${
              about
                ? "text-designColor"
                : "w-full h-6 text-textColor text-xl flex items-center justify-center hover:text-designColor duration-300 cursor-pointer relative group"
            } w-full h-6 text-xl flex items-center justify-center hover:text-designColor duration-300 cursor-pointer relative group`}
          >
            <FaUser />
            <span className="text-white font-medium text-xs uppercase bg-designColor px-4 py-[1px] rounded-xl absolute left-0 translate-x-8 group-hover:translate-x-12 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
              About
            </span>
          </span>
          {/* Resume Icon */}
          <span
            onClick={() => {
              setAbout(false);
              setResume(true);
              setProjects(false);
              setContact(false);
            }}
            className={`${
              resume
                ? "text-designColor"
                : "w-full h-6 text-textColor text-xl flex items-center justify-center hover:text-designColor duration-300 cursor-pointer relative group"
            } w-full h-6 text-xl flex items-center justify-center hover:text-designColor duration-300 cursor-pointer relative group`}
          >
            <IoIosPaper />
            <span className="text-white font-medium text-xs uppercase bg-designColor px-4 py-[1px] rounded-xl absolute left-0 translate-x-8 group-hover:translate-x-12 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
              Resume
            </span>
          </span>
          {/* Project Icon */}
          <span
            onClick={() => {
              setAbout(false);
              setResume(false);
              setProjects(true);
              setContact(false);
            }}
            className={`${
              projects
                ? "text-designColor"
                : "w-full h-6 text-textColor text-xl flex items-center justify-center hover:text-designColor duration-300 cursor-pointer relative group"
            } w-full h-6 text-xl flex items-center justify-center hover:text-designColor duration-300 cursor-pointer relative group`}
          >
            <MdWork />
            <span className="text-white font-medium text-xs uppercase bg-designColor px-4 py-[1px] rounded-xl absolute left-0 translate-x-8 group-hover:translate-x-12 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
              Projects
            </span>
          </span>
          {/* Contact Icon */}
          <span
            onClick={() => {
              setAbout(false);
              setResume(false);
              setProjects(false);
              setContact(true);
            }}
            className={`${
              contact
                ? "text-designColor"
                : "w-full h-6 text-textColor text-xl flex items-center justify-center hover:text-designColor duration-300 cursor-pointer relative group"
            } w-full h-6 text-xl flex items-center justify-center hover:text-designColor duration-300 cursor-pointer relative group`}
          >
            <FaEnvelope />
            <span className="text-white font-medium text-xs uppercase bg-designColor px-4 py-[1px] rounded-xl absolute left-0 translate-x-8 group-hover:translate-x-12 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
              Contact
            </span>
          </span>
          <span className="w-full h-6 text-textColor text-xl flex items-center justify-center hover:text-designColor duration-300 cursor-pointer relative group">
            <a href="tel:01029404662" target="_blank" rel="noopener noreferrer">
              <BsTelephonePlusFill />
            </a>
            <span className="text-white font-medium text-xs uppercase bg-designColor px-4 py-[1px] rounded-xl absolute left-0 translate-x-8 group-hover:translate-x-12 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
              Call
            </span>
          </span>
        </div>
        {/* ======= Other Icons End */}
      </div>
      {/* ================= Left Icons Start here ====================== */}
      <div className="w-full lgl:w-[94%] h-full flex flex-col gap-6 lgl:gap-2 lgl:flex-row items-center">
        <Left />
        <div className="w-full lgl:w-8/12 h-full bg-bodyColor rounded-2xl flex justify-center items-center">
          <div className="w-full h-full h-[95%] lgl:hidden bg-transparent rounded-2xl flex flex-col gap-6">
            <About />
            <Resume />
            <Projects />
            <Contact />
          </div>
          <div className="w-full h-[96%] hidden lgl:flex justify-center overflow-y-scroll scrollbar-thin scrollbar-thumb-[#646464]">
            {about && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <About />
              </motion.div>
            )}

            {resume && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Resume />
              </motion.div>
            )}
            {projects && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Projects />
              </motion.div>
            )}
            {contact && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Contact />
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

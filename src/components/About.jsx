import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { services } from "../constants";
import {
  fadeIn,
  textVariant,
} from "../utils/motion";
import { be } from "../assets";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn(
        "right",
        "spring",
        index * 0.5,
        0.75
      )}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center ">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>
          About Me.
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 w-full max-w-6xl mx-auto flex items-start gap-8"
      >
        <div className="basis-2/3 text-secondary text-[17px] leading-relaxed space-y-6">
          <p className="leading-10">
            I am currently apart of{" "}
            <strong>AIVue</strong>, a small start
            up based on a hackathon winning
            project that I was a part of. At the
            same time, I am also a freelance
            engineer and also undertaking a
            part-time{" "}
            <b>
              Master's of Science in Software
              Engineering
            </b>{" "}
            at{" "}
            <strong>
              California State University
              Northridge
            </strong>
            .
          </p>
          <div className="flex gap-4">
            <a
              href="https://drive.google.com/file/d/1UyHsOCs4P32lFNDWFm18ddYQjAuOxerm/view?usp=sharing"
              target="_blank"
            >
              <button
                type="Button"
                className="mt-4 bg-tertiary  py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary hover:bg-blue5"
              >
                Resume
              </button>
            </a>
            <a
              href="https://www.linkedin.com/in/blthomp/"
              target="_blank"
            >
              <button
                type="Button"
                className="m-4 bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary hover:bg-blue5"
              >
                LinkedIn
              </button>
            </a>
            <a
              href="https://github.com/BrendanLThompson"
              target="_blank"
            >
              <button
                type="Button"
                className="mt-4 bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary hover:bg-blue5"
              >
                GitHub
              </button>
            </a>
          </div>
        </div>
        <div className="basis-1/3 flex justify-end">
          <img
            src={be}
            alt="logo"
            className="w-full max-w-[16rem] h-auto object-contain rounded-3xl border-4 border-[#ee88ac]"
          />
        </div>
      </motion.p>
      {/* <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard
            key={service.title}
            index={index}
            {...service}
          />
        ))}
      </div> */}
    </>
  );
};

export default SectionWrapper(About, "about");

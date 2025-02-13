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
        <p className={styles.sectionSubText}>
          Introduction
        </p>
        <h2 className={styles.sectionHeadText}>
          About Me.
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I am recent graduate from Cal State
        Northridge with a degree in Computer
        Science and I have developed both Mobile
        and Web Applications. My focus is on
        merging software engineering principles
        with intuitive design, using tools like
        Figma and React. I'm enthusiastic about
        contributing to exciting projects that
        merge functionality with user-friendly
        experiences.
      </motion.p>
      <motion.p variants={fadeIn("", "", 0.1, 1)}>
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
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard
            key={service.title}
            index={index}
            {...service}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");

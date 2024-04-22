import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{
      background: "#1d1836",
      color: "#fff",
    }}
    contentArrowStyle={{
      borderRight: "7px solid #232631",
    }}
    date={experience.date}
    iconStyle={{ background: experience.iconBg }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img
          src={experience.icon}
          alt={experience.company_name}
          className="w-[60%] h-[60%] object-contain"
        />
      </div>
    }
  >
    <div>
      <h3 className="text-white text-[24px] font-bold">
        {experience.title}
      </h3>
      <p
        className="text-secondary text-[16px] font-semibold"
        style={{ margin: 0 }}
      >
        {experience.company_name}
      </p>
    </div>
    <ul className="mt-5 list-disc ml-5 space-y-2">
      {experience.points.map(
        (point, index) =>
          index === 4 &&
          experience.company_name ===
            "Beige Corporation" ? ( // Assuming you want the third point to be a link
            <li
              key={`experience-point-${index}`}
              className="text-white-100 text-[14px] pl-1 tracking-wider"
            >
              <a
                href="https://www.figma.com/proto/OVUa1wj0SGzWA4WkgBYXiL/Producer?scaling=scale-down&page-id=0%3A1&node-id=71-2&starting-point-node-id=71%3A2&mode=design&t=9u8rCqECfy1R2TS1-1"
                target="_blank"
                className="text-blue hover:text-blue2 underline"
              >
                {point}
              </a>
            </li>
          ) : index === 5 &&
            experience.company_name ===
              "Beige Corporation" ? ( // Assuming you want the third point to be a link
            <li
              key={`experience-point-${index}`}
              className="text-white-100 text-[14px] pl-1 tracking-wider"
            >
              <a
                href="https://www.figma.com/proto/Eo7imxfT5XVKDb8xmA34H3/User?scaling=scale-down&page-id=0%3A1&node-id=31-156&starting-point-node-id=31%3A156&mode=design&t=3e7u2J4DzJtg8spz-1"
                target="_blank"
                className="text-blue hover:text-blue2 underline"
              >
                {point}
              </a>
            </li>
          ) : index === 4 &&
            experience.company_name ===
              "Contractor" ? ( // Assuming you want the third point to be a link
            <li
              key={`experience-point-${index}`}
              className="text-white-100 text-[14px] pl-1 tracking-wider"
            >
              <a
                href="https://exoticworld.glitch.me/"
                target="_blank"
                className="text-blue hover:text-blue2 underline"
              >
                {point}
              </a>
            </li>
          ) : index === 5 &&
            experience.company_name ===
              "Contractor" ? ( // Assuming you want the third point to be a link
            <li
              key={`experience-point-${index}`}
              className="text-white-100 text-[14px] pl-1 tracking-wider"
            >
              <a
                href="https://nxtworld.glitch.me/"
                target="_blank"
                className="text-blue hover:text-blue2 underline"
              >
                {point}
              </a>
            </li>
          ) : index === 6 &&
            experience.company_name ===
              "Contractor" ? ( // Assuming you want the third point to be a link
            <li
              key={`experience-point-${index}`}
              className="text-white-100 text-[14px] pl-1 tracking-wider"
            >
              <a
                href="https://www.redeemer4me.com/"
                target="_blank"
                className="text-blue hover:text-blue2 underline"
              >
                {point}
              </a>
            </li>
          ) : (
            <li
              key={`experience-point-${index}`}
              className="text-white-100 text-[14px] pl-1 tracking-wider"
            >
              {point}
            </li>
          )
        // <li
        //   key={`experience-point-${index}`}
        //   className="text-white-100 text-[14px] pl-1 tracking-wider"
        // >
        //   {point}
        // </li>
      )}
    </ul>
  </VerticalTimelineElement>
);

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          What I Have Done
        </p>
        <h2 className={styles.sectionHeadText}>
          Work Experience.
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map(
            (experience, index) => (
              <ExperienceCard
                key={index}
                experience={experience}
              />
            )
          )}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");

import React, { useRef } from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants/index";
import { useInView } from "framer-motion";

const Tech = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, threshold: 0.1 });

  return (
    <div ref={ref} className='tech__balls__wrapper'>
      {technologies.map((technology) => (
        <div className='ball__container' key={technology.name}>
          <BallCanvas icon={technology.icon} isInView={isInView} />
        </div>
      ))} 
    </div>
  );
};

export default SectionWrapper(Tech, "");
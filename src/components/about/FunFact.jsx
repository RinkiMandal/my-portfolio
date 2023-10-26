import React from "react";
import { BsTrophyFill } from "react-icons/bs";
import { SiAntdesign } from "react-icons/si";
import { BiCodeAlt } from "react-icons/bi";
import { IoLogoYoutube } from "react-icons/io";
import FunFactCard from "./FunFactCard";
import { AiTwotoneAppstore } from "react-icons/ai";

const FunFact = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <FunFactCard 
        icons={<AiTwotoneAppstore />}
        title=" Passion for Perfection:"
        subTitle=" I'm not satisfied until every detail is just right. I'm committed to delivering high-quality results."
      />
      <FunFactCard 
        icons={<SiAntdesign />}
        title="Design Enthusiast"
        subTitle="I have a keen eye for design, and I enjoy collaborating with designers to bring their visions to life with pixel-perfect precision.."
      />
      <FunFactCard 
        icons={<BiCodeAlt  />}
        title="Adaptability"
        subTitle="In the ever-evolving world of web development, I'm constantly learning and adapting to new technologies and best practices."
      />
      <FunFactCard 
        icons={<BsTrophyFill />}
        title="Result-Oriented"
        subTitle="My ultimate goal is to create web solutions that not only look impressive but also deliver tangible results, whether it's increased engagement, higher conversion rates, or improved brand recognition."
      />

    </div>

  );
};

export default FunFact;



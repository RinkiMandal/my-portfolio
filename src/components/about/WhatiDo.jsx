import React from "react";
import { FaAppStoreIos } from "react-icons/fa";
import { AiTwotoneAppstore } from "react-icons/ai";
import { SiAntdesign } from "react-icons/si";
import { BiCodeAlt } from "react-icons/bi";
// import ServicesCard from "./WhatiDoCard";
import WhatiDoCard from './WhatiDoCard'


const WhatiDo = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <WhatiDoCard
        icons={<BiCodeAlt />}
        title="Turn Ideas Into Reality"
        subTitle=" I transform creative concepts into interactive, user-friendly websites that not only meet but exceed expectations.."
      />
      <WhatiDoCard
        icons={<SiAntdesign />}
        title="Design Enthusiast"
        subTitle="I have a keen eye for design, and I enjoy collaborating with designers to bring their visions to life with pixel-perfect precision.."
      />
      <WhatiDoCard
        icons={<AiTwotoneAppstore />}
        title="Responsive Design:"
        subTitle=" Ensuring that websites are accessible and user-friendly on all devices is a top priority for me. Responsive design is not just a buzzword but a fundamental aspect of my work.."
      />
      <WhatiDoCard
        icons={<FaAppStoreIos />}
        title=" Innovation and Problem-Solving"
        subTitle="I thrive on solving challenges. Whether it's optimizing website performance, implementing cutting-edge features, or enhancing user experiences, I'm always up for a coding adventure."
      />
    </div>
  );
};

export default WhatiDo;



// className="px-0 grid grid-cols-2 md:grid-cols-4 pb-10"
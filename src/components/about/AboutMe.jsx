import React from "react";

const AboutMe = () => {
  return (
    <div className="flex flex-col md:flex-row pb-6">
      <div className="w-full md:w-1/2 text-zinc-400 px-6 border-r-[1px] border-r-zinc-800 flex items-center">
        <div className="py-6">
          <h2 className="font-semibold mb-1">Hello! I'm Rinki Mandal</h2>
          <p className="text-base leading-6 ">
           {/* A passionate and creative frontend web developer with a fresh perspective on the digital world. I thrive on turning ideas into captivating user experiences, and I'm dedicated to staying on the cutting edge of web development. */}

           A frontend developer with a passion for crafting exceptional web experiences. I believe that the digital world should be as beautiful as it is functional, and I'm dedicated to making that vision a reality.



          </p>
        </div>
      </div>
      <div className="w-full md:w-1/2 p-6">
        <ul className="flex md:flex-col  gap-1">
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Age:</span>
            21
          </li>
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Job:</span>
            Available
          </li>
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Freelance:</span>
            Available
          </li>
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Address:</span>
            Kolkata, West Bengol
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutMe;
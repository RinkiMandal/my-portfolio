import React from "react";
// import {
//   workImgOne,
//   workImgTwo,
//   workImgThree,
//   workImgFour,
//   workImgFive,
//   workImgSix,
//   workImgSeven,
//   workImgEight,
// } from "../../assets";
import {
  google,
  movix,
  myblog,
  todo,
} from '../../assets'
import Title from "../home/Title";
import ProjectsCard from "./ProjectsCard";


const Projects = () => {
  return (
    <div>
      <Title title="Recent" subTitle="Projects" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 lgl:gap-10">
        <div className="px-6">
          <ProjectsCard
            title="Blog Website"
            category="Website"
            image={myblog}
          />
          <ProjectsCard
            title="ToDo List"
            category="list"
            image={todo}
          />
        </div>
        <div className="px-6">
          <ProjectsCard
            title="Google Clone"
            category="Clone"
            image={google}
          />
          <ProjectsCard
            title="Movix"
            category="Application"
            image={movix}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
import React from "react";
import ResumeTitle from "./ResumeTitle";
import { MdWork } from "react-icons/md";
import { GiGraduateCap } from "react-icons/gi";
import ResumeCard from "./ResumeCard";
import {
  d2h,
  internpe
} from '../../assets'


const Education = () => {
  return (
    <div className="w-full grid grid-cols-2 px-6">

{/* 
<div className="">
<div className="flex">
<img className="rounded-xl shadow-lg shadow-orange-800 border-4 border-white"
 src={d2h} />
 
<h1 className="p-8 text-3xl text-yellow-500 opacity-50"> D2D Founding Team</h1>

</div>

<div className="flex">
<img className="w-60 m-11 rounded-xl border-4 border-white shadow-lg shadow-orange-800" 
src={internpe} />
<h1 className="pt-44 text-3xl text-yellow-500 opacity-50"> Internpe </h1>
</div>

</div> */}



<div className="left">
  <img src={d2h} />
  <h1 className=" ml-6 mt-4 text-2xl text-orange-600 opacity-50">D2D Founding Team</h1>
</div>
<div className="right ">
<img className="w-40 ml-24 " src={internpe} />
<h1 className="ml-32 mt-4 text-2xl text-orange-600 opacity-50">Internpe</h1>

</div>


    </div>
  );
};

export default Education;
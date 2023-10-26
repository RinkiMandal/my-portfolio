// import React from "react";

// const FunFactCard = ({ icon, des }) => {
//   return (
//     <div className="w-full">
//       <div className="w-full flex flex-col items-center gap-2 py-8 border-r-[1px] border-r-zinc-800 border-b-[1px] border-b-zinc-800">
//         <span className="text-2xl text-designColor">{icon}</span>
//         <p className="text-base w-32 h-10 text-center text-gray-300 hover:text-white duration-200">
//           {des}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default FunFactCard;




import React from 'react'

const FunFactCard = ({ icons, title, subTitle }) => {
  return (
    <div className="py-8 px-6 flex flex-col items-center gap-2 borderRight borderBottom">
    <span className="text-4xl text-designColor mb-2">{icons}</span>
    <h2 className="font-titleFont text-lg font-semibold">{title}</h2>
    <p className="text-base text-center text-zinc-400 px-6">{subTitle}</p>
  </div>
  )
}

export default FunFactCard
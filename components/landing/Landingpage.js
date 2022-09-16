import Image from "next/image";
import { LANDINGPAGE } from "./constant/Ref";

import { ArrowIcon,Block } from "../../assets/Landing";
const Landingpage = () => {
   const {title,title2,description,button1,button2} = LANDINGPAGE;

  return (
    <div 
      className="w-full h-full  bg-black flex flex-col justify-between    "
    >
      <div className="grid    md:grid-cols-2  max-w-[1500px] m-auto text-white sm:">
        <div className="   mt-32 flex  flex-col justify-center md:mt-48   w-full px-4 py-8">
          <p className="  font-Play font-normal text-[37px]	 nav:text-[64px]">{title}</p>

          <div className="text-[37px] font-Play flex font-normal nav:text-[64px]	">
            <Image className="flex m" src={ArrowIcon} alt="/"  /> <p className="ml-3 flex">{title2}</p>
          </div>

          <p className=" text-[14px] font-Rock pt-10 text-[#D6E4FF]  nav:text-[18px] ">
           {description}
          </p>
          <div className="  hidden  md:flex mt-20   space-x-3   md:space-x-4   nav:space-x-8 ">
            <button className="w-[170px] h-[57px] font-semibold bg-[#FAFAFA] text-[#6258D6] font-sans  rounded-[20px]  ">
             {button1}
            </button>
            <button className="border-solid border-2  border-[#FAFAFA] bg-transparent  rounded-[20px] w-[170px] h-[57px] font-semibold font-sans text-[#FAFAFA] ">
            {button2}
            </button>
          </div>
          <div className="  mt-20   flex space-x-3   md:space-x-4   nav:space-x-8 md:hidden  ">
            <button className="border-solid border-2  border-[#FAFAFA] bg-transparent  rounded-[20px] w-[160px] h-[57px] font-semibold font-sans text-[#FAFAFA] ">
            {button2}
            </button>
            <button className="w-[160px] h-[57px] font-semibold text-[#FAFAFA] bg-[#6258D6] font-sans  rounded-[20px] ">
            {button1}
            </button>
          </div>    
        </div>
        <div className=" pt-32 m-auto  nav:pl-40">
         <Image  src={Block} alt="/" />
         </div>
      </div>
     
    </div>
  );
};

export default Landingpage;

import Image from "next/image";
import { Purpletickicon, Yellowtickicon, Redtickicon ,Yellowcard,Purplecard,Pinkcard } from "../../assets/Cards";
const Card = () => {
  return ( 
    <div className="">
    <div className="w-full h-full bg-black text-white pt-20">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-1  lg:grid-cols-3 max-w-[1300px] justify-items-center mx-auto  ">
       {/* 1rd card */}
       <div>
       <div className="relative w-20 left-[164px] top-[64px] "><Image src={Yellowcard} alt="/" /></div>
       <div  className="p-4 rounded-3xl  bg-[#0E0514] ">
       <div className="bg-fis font-Rale text-white px-8 rounded-3xl ">
          <p className="uppercase      text-[24px]  pt-7   ">Basic</p>
          <div className=" font-bold  text-center flex justify-center text-[36px] ">$17 <span className="text-xl flex mt-5">/month</span>
          </div>
         <div className="text-lg font-Rock text-[#8F98AA]">
            <div className="ml-1 flex space-x-2 "><Image src={Redtickicon} alt="/" /><p className="flex py-3">1000 transactions per month</p>
            </div>
            <div className="ml-1 flex space-x-2 "><Image src={Redtickicon} alt="/" /><p className="flex py-3">$1,000 max transactions <br/> volume per month</p>
            </div>
            <div className="ml-1 flex space-x-2 "><Image src={Redtickicon} alt="/" /><p className="flex py-3">10 max NFT listing</p>
            </div>
            <div className="ml-1 flex space-x-2 "><Image src={Redtickicon} alt="/" /> <p className="flex py-8"></p>
            </div>
            <div className="ml-1 flex space-x-2 "><Image src={Redtickicon} alt="/" /> <p className="flex py-8"></p>
            </div>
            <div className="ml-1 flex space-x-2 "><Image src={Redtickicon} alt="/" /> <p className="flex py-8"></p>
            </div>
            <div className="pt-10"></div>
           
          </div>
        </div>
        </div>
        </div>
           {/* 2rd card */}
          <div>
          <div className="relative w-20 left-[164px] top-[64px]  "><Image src={Purplecard} alt="/"/></div>
          <div className="p-4 rounded-3xl bg-[#0E0514] ">
           <div className="bg-sec   font-Rale text-white px-8 rounded-3xl ">
          <p className="uppercase     text-[24px] pt-7  ">Professional</p>
          <div className=" font-bold  text-center flex justify-center text-[36px] ">$47 <span className="text-xl flex mt-5">/month</span>
          </div>
         <div className="text-lg font-Rock">
            <div className="ml-1 flex space-x-2 "><Image src={Purpletickicon} alt="/"  /><p className="flex py-3">1000 transactions per month</p>
            </div>
            <div className="ml-1 flex space-x-2 "><Image src={Purpletickicon} alt="/" /><p className="flex py-3">$5,000 max transactions  <br/>volume per month</p>
            </div>
            <div className="ml-1 flex space-x-2 "><Image src={Purpletickicon} alt="/" /><p className="flex py-3">100 max NFT listing</p>
            </div>
            <div className="ml-1 flex space-x-2 "><Image src={Purpletickicon} alt="/" /> <p className="flex py-8"></p>
            </div>
            <div className="ml-1 flex space-x-2 "><Image src={Purpletickicon} alt="/" /> <p className="flex py-8"></p>
            </div>
            <div className="ml-1 flex space-x-2 "><Image src={Purpletickicon} alt="/" /> <p className="flex py-8"></p>
            </div>
            <div className="pt-10">

            </div>
          </div>
        </div>
        </div>
         </div>
         {/* 3rd card */}
         <div>
         <div className="relative w-20 left-[164px] top-[64px]  "><Image src={Pinkcard} alt="/"/></div>
          <div className="p-4 rounded-3xl   bg-[#0E0514]  ">
         <div className="bg-ase font-Rale text-white px-8  rounded-3xl ">
          <p className="uppercase   text-[24px]  pt-7   ">Expert</p>
          <div className=" font-bold  text-center flex justify-center text-[36px] ">$97 <span className="text-xl flex mt-5">/month</span>
          </div>
         <div className="text-lg font-Rock text-[#8F98AA]">
            <div className="ml-1 flex space-x-2 "><Image src={Yellowtickicon} alt="/" /><p className="flex py-3">1000 transactions per month</p>
            </div>
            <div className="ml-1 flex space-x-2 "><Image src={Yellowtickicon} alt="/" /><p className="flex py-3">$10,000 max transactions <br/>volume  per month</p>
            </div>
            <div className="ml-1 flex space-x-2 "><Image src={Yellowtickicon} alt="/" /><p className="flex py-3">500 max NFT listing</p>
            </div>
            <div className="ml-1 flex space-x-2 "><Image src={Yellowtickicon} alt="/" /> <p className="flex py-8"></p>
            </div>
            <div className="ml-1 flex space-x-2 "><Image src={Yellowtickicon} alt="/" /> <p className="flex py-8"></p>
            </div>
            <div className="ml-1 flex space-x-2 "><Image src={Yellowtickicon} alt="/" /> <p className="flex py-8"></p>
            </div>
            <div className="pt-10"></div>
          </div>
        </div>
        </div>
        </div>
      </div>
    </div>
    
  </div>
  );
};

export default Card;

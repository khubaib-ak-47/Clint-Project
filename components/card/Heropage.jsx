import Image from "next/image";
import {   Sprial,HeroNft} from "../../assets/Nftcard";


const Heropage = () => {
  return (
<>
  {/* <Image src={Sprial}/> */}
  <div  className="w-full h-auto  bg-black flex flex-col  text-white font-Raleway font-bold">
      <div className=" mt-20 justify-between max-w-[1300px] m-auto border-2 border-[#0F0B64] p-4 flex flex-col md:flex-row">
        <div className="flex flex-col w-full  md:items-start lg:w-[60%] px-2 ">
        <p className="   pb-10	text-[72px]">Create&#44; Sell and  Collect digital Items</p>
             <p className="  font-Rock pt-10  text-[36px] ">
           Create&#44; Sell and  Collect digital Items</p> </div>
        <div className="flex md:justify-center">
          <Image  src={HeroNft} alt="/" width={350}  height={480} layout="fixed" />
        </div>
      </div>
    </div>
    </>
  )
}

export default Heropage
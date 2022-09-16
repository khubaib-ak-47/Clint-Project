import {
  Bluearrow,
  Greenarrow,
  Pinkarrow,
  Skyblue,
  Redarrow,
  Purplearrow,
} from "../../assets/Arrows";
import Image from "next/image";

const Tokenvalue = () => {
  return (
    <div className="w-full bg-black  text-white  md:pt-32  ">
      <div className="max-w-[1540px] mx-auto ">
        <div className="grid  px-6 text-[18px] font-Raleway lg:text-[24px]  md:grid-cols-4   ">
          <div className=" py-8 flex     ">
            <Image src={Bluearrow} alt="/" width={60} height={35} layout="fixed" />
            <p className=" ml-1"> Core Team Allocation:12.5% </p>
          </div>
          <div className=" py-8 flex ">
            <Image src={Redarrow} alt="/" width={60} height={35} layout="fixed" />
            <p className="ml-1">Liquidity Allocation:20% </p>
          </div>
          <div className="py-8 flex ">
            <Image src={Bluearrow} alt="/" width={60} height={35} layout="fixed" />
            <p className="ml-1">Marketing Allocation:15% </p>
          </div>
          <div className="py-8  flex">
            <Image src={Pinkarrow} alt="/" width={60} height={35} layout="fixed" />
            <p className="ml-1">Airdrop Allocation:10% </p>
          </div>
        </div>
        <div className="grid  text-[18px] font-Raleway lg:text-[24px] md:grid-cols-3  gap-1 px-6 ">
          <div className=" py-8 flex  ">
            <Image src={Greenarrow} alt="/" width={60} height={35} layout="fixed" />
            <p className="ml-1">Development Allocation:12.5% </p>
          </div>
          <div className=" py-8 flex ">
            <Image src={Skyblue} alt="/" width={60} height={35} layout="fixed" />
            <p className="ml-1">Investors & Partners Allocation:5% </p>
          </div>
          <div className="py-8 flex ">
            <Image src={Purplearrow} alt="/" width={60} height={35} layout="fixed" />
            <p className="ml-1">Public & Private Allocation:25% </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tokenvalue;

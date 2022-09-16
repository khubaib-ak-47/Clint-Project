import { Tokenomicscart } from "../../assets/Arrows";
import Image from "next/image";

const Tokendistribution = () => {
  return (
    <div className=" bg-black">
      <div className="container mx-auto ">
        <p className="text-white text-center font-Raleway text-[32px] font-[500px] md:pb-20 ">
          Token Distribution{" "}
        </p>
        <div className="flex justify-center  ">
          <Image
            src={Tokenomicscart}
            alt="/"
            width={1500}
            height={400}
            layout="fixed"
          />
        </div>
      </div>
    </div>
  );
};

export default Tokendistribution;
 
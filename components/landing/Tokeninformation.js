const Tokeninformation = () => {
  return (
    <div className="w-full py-40 bg-black">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center text-white font-Raleway ">
          <p className="text-white text-[32px] font-Raleway pb-36">
            Token Information{" "}
          </p>
          {/* <div className="grid  grid-cols-2  text-[10px] justify-items-center font-[500px] lg:grid-cols-3 lg:gap-10 lg:justify-items-center lg:text-[20px] lg:  ">
    <span className="bg-[#E72AA6] rounded-[25px] h-[50px] w-[185px] py-2  lg:w-[320px ] md:w-[300px]  "><p> Token Name <br/> Crystal Token </p> </span>
   <span className="bg-[4BDE51#]  rounded-[25px] h-[50px] w-[185px] py-2 lg:w-[320px]  md:w-[300px]  "><p> Token Symbol <br/>CRYST</p> </span>
   <span className="bg-[#C2E812]  rounded-[25px] h-[50px] w-[185px] py-2 lg:w-[319px]  md:w-[300px] "><p> Token Supply <br/>150,00000 </p> </span>
   <span className="bg-[#8E55D6] rounded-[25px] h-[50px] w-[185px] py-2  lg:w-[320px]  md:w-[300px]  "><p>Token Network<br/>Avalance Token </p>  </span>
   <span className="bg-[#34113F] mx-auto rounded-[25px] h-[60px]  py-2 w-80 col-span-2  lg:w-[300px] lg:col-span-1 "> <p>Contract Address<br/>ofurgfioy374897vqhyrgfyr4t </p> </span>
</div>   */}

          <div className="grid grid-cols-2 gap-5 px-3 justify-items-center lg:grid-cols-3 lg:gap-9">
            
              <div className="bg-[#E72AA6] rounded-lg h-[60px] w-[190px] py-2   lg:w-[320px] lg:h-[80px] lg:rounded-[25px] lg:text-[20px] ">
                <p>Token Name <br /> Crystal Token </p>
              </div>
              <div className="bg-[#4BDE51] rounded-lg h-[60px] w-[190px] py-2   lg:w-[320px] lg:h-[80px] lg:rounded-[25px] lg:text-[20px] ">
                <p>Token Symbol <br />CRYST </p>
              </div>
              <div className="bg-[#C2E812] rounded-lg h-[60px] w-[190px] py-2 mt-10  lg:w-[320px] lg:h-[80px] lg:rounded-[25px] lg:text-[20px] lg:mt-0">
                <p>Token Supply <br /> 150,00000 </p>
              </div>
              <div className="bg-[#8E55D6] rounded-lg h-[60px] w-[190px] py-2 mt-10  lg:w-[320px] lg:h-[80px] lg:rounded-[25px] lg:text-[20px] lg:mt-0 ">
                <p>Token Network <br /> Avalance Token </p>
              </div>
              <div className="bg-[#34113F] rounded-lg h-[65px] w-[375px]  py-3 col-span-2  mt-10 lg:w-[320px] lg:h-[80px] lg:rounded-[25px] lg:text-[20px] lg:col-span-1 lg:mt-0">
                <p>Contract Address <br />efuigw3741h143oui6 ri15698</p>
              </div>
            </div>
          </div>
        </div>
      </div>

  );
};

export default Tokeninformation;

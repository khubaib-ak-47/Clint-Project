import { HeartIcon ,ChevronLeftIcon,ChevronRightIcon } from '@heroicons/react/24/solid'
import { NFT } from "../../assets/Nftcard";
import Image from "next/image";
import { NFTCARD } from './NftData';


const NftCard = () => {
   
  const slideLeft = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideRight = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft + 500;
  };
  return (
    <div className='bg-black pt-40'>
    <h2 className='text-white font-Play text-[38px] font-bold p-4'>Trending Drops</h2>
        <div className='relative flex items-center group'>
        <ChevronLeftIcon
          onClick={slideLeft}
          className='bg-white left-0 w-16 rounded-full absolute opacity-50  cursor-pointer z-10 hidden group-hover:block'/>
        <div id={'slider' } className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
         {/* content */}

         <div className="flex space-x-10 w-full ">
         {NFTCARD.map(({ number,title,description,token,tokennumber},index)=>(
    <div class="relative  ">


    {/* here i use img tag not image  */}
          <img  alt="/"src="https://www.hyperui.dev/photos/man-6.jpeg" className="absolute object-cover  h-[100%] w-[100%]  rounded-3xl "/>
      <div class="relative">
      <div className=' text-black font-Rale  w-[460px] h-[616px] rounded-3xl'>
             <div className='flex justify-end'>
               <div className='bg-hed flex w-32 h-10 bg-heart  rounded-3xl justify-center mr-8 mt-4'>
                 <HeartIcon className='w-8'/>
                 <p className='ml-2 text-[28px] '>{number}</p>
             </div>
             </div>
             <div className='mt-96 text-white font-bold   '>
                 <div className='w-[404px] h-[134px] mx-auto rounded-3xl bg-wat font-Raleway'>
                 <div className='flex justify-between px-4'>
               <div className="mt-8  text-[28px]">
               <h1>{title}</h1>
               <p className='text-[18px]'>{description}</p>
                 </div>
                 <div className="mt-14 text-[28px]">
                 {tokennumber} {token}
                 </div>
                 </div>
                </div>
             </div>
             </div>
      </div>
    </div>
    ))}
    </div>
        </div>     
         <ChevronRightIcon onClick={slideRight}
         className='bg-white right-0  w-16 rounded-full absolute opacity-50  cursor-pointer z-10 hidden group-hover:block'/>
      </div>
  </div>
   
  );
};

export default NftCard;

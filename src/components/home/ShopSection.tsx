import React from "react";
import Image from "next/image";

import CartIcon from "@/public/carticon.svg";
import Mango from "@/public/Mano-PreWorkout.webp";

const ShopSection = () => {
  return (
    <section className=" bg-primary pt-5 relative z-[10] ">
      <div className="flex w-full justify-center">
        <h1 className="text-3xl font-organetto z-1 text-black  text-center font-extrabold pt-[50px] ">
          OUR SUPPS STACK
        </h1>
      </div>
      <div className="flex   w-full pb-[145px]   no-scrollbar px-[135px] gap-[30px] overflow-scroll mt-[70px] ">
        <div className="flex justify-center">
          <div className="w-[370px] lg:max-w-[300px] mob:max-w-[170px]">
            <div className="group">
              <div className="w-[370px] lg:w-full lg:max-w-[300px] mob:max-w-[170px] mob:max-h-[170px] rounded-[40px] mob:rounded-[16px] h-[370px] tab:h-[40%] bg-[#B2B2B2] flex items-center justify-center relative group-hover:border-[#BBFF2E] group-hover:border-[4px] group-hover:bg-[#F3F3F3] transition-all duration-400 group-hover:shadow-xl group-hover:cursor-pointer">
                <div className="h-full w-full relative bg-transparent">
                  <Image
                    alt="product"
                    width={371}
                    height={307.5}
                    className="w-full h-auto object-contain rounded-[40px]"
                    src={Mango}
                  />
                </div>
                <div className="absolute py-[10px] px-[12px] mob:py-[6px] mob:px-[6px] bg-[#838489] rounded-[20px] mob:rounded-b-[10px] mob:rounded-tr-[16px] rounded-tl-none rounded-tr-[40px] top-0 right-0">
                  <div className="flex items-center text-center justify-center gap-[3px]">
                    <p className="font-poppins text-[24px] mob:text-[14px] font-semibold mob:font-medium leading-6 mob:leading-4 text-white">
                      25
                    </p>
                  </div>
                  <p className="font-poppins text-[14px] mob:text-[10px] font-normal leading-6 mob:leading-4 text-white">
                    Servings
                  </p>
                </div>
                <div className="bg-lightgreen h-[50px] px-[17px] rounded-[20px] mob:max-w-[68px] mob:max-h-[42px] flex items-center justify-center absolute bottom-[16px] mob:bottom-2 left-[50%] z-[100] -translate-x-[50%] mob:translate-x-[17%]">
                  <span className="text-[24px] font-normal font-poppins">
                    +
                  </span>
                  <Image alt="cartIcon" src={CartIcon} />
                </div>
              </div>
            </div>
            <div className="mt-[15px]">
              <div className="flex items-start justify-between">
                <p className="font-poppins text-black text-[22px] mob:text-[14px] font-medium">
                  Hyper Drive Preworkout
                </p>
                <p className="font-poppins text-black text-[24px] mob:text-[16px] font-semibold leading-6 shrink-0">
                  $44.95
                </p>
              </div>
              <div className="border-[#FAA41F] gap-[6px] flex items-center py-[2px] border-2 w-fit px-[10px] rounded-[20px] mt-[10px]">
                <div className="h-4 w-4 rounded-full bg-custom-gradient"></div>
                <p className="font-poppins text-[18px] mob:text-[11px] font-normal leading-6 mob:leading-[11px] text-[#808186] mt-[3px]">
                  Mango
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopSection;

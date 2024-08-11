import Image from "next/image";

import Image1 from "@/public/lab.webp";
import Image2 from "@/public/gmp.webp";
import Image3 from "@/public/fda.webp";
import Image4 from "@/public/toprightgreen.webp";
import Image5 from "@/public/bottomleftgreen.webp";

const InfoCards = () => {
  return (
    <div className="my-32">
      <h1 className="text-center font-extrabold text-3xl leading-10 text-black font-organetto">
        PROVEN. POWERFUL. PURE.
      </h1>
      <div className="flex justify-center mob:justify-start mob:overflow-x-auto no-scrollbar gap-8 mt-16 mob:px-5">
        <div className="bg-grey mob:text-[16px] mob:min-w-[335px] rounded-[35px] w-full max-w-[370px]  h-[370px] flex justify-center items-center relative mob:mb-6">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Image
                alt="Third Party Tested"
                width={140}
                height={140}
                src={Image1}
              />
            </div>
            <h2 className="tracking-[-5%] text-black text-center text-[18px] mob:text-base leading-[40px] uppercase font-organetto font-normal">
              THIRD PARTY TESTED
            </h2>
            <p className="flex justify-center text-center text-black text-[18px] mob:text-base font-normal leading-[24px] font-poppins">
              <span className="max-w-[272px]">
                Rigorously third party tested to ensure all compliance and
                regulations are met.
              </span>
            </p>
          </div>
          <Image
            alt="Top Right Green"
            width={72}
            height={58}
            className="absolute top-0 right-0"
            src={Image4}
          />
          <Image
            alt="Bottom Left Green"
            width={72}
            height={58}
            className="absolute bottom-0 left-0"
            src={Image5}
          />
        </div>
        <div className="bg-grey mob:text-[16px] mob:min-w-[335px] rounded-[35px] w-full max-w-[370px] xl:max-w-[300px] h-[370px] flex justify-center items-center relative mob:mb-6">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Image
                alt="GMP Certified"
                width={140}
                height={140}
                src={Image2}
              />
            </div>
            <h2 className="tracking-[-5%] text-[#000000] text-center text-[18px] leading-[40px] mob:text-[16px] uppercase font-organetto font-bold">
              GMP CERTIFIED
            </h2>
            <p className="flex justify-center text-center text-[#000000] text-[18px] mob:text-[16px] font-normal leading-[24px] font-poppins">
              <span className="max-w-[272px]">
                Purity at every step of the way adhering to only the highest
                quality standards.
              </span>
            </p>
          </div>
          <Image
            alt="Top Right Green"
            width={72}
            height={58}
            className="absolute top-0 right-0"
            src={Image4}
          />
          <Image
            alt="Bottom Left Green"
            width={72}
            height={58}
            className="absolute bottom-0 left-0"
            src={Image5}
          />
        </div>
        <div className="bg-grey mob:-px-2 mob:min-w-[335px] rounded-[35px] w-full max-w-[370px] xl:max-w-[300px] h-[370px] flex justify-center items-center relative">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Image
                alt="FDA Registered"
                width={140}
                height={140}
                src={Image3}
              />
            </div>
            <h2 className="tracking-[-5%] text-[#000000] text-center text-[18px] leading-[40px] mob:text-base uppercase font-organetto font-bold">
              FDA REGISTERED
            </h2>
            <p className="flex justify-center text-center text-[#000000] text-[18px] mob:text-base font-normal leading-[24px] font-poppins">
              <span className="max-w-[272px]">
                Rest easy knowing your supplements comply with FDA industry
                guidelines.
              </span>
            </p>
          </div>
          <Image
            alt="Top Right Green"
            width={72}
            height={58}
            className="absolute top-0 right-0"
            src={Image4}
          />
          <Image
            alt="Bottom Left Green"
            width={72}
            height={58}
            className="absolute bottom-0 left-0"
            src={Image5}
          />
        </div>
      </div>
    </div>
  );
};

export default InfoCards;

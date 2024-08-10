import { Button } from "@/src/ui/Button";
import Image from "next/image";
import Link from "next/link";

import Image1 from "@/public/Herosection.webp";
import Arrow from "@/public/arrow.svg";

const HeroSection = () => {
  return (
    <section className="flex  justify-center bg-black w-full overflow-hidden relative min-h-[1000px] mob:min-h-screen ">
      <div className="max-h-[1000px]  max-w-[1900px] w-full flex items-center text-primary rounded-br-[140px] relative mob:min-h-[810px]">
        <div className="h-full w-full flex  items-center justify-start relative z-30 mob:mt-[-274px] ">
          <div className="w-1/2  min-w-[515px]  mt-[22px]  flex justify-center items-center mob:min-h-[250px] mob:h-auto mob:my-10 mob:pl-4 mob:pr-2  mob:mb-[70%] mob:ml-[-68px]">
            <div>
              <h1 className="text-3xl text-primary uppercase mb-10 font-organetto  leading-10  font-extrabold mob:text-xl mob:mb-4 mob:leading-8 mob:mt-[0%] lg:mt-[0%]   ">
                FOCUS. <br /> PUMP. <br /> PERFORMANCE.
              </h1>
              <p className="text-primary mb-10 text-2xl font-poppins font-light leading-9 mob:mb-6 mob:text-xl mob:left-8">
                Premium supplements created <br className="hidden mob:block" />
                by PhDs. <br className="mob:hidden" />
                For those in pursuit of <br className="hidden mob:block " />
                hyper performance
              </p>
              <Link href="/shop">
                <Button
                  variant="default"
                  size="default"
                  className=" font-organetto font-normal min-h-[50px]  min-w-[160px]"
                >
                  SHOP SUPPS
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex mob:contents  relative mt-4  bottom-0 w-1/2 h-full  z-50 mob:bottom-5 mob:min-h-[200px]">
            <Image
              alt="Hero image"
              width={705}
              height={756}
              className="h-[90%] 2xl:max-h-[805px]  w-auto  absolute  bottom-0 tab:mt-0 mob:w-[363px] mob:h-[389.6px]"
              src={Image1}
            />
          </div>
        </div>
        <div className="flex justify-center absolute left-0 z-50 bottom-[0] py-2 w-full bg-black border-b-2 border-t-2 border-gray">
          <div className="flex justify-center  w-full mob:px-3">
            <div className="flex max-w-[1250px]  w-full items-center justify-center gap-10 my-4 mob:block ">
              <div className="w-full">
                <h2 className="font-normal tracking-[-5%] font-organetto text-lightgreen  text-2xl  leading-8 uppercase  mb-2 mob:text-xl ">
                  <span className="xl:max-w-[385px]">
                    SUBSCRIBE FOR PRIORITY ACCESS:
                  </span>
                </h2>
                <p className="font-normal text-[16px] mob:text-sm font-poppins leading-6 text-[#FFFFFF]">
                  <span className="">
                    Members have priority access to first drops and inventory
                    restocks!
                  </span>
                </p>
              </div>
              <form className=" relative w-full max-w-[573px] mob:block mob:mt-2 mob:max-w-[335px] ">
                <input
                  required
                  placeholder="Enter your email"
                  className="w-full  border border-primary  px-[26px] bg-black text-primary font-poppins  font-normal rounded-[30px] h-[50px] outline-none mob:w-full lg:w-[500px] lg:max-w-390px] mob:h-[50px] mob:mb-3 "
                  type="email"
                />
                <button type="submit">
                  <Image
                    alt="arrowIcon"
                    width={46}
                    height={46}
                    className="absolute  right-[2px] top-[2px] mob:h-[38px] mob-top-[5px] "
                    src={Arrow}
                  />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

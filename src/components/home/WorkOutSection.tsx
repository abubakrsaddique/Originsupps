"use client";

import Image from "next/image";
import Link from "next/link";
import { useAtom } from "jotai";

import { activeTabAtom, imageColorAtom } from "@/src/app/store";
import Image1 from "@/public/Pre-Workout.webp";
import Image7 from "@/public/Pre-Workout2.webp";
import Image2 from "@/public/Rectangle1.png";
import Image3 from "@/public/Rectangle2.png";
import Image4 from "@/public/Vector1.webp";
import Image5 from "@/public/Vector2.webp";
import Image6 from "@/public/loading.svg";
import BenifitList from "../workoutcontent/BenifitList";
import PreWorkOut from "../workoutcontent/PreWorkOut";

const WorkOutSection = () => {
  const [activeTab, setActiveTab] = useAtom(activeTabAtom);
  const [imageColor, setImageColor] = useAtom(imageColorAtom);

  const tabHeaders = {
    preworkout: "Pre Workout",
    benefits: "Whey Protein",
  };

  const handleButtonClick = (tab: "preworkout" | "benefits") => {
    setActiveTab(tab);
    setImageColor({
      preworkout: tab === "preworkout" ? "rgb(196,255,46)" : "gray",
      benefits: tab === "benefits" ? "rgb(196,255,46)" : "gray",
    });
  };

  return (
    <section className="bg-black rounded-br-[140px] lg:min-h-[100vh] mob:rounded-br-[70px] pt-[10vh] w-full relative  min-h-[60vh] flex justify-center overflow-hidden ">
      <div className="max-w-[1300px]  w-full mob:w-[97%]">
        <div className="flex flex-col items-center w-full">
          <div className="relative z-30 w-full max-w-[1130px]">
            <div className="flex w-full justify-between mb-10">
              <Image
                alt="Rectangle1"
                width={585}
                height={7}
                className="w-[49%]"
                src={activeTab === "preworkout" ? Image2 : Image3}
              />
              <Image
                alt="Rectangle2"
                width={585}
                height={7}
                className="w-[49%]"
                src={activeTab === "benefits" ? Image2 : Image3}
              />
            </div>
            <div className="flex relative justify-between mob:px-0 z-10 tab:px-12">
              <button
                id="text-btn"
                disabled={activeTab === "preworkout"}
                onClick={() => handleButtonClick("preworkout")}
                className="relative text-primary text-left uppercase text-[18px] mob:text-sm font-bold font-organetto leading-6 mob:ml-8 "
              >
                Pre Workout
                <Image
                  alt="Pre Workout Icon"
                  width={53}
                  height={43}
                  className="absolute left-[-20px] -top-1 mob:top-3"
                  src={activeTab === "benefits" ? Image5 : Image4}
                />
              </button>
              <button
                id="text-btn"
                onClick={() => handleButtonClick("benefits")}
                className="relative text-primary text-left uppercase text-[18px] mob:text-sm font-bold font-organetto leading-6 mob:ml-8 "
              >
                WHEY PROTEIN
                <Image
                  alt="Whey Protein Icon"
                  width={53}
                  height={43}
                  className="absolute left-[-20px] -top-1 mob:top-3"
                  src={activeTab === "preworkout" ? Image5 : Image4}
                />
              </button>
            </div>
          </div>
        </div>

        <div className="rounded-br-[140px]  w-full flex justify-center">
          <div className="max-w-[90%]  tab:max-w-[90%] mob:max-w-[100%] tab:mt-[136px] mob:min-h-[50vh] pb-[60px] mob:pb-[5px] flex mob:block justify-center items-end w-full z-[1] relative">
            {/* Mobile Image */}
            <div className="w-ful relative mob:flex justify-center hidden mt-[170%] mb-[-55px] ">
              <Image
                alt="Pre Workout"
                width={489}
                height={683}
                className="cursor-pointer absolute w-[95%] bottom-[40px]  right-2 "
                src={activeTab === "preworkout" ? Image1 : Image7}
              />
            </div>

            <div
              className="w-[50%] mob:flex mob:flex-row relative flex justify-center mob:w-full"
              style={{ opacity: 1 }}
            >
              <div className="flex flex-col gap-6 justify-center mt-20 mob:w-[100%] mob:pb-10  mob:pr-0">
                <p className="text-primary font-normal mb-4 font-organetto text-base leading-6 uppercase mob:ml-7">
                  BENEFITS OF OUR{" "}
                  <span className="text-lightgreen">
                    {tabHeaders[activeTab]}:
                  </span>
                </p>
                <div className="  mob:pl-4  mob:relative mob:overflow-x-scroll no-scrollbar ">
                  {activeTab === "preworkout" ? (
                    <PreWorkOut imageSrc={Image6} />
                  ) : (
                    <BenifitList imageSrc={Image6} />
                  )}
                </div>
                <Link href="/shop">
                  <button className="rounded-[20px] mob:mt-0 mob:ml-[90px] bg-lightgreen mob:justify-center min-h-[50px] text-black text-base font-normal font-organetto flex items-center justify-center min-w-[160px] mt-[14px]">
                    SHOP
                  </button>
                </Link>
              </div>
            </div>
            <div className="w-[50%] mob:hidden  bottom-0 mt-[100px] max-w-[700px] relative flex flex-col items-center justify-center">
              <div className="w-[50%]  relative flex justify-center ">
                <Image
                  alt="Pre Workout"
                  width={489}
                  height={683}
                  className="cursor-pointer  bottom-[40px]  right-2 w-[100%] 2xl:max-w-[600px]"
                  src={activeTab === "preworkout" ? Image1 : Image7}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkOutSection;

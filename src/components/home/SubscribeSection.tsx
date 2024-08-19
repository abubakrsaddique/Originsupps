"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Arrow from "@/public/arrow.svg";
import LeftImage from "@/public/contact-bracket-left.svg";
import RightImage from "@/public/contact-bracket-right.svg";

gsap.registerPlugin(ScrollTrigger);

const SubscribeSection: React.FC = () => {
  useEffect(() => {
    // GSAP Animation For Text
    gsap.fromTo(
      ".text-element",
      { fontSize: "3rem", scale: 0.8, y: "-50%" },
      {
        fontSize: "5rem",
        scale: 1,
        y: "70%",
        scrollTrigger: {
          trigger: ".subscribe-section",
          start: "top 90%",
          end: "bottom top",
          scrub: true,
          toggleActions: "play reverse play reverse",
        },
      }
    );

    // GSAP Animation For Right Image
    gsap.fromTo(
      ".right-image",
      { scale: 0.8, x: "65%", y: "-33%" },
      {
        scale: 1,
        x: "95%",
        y: "40%",
        scrollTrigger: {
          trigger: ".subscribe-section",
          start: "top 90%",
          end: "bottom top",
          scrub: true,
          toggleActions: "play reverse play reverse",
        },
      }
    );

    // GSAP Animation For Left Image
    gsap.fromTo(
      ".left-image",
      { scale: 0.8, x: "-60%", y: "-33%" },
      {
        scale: 1,
        x: "-90%",
        y: "40%",
        scrollTrigger: {
          trigger: ".subscribe-section",
          start: "top 90%",
          end: "bottom top",
          scrub: true,
          toggleActions: "play reverse play reverse",
        },
      }
    );

    // GSAP Animation For Form
    gsap.fromTo(
      ".email-element",
      { opacity: 0, y: "100%" },
      {
        opacity: 1,
        y: "290%",
        scrollTrigger: {
          trigger: ".subscribe-section",
          start: "top 90%",
          end: "bottom top",
          scrub: true,
          toggleActions: "play reverse play reverse",
        },
      }
    );
  }, []);

  return (
    <div className="flex justify-center bg-black w-full overflow-x-hidden py-28 mob:py-32 subscribe-section">
      <section className="flex items-center mob:hidden tab:hidden justify-center mob:pt-0 pt-32 xl:max-w-[30%] mob:max-w-full">
        <div className="relative">
          <Image
            alt="RightBracket"
            src={RightImage}
            width={423}
            height={344}
            className="absolute right-image top-[-24%] mob:top-[4%] mob:left-[8%] tab:top-[-3%] left-[18%] tab:left-[34%]"
          />
          <Image
            alt="LeftBracket"
            src={LeftImage}
            width={426}
            height={346}
            className="absolute left-image top-[-18%] mob:top-[10%] mob:right-[8%] tab:top-[0%] right-[19%] tab:right-[35%]"
          />

          <div className="relative scale-[0.5] mob:w-full mob:mt-[10%]">
            <p className="text-primary uppercase block text-center text-3xl mob:text-[36px] mob:leading-[3rem] font-bold leading-[5rem] mob:font-poppins font-organetto text-element">
              SUBSCRIBE <br className="hidden mob:block" /> FOR THE <br />{" "}
              LATEST SCOOP
            </p>

            <form className="mt-[40px] mob:mt-2 relative email-element">
              <input
                type="email"
                required
                placeholder="Enter your email"
                className="w-full tab:w-full mob:w-full px-[26px] bg-primary text-white rounded-[38px] h-[50px] mob:h-[40px] outline-none border border-white"
              />
              <button type="submit">
                <Image
                  alt="arrowIcon"
                  src={Arrow}
                  width={46}
                  height={46}
                  className="absolute mob:h-[38px] right-[2px] top-[2px] mob:right-[-3px] mob:top-[1px]"
                />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Mobile + Tab Section */}
      <section className=" hidden mob:flex  tab:flex items-center justify-center mob:pt-0 pt-32 xl:max-w-[30%] mob:max-w-full">
        <div className="relative">
          <Image
            alt="RightBracket"
            src={RightImage}
            width={423}
            height={344}
            className="absolute top-[-30%] mob:top-[4%] mob:left-[8%] tab:top-[-3%] left-[40%] tab:left-[34%]"
          />
          <Image
            alt="LeftBracket"
            src={LeftImage}
            width={426}
            height={346}
            className="absolute top-[-20%] mob:top-[10%] mob:right-[8%] tab:top-[0%] right-[40%] tab:right-[35%] "
          />

          <div className="relative scale-[0.5] mob:w-full mob:mt-[10%]">
            <p className="text-primary uppercase block text-center text-5xl mob:text-[36px] mob:leading-[3rem] font-bold leading-[5rem] mob:font-poppins font-organetto">
              SUBSCRIBE <br className="hidden mob:block" /> FOR THE <br />{" "}
              LATEST SCOOP
            </p>

            <form className="mt-[40px] mob:mt-2 relative">
              <input
                type="email"
                required
                placeholder="Enter your email"
                className="w-full tab:w-full mob:w-full px-[26px] bg-primary text-white rounded-[38px] h-[50px] mob:h-[40px] outline-none border border-white"
              />
              <button type="submit">
                <Image
                  alt="arrowIcon"
                  src={Arrow}
                  width={46}
                  height={46}
                  className="absolute mob:h-[38px] right-[2px] top-[2px] mob:right-[-3px] mob:top-[1px]"
                />
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SubscribeSection;

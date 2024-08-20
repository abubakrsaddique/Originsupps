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
  // GSAP Animation

  useEffect(() => {
    gsap.to(".text-element", {
      scale: 1.5,
      scrollTrigger: {
        trigger: ".subscribe-section",
        start: "top 20%",
        end: "top 20%",
        scrub: true,
        toggleActions: "play reverse play reverse",
        // markers: true,
      },
    });

    gsap.to(".right-image", {
      scale: 1,
      x: "50%",
      y: "0%",
      scrollTrigger: {
        trigger: ".subscribe-section",
        start: "top 20%",
        end: "top 20%",
        scrub: true,
        toggleActions: "play reverse play reverse",
        // markers: true,
      },
    });

    gsap.to(".left-image", {
      scale: 1,
      x: "-50%",
      y: "10%",
      scrollTrigger: {
        trigger: ".subscribe-section",
        start: "top 20%",
        end: "top 20%",
        scrub: true,
        toggleActions: "play reverse play reverse",
        // markers: true,
      },
    });

    gsap.to(
      ".email-element",

      {
        scale: 1.5,
        opacity: 1,
        scrollTrigger: {
          trigger: ".subscribe-section",
          start: "top 20%",
          end: "top 20%",
          scrub: true,
          toggleActions: "play reverse play reverse",
          // markers: true,
        },
      }
    );
  }, []);

  return (
    <div className="flex justify-center bg-black w-full overflow-x-hidden py-28 mob:py-32 subscribe-section">
      <section className=" mob:hidden tab:hidden  flex items-center justify-center mob:pt-0 pt-32 xl:max-w-[30%] mob:max-w-full">
        <div className="relative">
          <Image
            alt="RightBracket"
            src={RightImage}
            width={423}
            height={344}
            className="absolute scale-[0.7] top-[-50%] mob:top-[4%] mob:left-[8%] tab:top-[-3%] left-[20%] tab:left-[34%] right-image"
          />
          <Image
            alt="LeftBracket"
            src={LeftImage}
            width={426}
            height={346}
            className="absolute scale-[0.7] top-[-50%] mob:top-[10%] mob:right-[8%] tab:top-[0%] right-[20%] tab:right-[35%] left-image"
          />

          <div className="relative scale-[0.7] mt-[-38px]   mob:w-full mob:mt-[10%]">
            <p className="text-primary scale-[0.5] uppercase block text-center text-3xl mob:text-[36px] mob:leading-[3rem] font-bold leading-[5rem] mob:font-poppins font-organetto text-element">
              SUBSCRIBE <br className="hidden mob:block" /> FOR THE <br />{" "}
              LATEST SCOOP
            </p>

            <form className="mt-[40px]  scale-[0.5] mob:mt-2 relative email-element">
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

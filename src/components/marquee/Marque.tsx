import React from "react";
import Marquee from "react-fast-marquee";

const Marque = () => {
  return (
    <Marquee speed={50} gradient={false} pauseOnHover={true} direction="left">
      <div className="h-[65px] flex items-center bg-black border-b-2 border-t-2 border-gray-700">
        <div className="rfm-marquee-container">
          <div className="rfm-marquee">
            <div className="rfm-initial-child-container">
              {[...Array(10)].map((_, index) => (
                <div key={index} className="rfm-child">
                  <span className="mr-[6px] font-organetto text-lightgreen font-normal text-[24px]">
                    • Pump • focus • performance • Pump • focus
                  </span>
                </div>
              ))}
            </div>
            <div className="rfm-marquee">
              {[...Array(10)].map((_, index) => (
                <div key={index} className="rfm-child">
                  <span className="mr-[6px] font-organetto text-[#C0FF2E] font-normal text-[24px]">
                    • Pump • focus • performance • Pump • focus
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Marquee>
  );
};

export default Marque;

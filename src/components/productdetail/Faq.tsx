"use client";

import { useAtom } from "jotai";
import { faqAtom } from "@/src/app/store";
import Image from "next/image";

import AddButton from "@/public/AddButton.svg";
import MinusButton from "@/public/MinusButton.svg";

const FAQSection = () => {
  const faqItems = [
    {
      question: "What sets ORIGIN supplements apart from others on the market?",
      answer:
        "Our supplements are formulated using only premium-quality ingredients sourced from reputable suppliers. We prioritize scientific research and efficacy to ensure our products deliver real results.",
    },
    {
      question: "Are your supplements safe and regulated?",
      answer:
        "Yes, safety and regulatory compliance are among our top priorities. Our supplements are manufactured in FDA-registered facilities that adhere to Good Manufacturing Practices (GMP). We conduct rigorous testing throughout production to ensure purity, potency, and safety. Furthermore, our products are third-party tested to verify their quality and effectiveness.",
    },
    {
      question: "Do you offer international shipping?",
      answer:
        "We do not offer international shipping at this time. However, ORIGIN currently ships to all 50 US states. Please refer to our Shipping & Delivery page for more information about shipping options and policies.",
    },
  ];

  const [expandedIndex, setExpandedIndex] = useAtom(faqAtom);

  const toggleFAQ = (index: number) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="bg-lightgray flex gap-[60px] w-full flex-col items-center justify-center rounded-bl-[140px] mob:rounded-bl-[70px] py-24 mob:py-14">
      <h1 className="font-organetto text-black text-[32px] mob:text-[24px] font-extrabold leading-10 mob:leading-4 uppercase">
        FAQ
      </h1>
      <div className="max-w-[970px] lg:max-w-[930px] tab:px-10 mob:px-0 w-full flex flex-col gap-[8px]">
        {faqItems.map((faq, index) => (
          <div
            key={index}
            className="border shadow bg-primary rounded-[42px] mob:rounded-[30px] py-6 pl-2 mob:mx-3"
          >
            <button
              className="flex w-full items-center mob:items-start justify-between text-left rounded-[42px] bg-primary px-[25px] mob:pl-[15px] mob:pr-[18px] text-black text-[18px] mob:text-[16px] font-semibold mob:font-semibold leading-7 mob:leading-6"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <div className="mob:pl-2 pl-6">
                <Image
                  src={expandedIndex === index ? MinusButton : AddButton}
                  alt={expandedIndex === index ? "Collapse" : "Expand"}
                  width={40}
                  height={40}
                />
              </div>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                expandedIndex === index ? "max-h-[1000px]" : "max-h-0"
              }`}
            >
              <div className="px-[25px] mob:px-[15px] text-[#838489] font-normal leading-6 mob:leading-5 pb-2 text-[16px] mob:text-[14px] max-w-[90%]">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;

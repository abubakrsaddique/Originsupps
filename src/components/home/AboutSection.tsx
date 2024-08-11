import Image from "next/image";

import Loading from "@/public/loading.svg";
import Image1 from "@/public/About-Section.webp";

const AboutSection = () => {
  return (
    <div className="relative flex items-center h-screen">
      <Image
        alt="backgroundImg"
        src={Image1}
        layout="fill"
        objectFit="cover"
        quality={75}
        className="absolute top-0 z-0 "
      />
      <section className="w-full  z-50 mob:px-5">
        <div className="h-full flex flex-col items-center justify-center gap-[67px]">
          <p className="text-center uppercase  text-[18px] mob:text-base  text-primary font-organetto font-medium opacity-100">
            At Origin, we prioritize creating products we use ourselves, <br />
            products that deliver real results, and products we are <br />
            proud to share with you.
            <span>focused on the creator economy.</span>
          </p>
          <Image
            alt="LogoCircle"
            loading="lazy"
            width="28"
            height="25"
            decoding="async"
            className="animate-spin duration-500 h-[60px] w-[60px] transform opacity-100"
            style={{ transform: "rotate(139.428deg)" }}
            src={Loading}
          />
          <p
            className="text-base  text-center font-poppins text-primary leading-6 font-normal"
            style={{ opacity: 1 }}
          >
            We remember our own Origin story, the day we started, the decades in
            <br className="mob:hidden" />
            the gym, and we know what you want because it's what we want. We
            <br className="mob:hidden" />
            understand your needs because they're our needs too.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;

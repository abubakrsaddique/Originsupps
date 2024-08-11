import Image from "next/image";

interface PreWorkOut {
  heading: string;
  description: string;
}

interface PreWorkOutProps {
  imageSrc: string;
}

const PreWorkOut: React.FC<PreWorkOutProps> = ({ imageSrc }) => {
  const features = [
    {
      heading: "Scientifically backed ingredients",
      description:
        "meticulously crafted to deliver a smooth energy, focus, and muscle fullness. Prime your body and mind for maximum results with the only stack you’ll ever need.",
    },
    {
      heading: "Push past fatigue",
      description:
        "and improve endurance throughout even the most demanding of workouts with our proprietary performance blend.",
    },
    {
      heading: "Capture muscle ripping pumps",
      description:
        "and supercharge your working muscle groups like never before with key ingredients formulated for maximum blood flow and cellular hydration.",
    },
    {
      heading: "Enhanced absorption of key nutrients",
      description:
        "with our bioavailability matrix blend engineered to maximize the performance enhancing benefits of our world-class formula.",
    },
  ];
  return (
    <div className="flex flex-col gap-4 mob:flex mob:flex-row">
      {features.map((feature, index) => (
        <div
          key={index}
          className="gap-4 flex items-start mob:block mob:min-w-[320px]"
        >
          <Image
            alt="icon"
            width={28}
            height={25}
            className="mt-[5px]"
            src={imageSrc}
          />
          <p className="relative w-fit text-gray text-sm font-medium leading-6 font-poppins">
            <span className="text-primary">{feature.heading}</span>{" "}
            {feature.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default PreWorkOut;

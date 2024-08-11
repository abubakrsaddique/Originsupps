import Image from "next/image";

interface Benefit {
  heading: string;
  description: string;
}

interface BenefitsListProps {
  imageSrc: string;
}

const benefits = [
  {
    heading: "Offers a highly refined",
    description:
      "and easily digestible protein source, ideal for promoting muscle growth and recovery while minimizing digestive discomfort.",
  },
  {
    heading: "Provides enhanced muscle protein",
    description:
      "synthesis, which can lead to greater muscle growth, improved muscle recovery, and potentially better long-term muscle maintenance, especially in combination with resistance training.",
  },
  {
    heading: "Offers a heart-healthy protein",
    description:
      "source that supports muscle development and recovery without contributing to cholesterol levels or increasing the risk of cardiovascular issues.",
  },
  {
    heading: "Provides all the advantages",
    description:
      "of whey protein, such as muscle growth and recovery, without causing digestive discomfort for individuals who are lactose intolerant, making it suitable for a wider range of dietary needs.",
  },
];

const BenefitsList: React.FC<BenefitsListProps> = ({ imageSrc }) => {
  return (
    <div className="flex flex-col gap-4 mob:flex mob:flex-row">
      {benefits.map((benefit, index) => (
        <div
          key={index}
          className="gap-4 flex items-start mob:block mob:min-w-[320px]"
        >
          <Image
            alt="icon"
            loading="lazy"
            width={28}
            height={25}
            className="mt-[5px]"
            src={imageSrc}
          />
          <p className="relative w-fit text-gray text-sm font-medium leading-6 font-poppins">
            <span className="text-primary">{benefit.heading}</span>{" "}
            {benefit.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default BenefitsList;

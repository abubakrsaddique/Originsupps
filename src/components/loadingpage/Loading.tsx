import Image from "next/image";
import Image1 from "@/public/loading.svg";

const LoadingPage = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-black">
      <Image
        alt="LogoCircle"
        loading="lazy"
        width={60}
        height={60}
        className="animate-spin-smooth "
        src={Image1}
      />
    </div>
  );
};
export default LoadingPage;

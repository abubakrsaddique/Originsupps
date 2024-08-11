import AboutSection from "../components/home/AboutSection";
import HeroSection from "../components/home/HeroSection";
import InfoCards from "../components/home/InfoCards";
import ShopSection from "../components/home/ShopSection";
import SubscribeSection from "../components/home/SubscribeSection";
import WorkOutSection from "../components/home/WorkOutSection";
import Marque from "../components/marquee/Marque";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ShopSection />
      <Marque />
      <AboutSection />
      <Marque />
      <WorkOutSection />
      <InfoCards />
      <SubscribeSection />
    </>
  );
}

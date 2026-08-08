import HeroSection from "./section/HeroSection";
import ServicesSection from "./section/ServicesSection";
import StatsSection from "./section/StatsSection";
import WhyChoose from "./section/WhyChoose";
import KeyFeatures from "./section/KeyFeatures";

const Home = () => {
  return (
    <div>
      <HeroSection/>
      <StatsSection/>
      <WhyChoose/>
      <ServicesSection/>
      <KeyFeatures/>
    </div>
  );
};

export default Home;
import HeroSection from "./section/HeroSection";
import ServicesSection from "./section/ServicesSection";
import StatsSection from "./section/StatsSection";
import WhyChoose from "./section/WhyChoose";
import KeyFeatures from "./section/KeyFeatures";
import TechnologySection from "./section/TechnologySection";

const Home = () => {
  return (
    <div>
      <HeroSection/>
      <StatsSection/>
      <ServicesSection/>
      <WhyChoose/>
      <TechnologySection/>
      <KeyFeatures/>
    </div>
  );
};

export default Home;
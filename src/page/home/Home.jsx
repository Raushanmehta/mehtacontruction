import HeroSection from "./section/hero-section/HeroSection";
import ServicesSection from "./section/service-section/ServicesSection";
import StatsSection from "./section/StatsSection";
import WhyChoose from "./section/WhyChoose";
import KeyFeatures from "./section/keyfeature-section/KeyFeatures";
import TechnologySection from "./section/technology-use-section/TechnologySection";
import ProjectsSection from "./section/project-section/ProjectsSection";

const Home = () => {
  return (
    <div>
      <HeroSection/>
      <StatsSection/>
      <ServicesSection/>
      <WhyChoose/>
      <ProjectsSection/>
      <TechnologySection/>
      <KeyFeatures/>
    </div>
  );
};

export default Home;
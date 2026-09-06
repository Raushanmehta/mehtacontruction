import HeroSection from "./section/hero-section/HeroSection";
import ServicesSection from "./section/service-section/ServicesSection";

import KeyFeatures from "./section/keyfeature-section/KeyFeatures";
import TechnologySection from "./section/technology-use-section/TechnologySection";
import ProjectsSection from "./section/project-section/ProjectsSection";
import WhyChooseUsSection from "./section/why-choose-us/WhyChooseUsSection";

export default function Home() {
  return (
    <div>
      <HeroSection/>
      {/* <StatsSection/> */}
      <ServicesSection/>
      <WhyChooseUsSection/>
      <ProjectsSection/>
      <TechnologySection/>
      <KeyFeatures/>
    </div>
  );
};


import Hero from "../components/Hero";
import { aboutHeroConfig } from "../config/heroConfig";

const AboutUs = () => {
  return (
    <Hero
      page={aboutHeroConfig.page}
      title={aboutHeroConfig.title}
      description={aboutHeroConfig.description}
      desktopBackground={aboutHeroConfig.desktopBackground}
      tabletBackground={aboutHeroConfig.tabletBackground}
      mobileBackground={aboutHeroConfig.mobileBackground}
    />
  );
};

export default AboutUs;

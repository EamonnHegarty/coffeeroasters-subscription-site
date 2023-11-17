import Hero from "../components/Hero";
import { planHeroConfig } from "../config/heroConfig";

const CreateYourPlan = () => {
  return (
    <Hero
      page={planHeroConfig.page}
      title={planHeroConfig.title}
      description={planHeroConfig.description}
      desktopBackground={planHeroConfig.desktopBackground}
      tabletBackground={planHeroConfig.tabletBackground}
      mobileBackground={planHeroConfig.mobileBackground}
    />
  );
};

export default CreateYourPlan;

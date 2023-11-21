import Hero from "../components/Hero";
import { planHeroConfig } from "../config/heroConfig";
import withScrollToTop from "./withScrollToTop";

const CreateYourPlan = withScrollToTop(() => {
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
});

export default CreateYourPlan;

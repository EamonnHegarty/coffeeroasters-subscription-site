import { Page } from "../enums/Page";
import HomeHeroDesktop from "../assets/home/desktop/image-hero-coffeepress.jpg";
import HomeHeroTablet from "../assets/home/tablet/image-hero-coffeepress.jpg";
import HomeHeroMobile from "../assets/home/mobile/image-hero-coffeepress.jpg";
import AboutHeroDesktop from "../assets/about/desktop/image-hero-whitecup.jpg";
import AboutHeroTablet from "../assets/about/tablet/image-hero-whitecup.jpg";
import AboutHeroMobile from "../assets/about/mobile/image-hero-whitecup.jpg";
import PlanHeroDesktop from "../assets/plan/desktop/image-hero-blackcup.jpg";
import PlanHeroTablet from "../assets/plan/tablet/image-hero-blackcup.jpg";
import PlanHeroMobile from "../assets/plan/mobile/image-hero-blackcup.jpg";

export const homeHeroConfig = {
  page: Page.HOME,
  title: "Great coffee\nmade simple.",
  description:
    "Start your mornings with the worlds best coffees. Try our expertly curated artisan coffees from our best roasters delivered directly to your door, at your schedule.",
  desktopBackground: HomeHeroDesktop,
  tabletBackground: HomeHeroTablet,
  mobileBackground: HomeHeroMobile,
};

export const aboutHeroConfig = {
  page: Page.ABOUT_US,
  title: "About Us",
  description:
    "Coffeeroasters began its journey of exotic discovery in 1999, highlighting stories of coffee from around the world. We have since been dedicated to bring the perfect cup - from bean to brew - in every shipment.",
  desktopBackground: AboutHeroDesktop,
  tabletBackground: AboutHeroTablet,
  mobileBackground: AboutHeroMobile,
};

export const planHeroConfig = {
  page: Page.CREATE_YOUR_PLAN,
  title: "Create a plan",
  description:
    "Build a subscription plan that best fits your needs. We offer an assortment of the best artisan coffees from around the globe delivered fresh to your door.",
  desktopBackground: PlanHeroDesktop,
  tabletBackground: PlanHeroTablet,
  mobileBackground: PlanHeroMobile,
};

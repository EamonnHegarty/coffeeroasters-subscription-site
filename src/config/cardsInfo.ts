import Bean from "../assets/home/desktop/icon-coffee-bean.svg";
import Gift from "../assets/home/desktop/icon-gift.svg";
import Truck from "../assets/home/desktop/icon-truck.svg";
import Danche from "../assets/home/desktop/image-danche.png";
import GranEspresso from "../assets/home/desktop/image-gran-espresso.png";
import Piccollo from "../assets/home/desktop/image-piccollo.png";
import Planalto from "../assets/home/desktop/image-planalto.png";
import UK from "../assets/about/desktop/illustration-uk.svg";
import Australia from "../assets/about/desktop/illustration-australia.svg";
import Canada from "../assets/about/desktop/illustration-canada.svg";

export const COFFEE_INFO = [
  {
    id: 1,
    img: GranEspresso,
    title: "Gran Espresso",
    description:
      "Light and flavorful blend with cocoa and black pepper for an intense experience",
  },
  {
    id: 2,
    img: Planalto,
    title: "Planalto",
    description:
      "Brazilian dark roast with rich and velvety body, and hints of fruits and nuts",
  },
  {
    id: 3,
    img: Piccollo,
    title: "Piccollo",
    description:
      "Mild and smooth blend featuring notes of toasted almond and dried cherry",
  },
  {
    id: 4,
    img: Danche,
    title: "Danche",
    description:
      "Ethiopian hand-harvested blend densely packed with vibrant fruit notes",
  },
];

export const BENEFITS_INFO = [
  {
    id: 1,
    img: Bean,
    title: "Best quality",
    description:
      "Discover an endless variety of the world’s best artisan coffee from each of our roasters.",
  },
  {
    id: 2,
    img: Gift,
    title: "Exclusive benefits",
    description:
      "Special offers and swag when you subscribe, including 30% off your first shipment.",
  },
  {
    id: 3,
    img: Truck,
    title: "Free shipping",
    description:
      "We cover the cost and coffee is delivered fast. Peak freshness: guaranteed.",
  },
];

export const STEPS = [
  {
    id: 1,
    number: "01",
    title: "Pick your coffee",
    description:
      "Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out.",
  },
  {
    id: 2,
    number: "02",
    title: "Choose the frequency",
    description:
      "Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal.",
  },
  {
    id: 3,
    number: "03",
    title: "Receive and enjoy!",
    description:
      "We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting experience.",
  },
];

export const COUNTRIES = [
  {
    id: 1,
    img: UK,
    country: "United Kingdom",
    address: [
      { id: 1, text: "68 Asfordby Rd" },
      { id: 2, text: "Alcaston" },
      { id: 3, text: "SY6 1YA" },
      { id: 4, text: "+44 1241 918425" },
    ],
  },
  {
    id: 2,
    img: Canada,
    country: "Canada",
    address: [
      { id: 1, text: "1528  Eglinton Avenue" },
      { id: 2, text: "Toronto" },
      { id: 3, text: "Ontario M4P 1A6" },
      { id: 4, text: "+1 416 485 2997" },
    ],
  },
  {
    id: 3,
    img: Australia,
    country: "Australia",
    address: [
      { id: 1, text: "36 Swanston Street" },
      { id: 2, text: "Kewell" },
      { id: 3, text: "Victoria" },
      { id: 4, text: "+61 4 9928 3629" },
    ],
  },
];

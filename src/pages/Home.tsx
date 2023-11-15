import Hero from "../components/Hero";
import { ResponsiveInfoCard } from "../components/ResponsiveInfoCard";
import Danche from "../assets/home/desktop/image-danche.png";
import GranEspresso from "../assets/home/desktop/image-gran-espresso.png";
import Piccollo from "../assets/home/desktop/image-piccollo.png";
import Planalto from "../assets/home/desktop/image-planalto.png";
import { Grid, Typography } from "@mui/material";
import { WhyChooseUs } from "../components/WhyChooseUs";
import Bean from "../assets/home/desktop/icon-coffee-bean.svg";
import Gift from "../assets/home/desktop/icon-gift.svg";
import Truck from "../assets/home/desktop/icon-truck.svg";

const COFFEE_INFO = [
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

const BENEFITS_INFO = [
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

const Home = () => {
  return (
    <>
      <Hero />
      <Grid container mb={15}>
        <Grid item xs={12}>
          <Typography
            variant="h5"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            our collection
          </Typography>
        </Grid>
        {COFFEE_INFO.map((coffee) => (
          <Grid key={coffee.id} item xs={12} md={12} lg={3}>
            <ResponsiveInfoCard
              img={coffee.img}
              title={coffee.title}
              description={coffee.description}
              backgroundColor="transparent"
              textColor="primary.dark"
              isIcon={false}
            />
          </Grid>
        ))}
      </Grid>
      <WhyChooseUs />
      <Grid container>
        {BENEFITS_INFO.map((benefit) => (
          <Grid key={benefit.id} item xs={12} md={12} lg={4} px={4}>
            <ResponsiveInfoCard
              img={benefit.img}
              title={benefit.title}
              description={benefit.description}
              backgroundColor="primary.main"
              textColor="white"
              isIcon
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Home;

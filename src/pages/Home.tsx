import Hero from "../components/Hero";
import { CoffeeInfoCard } from "../components/CoffeeInfoCard";
import Danche from "../assets/home/desktop/image-danche.png";
import GranEspresso from "../assets/home/desktop/image-gran-espresso.png";
import Piccollo from "../assets/home/desktop/image-piccollo.png";
import Planalto from "../assets/home/desktop/image-planalto.png";
import { Grid, Typography } from "@mui/material";
import { WhyChooseUs } from "../components/WhyChooseUs";

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
          <Grid item xs={12} md={12} lg={3}>
            <CoffeeInfoCard
              img={coffee.img}
              title={coffee.title}
              description={coffee.description}
            />
          </Grid>
        ))}
      </Grid>
      <WhyChooseUs />
    </>
  );
};

export default Home;

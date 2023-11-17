import Hero from "../components/Hero";
import { CoffeeAndBenefitsCard } from "../components/CoffeeAndBenefitsCard";
import { Grid, Typography, useTheme } from "@mui/material";
import { WhyChooseUs } from "../components/WhyChooseUs";
import { BENEFITS_INFO, COFFEE_INFO, STEPS } from "./utils/cardsInfo";
import StepsCard from "../components/StepsCard";

const Home = () => {
  const theme = useTheme();

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
              [theme.breakpoints.down("md")]: {
                fontSize: "80px",
              },
              [theme.breakpoints.down("sm")]: {
                fontSize: "45px",
              },
            }}
          >
            our collection
          </Typography>
        </Grid>
        {COFFEE_INFO.map((coffee) => (
          <Grid key={coffee.id} item xs={12} md={12} lg={3}>
            <CoffeeAndBenefitsCard
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
          <Grid
            key={benefit.id}
            item
            xs={12}
            md={12}
            lg={4}
            px={4}
            sx={{
              position: "relative",
              zIndex: 10,
              transform: "translateY(-50%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <CoffeeAndBenefitsCard
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
      <Typography variant="h3" color="secondary.light" sx={{ p: 3 }}>
        How it works
      </Typography>
      <Grid container>
        {STEPS.map((step) => (
          <Grid item xs={12} sm={4} key={step.id}>
            <StepsCard
              id={step.id}
              number={step.number}
              title={step.title}
              description={step.description}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Home;

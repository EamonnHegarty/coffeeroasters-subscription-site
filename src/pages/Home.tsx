import Hero from "../components/Hero";
import { CoffeeAndBenefitsCard } from "../components/CoffeeAndBenefitsCard";
import { Grid, Typography, useTheme } from "@mui/material";
import { BENEFITS_INFO, COFFEE_INFO, STEPS } from "../config/cardsInfo";
import StepsCard from "../components/StepsCard";
import { homeHeroConfig } from "../config/heroConfig";

const Home = () => {
  const theme = useTheme();

  return (
    <>
      <Hero
        page={homeHeroConfig.page}
        title={homeHeroConfig.title}
        description={homeHeroConfig.description}
        desktopBackground={homeHeroConfig.desktopBackground}
        tabletBackground={homeHeroConfig.tabletBackground}
        mobileBackground={homeHeroConfig.mobileBackground}
      />
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
      <Grid
        container
        sx={{
          backgroundColor: "#2C343E",
          borderRadius: "10px",
          position: "relative",
          zIndex: 5,
        }}
        minHeight={475}
      >
        <Grid
          item
          xs={12}
          display="flex"
          flexDirection="column"
          alignItems="center"
          textAlign="center"
          pt={10}
          px={5}
        >
          <Typography variant="h3" color="white" mb={3}>
            Why choose us?
          </Typography>
          <Typography variant="body1" color="white" sx={{ maxWidth: 525 }}>
            A large part of our role is choosing which particular coffees will
            be featured in our range. This means working closely with the best
            coffee growers to give you a more impactful experience on every
            level.
          </Typography>
        </Grid>
      </Grid>
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

import { Box, Grid, Typography } from "@mui/material";
import Hero from "../components/Hero";
import { aboutHeroConfig } from "../config/heroConfig";
import Commitment from "../assets/about/desktop/image-commitment.jpg";
import withScrollToTop from "./withScrollToTop";
import Quality from "../assets/about/desktop/image-quality.jpg";
import { COUNTRIES } from "../config/cardsInfo";
import AddressCard from "../components/AddressCard";

const AboutUs = withScrollToTop(() => {
  return (
    <>
      <Hero
        page={aboutHeroConfig.page}
        title={aboutHeroConfig.title}
        description={aboutHeroConfig.description}
        desktopBackground={aboutHeroConfig.desktopBackground}
        tabletBackground={aboutHeroConfig.tabletBackground}
        mobileBackground={aboutHeroConfig.mobileBackground}
      />
      <Box>
        <Grid container alignItems="center" justifyContent="center" p={5}>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            lg={6}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              component="img"
              src={Commitment}
              sx={{
                width: "100%",
                height: "auto",
                maxHeight: {
                  lg: 500,
                  xl: 600,
                },
                maxWidth: {
                  xs: 400,
                  lg: 500,
                },
                borderRadius: "10px",
                mb: {
                  xs: 2,
                  md: 0,
                },
              }}
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            lg={6}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              px: {
                xs: 0,
                md: 7,
              },
            }}
          >
            <Typography
              variant="h3"
              sx={{
                textAlign: {
                  xs: "center",
                  lg: "left",
                },
                color: "primary.dark",
                mb: 3,
              }}
            >
              Our Commitment
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "primary.dark",
                textAlign: {
                  xs: "center",
                  lg: "left",
                },
              }}
            >
              We’re built on a simple mission and a commitment to doing good
              along the way. We want to make it easy for you to discover and
              brew the world’s best coffee at home. It all starts at the source.
              To locate the specific lots we want to purchase, we travel nearly
              60 days a year trying to understand the challenges and
              opportunities in each of these places. We collaborate with
              exceptional coffee growers and empower a global community of
              farmers through with well above fair-trade benchmarks. We also
              offer training, support farm community initiatives, and invest in
              coffee plant science. Curating only the finest blends, we roast
              each lot to highlight tasting profiles distinctive to their native
              growing region.
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          backgroundColor: "#2C343E",
          borderRadius: "10px",
          position: "relative",
          mt: 20,
        }}
      >
        <Grid container p={5}>
          <Grid
            item
            md={6}
            xs={12}
            sx={{
              order: { xs: 1, md: 2 },
              position: "relative",
              zIndex: 10,
              transform: "translateY(-35%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              maxWidth: {
                lg: 550,
              },
            }}
          >
            <Box
              component="img"
              src={Quality}
              sx={{
                maxHeight: 400,
                width: "100%",
                borderRadius: "10px",
                ml: {
                  md: 10,
                },
              }}
            />
          </Grid>
          <Grid
            item
            md={6}
            xs={12}
            sx={{
              order: { xs: 2, md: 1 },
              color: "white",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              mt: {
                xs: -10,
                md: 0,
              },
            }}
          >
            <Typography variant="h3" mb={5} textAlign="center">
              Uncompromising quality
            </Typography>
            <Typography
              variant="body1"
              color="white"
              textAlign="center"
              sx={{ maxWidth: 500 }}
            >
              Although we work with growers who pay close attention to all
              stages of harvest and processing, we employ, on our end, a
              rigorous quality control program to avoid over-roasting or baking
              the coffee dry. Every bag of coffee is tagged with a roast date
              and batch number. Our goal is to roast consistent, user-friendly
              coffee, so that brewing is easy and enjoyable.
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Typography variant="h3" color="secondary.light" sx={{ p: 3, mt: 7 }}>
        Our headquarters
      </Typography>
      <Grid container sx={{}}>
        {COUNTRIES.map((country) => (
          <Grid item xs={12} sm={4} key={country.id}>
            <AddressCard
              img={country.img}
              country={country.country}
              address={country.address}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
});

export default AboutUs;

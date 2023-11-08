import {
  Box,
  Button,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import HomeHeroDesktop from "../assets/home/desktop/image-hero-coffeepress.jpg";
import HomeHeroTablet from "../assets/home/tablet/image-hero-coffeepress.jpg";
import HomeHeroMobile from "../assets/home/mobile/image-hero-coffeepress.jpg";

const Hero = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  const backgroundImage = isMobile
    ? `url(${HomeHeroMobile})`
    : isTablet
    ? `url(${HomeHeroTablet})`
    : `url(${HomeHeroDesktop})`;

  return (
    <Box
      sx={{
        backgroundImage,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        p: {
          md: 10,
          xs: 4,
        },
        borderRadius: "10px",
      }}
    >
      <Grid container>
        <Grid item xs={12}>
          <Typography
            variant={isSmallScreen ? "h2" : "h1"}
            color="secondary.main"
            sx={{
              textAlign: { xs: "center", sm: "left" },
            }}
          >
            Great coffee
          </Typography>
          <Typography
            variant={isSmallScreen ? "h2" : "h1"}
            color="secondary.main"
            sx={{ textAlign: { xs: "center", sm: "left" } }}
            gutterBottom
          >
            made simple.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography
            variant="body1"
            sx={{ textAlign: { xs: "center", sm: "left" }, opacity: 0.8 }}
            color="secondary.main"
            gutterBottom
          >
            Start your mornings with the world’s best coffees. Try our expertly
            curated artisan coffees from our best roasters delivered directly to
            your door, at your schedule.
          </Typography>
        </Grid>
        <Grid item xs={12} pt={3}>
          <Box
            display="flex"
            alignItems="center"
            justifyContent={{ xs: "center", sm: "flex-start" }}
          >
            <Button
              variant="contained"
              color="primary"
              sx={{
                color: "secondary.main",
                backgroundColor: "primary.main",
                "&:hover": {
                  backgroundColor: "info.main",
                  color: "secondary.main",
                },
              }}
            >
              Apply for access
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Hero;

import {
  Box,
  Button,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Page } from "../enums/Page";

type HeroProps = {
  page: Page;
  title: string;
  description: string;
  desktopBackground: string;
  tabletBackground: string;
  mobileBackground: string;
};

const Hero = (props: HeroProps) => {
  const {
    page,
    title,
    description,
    desktopBackground,
    tabletBackground,
    mobileBackground,
  } = props;

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  const backgroundImage = isMobile
    ? `url(${mobileBackground})`
    : isTablet
    ? `url(${tabletBackground})`
    : `url(${desktopBackground})`;

  return (
    <Box
      sx={{
        backgroundImage,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        p: {
          md: page === Page.HOME ? 10 : 10,
          xs: page === Page.HOME ? 4 : 4,
          xl: 15,
        },
        mb: 10,
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
              whiteSpace: "pre-wrap",
            }}
            gutterBottom
          >
            {title}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} xl={4}>
          <Typography
            variant="body1"
            sx={{ textAlign: { xs: "center", sm: "left" }, opacity: 0.8 }}
            color="secondary.main"
            gutterBottom
          >
            {description}
          </Typography>
        </Grid>
        {page === Page.HOME && (
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
        )}
      </Grid>
    </Box>
  );
};

export default Hero;

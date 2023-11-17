import { Box, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Logo from "../assets/shared/desktop/logo-white.svg";
import Facebook from "../assets/shared/desktop/icon-facebook.svg";
import Twitter from "../assets/shared/desktop/icon-twitter.svg";
import Instagram from "../assets/shared/desktop/icon-instagram.svg";
import { PAGES } from "../config/pages";

const ICONS = [Facebook, Twitter, Instagram];

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        p: {
          xs: 5,
          lg: 3,
        },
        backgroundColor: "primary.dark",
        my: 5,
        minHeight: { xs: 200, lg: "auto" },
        display: "flex",
      }}
    >
      <Grid container justifyContent="center" alignItems="center">
        <Grid
          item
          xs={12}
          lg={4}
          sx={{
            display: "flex",
            justifyContent: "center",
            lg: {
              justifyContent: "flex-start",
            },
          }}
        >
          <Link to="/">
            <Box component="img" src={Logo} alt="coffeeroasters logo" />
          </Link>
        </Grid>
        <Grid item container xs={12} lg={4} justifyContent="center">
          {PAGES.map((page) => (
            <Grid item key={page.key} px={1}>
              <Link to={page.route} style={{ textDecoration: "none" }}>
                <Typography
                  variant="body1"
                  sx={{
                    color: "secondary.light",
                    ":hover": {
                      color: "#ffffff",
                      fontWeight: 700,
                    },
                    fontSize: 14,
                  }}
                >
                  {page.text}
                </Typography>
              </Link>
            </Grid>
          ))}
        </Grid>
        <Grid item container xs={12} lg={4} justifyContent="center">
          {ICONS.map((icon, index) => (
            <Box
              key={index}
              component="img"
              src={icon}
              alt="Social icon"
              mx={2}
              sx={{ cursor: "pointer" }}
            />
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;

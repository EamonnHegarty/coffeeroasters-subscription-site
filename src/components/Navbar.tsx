import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const PAGES = ["HOME", "ABOUT US", "CREATE YOUR PLAN"];

const Navbar = () => {
  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{ backgroundColor: "background.default", p: 2 }}
    >
      <Grid container>
        <Grid item xs={5}>
          <Typography
            variant="h4"
            component="a"
            href="/"
            sx={{ color: "primary.dark", textDecoration: "none", pl: 5 }}
          >
            coffeeroasters
          </Typography>
        </Grid>
        <Grid
          item
          xs={7}
          display="flex"
          alignContent="center"
          justifyContent="flex-end"
        >
          {PAGES.map((page, index) => (
            <Grid item display="flex" alignItems="center">
              <Typography
                variant="body1"
                key={index}
                component="a"
                href={page}
                sx={{
                  color: "primary.dark",
                  textDecoration: "none",
                  mx: 3,
                }}
              >
                {page}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </AppBar>
  );
};
export { Navbar };

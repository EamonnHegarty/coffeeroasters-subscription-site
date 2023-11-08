import React from "react";
import AppBar from "@mui/material/AppBar";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { IconButton, Menu } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import Logo from "../assets/shared/desktop/logo.svg";

const PAGES = [
  { key: 1, text: "HOME", route: "/" },
  { key: 2, text: "ABOUT US", route: "about-us" },
  { key: 3, text: "CREATE YOUR PLAN", route: "create-your-plan" },
];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{ backgroundColor: "background.default", p: 2 }}
    >
      <Grid container>
        <Grid item xs={5} display="flex" alignItems="center">
          <Link to="/">
            <Box
              component="img"
              src={Logo}
              alt="first background decorative image swirl"
            />
          </Link>
        </Grid>
        {/* DESKTOPS */}
        <Grid
          item
          xs={7}
          display={{ xs: "none", md: "flex" }}
          alignContent="center"
          justifyContent="flex-end"
        >
          {PAGES.map((page) => (
            <Grid key={page.key} item display="flex" alignItems="center">
              <Link
                to={page.route}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    color: "secondary.light",
                    textDecoration: "none",
                    mx: 3,
                    ":hover": {
                      color: "primary.dark",
                      fontWeight: 700,
                    },
                  }}
                >
                  {page.text}
                </Typography>
              </Link>
            </Grid>
          ))}
        </Grid>
        {/* MOBILE && TABLETS */}
        <Grid
          item
          xs={7}
          display={{ xs: "flex", md: "none" }}
          alignItems="center"
          justifyContent="end"
        >
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            sx={{ color: "primary.dark" }}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: "block", md: "none" },
            }}
          >
            {PAGES.map((page) => (
              <MenuItem key={page.key} onClick={handleCloseNavMenu}>
                <Link
                  to={page.route}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      mx: 3,
                      ":hover": {
                        color: "primary.dark",
                        fontWeight: 700,
                      },
                    }}
                    textAlign="center"
                  >
                    {page.text}
                  </Typography>
                </Link>
              </MenuItem>
            ))}
          </Menu>
        </Grid>
      </Grid>
    </AppBar>
  );
};
export { Navbar };

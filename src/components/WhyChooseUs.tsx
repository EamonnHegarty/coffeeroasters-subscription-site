import { Grid, Typography } from "@mui/material";

const WhyChooseUs = () => {
  return (
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
          A large part of our role is choosing which particular coffees will be
          featured in our range. This means working closely with the best coffee
          growers to give you a more impactful experience on every level.
        </Typography>
      </Grid>
    </Grid>
  );
};

export { WhyChooseUs };

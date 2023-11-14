import { Box, Card, CardContent, Grid, Typography } from "@mui/material";

const CoffeeInfoCard = ({
  img,
  title,
  description,
}: {
  img: string;
  title: string;
  description: string;
}) => {
  return (
    <Card
      sx={{
        boxShadow: "none",
        backgroundColor: "transparent",
        border: "none",
        minWidth: 275,
        mt: 5,
      }}
    >
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4} md={4} lg={12}>
            <Box
              component="img"
              src={img}
              sx={{ width: "100%", height: "auto" }}
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={8}
            md={8}
            lg={12}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="h4"
              sx={{
                textAlign: { xs: "center", sm: "left", lg: "center" },
                color: "primary.dark",
                mb: 3,
              }}
            >
              {title}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                textAlign: { xs: "center", sm: "left", lg: "center" },
              }}
            >
              {description}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export { CoffeeInfoCard };

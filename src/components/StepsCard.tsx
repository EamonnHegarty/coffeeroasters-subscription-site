import { Grid, Card, CardContent, Typography } from "@mui/material";

const StepsCard = ({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) => {
  return (
    <Card
      sx={{
        boxShadow: "none",
        backgroundColor: "transparent",
        border: "none",
        mt: 5,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <CardContent sx={{ maxWidth: 350 }}>
        <Grid
          container
          sx={{
            borderRadius: "10px",
          }}
          p={2}
        >
          <Grid item xs={12}>
            <Typography
              variant="h1"
              color="primary.light"
              sx={{
                textAlign: { xs: "center", sm: "left" },
                mb: 3,
              }}
            >
              {number}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant="h3"
              color="primary.dark"
              sx={{
                textAlign: { xs: "center", sm: "left" },
                maxWidth: 200,
                mb: 3,
              }}
            >
              {title}
            </Typography>
            <Typography
              variant="body1"
              color="primary.dark"
              sx={{
                textAlign: { xs: "center", sm: "left" },
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

export default StepsCard;

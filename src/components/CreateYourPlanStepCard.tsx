import { Grid, Card, CardContent, Typography } from "@mui/material";

const CreateYourPlanStepCard = () => {
  return (
    <Card
      sx={{
        boxShadow: "none",
        backgroundColor: "white",
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
              variant="h3"
              color="black"
              sx={{
                textAlign: { xs: "center", sm: "left" },
                maxWidth: { xs: "auto", lg: 200 },
                mb: 3,
              }}
            >
              title
            </Typography>
            <Typography
              variant="body1"
              color="black"
              sx={{
                textAlign: { xs: "center", sm: "left" },
              }}
            >
              description
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default CreateYourPlanStepCard;

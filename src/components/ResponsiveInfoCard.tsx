import { Box, Card, CardContent, Grid, Typography } from "@mui/material";

const ResponsiveInfoCard = ({
  img,
  title,
  description,
  backgroundColor,
  textColor,
  isIcon,
}: {
  img: string;
  title: string;
  description: string;
  backgroundColor: string;
  textColor: string;
  isIcon: boolean;
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
        <Grid
          container
          sx={{
            backgroundColor: backgroundColor,
            borderRadius: "10px",
            minHeight: isIcon ? 350 : 250,
          }}
          p={2}
        >
          <Grid
            item
            xs={12}
            sm={4}
            md={4}
            lg={12}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Box
              component="img"
              src={img}
              sx={{
                width: isIcon ? 150 : "100%",
                height: isIcon ? 125 : "auto",
              }}
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
                color: textColor,
                mb: 3,
              }}
            >
              {title}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: textColor,
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

export { ResponsiveInfoCard };

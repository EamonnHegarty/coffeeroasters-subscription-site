import {
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material";

const StepsCard = ({
  id,
  number,
  title,
  description,
}: {
  id: number;
  number: string;
  title: string;
  description: string;
}) => {
  const theme = useTheme();
  const isXsScreen = useMediaQuery(theme.breakpoints.down("sm"));

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
                maxWidth: { xs: "auto", lg: 200 },
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
            {((id === 1 && !isXsScreen) || (id === 3 && isXsScreen)) && (
              <Grid item xs={12} mt={10}>
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
                    <Typography variant="body1">Create your plan</Typography>
                  </Button>
                </Box>
              </Grid>
            )}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default StepsCard;

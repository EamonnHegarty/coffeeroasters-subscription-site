import { Box, Card, CardContent, Typography } from "@mui/material";

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
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box mb={5}>
            <Box component="img" src={img} sx={{ maxHeight: 200 }} />
          </Box>
        </Box>
        <Typography variant="h4" align="center" mb={3}>
          {title}
        </Typography>
        <Typography variant="body1" align="center">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export { CoffeeInfoCard };

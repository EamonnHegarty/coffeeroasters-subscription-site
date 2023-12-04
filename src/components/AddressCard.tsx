import { Grid, Card, CardContent, Typography, Box } from "@mui/material";

type Address = {
  id: number;
  text: string;
};

type AddressCardProps = {
  img: string;
  country: string;
  address: Address[];
};

const AddressCard = (props: AddressCardProps) => {
  const { img, country, address } = props;
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
          p={4}
        >
          <Grid
            item
            xs={12}
            sx={{
              mb: 3,
              display: "flex",
              justifyContent: { xs: "center", sm: "left" },
            }}
          >
            <Box component="img" src={img} />
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant="h4"
              color="primary.dark"
              sx={{
                textAlign: { xs: "center", sm: "left" },
                mb: 3,
              }}
            >
              {country}
            </Typography>
            {address?.map((address) => (
              <Typography
                key={address.id}
                variant="body1"
                color="primary.dark"
                sx={{
                  textAlign: { xs: "center", sm: "left" },
                }}
              >
                {address.text}
              </Typography>
            ))}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default AddressCard;

import { Grid, Card, CardContent, Typography } from "@mui/material";
import { Dispatch, SetStateAction } from "react";

type CreateYourPlanSelectionCardProps = {
  title: string;
  description: string;
  id: number;
  selectedId: number;
  setSelectedId: Dispatch<SetStateAction<number>>;
};

const CreateYourPlanSelectionCard = (
  props: CreateYourPlanSelectionCardProps
) => {
  const { title, description, id, setSelectedId, selectedId } = props;

  const handleOnClick = () => {
    setSelectedId(id);
  };

  return (
    <Card
      sx={{
        boxShadow: "none",
        backgroundColor: selectedId === id ? "primary.main" : "#F4F1EB",
        border: "none",
        mt: 5,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: 275,
        cursor: "pointer",
        "&:hover": {
          backgroundColor: selectedId === id ? "primary.main" : "primary.light",
        },
      }}
      onClick={handleOnClick}
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
              color={selectedId === id ? "#ffffff" : "primary.dark"}
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
              color={selectedId === id ? "#ffffff" : "primary.dark"}
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

export default CreateYourPlanSelectionCard;

import { Grid, Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useState } from "react";
import CreateYourPlanSelectionCard from "./CreateYourPlanSelectionCard";

type CardInfo = {
  id: number;
  title: string;
  description: string;
};

type CreateYourPlanStepProps = {
  question: string;
  cardInfo: CardInfo[];
  number: string;
};

const CreateYourPlanStep = (props: CreateYourPlanStepProps) => {
  const { question, cardInfo } = props;
  const [showSelections, setShowSelections] = useState(false);
  const [selectedId, setSelectedId] = useState(0);

  return (
    <>
      <Grid container>
        <Grid item xs={10}>
          <Typography variant="h3" color="secondary.light" textAlign="left">
            {question}
          </Typography>
        </Grid>
        <Grid
          item
          xs={2}
          display="flex"
          justifyContent="right"
          alignItems="center"
        >
          {!showSelections ? (
            <KeyboardArrowDownIcon
              sx={{
                color: "primary.main",
                cursor: "pointer",
                "&:hover": {
                  backgroundColor: "#F4F1EB",
                  borderRadius: "20px",
                },
              }}
              fontSize="large"
              onClick={() => setShowSelections(!showSelections)}
            />
          ) : (
            <KeyboardArrowUpIcon
              sx={{
                color: "primary.main",
                cursor: "pointer",
                "&:hover": {
                  backgroundColor: "#F4F1EB",
                  borderRadius: "20px",
                },
              }}
              fontSize="large"
              onClick={() => setShowSelections(!showSelections)}
            />
          )}
        </Grid>
      </Grid>
      {showSelections && (
        <Grid container spacing={2}>
          {cardInfo?.map((info) => (
            <Grid item xs={12} md={4} key={info.id}>
              <CreateYourPlanSelectionCard
                title={info.title}
                description={info.description}
                id={info.id}
                selectedId={selectedId}
                setSelectedId={setSelectedId}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
};

export default CreateYourPlanStep;

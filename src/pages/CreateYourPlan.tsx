import { Box, Grid } from "@mui/material";
import Hero from "../components/Hero";
import { STEPS } from "../config/cardsInfo";
import { planHeroConfig } from "../config/heroConfig";
import withScrollToTop from "./withScrollToTop";
import StepsCard from "../components/StepsCard";
import CreateYourPlanStep from "../components/CreateYourPlanStep";
import { PLAN_STEPS } from "../config/CreateYourPlanInfo";

const CreateYourPlan = withScrollToTop(() => {
  return (
    <>
      <Hero
        page={planHeroConfig.page}
        title={planHeroConfig.title}
        description={planHeroConfig.description}
        desktopBackground={planHeroConfig.desktopBackground}
        tabletBackground={planHeroConfig.tabletBackground}
        mobileBackground={planHeroConfig.mobileBackground}
      />
      <Box mt={15}>
        <Grid container sx={{ backgroundColor: "#2C343E", minHeight: 450 }}>
          {STEPS.map((step) => (
            <Grid item xs={12} sm={4} key={step.id}>
              <StepsCard
                id={step.id}
                number={step.number}
                title={step.title}
                description={step.description}
                isHomePage={false}
                backgroundColor="#2C343E"
                textColor="#FEFCF7"
              />
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box my={10} mx={5}>
        <Grid container>
          <Grid
            item
            xs={12}
            md={3}
            sx={{ display: { xs: "none", md: "block" } }}
          >
            Navigaion options
          </Grid>
          <Grid item xs={12} md={9}>
            {PLAN_STEPS.map((step) => (
              <Grid item xs={12} key={step.id} mb={10}>
                <CreateYourPlanStep
                  question={step.question}
                  cardInfo={step.cardInfo}
                  number={step.number}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Box>
    </>
  );
});

export default CreateYourPlan;

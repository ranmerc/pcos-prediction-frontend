import { Stack, Container, Typography, Button } from "@mui/material";
import { FormEventHandler } from "react";
import NumberInput from "../components/NumberInput";
import RadioInput from "../components/RadioInput";

const Home = () => {
  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
  };

  return (
    <Container maxWidth="md">
      <Stack alignItems="center" marginTop={4} marginBottom={4} rowGap={5}>
        <Typography variant="h2" textAlign={"center"} letterSpacing={"1px"}>
          PCOS Prediction
        </Typography>
        <Stack
          component="form"
          rowGap={4}
          width={"80%"}
          onSubmit={handleSubmit}
        >
          <NumberInput label="Age" />
          <NumberInput label="Martial Status (in years)" />
          <NumberInput label="Weight (in kgs)" step="0.01" />
          <NumberInput label="Body Mass Index (BMI)" step="0.01" />
          <NumberInput label="Follicle Count Right" />
          <NumberInput label="Follicle Count Left" />
          <NumberInput label="Anti-Mullerian Hormone (ng/ml)" step="0.01" />
          <NumberInput label="Regular Period Cycle (Length)" />
          <NumberInput label="Period Cycle Length (Length)" />

          <RadioInput label="Is your skin darkening?" id="skin-darkening" />
          <RadioInput
            label="Are you experiencing excessive facial hair growth?"
            id="hair-growth"
          />
          <RadioInput label="Have you gained weight?" id="weight-gain" />
          <RadioInput label="Do you regularly eat fast food?" id="fast-food" />
          <RadioInput
            label="Do you seem to be getting more acne?"
            id="fast-food"
          />

          <Button variant="contained" size="large" type="submit">
            Submit
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
};

export default Home;

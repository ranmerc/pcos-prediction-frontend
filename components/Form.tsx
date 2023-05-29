import { useFormikContext } from "formik";
import { Stack, Button, Backdrop, CircularProgress } from "@mui/material";
import NumberInput from "./NumberInput";
import RadioInput from "./RadioInput";
import { FormValues } from "../types";

export default function FormMarkup() {
  const { handleSubmit, isSubmitting } = useFormikContext<FormValues>();

  return (
    <>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isSubmitting}
      >
        <CircularProgress color="inherit" />
      </Backdrop>

      <Stack component="form" rowGap={4} width={"80%"} onSubmit={handleSubmit}>
        <NumberInput label="Age" name="age" />
        <NumberInput label="Martial Status (in years)" name="marriageStatus" />
        <NumberInput label="Weight (in kgs)" name="weight" step="0.01" />
        <NumberInput label="Body Mass Index (BMI)" name="bmi" step="0.01" />
        <NumberInput label="Follicle Count Right" name="follicleNoR" />
        <NumberInput label="Follicle Count Left" name="follicleNoL" />
        <NumberInput
          label="Anti-Mullerian Hormone (ng/ml)"
          name="amh"
          step="0.01"
        />
        <NumberInput
          label="Regular Period Cycle (Length)"
          name="regularCycle"
        />
        <NumberInput label="Period Cycle Length (Length)" name="cycleLength" />

        <RadioInput label="Is your skin darkening?" name="skinDarkening" />
        <RadioInput
          label="Are you experiencing excessive facial hair growth?"
          name="hairGrowth"
        />
        <RadioInput label="Have you gained weight?" name="weightGain" />
        <RadioInput label="Do you regularly eat fast food?" name="fastFood" />
        <RadioInput
          label="Do you seem to be getting more acne?"
          name="pimples"
        />

        <Button variant="contained" size="large" type="submit">
          Submit
        </Button>
      </Stack>
    </>
  );
}

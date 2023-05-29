import { Stack, Container, Typography, Button } from "@mui/material";
import NumberInput from "../components/NumberInput";
import RadioInput from "../components/RadioInput";
import { useFormik } from "formik";

const Home = () => {
  const formik = useFormik({
    initialValues: {
      age: "",
      marriageStatus: "",
      weight: "",
      bmi: "",
      follicleNoR: "",
      follicleNoL: "",
      amh: "",
      regularCycle: "",
      cycleLength: "",
      skinDarkening: "no",
      hairGrowth: "no",
      weightGain: "no",
      fastFood: "no",
      pimples: "no",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

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
          onSubmit={formik.handleSubmit}
        >
          <NumberInput
            label="Age"
            name="age"
            value={formik.values.age}
            onChange={formik.handleChange}
          />
          <NumberInput
            label="Martial Status (in years)"
            name="marriageStatus"
            value={formik.values.marriageStatus}
            onChange={formik.handleChange}
          />
          <NumberInput
            label="Weight (in kgs)"
            name="weight"
            value={formik.values.weight}
            onChange={formik.handleChange}
            step="0.01"
          />
          <NumberInput
            label="Body Mass Index (BMI)"
            name="bmi"
            value={formik.values.bmi}
            onChange={formik.handleChange}
            step="0.01"
          />
          <NumberInput
            label="Follicle Count Right"
            name="follicleNoR"
            value={formik.values.follicleNoR}
            onChange={formik.handleChange}
          />
          <NumberInput
            label="Follicle Count Left"
            name="follicleNoR"
            value={formik.values.follicleNoR}
            onChange={formik.handleChange}
          />
          <NumberInput
            label="Anti-Mullerian Hormone (ng/ml)"
            name="amh"
            value={formik.values.amh}
            onChange={formik.handleChange}
            step="0.01"
          />
          <NumberInput
            label="Regular Period Cycle (Length)"
            name="regularCycle"
            value={formik.values.regularCycle}
            onChange={formik.handleChange}
          />
          <NumberInput
            label="Period Cycle Length (Length)"
            name="cycleLength"
            value={formik.values.cycleLength}
            onChange={formik.handleChange}
          />

          <RadioInput
            label="Is your skin darkening?"
            name="skinDarkening"
            value={formik.values.skinDarkening}
            onChange={formik.handleChange}
          />
          <RadioInput
            label="Are you experiencing excessive facial hair growth?"
            name="hairGrowth"
            value={formik.values.hairGrowth}
            onChange={formik.handleChange}
          />
          <RadioInput
            label="Have you gained weight?"
            name="weightGain"
            value={formik.values.weightGain}
            onChange={formik.handleChange}
          />
          <RadioInput
            label="Do you regularly eat fast food?"
            name="fastFood"
            value={formik.values.fastFood}
            onChange={formik.handleChange}
          />
          <RadioInput
            label="Do you seem to be getting more acne?"
            name="pimples"
            value={formik.values.pimples}
            onChange={formik.handleChange}
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

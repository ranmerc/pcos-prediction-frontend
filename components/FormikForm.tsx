import { Formik } from "formik";
import FormMarkup from "./Form";
import { FormValues } from "../types";

const initialValues: FormValues = {
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
};

export default function FormikForm() {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          console.log(values);
          actions.setSubmitting(false);
        }, 3000);
      }}
      component={FormMarkup}
    ></Formik>
  );
}

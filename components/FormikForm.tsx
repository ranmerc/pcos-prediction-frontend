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
      onSubmit={(values) => {
        console.log(values);
      }}
      component={FormMarkup}
    ></Formik>
  );
}

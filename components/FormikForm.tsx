import { Formik, FormikHelpers } from "formik";
import FormMarkup from "./Form";
import { FormValues } from "../types";
import formSchema from "../schemas/formSchema";
import usePrediction from "../hooks/usePrediction";
import { useState } from "react";
import ResultDialog from "./ResultDialog";

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
  const [open, setOpen] = useState(false);
  const { mutate, data } = usePrediction();

  const onSubmit = (values: FormValues, actions: FormikHelpers<FormValues>) => {
    mutate(values, {
      onSettled: () => {
        actions.setSubmitting(false);
        setOpen(true);
      },
    });
  };

  return (
    <>
      <ResultDialog open={open} setOpen={setOpen} data={data} />

      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={formSchema}
        component={FormMarkup}
      />
    </>
  );
}

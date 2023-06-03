import * as yup from "yup";
import { FormValues } from "../types";

const formSchema: yup.ObjectSchema<FormValues> = yup.object().shape({
  age: yup
    .number()
    .integer("Age must be a integer")
    .positive("Age must be a positive number")
    .default(0)
    .required("Age required")
    .transform((value) => Number(value)),

  marriageStatus: yup
    .number()
    .integer("Marriage status must be a integer")
    .positive("Marriage status must be a positive number")
    .lessThan(yup.ref("age"), "Marriage status should be less than age.")
    .default(0)
    .required("Marriage status required")
    .transform((value) => Number(value)),

  weight: yup
    .number()
    .positive("Weight must be a positive number")
    .default(0)
    .required("Weight required")
    .transform((value) => Number(value)),

  bmi: yup
    .number()
    .positive("BMI must be a positive number")
    .default(0)
    .required("BMI required")
    .transform((value) => Number(value)),

  follicleNoR: yup
    .number()
    .integer("Follicle count must be an integer")
    .positive("Follicle count must be a positive number")
    .default(0)
    .required("Right follicle count required")
    .transform((value) => Number(value)),

  follicleNoL: yup
    .number()
    .integer("Follicle count must be an integer")
    .positive("Follicle count must be a positive number")
    .default(0)
    .required("Left follicle count required")
    .transform((value) => Number(value)),

  amh: yup
    .number()
    .positive("AMH must be a positive number")
    .default(0)
    .required("AMH required")
    .transform((value) => Number(value)),

  regularCycle: yup
    .number()
    .integer("Regular Cycle must be a integer")
    .positive("Regular Cycle must be a positive number")
    .default(0)
    .required("Regular cycle required")
    .transform((value) => Number(value)),

  cycleLength: yup
    .number()
    .integer("Cycle Length must be a positive number")
    .positive("Cycle Length must be a positive number")
    .default(0)
    .required("Cycle length required")
    .transform((value) => Number(value)),

  skinDarkening: yup
    .string()
    .oneOf(["yes", "no"], "Must be either yes or no")
    .default("no")
    .required("Choice required"),

  hairGrowth: yup
    .string()
    .oneOf(["yes", "no"])
    .default("no")
    .matches(/yes|no/, "Must be either yes or no")
    .required("Choice required"),

  weightGain: yup
    .string()
    .oneOf(["yes", "no"], "Must be either yes or no")
    .default("no")
    .required("Choice required"),

  fastFood: yup
    .string()
    .oneOf(["yes", "no"], "Must be either yes or no")
    .default("no")
    .required("Choice required"),

  pimples: yup
    .string()
    .oneOf(["yes", "no"], "Must be either yes or no")
    .default("no")
    .required("Choice required"),
});

export default formSchema;

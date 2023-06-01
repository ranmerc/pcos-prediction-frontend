import { TextField } from "@mui/material";
import { useFormikContext } from "formik";
import { NumericalFormValues } from "../types";

export default function NumberInput({
  label,
  name,
  step = "1",
}: {
  label: string;
  name: keyof NumericalFormValues;
  step?: string;
}) {
  const { values, handleChange, handleBlur, errors, touched } =
    useFormikContext<NumericalFormValues>();

  return (
    <TextField
      label={label}
      type="number"
      name={name}
      InputProps={{ inputProps: { step: step } }}
      value={values[name]}
      onChange={handleChange}
      variant="outlined"
      required
      onBlur={handleBlur}
      error={touched[name] && errors[name] ? true : false}
      helperText={touched[name] && errors[name]}
    />
  );
}

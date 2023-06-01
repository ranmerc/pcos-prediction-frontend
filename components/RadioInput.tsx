import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import { useFormikContext } from "formik";
import { BooleanFormValues } from "../types";

export default function RadioInput({
  name,
  label,
}: {
  name: keyof BooleanFormValues;
  label: string;
}) {
  const { values, handleChange, handleBlur, touched, errors } =
    useFormikContext<BooleanFormValues>();

  return (
    <FormControl required error={touched[name] && errors[name] ? true : false}>
      <FormLabel id={name}>{label}</FormLabel>
      <RadioGroup
        aria-labelledby={name}
        name={name}
        value={values[name]}
        onChange={handleChange}
        onBlur={handleBlur}
      >
        <FormControlLabel
          value="yes"
          control={<Radio size="small" />}
          label="Yes"
        />
        <FormControlLabel
          value="no"
          control={<Radio size="small" />}
          label="No"
        />
      </RadioGroup>
    </FormControl>
  );
}

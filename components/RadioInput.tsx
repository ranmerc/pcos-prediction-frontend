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
  const { values, handleChange } = useFormikContext<BooleanFormValues>();

  return (
    <FormControl required>
      <FormLabel id={name}>{label}</FormLabel>
      <RadioGroup
        aria-labelledby={name}
        name={name}
        value={values[name]}
        onChange={handleChange}
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

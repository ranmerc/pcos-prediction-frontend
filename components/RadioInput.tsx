import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import { ChangeEventHandler } from "react";

export default function RadioInput({
  name,
  label,
  value,
  onChange,
}: {
  name: string;
  label: string;
  value: string;
  onChange:
    | ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>
    | undefined;
}) {
  return (
    <FormControl required>
      <FormLabel id={name}>{label}</FormLabel>
      <RadioGroup
        aria-labelledby={name}
        name={name}
        value={value}
        onChange={onChange}
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

import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";

export default function RadioInput({
  id,
  label,
}: {
  id: string;
  label: string;
}) {
  return (
    <FormControl required>
      <FormLabel id={id}>{label}</FormLabel>
      <RadioGroup aria-labelledby={id} defaultValue="no">
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

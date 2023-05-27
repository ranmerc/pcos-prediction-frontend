import { TextField } from "@mui/material";

export default function NumberInput({
  label,
  step = "1",
}: {
  label: string;
  step?: string;
}) {
  return (
    <TextField
      label={label}
      type="number"
      InputProps={{ inputProps: { step: step } }}
      variant="outlined"
      required
    />
  );
}

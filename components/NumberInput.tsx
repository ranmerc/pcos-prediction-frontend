import { TextField } from "@mui/material";
import { ChangeEventHandler } from "react";

export default function NumberInput<T>({
  label,
  name,
  value,
  onChange,
  step = "1",
}: {
  label: string;
  name: string;
  step?: string;
  value: T;
  onChange:
    | ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>
    | undefined;
}) {
  return (
    <TextField
      label={label}
      type="number"
      name={name}
      InputProps={{ inputProps: { step: step } }}
      value={value}
      onChange={onChange}
      variant="outlined"
      required
    />
  );
}

// Initial state is empty string
export interface NumericalFormValues {
  age: string | number;
  marriageStatus: string | number;
  weight: string | number;
  bmi: string | number;
  follicleNoR: string | number;
  follicleNoL: string | number;
  amh: string | number;
  regularCycle: string | number;
  cycleLength: string | number;
}

export interface BooleanFormValues {
  skinDarkening: "yes" | "no";
  hairGrowth: "yes" | "no";
  weightGain: "yes" | "no";
  fastFood: "yes" | "no";
  pimples: "yes" | "no";
}

export interface FormValues extends NumericalFormValues, BooleanFormValues {}

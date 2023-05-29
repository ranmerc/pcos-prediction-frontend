export interface NumericalFormValues {
  age: string;
  marriageStatus: string;
  weight: string;
  bmi: string;
  follicleNoR: string;
  follicleNoL: string;
  amh: string;
  regularCycle: string;
  cycleLength: string;
}

export interface BooleanFormValues {
  skinDarkening: string;
  hairGrowth: string;
  weightGain: string;
  fastFood: string;
  pimples: string;
}

export interface FormValues extends NumericalFormValues, BooleanFormValues {}

import { FormValues } from "../types";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import PredictionType from "../types";

const fetcher = async (formData: FormValues): Promise<PredictionType> => {
  const values = {
    ...formData,
    skinDarkening: formData.skinDarkening === "yes" ? 1 : 0,
    hairGrowth: formData.hairGrowth === "yes" ? 1 : 0,
    weightGain: formData.weightGain === "yes" ? 1 : 0,
    fastFood: formData.fastFood === "yes" ? 1 : 0,
    pimples: formData.pimples === "yes" ? 1 : 0,
  };

  const response = await axios.post<PredictionType>(
    "https://pcos-prediction-backend.onrender.com/",
    values
  );

  return response.data;
};

export default function usePrediction() {
  return useMutation({
    mutationFn: (formData: FormValues) => fetcher(formData),
  });
}

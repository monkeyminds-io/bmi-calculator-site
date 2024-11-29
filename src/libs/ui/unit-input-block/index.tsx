// =============================================================================
// File Name: Unit Inputs Block
// File Description:
// This file contains the Unit Inputs Block that renders the corresponding unit
// block depending on the chouse of "imperial" or "metric".
// =============================================================================
// =============================================================================
// Components Imports
// =============================================================================
import { ChangeEvent, useState } from "react";
import { UnitInput } from "../atoms/unit-input";
import { MetricData, ImperialData } from "@/libs/types/bmi-data";
import { calculateImperialBmi, calculateMetricBmi } from "./utiles";

// =============================================================================
// Components Props
// =============================================================================
type Props = {
  unit: string;
  setBmi: Function;
  setLoading: Function;
};

// =============================================================================
// React Components
// =============================================================================
export const UnitInputBlock = ({ unit, setBmi, setLoading }: Props) => {
  // =============================================================================
  // Metric Units Calculations
  // =============================================================================
  const [metricData, setMetricData] = useState<MetricData>({
    height: null,
    weight: null,
  });

  const handleMetricChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target?.value;
    const name = event.target?.name;
    if (name === "height") metricData.height = parseFloat(value);
    if (name === "weight") metricData.weight = parseFloat(value);
    setMetricData(metricData);
    setLoading(true);
    setTimeout(() => {
      setBmi(calculateMetricBmi(metricData));
      setLoading(false);
    }, 1500);
  };

  // =============================================================================
  // Imperial Units Calculations
  // =============================================================================
  const [imperialData, setImperialData] = useState<ImperialData>({
    height: {
      ft: null,
      in: null,
    },
    weight: {
      st: null,
      lbs: null,
    },
  });

  const handleImperialCahnge = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target?.value;
    const name = event.target?.name;
    if (event.target?.name === "feet")
      imperialData.height.ft = parseFloat(value);
    if (event.target?.name === "inches")
      imperialData.height.in = parseFloat(value);
    if (event.target?.name === "stones")
      imperialData.weight.st = parseFloat(value);
    if (event.target?.name === "pounds")
      imperialData.weight.lbs = parseFloat(value);
    setImperialData(imperialData);
    setLoading(true);
    setTimeout(() => {
      setBmi(calculateImperialBmi(imperialData));
      setLoading(false);
    }, 1500);
  };

  // =============================================================================
  // Rendering Component Depending on Units selected
  // =============================================================================
  if (unit === "metric")
    return (
      <div className="flex flex-col gap-4">
        <UnitInput
          id={"height"}
          name={"height"}
          placeholder={"000"}
          label={"Height"}
          unit={"cm"}
          handleChange={handleMetricChange}
        />
        <UnitInput
          id={"weight"}
          name={"weight"}
          placeholder={"00"}
          label={"Weight"}
          unit={"kg"}
          handleChange={handleMetricChange}
        />
      </div>
    );

  if (unit === "imperial")
    return (
      <div className="flex flex-col gap-4">
        <div className="flex flex-row items-end gap-4">
          <UnitInput
            id={"feet"}
            name={"feet"}
            placeholder={"00"}
            label={"Height"}
            unit={"ft"}
            handleChange={handleImperialCahnge}
          />
          <UnitInput
            id={"inches"}
            name={"inches"}
            placeholder={"00"}
            unit={"in"}
            handleChange={handleImperialCahnge}
          />
        </div>
        <div className="flex flex-row items-end gap-4">
          <UnitInput
            id={"stones"}
            name={"stones"}
            placeholder={"00"}
            label={"Weight"}
            unit={"st"}
            handleChange={handleImperialCahnge}
          />
          <UnitInput
            id={"pounds"}
            name={"pounds"}
            placeholder={"00"}
            unit={"lbs"}
            handleChange={handleImperialCahnge}
          />
        </div>
      </div>
    );
};

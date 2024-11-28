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
import { BMIData, ImperialHeight } from "@/libs/types/bmi-data";

// =============================================================================
// Components Props
// =============================================================================
type Props = {
  unit: string;
  data: BMIData | undefined;
  setData: Function;
};

// =============================================================================
// React Components
// =============================================================================
export const UnitInputBlock = ({ unit, data, setData }: Props) => {

  const handleMetricChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target?.value
    const newData = data!
    if(event.target?.name === 'height') newData.height = parseFloat(value)
    if(event.target?.name === 'weight') newData.weight = parseFloat(value)
    setData(newData)
  }

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
          />
          <UnitInput
            id={"inches"}
            name={"inches"}
            placeholder={"00"}
            unit={"in"}
          />
        </div>
        <div className="flex flex-row items-end gap-4">
          <UnitInput
            id={"stones"}
            name={"stones"}
            placeholder={"00"}
            label={"Weight"}
            unit={"st"}
          />
          <UnitInput
            id={"libras"}
            name={"libras"}
            placeholder={"00"}
            unit={"lbs"}
          />
        </div>
      </div>
    );
};

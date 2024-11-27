// =============================================================================
// File Name: Unit Inputs Block
// File Description:
// This file contains the Unit Inputs Block that renders the corresponding unit
// block depending on the chouse of "imperial" or "metric".
// =============================================================================
// =============================================================================
// Components Imports
// =============================================================================
import { UnitInput } from "../atoms/unit-input";

// =============================================================================
// Components Props
// =============================================================================
type Props = {
  unit: string;
};

// =============================================================================
// React Components
// =============================================================================
export const UnitInputBlock = ({ unit }: Props) => {
  if (unit === "metric")
    return (
      <div className="flex flex-col gap-4">
        <UnitInput
          id={"height"}
          name={"height"}
          placeholder={"000"}
          label={"Height"}
          unit={"cm"}
        />
        <UnitInput
          id={"weight"}
          name={"weight"}
          placeholder={"00"}
          label={"Weight"}
          unit={"kg"}
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

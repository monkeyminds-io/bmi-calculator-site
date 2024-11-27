// =============================================================================
// File Name: Unit Input
// File Description:
// This file contains the Unit Input component that helps manage the user interaction
// to input the data for the BMI calculation.
// =============================================================================
// =============================================================================
// Components Props

import { handleCMChange } from "@/libs/ui/unit-input-block/utiles";

// =============================================================================
type Props = {
  id: string;
  name: string;
  placeholder: string;
  label?: string;
  unit: string;
};

// =============================================================================
// React Components
// =============================================================================
export const UnitInput = ({
  id,
  name,
  placeholder,
  label = "",
  unit,
}: Props) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="height" className="text-body-s text-gray">
        {label}
      </label>
      <div className="flex flex-row items-center justify-between gap-6 w-full px-6 py-5 border border-input-border rounded-xl">
        <input
          type="number"
          id={id}
          name={name}
          placeholder={placeholder}
          className="w-full text-heading-m text-text placeholder:text-gray"
        />
        <span className="text-heading-m text-brand">{unit}</span>
      </div>
    </div>
  );
};

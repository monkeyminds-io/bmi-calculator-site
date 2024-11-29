// =============================================================================
// File Name: BMI Data Types
// File Description:
// This file contains the definitions of the BMI Data Types
// =============================================================================
export type MetricData = {
  weight: number | null;
  height: number | null;
};

export type ImperialData = {
  weight: {
    st: number | null;
    lbs: number | null;
  };
  height: {
    ft: number | null;
    in: number | null;
  };
};

// =============================================================================
// File Name: BMI Data Types
// File Description:
// This file contains the definitions of the BMI Data Types
// =============================================================================
export type BMIData = {
    weight: number | ImperialWeight | null;
    height: number | ImperialHeight | null;
}

export type ImperialWeight = {
    st: number;
    lbr: number;
}

export type ImperialHeight = {
    ft: number;
    in: number;
}
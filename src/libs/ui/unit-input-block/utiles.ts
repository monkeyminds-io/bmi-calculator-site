// =============================================================================
// File Name: Unit Inputs Block Utiles
// File Description:
// This file contains the functions of the Unit Inputs Block Component
// =============================================================================
// =============================================================================
// Imports
// =============================================================================
import { ImperialData, MetricData } from "@/libs/types/bmi-data";

// =============================================================================
// Functions
// =============================================================================
/**
 * Used to calculate the BMI using Metric Units
 * @param {MetricData} data
 * @returns {string} The BMI result
 */
export const calculateMetricBmi = (data: MetricData): string => {
  return ((data.weight! / data.height! / data.height!) * 10000).toFixed(1);
};

/**
 * Used to calculate the BMI using Imperial Units
 * @param {ImperialData} data
 * @returns {string} The BMI result
 */
export const calculateImperialBmi = (data: ImperialData): string => {
  const weight = data.weight.st! * 14 + data.weight.lbs!;
  const height = data.height.ft! * 12 + data.height.in!;
  return ((weight * 703) / height / height).toFixed(1);
};

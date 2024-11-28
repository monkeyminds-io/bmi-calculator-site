"use client";
// =============================================================================
// File Name: BMI Form
// File Description:
// This file contains the code of the BMI Form
// =============================================================================
// =============================================================================
// Components Imports
// =============================================================================
import { ChangeEvent, useEffect, useState } from "react";
import { Heading } from "../atoms/heading";
import { RadioBTN } from "../atoms/radio-btn";
import { UnitInputBlock } from "../unit-input-block";
import { BMIData } from "@/libs/types/bmi-data";

// =============================================================================
// Components Props
// =============================================================================

// =============================================================================
// React Components
// =============================================================================
export const BMIForm = () => {
  const [unit, setUnit] = useState("metric");
  const [bmi, setBmi] = useState<number>();
  const [classification, setClassification] = useState("a healthy weight");
  const [range, setRange] = useState("63.3kgs - 85.2kgs");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<BMIData>({
    weight: null,
    height: null,
  })

  const handleUnitChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target?.value;
    setUnit(value);
  };

  
  const calculateBmi = () => {
    setLoading(true)
    let result = 0
    setTimeout(() => {
      if(typeof data.weight === "number" && typeof data.height === "number") result = data.weight / (data.height * 100)
      setBmi(result)
      setLoading(false)
    }, 1500);
    console.log(result)
    console.log(data)
  }

  useEffect(() => {
    calculateBmi()
  }, [data])

  // TODO Add Form Action
  return (
    <form
      id="bmi-form"
      className="flex flex-col gap-8 p-8 bg-white rounded-2xl shadow-form"
    >
      <Heading level={2} text={"Enter your details below"} />
      <div className="flex flex-row gap-8">
        <RadioBTN
          id={"metric-unit"}
          name={"unit-type"}
          value={"metric"}
          text={"Metric"}
          checked={true}
          handleChange={handleUnitChange}
        />
        <RadioBTN
          id={"imperial-unit"}
          name={"unit-type"}
          value={"imperial"}
          text={"Imperial"}
          handleChange={handleUnitChange}
        />
      </div>
      <UnitInputBlock unit={unit} data={data} setData={setData} />
      <div className="flex flex-col gap-6 p-8 rounded-2xl bg-brand text-white text-body-s">
        <p>Your BMI is...</p>
        {loading ? (
          <div role="status">
            <svg
              aria-hidden="true"
              className="inline w-12 h-12 text-brand-light animate-spin fill-white"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
        ) : (
          <span className="text-heading-l">{bmi}</span>
        )}
        <p>
          Your BMI suggests you&apos;re {classification}. Your ideal weight is
          between <span className="font-semibold">{range}</span>.
        </p>
      </div>
    </form>
  );
};

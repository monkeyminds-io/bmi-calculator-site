// =============================================================================
// File Name: Container Component
// File Description:
// This file contains the code of the Container Component
// =============================================================================
// =============================================================================
// Components Imports
// =============================================================================
import { ReactNode } from "react";
import clsx from "clsx";

// =============================================================================
// Components Props
// =============================================================================
type Props = {
  children: ReactNode;
  type?: string;
};

// =============================================================================
// React Components
// =============================================================================
export const Container = ({ children, type }: Props) => {
  return (
    <div
      className={clsx(
        "px-6",
        type === "result-content" ? "flex flex-col items-center gap-12" : "",
        type === "result-cards"
          ? "grid grid-rows-3 grid-flow-col gap-10 py-14 bg-result"
          : "",
      )}
    >
      {children}
    </div>
  );
};

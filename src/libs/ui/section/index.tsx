// =============================================================================
// File Name: Section Component
// File Description:
// This file contains the code of the Section Component
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
export const Section = ({ children, type = "" }: Props) => {
  return (
    <section
      className={clsx(
        "py-8",
        type === "hero" ? "relative flex flex-col gap-14" : "",
        type === "result" ? "relative flex flex-col gap-20" : "",
      )}
    >
      {children}
    </section>
  );
};

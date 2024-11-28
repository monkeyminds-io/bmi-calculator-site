// =============================================================================
// File Name: Limited Card
// File Description:
// Thid file contains the limited card component
// =============================================================================
// =============================================================================
// Components Imports
// =============================================================================
import { ReactNode } from "react";
import Image from "next/image";
import { Heading } from "../atoms/heading";

// =============================================================================
// Components Props
// =============================================================================
type Props = {
  icon: string;
  iconAlt: string;
  title: string;
  content: string;
};

// =============================================================================
// React Components
// =============================================================================
export const LimitedCard = ({ icon, iconAlt, title, content }: Props) => {
  return (
    <div className="flex flex-col gap-8 p-6 rounded-2xl bg-white shadow-card">
      <div className="flex flex-row items-center gap-4">
        <Image src={icon} alt={iconAlt} className="w-8 h-8" />
        <Heading level={3} text={title} />
      </div>
      <p className="text-body-m text-gray">{content}</p>
    </div>
  );
};

// =============================================================================
// File Name: Result Card
// File Description:
// This file contains the code of the Result Card to render the card.
// =============================================================================
// =============================================================================
// Components Imports
// =============================================================================
import Image from "next/image";
import { Heading } from "../atoms/heading";

// =============================================================================
// Components Props
// =============================================================================
type Props = {
  icon: string;
  iconAlt: string;
  title: string;
  text: string;
};

// =============================================================================
// React Components
// =============================================================================
export const ResultCard = ({ icon, iconAlt, title, text }: Props) => {
  return (
    <div className="flex flex-col gap-8">
      <Image src={icon} alt={iconAlt} className="w-16 h-16" />
      <div className="flex flex-col gap-6">
        <Heading level={3} text={title} />
        <p className="text-body-m text-gray">{text}</p>
      </div>
    </div>
  );
};

// =============================================================================
// File Name: Result Card
// File Description:
// This file contains the code of the Result Card to render the card.
// =============================================================================
// =============================================================================
// Components Imports
// =============================================================================
import Image from "next/image";

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
    <div>
      <Image src={icon} alt={iconAlt} />
      <div>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
};

// =============================================================================
// File Name: Heading Component
// File Description:
// This File contains the Heading Component, used to render a heading
// =============================================================================
// =============================================================================
// Components Props
// =============================================================================
type Props = {
  level: number;
  text: string;
};

// =============================================================================
// React Components
// =============================================================================
export const Heading = ({ level, text }: Props) => {
  if (level === 1) return <h1 className="text-heading-l">{text}</h1>;
  if (level === 2) return <h2 className="text-heading-m">{text}</h2>;
  if (level === 3) return <h3 className="text-heading-s">{text}</h3>;
  if (level === 4) return <h4 className="text-heading-l">{text}</h4>;
  if (level === 5) return <h5 className="text-heading-l">{text}</h5>;
  if (level === 6) return <h6 className="text-heading-l">{text}</h6>;
};

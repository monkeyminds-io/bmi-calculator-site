// =============================================================================
// File Name: Radio Button
// File Description:
// This file contains the code of the Radio Button Component to manage this type
// of input component in forms.
// =============================================================================
// =============================================================================
// Components Props
// =============================================================================
type Props = {
  id: string;
  name: string;
  value: string;
  text: string;
  checked?: boolean;
  handleChange: Function;
};

// =============================================================================
// React Components
// =============================================================================
export const RadioBTN = ({
  id,
  name,
  value,
  text,
  checked = false,
  handleChange,
}: Props) => {
  return (
    <label
      htmlFor={id}
      className="relative flex items-center gap-4 text-body-m-bold cursor-pointer"
    >
      <input
        id={id}
        type="radio"
        value={value}
        name={name}
        className="appearance-none w-8 h-8 rounded-full border border-gray focus:ring-blue-500 focus:ring-2 peer checked:border-none"
        defaultChecked={checked}
        onChange={(e) => handleChange(e)}
      />
      <span className="absolute top-0 left-0 w-8 h-8 rounded-full peer-checked:border-8 peer-checked:border-brand-light peer-checked:bg-brand"></span>
      {text}
    </label>
  );
};

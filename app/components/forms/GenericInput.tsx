import React, { ChangeEventHandler } from "react";
import { InputProps } from "@/app/utils/typeDeclarations";
interface GenericInputProps extends InputProps {
  type: string;
}

const GenericInput: React.FC<GenericInputProps> = ({
  label,
  name,
  type,
  value,
  onChange,
}) => {
  return (
    <div className="formGroupInline">
      <label>{label}</label>
      <input type={type} name={name} value={value} onChange={onChange} />
    </div>
  );
};

export default GenericInput; 
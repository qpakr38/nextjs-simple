import {
  Control,
  FieldValues,
  useController,
  ValidationRule,
} from "react-hook-form";
import { TextField } from "@mui/material";
import { useMemo } from "react";

type FormInputProps = {
  control: Control<FieldValues, any>;
  name: string;
  label: string;
  required?: boolean | { value: boolean; message: string };
  formType?: "string" | "number";
  pattern?: ValidationRule<RegExp>;
  max?: number;
  min?: number;
  maxLength?: number;
  minLength?: number;
};
const FormInput = ({
  control,
  name,
  label,
  required = false,
  formType = "string",
  pattern,
  max,
  min,
  maxLength,
  minLength,
}: FormInputProps) => {
  const {
    field,
    fieldState: { invalid, isTouched, isDirty, error },
    formState: { errors },
  } = useController({
    name,
    control,
    rules: {
      required: { value: required, message: "필수값" },
      pattern,
      max,
      min,
      minLength: { value: minLength || 0, message: "error" },
      maxLength: { value: maxLength || 100, message: "error" },
    },
  });
  const helpText = useMemo(() => {
    return error?.message || "";
  }, [error]);
  return (
    <TextField
      type={formType}
      onChange={field.onChange}
      onBlur={field.onBlur}
      value={field.value}
      name={field.name}
      label={label}
      inputRef={field.ref}
      required={required}
      error={invalid}
      helperText={helpText}
    />
  );
};
export default FormInput;

"use client";
import { FieldValues, useForm } from "react-hook-form";
import { Button, Stack } from "@mui/material";
import FormInput from "@/components/FormInput";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FieldValues>({
    mode: "onBlur",
    defaultValues: { id: "", password: "" },
  });
  return (
    <>
      <form
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
      >
        <Stack spacing={2}>
          <FormInput
            control={control}
            name="id"
            label="ID"
            required={{ value: true, message: "ID를 입력해주세요." }}
            minLength={4}
            maxLength={10}
          />
          <FormInput
            control={control}
            name="password"
            label="PASSWORD"
            maxLength={1}
          />
          <Button type="submit" variant="contained" sx={{ height: "56px" }}>
            로그인
          </Button>
        </Stack>
      </form>
    </>
  );
};
export default LoginForm;

import { GlobalViewModel } from "@/lib/firebase";
import { Button, PasswordInput, TextInput } from "@mantine/core";
import { NextPage } from "next";
import { FormEventHandler } from "react";
import { useForm } from "react-hook-form";

type Props = {
  email: string;
  password: string;
};

const SignupPage: NextPage = () => {
  const { register, handleSubmit } = useForm({
    defaultValues: { email: "", password: "" },
    values: { email: "", password: "" },
  });

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextInput label="Email" placeholder="Email" {...register("email")} />
        <PasswordInput
          label="Password"
          placeholder="Password"
          {...register("password")}
        />

        <Button type="submit">登録</Button>
      </form>
    </>
  );
};

export default SignupPage;

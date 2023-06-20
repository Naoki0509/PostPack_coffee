import { Button, PasswordInput, TextInput } from "@mantine/core";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { NextPage } from "next";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useRouter } from "next/router";

const AuthSchema = z.object({
  email: z
    .string()
    .min(1, { message: "メールアドレスを入力してください" })
    .email({ message: "メールアドレスが誤っています。" }),
  password: z.string().min(8),
});

type AuthInputType = z.infer<typeof AuthSchema>;

const SignInPage: NextPage = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<AuthInputType>({
    mode: "all",
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(AuthSchema),
  });

  const onSubmit = async (data: AuthInputType) => {
    setIsLoading(true);
    const auth = getAuth();
    await signInWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        router.replace("/");
        console.log("ログイン成功");
      })
      .catch((err) => {
        console.log("ログイン失敗");
      });
    setIsLoading(false);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextInput
          label="メールアドレス"
          error={errors.email?.message}
          {...register("email")}
        />
        <PasswordInput
          label="パスワード"
          error={errors.password?.message}
          {...register("password")}
        />
        <Button type="submit" loading={isLoading}>
          ログイン
        </Button>
      </form>
    </div>
  );
};

export default SignInPage;

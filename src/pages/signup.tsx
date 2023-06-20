import { GlobalContext } from "@/lib/firebase/firebase";
import { Button, PasswordInput, TextInput, Title, em } from "@mantine/core";
import { useForm } from "@mantine/form";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { NextPage } from "next";
import { useRouter } from "next/router";
import nookies from "nookies";
import { useContext, useState } from "react";
import { toast } from "react-hot-toast";

export const SignUpPage: NextPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const { db } = useContext(GlobalContext);

  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },
  });

  const handleSubmit = async () => {
    const auth = getAuth();
    await createUserWithEmailAndPassword(
      auth,
      form.values.email,
      form.values.password
    )
      .then(async (user) => {
        setIsLoading(true);
        const userRef = doc(db, "users", user.user.uid);
        const getUserEmai = await getDoc(doc(db, "users", "email"));

        if (getUserEmai.exists()) {
          toast.error("既に登録されているメールアドレスです");
          setIsLoading(false);
          return;
        }
        await setDoc(userRef, {
          uid: user.user.uid,
          email: user.user.email,
          createdAt: new Date(),
        });
        toast.success("サインアップしました");
        router.push("/");
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        toast.error(error.message);
      });
  };

  return (
    <>
      <Title order={2}>SignUp</Title>
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <TextInput label="メールアドレス" {...form.getInputProps("email")} />
        <PasswordInput label="パスワード" {...form.getInputProps("password")} />
        <Button type="submit">
          {isLoading ? "Loading....." : "サインアップ"}
        </Button>
      </form>
    </>
  );
};

export default SignUpPage;

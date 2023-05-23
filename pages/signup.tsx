import GlobalViewModel from "@/lib/firebase";
import { Button, Paper, PasswordInput, TextInput, Title } from "@mantine/core";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { NextPage } from "next";

const SignupPage: NextPage = () => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const auth = getAuth();

  const onSubmit = async () => {
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

  return (
    <Paper>
      <Title>Sign up</Title>
      <form onSubmit={onSubmit}>
        <TextInput />
        <PasswordInput />
        <Button type="submit">Sign up</Button>
      </form>
    </Paper>
  );
};

export default SignupPage;

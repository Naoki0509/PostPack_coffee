import { z } from "zod";

export const UserSchema = z.object({
  name: z.string().min(1, { message: "名前を入力してください" }),
  email: z
    .string()
    .min(1, { message: "メールアドレスを入力してください" })
    .email({ message: "有効なメールアドレスを入力してください" }),
  password: z.string().min(6),
});

export type User = z.infer<typeof UserSchema>;

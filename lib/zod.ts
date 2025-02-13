import { object, string } from "zod";

export const RegisterSchema = object({
  name: string()
    .trim()
    .min(1, "Name Must Be More Than 1 Character!")
    .max(255, "Name Must Be Less Than 255 Characters!"),
  email: string().trim().email("Invalid Email!"),
  password: string()
    .trim()
    .min(8, "Password Must Be At Least 8 Characters!")
    .max(32, "Password Must Be Less Than 32 Characters!"),
  confirmPassword: string().trim(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords Do Not Match!",
  path: ["confirmPassword"],
});

export const SignInSchema = object({
  email: string().trim().email("Invalid Email!"),
  password: string()
    .trim()
    .min(8, "Password Must Be At Least 8 Characters!")
    .max(32, "Password Must Be Less Than 32 Characters!"),
});

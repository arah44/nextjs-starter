"use server";

import { signIn } from "@/app/auth";
import { AuthError } from "next-auth";

interface AuthState {
  error: string | null;
  success?: boolean;
}

export async function authenticate(
  prevState: AuthState,
  formData: FormData
): Promise<AuthState> {
  try {
    await signIn("credentials", {
      email: formData.get("email") as string,
      password: formData.get("password") as string,
      redirect: false,
    });

    return { error: null, success: true };
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Invalid credentials. Please try again." };
        default:
          return { error: "An error occurred during sign in. Please try again." };
      }
    }
    console.error("Authentication error:", error);
    return { error: "An unexpected error occurred. Please try again later." };
  }
}
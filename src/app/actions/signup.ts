"use server";

import { z } from "zod";
import { createUser } from "@/db/users/create";
import { getUserByEmail } from "@/db/users/read";
import { saltAndHashPassword } from "@/lib/auth/password-helpers";
import { signupSchema } from "@/lib/zod";
import { DBError } from "@/db/db-helpers";

export async function signup(formData: FormData) {
  const validatedFields = signupSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validatedFields.success) {
    const zodErrors = validatedFields.error.flatten().fieldErrors;
    const errors: { [key: string]: string } = {};
    for (const [key, value] of Object.entries(zodErrors)) {
      errors[key] = value[0] || "Invalid input";
    }
    return {
      errors,
      success: false,
    };
  }

  const { name, email, password } = validatedFields.data;

  try {
    // Check if the user already exists
    const existingUser = await getUserByEmail(email);
    if (existingUser) {
      return {
        errors: { email: "This email is already registered" },
        success: false,
      };
    }
  } catch (error) {
    if (error instanceof DBError) {
      console.log("DBError:", error.message);
    } else {
      console.log("Error:", error);
      throw error;
    }
  }

  try {
    // Hash the password
    const hashedPassword = await saltAndHashPassword(password);

    // Create the user in the database
    await createUser({
      name,
      email,
      password: hashedPassword,
    });

    console.log("User created:", { name, email });

    return { errors: null, success: true };
  } catch (error) {
    console.error("Signup error:", error);
    return {
      errors: {
        server: "An unexpected error occurred. Please try again later.",
      },
      success: false,
    };
  }
}

"use client";

import { useFormState } from "react-dom";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { authenticate } from "@/app/actions/authenticate";

const initialState = {
  error: null,
};

export function UserAuthForm() {
  const router = useRouter();
  const [state, formAction] = useFormState(authenticate, initialState);

  if (state.success) {
    router.push("/");
  }

  return (
    <form action={formAction} className="space-y-8">
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" name="email" type="email" placeholder="name@example.com" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <Input id="password" name="password" type="password" required />
      </div>
      {state.error && (
        <div className="text-sm text-red-500">{state.error}</div>
      )}
      <Button type="submit" className="w-full">
        Sign in
      </Button>
    </form>
  );
}
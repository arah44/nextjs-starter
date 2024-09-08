import { Metadata } from "next";
import Link from "next/link";
import { Coffee } from "lucide-react";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { UserAuthForm } from "@/components/auth/sign-in-form";

export const metadata: Metadata = {
  title: "Sign In - RocketKit",
  description: "Sign in to your RocketKit account.",
};

export default function SignInPage() {
  return (
    <>
      <div className="container relative hidden h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <Link
          href="/"
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "absolute right-4 top-4 md:right-8 md:top-8"
          )}
        >
          Home
        </Link>
        <div className="relative hidden h-full flex-col bg-muted p-10 text-primary-foreground dark:border-r lg:flex">
          <div className="absolute inset-0 bg-primary" />
          <div className="relative z-20 flex items-center text-primary-foreground text-lg font-medium">
            <Coffee className="mr-2 h-6 w-6 text-primary-foreground" />
            RocketKit
          </div>
          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2">
              <p className="text-lg text-primary-foreground">
                &ldquo;RocketKit has revolutionized my workflow. It{"'"}s like having a co-pilot for web development!&rdquo;
              </p>
              <footer className="text-sm">Sarah L.</footer>
            </blockquote>
          </div>
        </div>
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight text-primary">
                Sign in to your account
              </h1>
              <p className="text-sm text-muted-foreground">
                Enter your email below to sign in to your account
              </p>
            </div>
            <UserAuthForm />
            <p className="px-8 text-center text-sm text-muted-foreground">
              Don{"'"}t have an account?{" "}
              <Link
                href="/signup"
                className="underline underline-offset-4 hover:text-primary"
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

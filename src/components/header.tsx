import Link from "next/link";
import { Coffee } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Session } from "next-auth";
import { SignOutButton } from "@/components/auth/sign-out-button";
import ThemeToggle from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

export default function Header({ session }: { session: Session | null }) {
  return (
    <header className="container absolute top-0 left-0 right-0 z-50">
      <div className="flex h-20 items-center justify-between py-6">
        <div className="flex items-center space-x-2">
          <Coffee className="h-6 w-6" />
          <span className="text-lg font-medium">RocketKit</span>
        </div>
        <nav className="flex items-center space-x-4">
          <ThemeToggle />
          {session?.user ? (
            <SignOutButton />
          ) : (
            <Button asChild variant="ghost">
              <Link
                href="/signin"
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary"
                )}
              >
                Sign In
              </Link>
            </Button>
          )}
        </nav>
      </div>
    </header>
  );
}

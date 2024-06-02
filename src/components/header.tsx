import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";

const navItems = [
  {
    label: "Home",
    href: "/",
  }
];

export default function Header() {
  return (
    <>
      <header>
        <div className="flex justify-between max-w-6xl mx-auto p-4 ">
          <div>
            <h1>
              <Link href="/">
                Next.js Starter
              </Link>
            </h1>
          </div>
          <div className="flex gap-6">
            <nav>
              <ul className="flex gap-3">
                {navItems.map((item) => (
                  <li key={item.label}>
                    <a href="/">{item.label}</a>
                  </li>
                ))}
              </ul>
            </nav>
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </div>
      </header>
    </>
  );
}

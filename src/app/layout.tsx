import "./globals.css";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import { auth } from "@/app/auth";
import Header from "@/components/header";
import { DebugSheet } from "@/components/debug-sheet";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "RocketKit",
  description: "Your launchpad for stellar web projects!",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const session = await auth();

  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {children}
          <DebugSheet session={session} />
        </Providers>
      </body>
    </html>
  );
}

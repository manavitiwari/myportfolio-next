import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="flex items-center justify-center h-20">
          <div className="container flex items-center justify-between px-4 md:px-6">
            <nav className="items-center hidden gap-4 font-semibold text-lg lg:gap-6 lg:flex">
              <Link className="font-bold" href="#">
                Home
              </Link>
              <Link href="#">About</Link>
              <Link href="#">Projects</Link>
              <Link href="#">Contact</Link>
            </nav>
            <div className="flex items-center gap-4 lg:gap-6">
              <nav className="items-center flex gap-4 font-semibold text-lg lg:gap-6 lg:text-sm">
                <Link href="#">About</Link>
                <Link href="#">Projects</Link>
                <Link href="#">Contact</Link>
              </nav>
            </div>
          </div>
        </header>
        {children}
        <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            © 2024 Acme Inc. All rights reserved.
          </p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <Link
              className="text-xs hover:underline underline-offset-4"
              href="#"
            >
              Terms of Service
            </Link>
            <Link
              className="text-xs hover:underline underline-offset-4"
              href="#"
            >
              Privacy
            </Link>
          </nav>
        </footer>
      </body>
    </html>
  );
}

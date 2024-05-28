import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
console.log("laypout.tsx");

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "What Prompt?",
  description: "Prompt guessing game",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="pb-16">{children}</div>
      </body>
    </html>
  );
}

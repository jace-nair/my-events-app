import type { Metadata } from "next";
import { Poppins } from 'next/font/google';
import "./globals.css";
import { ClerkProvider } from '@clerk/nextjs'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: "My Events App",
  description: "Manage all your important events",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
        <ClerkProvider>
          <body className={poppins.variable}>{children}</body>
        </ClerkProvider>
      </html>
  );
}

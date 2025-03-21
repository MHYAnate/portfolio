import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppinsRegular = localFont({
  src: "./fonts/Poppins-Regular.ttf",
  variable: "--Poppins-Regular",
  weight: "100 900",
});

const poppinsSemiBold = localFont({
  src: "./fonts/Poppins-SemiBold.ttf",
  variable: "--Poppins-SemiBold",
  weight: "100 900",
});

const poppinsBold = localFont({
  src: "./fonts/Poppins-Bold.ttf",
  variable: "--Poppins-Bold",
  weight: "100 900",
});

const ProtestGuerrilla = localFont({
  src: "./fonts/ProtestGuerrilla-Regular.ttf",
  variable: "--ProtestGuerrilla",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "mhYusuf",
  description: "Mohammed Hayatudeen Yusuf",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppinsBold.variable} ${poppinsRegular.variable} ${poppinsSemiBold} ${ProtestGuerrilla.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

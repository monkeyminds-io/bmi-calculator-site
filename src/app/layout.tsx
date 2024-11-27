// =============================================================================
// File Name: Main Layout
// File Description:
// This file contains the main layout of the website.
// =============================================================================
// =============================================================================
// Layout Imports
// =============================================================================
import { Metadata } from "next";
import { ReactNode } from "react";
import { Inter } from "next/font/google";
import "./globals.css";

// =============================================================================
// Layout Props
// =============================================================================
type Props = {
  children: ReactNode;
};

// =============================================================================
// Fonts
// =============================================================================
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

// =============================================================================
// Layout Metadata
// =============================================================================
export const metadata: Metadata = {
  title: {
    template: "%s | Body Mass Index Calculator",
    default: "Frontend Mentor",
  },
  description:
    "This is a solution to the Body Mass Index Calculator challenge on Frontend Mentor. Frontend Mentor challenges help you improve your coding skills by building realistic projects.",
};

// =============================================================================
// Layout Component
// =============================================================================
export default function Layout({ children }: Props) {
  return (
    <html lang="en">
      <body className={`${inter.className} text-text bg-white`}>
        {children}
      </body>
    </html>
  );
}

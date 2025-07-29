import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"
import { Navigation } from "./components/Navigation"
import { Footer } from "./components/Footer"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: "2RD Consulting Associates - Immigration & Visa Consulting Services",
  description:
    "Professional immigration and visa consulting services. We specialize in work permits, study visas, permanent residency, and corporate mobility solutions.",
  keywords:
    "immigration, visa, consulting, work permit, study visa, permanent residency, Nigeria, UK, corporate mobility",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfairDisplay.variable} font-sans`}>
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

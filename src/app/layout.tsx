import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "@/app/globals.css"

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Byte the AI Hackathon - Central University of Rajasthan",
  description:
    "Join Central University of Rajasthan's premier AI hackathon celebrating Engineers Day. September 13-15, 2025.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen antialiased bg-black text-white`}>
        {children}
      </body>
    </html>
  )
}

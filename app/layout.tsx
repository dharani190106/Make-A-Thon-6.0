import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import CustomCursor from "@/components/custom-cursor"

export const metadata: Metadata = {
  title: "Make a Thon 6.0",
  description: "MAKE-A-THON is ECE SVCE's flagship hackathon, fostering innovation and collaboration in tech.",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
            <link rel="icon" href="/new tab logo.png" type="image/png" />
      <body>
        {children}
        <CustomCursor />
      </body>
    </html>
  )
}


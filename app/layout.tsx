import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Suspense } from "react"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "$SOSPIFY - Sucks On South Parkifcatiocn",
  description:
    // **FIX IS HERE:** The string now correctly ends with a double quote "
    "Join the Sucks On South Parkifcatiocn", 
  keywords: ["South Park", "SOSPIFY", "AI Art", "Community", "Memes", "Animation"],
  authors: [{ name: "SPVERSE Team" }],
  creator: "SOSPIFY",
  publisher: "SOSPIFY",
  icons: {
    icon: "/favicon.jpg",
    shortcut: "/favicon.jpg",
    apple: "/favicon.jpg",
  },
  openGraph: {
    title: "$SOSPIFY -  Sucks On South Parkifcatiocn",
    description: "Join the Sucks On South Parkifcatiocn",
    // NOTE: I also noticed a potential issue here with "https://https://" in your url. I've left it for you to verify.
    url: "https://https://www.southparkify.xyz", 
    siteName: "SOSPIFY",
    images: [
      {
        url: "/favicon.jpg",
        width: 1200,
        height: 1200,
        alt: "SPVERSE Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "$SOSPIFY -  Sucks On South Parkifcatiocn",
    description: "Join the Sucks On South Parkifcatiocn",
    images: ["/favicon.jpg"],
    creator: "@South_Parkify",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Suspense
          fallback={
            <div className="min-h-screen bg-black flex items-center justify-center">
              <div className="text-white">Loading...</div>
            </div>
          }
        >
          {children}
        </Suspense>
      </body>
    </html>
  )
}
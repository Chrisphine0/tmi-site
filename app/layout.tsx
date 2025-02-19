"use client"

import { useState, useEffect } from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Script from "next/script"
import { Toaster } from "@/components/ui/toaster"
import Loader from "./components/Loader"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 10000) // 10 seconds

    return () => clearTimeout(timer)
  }, [])

  return (
    <html lang="en">
      <head>
        <title>Tuhifadhi Mchanga Initiative | Empowering Communities for Soil Health</title>
        <meta
          name="description"
          content="Empowering communities on soil health through awareness, restoration, and advocacy."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="soil conservation, sustainable agriculture, environmental education, Kenya, community empowerment"
        />
        <meta name="author" content="Tuhifadhi Mchanga Initiative" />
        <link rel="icon" href="/images/favicon.jpg" />
        <link rel="apple-touch-icon" href="/images/logo.png" />
        <Script src="https://www.paypal.com/sdk/js?client-id=YOUR_PAYPAL_CLIENT_ID" strategy="afterInteractive" />
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "NGO",
              name: "Tuhifadhi Mchanga Initiative",
              description: "Empowering communities on soil health through awareness, restoration, and advocacy.",
              url: "https://www.tuhifadhimchanga.org",
              logo: "https://www.tuhifadhimchanga.org/images/logo.png",
              sameAs: [
                "https://www.facebook.com/profile.php?id=61558662527742",
                "https://www.instagram.com/tuhifadhimchanga",
                "https://www.linkedin.com/company/tuhifadhi-mchanga-initiative/",
              ],
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        {isLoading && <Loader />}
        {!isLoading && (
          <>
            <Header />
            <main className="min-h-screen">{children}</main>
            <Footer />
          </>
        )}
        <Toaster />
      </body>
    </html>
  )
}


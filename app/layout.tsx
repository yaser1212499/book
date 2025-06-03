import type React from "react"
import type { Metadata } from "next"
import { Vazirmatn } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ChatWidget from "@/components/chat-widget"
import { CartProvider } from "@/contexts/cart-context"

const vazirmatn = Vazirmatn({
  subsets: ["arabic"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "نواتیک - فروشگاه آنلاین کتاب",
  description: "بهترین کتاب‌های فارسی و انگلیسی را از نواتیک بخرید. ارسال سریع و قیمت مناسب",
  keywords: "کتاب، فروشگاه کتاب، کتاب فارسی، نواتیک، خرید کتاب آنلاین",
  authors: [{ name: "Novatech Bookstore" }],
  openGraph: {
    title: "نواتیک - فروشگاه آنلاین کتاب",
    description: "بهترین کتاب‌های فارسی و انگلیسی را از نواتیک بخرید",
    type: "website",
    locale: "fa_IR",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fa" dir="rtl" className={vazirmatn.className}>
      <body className="antialiased">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <CartProvider>
            <div className="flex flex-col min-h-screen">
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
            <ChatWidget />
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

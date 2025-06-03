"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Search, ShoppingCart, Menu, Moon, Sun, User, Heart } from "lucide-react"
import { useTheme } from "next-themes"
import { useCart } from "@/contexts/cart-context"

export default function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const { items } = useCart()

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 space-x-reverse">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">ن</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              نواتیک
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 space-x-reverse">
            <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
              خانه
            </Link>
            <Link href="/books" className="text-sm font-medium hover:text-primary transition-colors">
              کتاب‌ها
            </Link>
            <Link href="/categories" className="text-sm font-medium hover:text-primary transition-colors">
              دسته‌بندی‌ها
            </Link>
            <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors">
              درباره ما
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:text-primary transition-colors">
              تماس با ما
            </Link>
          </nav>

          {/* Search Bar */}
          <div className="hidden lg:flex items-center flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input placeholder="جستجوی کتاب، نویسنده..." className="pr-10 glassmorphism" />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-2 space-x-reverse">
            {/* Mobile Search */}
            <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setIsSearchOpen(!isSearchOpen)}>
              <Search className="w-5 h-5" />
            </Button>

            {/* Theme Toggle */}
            <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>

            {/* Wishlist */}
            <Button variant="ghost" size="icon">
              <Heart className="w-5 h-5" />
            </Button>

            {/* Cart */}
            <Link href="/cart">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="w-5 h-5" />
                {totalItems > 0 && (
                  <Badge className="absolute -top-2 -left-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs">
                    {totalItems}
                  </Badge>
                )}
              </Button>
            </Link>

            {/* User Account */}
            <Button variant="ghost" size="icon">
              <User className="w-5 h-5" />
            </Button>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex flex-col space-y-4 mt-8">
                  <Link href="/" className="text-lg font-medium hover:text-primary transition-colors">
                    خانه
                  </Link>
                  <Link href="/books" className="text-lg font-medium hover:text-primary transition-colors">
                    کتاب‌ها
                  </Link>
                  <Link href="/categories" className="text-lg font-medium hover:text-primary transition-colors">
                    دسته‌بندی‌ها
                  </Link>
                  <Link href="/about" className="text-lg font-medium hover:text-primary transition-colors">
                    درباره ما
                  </Link>
                  <Link href="/contact" className="text-lg font-medium hover:text-primary transition-colors">
                    تماس با ما
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {/* Mobile Search */}
        {isSearchOpen && (
          <div className="lg:hidden py-4 border-t">
            <div className="relative">
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input placeholder="جستجوی کتاب، نویسنده..." className="pr-10" />
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

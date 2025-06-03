"use client"

import { useState } from "react"
import { useParams } from "next/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Star, ShoppingCart, Heart, Eye, Search, Grid, List, BookOpen } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { useCart } from "@/contexts/cart-context"

// Mock data for category books
const categoryBooks = {
  1: {
    // ادبیات
    name: "ادبیات",
    description: "مجموعه‌ای از بهترین آثار ادبی فارسی و جهان",
    image: "/placeholder.svg?height=300&width=1200",
    books: [
      {
        id: 1,
        title: "کلیدر",
        author: "محمود دولت‌آبادی",
        price: 450,
        originalPrice: 500,
        rating: 4.8,
        reviews: 124,
        image: "/placeholder.svg?height=300&width=200",
        isNew: true,
        isBestseller: false,
        stock: 15,
      },
      {
        id: 2,
        title: "سووشون",
        author: "سیمین دانشور",
        price: 380,
        originalPrice: 420,
        rating: 4.9,
        reviews: 89,
        image: "/placeholder.svg?height=300&width=200",
        isNew: false,
        isBestseller: true,
        stock: 8,
      },
      {
        id: 7,
        title: "یک‌شب‌بازی",
        author: "مونیرو راوی‌پور",
        price: 350,
        originalPrice: 380,
        rating: 4.5,
        reviews: 76,
        image: "/placeholder.svg?height=300&width=200",
        isNew: false,
        isBestseller: false,
        stock: 14,
      },
      {
        id: 11,
        title: "داش آکل",
        author: "صادق هدایت",
        price: 280,
        originalPrice: 320,
        rating: 4.7,
        reviews: 156,
        image: "/placeholder.svg?height=300&width=200",
        isNew: false,
        isBestseller: true,
        stock: 22,
      },
      {
        id: 12,
        title: "بوف کور",
        author: "صادق هدایت",
        price: 320,
        originalPrice: 350,
        rating: 4.6,
        reviews: 98,
        image: "/placeholder.svg?height=300&width=200",
        isNew: true,
        isBestseller: false,
        stock: 18,
      },
      {
        id: 13,
        title: "مادر",
        author: "مکسیم گورکی",
        price: 420,
        originalPrice: 450,
        rating: 4.8,
        reviews: 167,
        image: "/placeholder.svg?height=300&width=200",
        isNew: false,
        isBestseller: true,
        stock: 6,
      },
    ],
  },
  // Add more categories as needed
}

export default function CategoryPage() {
  const params = useParams()
  const { addItem } = useCart()
  const categoryId = Number(params.id)

  const [searchTerm, setSearchTerm] = useState("")
  const [sortBy, setSortBy] = useState("newest")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [priceRange, setPriceRange] = useState({ min: 0, max: 1000 })

  const categoryData = categoryBooks[categoryId as keyof typeof categoryBooks]

  if (!categoryData) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">دسته‌بندی یافت نشد</h1>
            <Link href="/categories">
              <Button>بازگشت به دسته‌بندی‌ها</Button>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  const filteredBooks = categoryData.books.filter((book) => {
    const matchesSearch =
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesPrice = book.price >= priceRange.min && book.price <= priceRange.max
    return matchesSearch && matchesPrice
  })

  const sortedBooks = [...filteredBooks].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price
      case "price-high":
        return b.price - a.price
      case "rating":
        return b.rating - a.rating
      case "popular":
        return b.reviews - a.reviews
      default:
        return 0
    }
  })

  const handleAddToCart = (book: (typeof categoryData.books)[0]) => {
    addItem({
      id: book.id,
      title: book.title,
      author: book.author,
      price: book.price,
      image: book.image,
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4 py-16">
          <div className="relative">
            <div className="absolute inset-0">
              <Image
                src={categoryData.image || "/placeholder.svg"}
                alt={categoryData.name}
                fill
                className="object-cover opacity-20 rounded-2xl"
              />
            </div>
            <div className="relative text-center py-16">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <h1 className="text-4xl lg:text-6xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {categoryData.name}
                  </span>
                </h1>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">{categoryData.description}</p>
                <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400">
                  {sortedBooks.length.toLocaleString("fa-IR")} کتاب موجود
                </Badge>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8"
        >
          <div className="flex flex-col lg:flex-row gap-4 mb-4">
            <div className="flex-1 relative">
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="جستجوی کتاب، نویسنده..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pr-10"
              />
            </div>

            <div className="flex gap-2">
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="مرتب‌سازی" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">جدیدترین</SelectItem>
                  <SelectItem value="price-low">ارزان‌ترین</SelectItem>
                  <SelectItem value="price-high">گران‌ترین</SelectItem>
                  <SelectItem value="rating">بالاترین امتیاز</SelectItem>
                  <SelectItem value="popular">محبوب‌ترین</SelectItem>
                </SelectContent>
              </Select>

              <div className="flex border rounded-lg">
                <Button
                  variant={viewMode === "grid" ? "default" : "ghost"}
                  size="icon"
                  onClick={() => setViewMode("grid")}
                >
                  <Grid className="w-4 h-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "ghost"}
                  size="icon"
                  onClick={() => setViewMode("list")}
                >
                  <List className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Books Grid/List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {viewMode === "grid" ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
              {sortedBooks.map((book, index) => (
                <motion.div
                  key={book.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                >
                  <Card className="group cursor-pointer transition-all duration-300 hover:shadow-2xl book-card-hover glassmorphism border-0 overflow-hidden">
                    <div className="relative">
                      <div className="aspect-[3/4] relative overflow-hidden">
                        <Image
                          src={book.image || "/placeholder.svg"}
                          alt={book.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>

                      {/* Badges */}
                      <div className="absolute top-2 right-2 flex flex-col gap-1">
                        {book.isNew && <Badge className="bg-green-500 hover:bg-green-600 text-xs">جدید</Badge>}
                        {book.isBestseller && (
                          <Badge className="bg-orange-500 hover:bg-orange-600 text-xs">پرفروش</Badge>
                        )}
                      </div>

                      {/* Quick Actions */}
                      <div className="absolute top-2 left-2 flex flex-col gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Button size="icon" variant="secondary" className="w-7 h-7">
                          <Heart className="w-3 h-3" />
                        </Button>
                        <Link href={`/book/${book.id}`}>
                          <Button size="icon" variant="secondary" className="w-7 h-7">
                            <Eye className="w-3 h-3" />
                          </Button>
                        </Link>
                      </div>
                    </div>

                    <CardContent className="p-3 md:p-4">
                      <h3 className="font-bold text-sm md:text-base mb-1 line-clamp-2 group-hover:text-primary transition-colors">
                        {book.title}
                      </h3>

                      <p className="text-muted-foreground text-xs md:text-sm mb-2">{book.author}</p>

                      {/* Rating */}
                      <div className="flex items-center gap-1 mb-2">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-3 h-3 ${
                                i < Math.floor(book.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-xs font-medium">{book.rating}</span>
                      </div>

                      {/* Price */}
                      <div className="flex flex-col gap-1 mb-3">
                        <span className="text-lg md:text-xl font-bold text-primary">
                          {book.price.toLocaleString("fa-IR")} افغانی
                        </span>
                        {book.originalPrice > book.price && (
                          <span className="text-xs text-muted-foreground line-through">
                            {book.originalPrice.toLocaleString("fa-IR")}
                          </span>
                        )}
                      </div>

                      {/* Add to Cart */}
                      <Button
                        onClick={() => handleAddToCart(book)}
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-xs md:text-sm"
                        disabled={book.stock === 0}
                        size="sm"
                      >
                        <ShoppingCart className="w-3 h-3 ml-1" />
                        افزودن به سبد
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {sortedBooks.map((book, index) => (
                <motion.div
                  key={book.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                >
                  <Card className="glassmorphism border-0 hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex gap-6">
                        <div className="w-24 h-32 relative overflow-hidden rounded-lg flex-shrink-0">
                          <Image
                            src={book.image || "/placeholder.svg"}
                            alt={book.title}
                            fill
                            className="object-cover"
                          />
                        </div>

                        <div className="flex-1 space-y-2">
                          <div className="flex items-start justify-between">
                            <div>
                              <div className="flex gap-2 mb-2">
                                {book.isNew && <Badge className="bg-green-500 text-xs">جدید</Badge>}
                                {book.isBestseller && <Badge className="bg-orange-500 text-xs">پرفروش</Badge>}
                              </div>
                              <h3 className="font-bold text-xl mb-1">{book.title}</h3>
                              <p className="text-muted-foreground">{book.author}</p>
                            </div>
                            <div className="text-left">
                              <div className="text-2xl font-bold text-primary mb-1">
                                {book.price.toLocaleString("fa-IR")} افغانی
                              </div>
                              {book.originalPrice > book.price && (
                                <div className="text-sm text-muted-foreground line-through">
                                  {book.originalPrice.toLocaleString("fa-IR")} افغانی
                                </div>
                              )}
                            </div>
                          </div>

                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`w-4 h-4 ${
                                    i < Math.floor(book.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                                  }`}
                                />
                              ))}
                            </div>
                            <span className="text-sm font-medium">{book.rating}</span>
                            <span className="text-xs text-muted-foreground">
                              ({book.reviews.toLocaleString("fa-IR")} نظر)
                            </span>
                          </div>

                          <div className="flex items-center justify-between pt-4">
                            <div className="text-sm text-muted-foreground">
                              {book.stock > 10 ? "موجود در انبار" : `تنها ${book.stock} عدد باقی مانده`}
                            </div>
                            <div className="flex gap-2">
                              <Button variant="outline" size="icon">
                                <Heart className="w-4 h-4" />
                              </Button>
                              <Link href={`/book/${book.id}`}>
                                <Button variant="outline" size="icon">
                                  <Eye className="w-4 h-4" />
                                </Button>
                              </Link>
                              <Button
                                onClick={() => handleAddToCart(book)}
                                className="bg-gradient-to-r from-blue-600 to-purple-600"
                              >
                                <ShoppingCart className="w-4 h-4 ml-2" />
                                افزودن به سبد
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}

          {sortedBooks.length === 0 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-16">
              <div className="w-32 h-32 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-full flex items-center justify-center mx-auto mb-6">
                <BookOpen className="w-16 h-16 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">کتابی یافت نشد</h3>
              <p className="text-muted-foreground">لطفاً کلمات کلیدی مختلفی را امتحان کنید</p>
            </motion.div>
          )}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16"
        >
          <Card className="glassmorphism border-0 overflow-hidden">
            <div className="relative">
              <div className="absolute inset-0">
                <Image
                  src="/placeholder.svg?height=300&width=1200"
                  alt="کتابخانه"
                  fill
                  className="object-cover opacity-20"
                />
              </div>
              <CardContent className="relative p-12 text-center">
                <div className="max-w-2xl mx-auto">
                  <h2 className="text-3xl font-bold mb-4">
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      کتاب مورد نظرتان را پیدا نکردید؟
                    </span>
                  </h2>
                  <p className="text-muted-foreground text-lg mb-8">
                    با تیم پشتیبانی ما تماس بگیرید تا کتاب مورد نظرتان را برایتان تهیه کنیم
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/contact">
                      <Button
                        size="lg"
                        className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                      >
                        تماس با ما
                      </Button>
                    </Link>
                    <Link href="/categories">
                      <Button size="lg" variant="outline">
                        سایر دسته‌بندی‌ها
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}

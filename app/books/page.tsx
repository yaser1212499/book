"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Separator } from "@/components/ui/separator"
import { Star, ShoppingCart, Heart, Eye, Search, Filter, Grid, List } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { useCart } from "@/contexts/cart-context"

const books = [
  {
    id: 1,
    title: "کلیدر",
    author: "محمود دولت‌آبادی",
    price: 450,
    originalPrice: 500,
    rating: 4.8,
    reviews: 124,
    image: "/placeholder.svg?height=300&width=200",
    category: "ادبیات",
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
    category: "ادبیات",
    isNew: false,
    isBestseller: true,
    stock: 8,
  },
  {
    id: 3,
    title: "مردی که همسرش را با کلاه اشتباه گرفت",
    author: "الیور ساکس",
    price: 320,
    originalPrice: 350,
    rating: 4.7,
    reviews: 156,
    image: "/placeholder.svg?height=300&width=200",
    category: "روانشناسی",
    isNew: false,
    isBestseller: false,
    stock: 22,
  },
  {
    id: 4,
    title: "هری پاتر و سنگ جادو",
    author: "جی.کی. رولینگ",
    price: 520,
    originalPrice: 580,
    rating: 4.9,
    reviews: 234,
    image: "/placeholder.svg?height=300&width=200",
    category: "فانتزی",
    isNew: false,
    isBestseller: true,
    stock: 12,
  },
  {
    id: 5,
    title: "اثر مرکب",
    author: "دارن هاردی",
    price: 280,
    originalPrice: 320,
    rating: 4.6,
    reviews: 98,
    image: "/placeholder.svg?height=300&width=200",
    category: "کسب و کار",
    isNew: true,
    isBestseller: false,
    stock: 18,
  },
  {
    id: 6,
    title: "چرا ملت‌ها شکست می‌خورند",
    author: "دارون عاصم‌اوغلو",
    price: 680,
    originalPrice: 750,
    rating: 4.8,
    reviews: 167,
    image: "/placeholder.svg?height=300&width=200",
    category: "اقتصاد",
    isNew: false,
    isBestseller: true,
    stock: 6,
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
    category: "ادبیات",
    isNew: false,
    isBestseller: false,
    stock: 14,
  },
  {
    id: 8,
    title: "هنر جنگ",
    author: "سون تزو",
    price: 240,
    originalPrice: 280,
    rating: 4.7,
    reviews: 189,
    image: "/placeholder.svg?height=300&width=200",
    category: "فلسفه",
    isNew: false,
    isBestseller: true,
    stock: 25,
  },
]

const categories = ["همه", "ادبیات", "روانشناسی", "فانتزی", "کسب و کار", "اقتصاد", "فلسفه"]

export default function BooksPage() {
  const { addItem } = useCart()
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("همه")
  const [sortBy, setSortBy] = useState("newest")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [priceRange, setPriceRange] = useState({ min: 0, max: 1000 })
  const [showFilters, setShowFilters] = useState(false)

  const filteredBooks = books.filter((book) => {
    const matchesSearch =
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "همه" || book.category === selectedCategory
    const matchesPrice = book.price >= priceRange.min && book.price <= priceRange.max

    return matchesSearch && matchesCategory && matchesPrice
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

  const handleAddToCart = (book: (typeof books)[0]) => {
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
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              فروشگاه کتاب
            </span>
          </h1>
          <p className="text-muted-foreground">{sortedBooks.length.toLocaleString("fa-IR")} کتاب یافت شد</p>
        </motion.div>

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

              <Button variant="outline" onClick={() => setShowFilters(!showFilters)} className="lg:hidden">
                <Filter className="w-4 h-4" />
              </Button>

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

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar Filters */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`lg:block ${showFilters ? "block" : "hidden"}`}
          >
            <Card className="glassmorphism border-0 sticky top-8">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-4">فیلترها</h3>

                {/* Categories */}
                <div className="mb-6">
                  <h4 className="font-semibold mb-3">دسته‌بندی</h4>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <div key={category} className="flex items-center space-x-2 space-x-reverse">
                        <Checkbox
                          id={category}
                          checked={selectedCategory === category}
                          onCheckedChange={() => setSelectedCategory(category)}
                        />
                        <label htmlFor={category} className="text-sm cursor-pointer">
                          {category}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <Separator className="my-4" />

                {/* Price Range */}
                <div className="mb-6">
                  <h4 className="font-semibold mb-3">محدوده قیمت (افغانی)</h4>
                  <div className="space-y-2">
                    <div className="flex gap-2">
                      <Input
                        type="number"
                        placeholder="حداقل"
                        value={priceRange.min}
                        onChange={(e) => setPriceRange((prev) => ({ ...prev, min: Number(e.target.value) }))}
                      />
                      <Input
                        type="number"
                        placeholder="حداکثر"
                        value={priceRange.max}
                        onChange={(e) => setPriceRange((prev) => ({ ...prev, max: Number(e.target.value) }))}
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Books Grid/List */}
          <div className="lg:col-span-3">
            {viewMode === "grid" ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {sortedBooks.map((book, index) => (
                  <motion.div
                    key={book.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
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
                        <div className="absolute top-3 right-3 flex flex-col gap-2">
                          {book.isNew && <Badge className="bg-green-500 hover:bg-green-600">جدید</Badge>}
                          {book.isBestseller && <Badge className="bg-orange-500 hover:bg-orange-600">پرفروش</Badge>}
                        </div>

                        {/* Quick Actions */}
                        <div className="absolute top-3 left-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <Button size="icon" variant="secondary" className="w-8 h-8">
                            <Heart className="w-4 h-4" />
                          </Button>
                          <Link href={`/book/${book.id}`}>
                            <Button size="icon" variant="secondary" className="w-8 h-8">
                              <Eye className="w-4 h-4" />
                            </Button>
                          </Link>
                        </div>
                      </div>

                      <CardContent className="p-6">
                        <div className="mb-3">
                          <Badge variant="outline" className="text-xs">
                            {book.category}
                          </Badge>
                        </div>

                        <h3 className="font-bold text-lg mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                          {book.title}
                        </h3>

                        <p className="text-muted-foreground text-sm mb-3">{book.author}</p>

                        {/* Rating */}
                        <div className="flex items-center gap-2 mb-4">
                          <div className="flex items-center">
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
                            ({book.reviews.toLocaleString("fa-IR")})
                          </span>
                        </div>

                        {/* Price */}
                        <div className="flex items-center gap-2 mb-4">
                          <span className="text-2xl font-bold text-primary">
                            {book.price.toLocaleString("fa-IR")} افغانی
                          </span>
                          {book.originalPrice > book.price && (
                            <span className="text-sm text-muted-foreground line-through">
                              {book.originalPrice.toLocaleString("fa-IR")}
                            </span>
                          )}
                        </div>

                        {/* Add to Cart */}
                        <Button
                          onClick={() => handleAddToCart(book)}
                          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                          disabled={book.stock === 0}
                        >
                          <ShoppingCart className="w-4 h-4 ml-2" />
                          افزودن به سبد خرید
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
                                <Badge variant="outline" className="text-xs mb-2">
                                  {book.category}
                                </Badge>
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
                              <div className="flex gap-2">
                                {book.isNew && <Badge className="bg-green-500">جدید</Badge>}
                                {book.isBestseller && <Badge className="bg-orange-500">پرفروش</Badge>}
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
                  <Search className="w-16 h-16 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">کتابی یافت نشد</h3>
                <p className="text-muted-foreground">لطفاً کلمات کلیدی یا فیلترهای مختلفی را امتحان کنید</p>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

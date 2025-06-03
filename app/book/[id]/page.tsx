"use client"

import { useState } from "react"
import { useParams } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, ShoppingCart, Heart, Share2, Truck, Shield, RotateCcw, Plus, Minus } from "lucide-react"
import { useCart } from "@/contexts/cart-context"
import { motion } from "framer-motion"

// Mock book data
const bookData = {
  id: 1,
  title: "کلیدر",
  author: "محمود دولت‌آبادی",
  price: 450,
  originalPrice: 500,
  rating: 4.8,
  reviews: 124,
  image: "/placeholder.svg?height=600&width=400",
  category: "ادبیات",
  publisher: "نشر چشمه",
  pages: 892,
  language: "فارسی",
  isbn: "978-964-386-456-7",
  publishDate: "۱۴۰۰",
  stock: 15,
  description:
    "کلیدر یکی از شاهکارهای ادبیات معاصر ایران است که توسط محمود دولت‌آبادی نوشته شده. این رمان داستان زندگی مردم روستایی ایران را در دوران پهلوی دوم به تصویر می‌کشد.",
  features: ["جلد سخت با کیفیت بالا", "چاپ روی کاغذ تحریر", "طراحی جلد اختصاصی", "شامل مقدمه نویسنده"],
}

const reviews = [
  {
    id: 1,
    name: "احمد محمدی",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 5,
    date: "۲ هفته پیش",
    comment: "یکی از بهترین رمان‌هایی که تا حالا خوندم. دولت‌آبادی واقعاً استاده.",
  },
  {
    id: 2,
    name: "فاطمه احمدی",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 5,
    date: "۱ ماه پیش",
    comment: "کتاب فوق‌العاده‌ای بود. توصیه می‌کنم حتماً بخونید.",
  },
  {
    id: 3,
    name: "علی رضایی",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 4,
    date: "۳ هفته پیش",
    comment: "کیفیت چاپ عالی بود و محتوا هم بسیار جذاب.",
  },
]

const similarBooks = [
  {
    id: 2,
    title: "سووشون",
    author: "سیمین دانشور",
    price: 380,
    image: "/placeholder.svg?height=200&width=150",
    rating: 4.9,
  },
  {
    id: 3,
    title: "داش آکل",
    author: "صادق هدایت",
    price: 320,
    image: "/placeholder.svg?height=200&width=150",
    rating: 4.7,
  },
  {
    id: 4,
    title: "مادر",
    author: "مکسیم گورکی",
    price: 420,
    image: "/placeholder.svg?height=200&width=150",
    rating: 4.6,
  },
]

export default function BookDetailPage() {
  const params = useParams()
  const { addItem } = useCart()
  const [quantity, setQuantity] = useState(1)
  const [isWishlisted, setIsWishlisted] = useState(false)

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem({
        id: bookData.id,
        title: bookData.title,
        author: bookData.author,
        price: bookData.price,
        image: bookData.image,
      })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Book Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="aspect-[3/4] relative overflow-hidden rounded-2xl shadow-2xl">
              <Image src={bookData.image || "/placeholder.svg"} alt={bookData.title} fill className="object-cover" />
            </div>
          </motion.div>

          {/* Book Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <Badge className="mb-3">{bookData.category}</Badge>
              <h1 className="text-3xl lg:text-4xl font-bold mb-2">{bookData.title}</h1>
              <p className="text-xl text-muted-foreground mb-4">نوشته {bookData.author}</p>

              {/* Rating */}
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(bookData.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="font-medium">{bookData.rating}</span>
                <span className="text-muted-foreground">({bookData.reviews.toLocaleString("fa-IR")} نظر)</span>
              </div>
            </div>

            {/* Price */}
            <div className="space-y-2">
              <div className="flex items-center gap-4">
                <span className="text-3xl font-bold text-primary">{bookData.price.toLocaleString("fa-IR")} افغانی</span>
                {bookData.originalPrice > bookData.price && (
                  <span className="text-lg text-muted-foreground line-through">
                    {bookData.originalPrice.toLocaleString("fa-IR")} افغانی
                  </span>
                )}
              </div>
              {bookData.originalPrice > bookData.price && (
                <Badge variant="destructive">
                  {Math.round(((bookData.originalPrice - bookData.price) / bookData.originalPrice) * 100)}% تخفیف
                </Badge>
              )}
            </div>

            {/* Stock */}
            <div className="flex items-center gap-2">
              <div className={`w-3 h-3 rounded-full ${bookData.stock > 10 ? "bg-green-500" : "bg-orange-500"}`}></div>
              <span className={`text-sm ${bookData.stock > 10 ? "text-green-600" : "text-orange-600"}`}>
                {bookData.stock > 10 ? "موجود در انبار" : `تنها ${bookData.stock} عدد باقی مانده`}
              </span>
            </div>

            {/* Quantity and Actions */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="font-medium">تعداد:</span>
                <div className="flex items-center border rounded-lg">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    disabled={quantity <= 1}
                  >
                    <Minus className="w-4 h-4" />
                  </Button>
                  <span className="px-4 py-2 font-medium">{quantity}</span>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setQuantity(Math.min(bookData.stock, quantity + 1))}
                    disabled={quantity >= bookData.stock}
                  >
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <div className="flex gap-3">
                <Button
                  onClick={handleAddToCart}
                  className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  disabled={bookData.stock === 0}
                >
                  <ShoppingCart className="w-4 h-4 ml-2" />
                  افزودن به سبد خرید
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className={isWishlisted ? "text-red-500 border-red-500" : ""}
                >
                  <Heart className={`w-4 h-4 ${isWishlisted ? "fill-current" : ""}`} />
                </Button>
                <Button variant="outline" size="icon">
                  <Share2 className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center gap-2 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <Truck className="w-5 h-5 text-green-600" />
                <span className="text-sm">ارسال رایگان</span>
              </div>
              <div className="flex items-center gap-2 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <Shield className="w-5 h-5 text-blue-600" />
                <span className="text-sm">ضمانت اصالت</span>
              </div>
              <div className="flex items-center gap-2 p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                <RotateCcw className="w-5 h-5 text-orange-600" />
                <span className="text-sm">۷ روز مرجوعی</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Tabs Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Tabs defaultValue="description" className="mb-16">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="description">توضیحات</TabsTrigger>
              <TabsTrigger value="specifications">مشخصات</TabsTrigger>
              <TabsTrigger value="reviews">نظرات</TabsTrigger>
            </TabsList>

            <TabsContent value="description" className="mt-6">
              <Card className="glassmorphism border-0">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">درباره کتاب</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">{bookData.description}</p>
                  <h4 className="font-semibold mb-3">ویژگی‌های این نسخه:</h4>
                  <ul className="space-y-2">
                    {bookData.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="specifications" className="mt-6">
              <Card className="glassmorphism border-0">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">مشخصات فنی</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="font-medium">نویسنده:</span>
                        <span className="text-muted-foreground">{bookData.author}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">ناشر:</span>
                        <span className="text-muted-foreground">{bookData.publisher}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">تعداد صفحات:</span>
                        <span className="text-muted-foreground">{bookData.pages.toLocaleString("fa-IR")}</span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="font-medium">زبان:</span>
                        <span className="text-muted-foreground">{bookData.language}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">شابک:</span>
                        <span className="text-muted-foreground" dir="ltr">
                          {bookData.isbn}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">سال انتشار:</span>
                        <span className="text-muted-foreground">{bookData.publishDate}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="reviews" className="mt-6">
              <Card className="glassmorphism border-0">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-6">نظرات کاربران</h3>
                  <div className="space-y-6">
                    {reviews.map((review) => (
                      <div key={review.id}>
                        <div className="flex items-start gap-4">
                          <Avatar>
                            <AvatarImage src={review.avatar || "/placeholder.svg"} alt={review.name} />
                            <AvatarFallback>
                              {review.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <h4 className="font-semibold">{review.name}</h4>
                              <div className="flex items-center gap-1">
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`w-4 h-4 ${
                                      i < review.rating ? "text-yellow-400 fill-current" : "text-gray-300"
                                    }`}
                                  />
                                ))}
                              </div>
                              <span className="text-sm text-muted-foreground">{review.date}</span>
                            </div>
                            <p className="text-muted-foreground">{review.comment}</p>
                          </div>
                        </div>
                        {review.id !== reviews[reviews.length - 1].id && <Separator className="mt-6" />}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </motion.div>

        {/* Similar Books */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2 className="text-2xl font-bold mb-8">کتاب‌های مشابه</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {similarBooks.map((book) => (
              <Card
                key={book.id}
                className="group cursor-pointer transition-all duration-300 hover:shadow-xl book-card-hover glassmorphism border-0"
              >
                <CardContent className="p-4">
                  <div className="aspect-[3/4] relative overflow-hidden rounded-lg mb-3">
                    <Image
                      src={book.image || "/placeholder.svg"}
                      alt={book.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="font-semibold text-sm mb-1 line-clamp-2">{book.title}</h3>
                  <p className="text-xs text-muted-foreground mb-2">{book.author}</p>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-primary">{book.price.toLocaleString("fa-IR")} افغانی</span>
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 text-yellow-400 fill-current" />
                      <span className="text-xs">{book.rating}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

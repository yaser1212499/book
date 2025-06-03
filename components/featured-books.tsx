"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, ShoppingCart, Heart, Eye } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { useCart } from "@/contexts/cart-context"

const featuredBooks = [
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
]

export default function FeaturedBooks() {
  const { addItem } = useCart()

  const handleAddToCart = (book: (typeof featuredBooks)[0]) => {
    addItem({
      id: book.id,
      title: book.title,
      author: book.author,
      price: book.price,
      image: book.image,
      quantity: 1,
    })
  }

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              کتاب‌های ویژه
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            برگزیده‌ای از بهترین و محبوب‌ترین کتاب‌های موجود در فروشگاه
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredBooks.map((book, index) => (
            <motion.div
              key={book.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
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
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
                    <span className="text-xs text-muted-foreground">({book.reviews.toLocaleString("fa-IR")} نظر)</span>
                  </div>

                  {/* Price */}
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-2xl font-bold text-primary">{book.price.toLocaleString("fa-IR")} افغانی</span>
                    {book.originalPrice > book.price && (
                      <span className="text-sm text-muted-foreground line-through">
                        {book.originalPrice.toLocaleString("fa-IR")}
                      </span>
                    )}
                  </div>

                  {/* Stock */}
                  <div className="mb-4">
                    <span className={`text-xs ${book.stock > 10 ? "text-green-600" : "text-orange-600"}`}>
                      {book.stock > 10 ? "موجود در انبار" : `تنها ${book.stock} عدد باقی مانده`}
                    </span>
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link href="/books">
            <Button size="lg" variant="outline" className="px-8">
              مشاهده همه کتاب‌ها
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Heart, Zap, Globe, Briefcase, Baby, Palette, Code, Users, TrendingUp, Award } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

const categories = [
  {
    id: 1,
    name: "ادبیات",
    icon: BookOpen,
    count: 1250,
    color: "from-blue-400 to-blue-600",
    description: "رمان، شعر، داستان کوتاه و ادبیات کلاسیک",
    image: "/placeholder.svg?height=200&width=300",
    featured: true,
    books: [
      { title: "کلیدر", author: "محمود دولت‌آبادی", price: 450 },
      { title: "سووشون", author: "سیمین دانشور", price: 380 },
      { title: "یک‌شب‌بازی", author: "مونیرو راوی‌پور", price: 350 },
    ],
  },
  {
    id: 2,
    name: "عاشقانه",
    icon: Heart,
    count: 890,
    color: "from-pink-400 to-red-500",
    description: "داستان‌های عاشقانه و احساسی",
    image: "/placeholder.svg?height=200&width=300",
    featured: false,
    books: [
      { title: "غرور و تعصب", author: "جین آستن", price: 420 },
      { title: "عشق در زمان وبا", author: "گابریل گارسیا مارکز", price: 480 },
    ],
  },
  {
    id: 3,
    name: "علمی تخیلی",
    icon: Zap,
    count: 650,
    color: "from-purple-400 to-purple-600",
    description: "آینده، فضا، تکنولوژی و علم",
    image: "/placeholder.svg?height=200&width=300",
    featured: true,
    books: [
      { title: "۱۹۸۴", author: "جورج اورول", price: 380 },
      { title: "فارنهایت ۴۵۱", author: "ری بردبری", price: 350 },
    ],
  },
  {
    id: 4,
    name: "تاریخ",
    icon: Globe,
    count: 720,
    color: "from-green-400 to-green-600",
    description: "تاریخ ایران، جهان و تمدن‌ها",
    image: "/placeholder.svg?height=200&width=300",
    featured: false,
    books: [
      { title: "تاریخ ایران باستان", author: "حسن پیرنیا", price: 520 },
      { title: "تمدن اسلامی", author: "گوستاو لوبون", price: 450 },
    ],
  },
  {
    id: 5,
    name: "کسب و کار",
    icon: Briefcase,
    count: 540,
    color: "from-orange-400 to-orange-600",
    description: "مدیریت، کارآفرینی، بازاریابی و رهبری",
    image: "/placeholder.svg?height=200&width=300",
    featured: true,
    books: [
      { title: "اثر مرکب", author: "دارن هاردی", price: 280 },
      { title: "فکر کنید و ثروتمند شوید", author: "ناپلئون هیل", price: 320 },
    ],
  },
  {
    id: 6,
    name: "کودک و نوجوان",
    icon: Baby,
    count: 980,
    color: "from-yellow-400 to-yellow-600",
    description: "قصه، آموزشی، سرگرمی و رشد کودک",
    image: "/placeholder.svg?height=200&width=300",
    featured: false,
    books: [
      { title: "شازده کوچولو", author: "آنتوان دو سنت اگزوپری", price: 250 },
      { title: "هری پاتر", author: "جی.کی. رولینگ", price: 520 },
    ],
  },
  {
    id: 7,
    name: "هنر",
    icon: Palette,
    count: 430,
    color: "from-indigo-400 to-indigo-600",
    description: "نقاشی، موسیقی، معماری و هنرهای تجسمی",
    image: "/placeholder.svg?height=200&width=300",
    featured: false,
    books: [
      { title: "تاریخ هنر", author: "ارنست گومبریچ", price: 680 },
      { title: "هنر ایرانی", author: "آرتور اوپهام پوپ", price: 750 },
    ],
  },
  {
    id: 8,
    name: "برنامه‌نویسی",
    icon: Code,
    count: 320,
    color: "from-teal-400 to-teal-600",
    description: "وب، موبایل، هوش مصنوعی و تکنولوژی",
    image: "/placeholder.svg?height=200&width=300",
    featured: true,
    books: [
      { title: "یادگیری عمیق", author: "یان لکان", price: 580 },
      { title: "الگوریتم‌ها", author: "رابرت سجویک", price: 620 },
    ],
  },
  {
    id: 9,
    name: "روانشناسی",
    icon: Users,
    count: 445,
    color: "from-rose-400 to-rose-600",
    description: "روانشناسی عمومی، بالینی و اجتماعی",
    image: "/placeholder.svg?height=200&width=300",
    featured: false,
    books: [
      { title: "روانشناسی شناختی", author: "رابرت استرنبرگ", price: 480 },
      { title: "تحلیل رفتار", author: "بی.اف. اسکینر", price: 420 },
    ],
  },
  {
    id: 10,
    name: "فلسفه",
    icon: Award,
    count: 380,
    color: "from-violet-400 to-violet-600",
    description: "فلسفه غرب، شرق و اندیشه اسلامی",
    image: "/placeholder.svg?height=200&width=300",
    featured: false,
    books: [
      { title: "هنر جنگ", author: "سون تزو", price: 240 },
      { title: "جمهوری", author: "افلاطون", price: 380 },
    ],
  },
]

export default function CategoriesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              دسته‌بندی کتاب‌ها
            </span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            از میان هزاران کتاب در دسته‌بندی‌های مختلف، کتاب مورد علاقه خود را پیدا کنید
          </p>
        </motion.div>

        {/* Featured Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="flex items-center gap-2 mb-8">
            <TrendingUp className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-bold">دسته‌بندی‌های محبوب</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {categories
              .filter((cat) => cat.featured)
              .map((category, index) => {
                const Icon = category.icon
                return (
                  <motion.div
                    key={category.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card className="group cursor-pointer transition-all duration-300 hover:shadow-2xl book-card-hover glassmorphism border-0 overflow-hidden">
                      <div className="relative h-48">
                        <Image
                          src={category.image || "/placeholder.svg"}
                          alt={category.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <div className="absolute bottom-4 left-4 right-4">
                          <div className="flex items-center gap-3 mb-2">
                            <div
                              className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center`}
                            >
                              <Icon className="w-6 h-6 text-white" />
                            </div>
                            <div>
                              <h3 className="text-white font-bold text-xl">{category.name}</h3>
                              <p className="text-white/80 text-sm">{category.count.toLocaleString("fa-IR")} کتاب</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <CardContent className="p-6">
                        <p className="text-muted-foreground mb-4">{category.description}</p>

                        <div className="space-y-2 mb-4">
                          <h4 className="font-semibold text-sm">نمونه کتاب‌ها:</h4>
                          {category.books.slice(0, 2).map((book, idx) => (
                            <div key={idx} className="flex justify-between text-sm">
                              <span className="text-muted-foreground">{book.title}</span>
                              <span className="font-medium">{book.price.toLocaleString("fa-IR")} افغانی</span>
                            </div>
                          ))}
                        </div>

                        <Link href={`/category/${category.id}`}>
                          <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                            مشاهده همه کتاب‌ها
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  </motion.div>
                )
              })}
          </div>
        </motion.div>

        {/* All Categories Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex items-center gap-2 mb-8">
            <BookOpen className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-bold">همه دسته‌بندی‌ها</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {categories.map((category, index) => {
              const Icon = category.icon
              return (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                >
                  <Link href={`/category/${category.id}`}>
                    <Card className="group cursor-pointer transition-all duration-300 hover:shadow-xl book-card-hover glassmorphism border-0 h-full">
                      <CardContent className="p-6 text-center h-full flex flex-col">
                        <div className="relative mb-4">
                          <div className="w-16 h-20 mx-auto mb-3 relative overflow-hidden rounded-lg">
                            <Image
                              src={category.image || "/placeholder.svg"}
                              alt={category.name}
                              fill
                              className="object-cover group-hover:scale-110 transition-transform duration-300"
                            />
                          </div>
                          <div
                            className={`w-12 h-12 mx-auto rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 -mt-6 relative z-10`}
                          >
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                        </div>

                        <div className="flex-1">
                          <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                            {category.name}
                          </h3>
                          <p className="text-xs text-muted-foreground mb-3 line-clamp-2">{category.description}</p>
                        </div>

                        <div className="mt-auto">
                          <Badge variant="outline" className="text-xs">
                            {category.count.toLocaleString("fa-IR")} کتاب
                          </Badge>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
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
                    <Link href="/books">
                      <Button size="lg" variant="outline">
                        جستجو در همه کتاب‌ها
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

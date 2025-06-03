"use client"

import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Heart, Zap, Globe, Briefcase, Baby, Palette, Code } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

const categories = [
  {
    id: 1,
    name: "ادبیات",
    icon: BookOpen,
    count: 1250,
    color: "from-blue-400 to-blue-600",
    description: "رمان، شعر، داستان کوتاه",
  },
  {
    id: 2,
    name: "عاشقانه",
    icon: Heart,
    count: 890,
    color: "from-pink-400 to-red-500",
    description: "داستان‌های عاشقانه و احساسی",
  },
  {
    id: 3,
    name: "علمی تخیلی",
    icon: Zap,
    count: 650,
    color: "from-purple-400 to-purple-600",
    description: "آینده، فضا، تکنولوژی",
  },
  {
    id: 4,
    name: "تاریخ",
    icon: Globe,
    count: 720,
    color: "from-green-400 to-green-600",
    description: "تاریخ ایران و جهان",
  },
  {
    id: 5,
    name: "کسب و کار",
    icon: Briefcase,
    count: 540,
    color: "from-orange-400 to-orange-600",
    description: "مدیریت، کارآفرینی، بازاریابی",
  },
  {
    id: 6,
    name: "کودک و نوجوان",
    icon: Baby,
    count: 980,
    color: "from-yellow-400 to-yellow-600",
    description: "قصه، آموزشی، سرگرمی",
  },
  {
    id: 7,
    name: "هنر",
    icon: Palette,
    count: 430,
    color: "from-indigo-400 to-indigo-600",
    description: "نقاشی، موسیقی، معماری",
  },
  {
    id: 8,
    name: "برنامه‌نویسی",
    icon: Code,
    count: 320,
    color: "from-teal-400 to-teal-600",
    description: "وب، موبایل، هوش مصنوعی",
  },
]

export default function Categories() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
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
              دسته‌بندی کتاب‌ها
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            از میان هزاران کتاب در دسته‌بندی‌های مختلف، کتاب مورد علاقه خود را پیدا کنید
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link href={`/category/${category.id}`}>
                  <Card className="group cursor-pointer transition-all duration-300 hover:shadow-xl book-card-hover glassmorphism border-0">
                    <CardContent className="p-6 text-center">
                      <div
                        className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                        {category.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-2">{category.description}</p>
                      <p className="text-xs font-medium text-primary">{category.count.toLocaleString("fa-IR")} کتاب</p>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

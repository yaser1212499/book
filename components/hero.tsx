"use client"

import { Button } from "@/components/ui/button"
import { ArrowLeft, BookOpen, Star, Users } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  دنیای کتاب
                </span>
                <br />
                در دستان شما
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
                بهترین کتاب‌های فارسی و انگلیسی را با بهترین قیمت و ارسال سریع از نواتیک تهیه کنید
              </p>
            </div>

            {/* Stats */}
            <div className="flex items-center space-x-8 space-x-reverse">
              <div className="flex items-center space-x-2 space-x-reverse">
                <BookOpen className="w-5 h-5 text-blue-600" />
                <span className="font-semibold">۱۰,۰۰۰+ کتاب</span>
              </div>
              <div className="flex items-center space-x-2 space-x-reverse">
                <Users className="w-5 h-5 text-purple-600" />
                <span className="font-semibold">۵,۰۰۰+ مشتری</span>
              </div>
              <div className="flex items-center space-x-2 space-x-reverse">
                <Star className="w-5 h-5 text-yellow-500" />
                <span className="font-semibold">۴.۸ امتیاز</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex items-center space-x-4 space-x-reverse">
              <Link href="/books">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                >
                  مشاهده کتاب‌ها
                  <ArrowLeft className="mr-2 w-4 h-4" />
                </Button>
              </Link>
              <Link href="/categories">
                <Button variant="outline" size="lg">
                  دسته‌بندی‌ها
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full h-96 lg:h-[500px]">
              {/* Floating Books */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                className="absolute top-10 right-10 w-32 h-40 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg shadow-2xl transform rotate-12 neumorphism"
              >
                <div className="p-4 text-white">
                  <div className="w-full h-2 bg-white/30 rounded mb-2"></div>
                  <div className="w-3/4 h-2 bg-white/30 rounded mb-2"></div>
                  <div className="w-1/2 h-2 bg-white/30 rounded"></div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                className="absolute top-32 left-10 w-28 h-36 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg shadow-2xl transform -rotate-12 neumorphism"
              >
                <div className="p-3 text-white">
                  <div className="w-full h-2 bg-white/30 rounded mb-2"></div>
                  <div className="w-2/3 h-2 bg-white/30 rounded mb-2"></div>
                  <div className="w-1/3 h-2 bg-white/30 rounded"></div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [-5, 15, -5] }}
                transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
                className="absolute bottom-20 right-20 w-36 h-44 bg-gradient-to-br from-green-400 to-green-600 rounded-lg shadow-2xl transform rotate-6 neumorphism"
              >
                <div className="p-4 text-white">
                  <div className="w-full h-2 bg-white/30 rounded mb-2"></div>
                  <div className="w-4/5 h-2 bg-white/30 rounded mb-2"></div>
                  <div className="w-3/5 h-2 bg-white/30 rounded"></div>
                </div>
              </motion.div>

              {/* Central Book */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-52 bg-gradient-to-br from-orange-400 to-red-500 rounded-lg shadow-2xl neumorphism"
              >
                <div className="p-6 text-white h-full flex flex-col justify-between">
                  <div>
                    <div className="w-full h-3 bg-white/30 rounded mb-3"></div>
                    <div className="w-4/5 h-2 bg-white/30 rounded mb-2"></div>
                    <div className="w-3/5 h-2 bg-white/30 rounded"></div>
                  </div>
                  <div className="text-center">
                    <BookOpen className="w-8 h-8 mx-auto mb-2" />
                    <div className="w-2/3 h-2 bg-white/30 rounded mx-auto"></div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-purple-200/20 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-green-200/20 rounded-full blur-xl"></div>
      </div>
    </section>
  )
}

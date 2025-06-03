"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Gift, Bell, Star } from "lucide-react"
import { motion } from "framer-motion"

export default function Newsletter() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubscribed(true)
      setEmail("")
      setTimeout(() => setIsSubscribed(false), 3000)
    }
  }

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="glassmorphism border-0 overflow-hidden">
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Content */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="p-8 lg:p-12"
                >
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-2xl lg:text-3xl font-bold">عضویت در خبرنامه</h3>
                    </div>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      از جدیدترین کتاب‌ها، تخفیف‌های ویژه و رویدادهای فرهنگی با خبر شوید
                    </p>
                  </div>

                  {/* Benefits */}
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                        <Gift className="w-4 h-4 text-green-600" />
                      </div>
                      <span className="text-sm">تخفیف ۱۰٪ برای اولین خرید</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                        <Bell className="w-4 h-4 text-blue-600" />
                      </div>
                      <span className="text-sm">اطلاع از جدیدترین کتاب‌ها</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center">
                        <Star className="w-4 h-4 text-purple-600" />
                      </div>
                      <span className="text-sm">دسترسی به تخفیف‌های ویژه</span>
                    </div>
                  </div>

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="flex gap-2">
                      <Input
                        type="email"
                        placeholder="آدرس ایمیل شما"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="flex-1 glassmorphism"
                        required
                      />
                      <Button
                        type="submit"
                        className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-6"
                        disabled={isSubscribed}
                      >
                        {isSubscribed ? "عضو شدید!" : "عضویت"}
                      </Button>
                    </div>
                    <p className="text-xs text-muted-foreground">با عضویت در خبرنامه، شرایط و قوانین را می‌پذیرید</p>
                  </form>
                </motion.div>

                {/* Visual */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="relative p-8 lg:p-12 flex items-center justify-center"
                >
                  <div className="relative w-full max-w-sm">
                    {/* Floating Elements */}
                    <motion.div
                      animate={{ y: [-10, 10, -10] }}
                      transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                      className="absolute top-0 right-0 w-16 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg shadow-lg transform rotate-12"
                    >
                      <div className="p-2 text-white text-xs">
                        <div className="w-full h-1 bg-white/30 rounded mb-1"></div>
                        <div className="w-2/3 h-1 bg-white/30 rounded"></div>
                      </div>
                    </motion.div>

                    <motion.div
                      animate={{ y: [10, -10, 10] }}
                      transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                      className="absolute top-8 left-4 w-14 h-18 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg shadow-lg transform -rotate-12"
                    >
                      <div className="p-2 text-white text-xs">
                        <div className="w-full h-1 bg-white/30 rounded mb-1"></div>
                        <div className="w-1/2 h-1 bg-white/30 rounded"></div>
                      </div>
                    </motion.div>

                    <motion.div
                      animate={{ y: [-5, 15, -5] }}
                      transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
                      className="absolute bottom-4 right-8 w-12 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-lg shadow-lg transform rotate-6"
                    >
                      <div className="p-1 text-white text-xs">
                        <div className="w-full h-1 bg-white/30 rounded mb-1"></div>
                        <div className="w-3/4 h-1 bg-white/30 rounded"></div>
                      </div>
                    </motion.div>

                    {/* Central Email Icon */}
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="w-32 h-32 bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl shadow-2xl flex items-center justify-center mx-auto"
                    >
                      <Mail className="w-16 h-16 text-white" />
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

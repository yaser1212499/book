"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, Quote } from "lucide-react"
import { motion } from "framer-motion"

const testimonials = [
  {
    id: 1,
    name: "احمد محمدی",
    role: "دانشجوی ادبیات",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
    comment: "نواتیک بهترین فروشگاه کتاب آنلاین است که تا حالا ازش خرید کردم. کیفیت کتاب‌ها عالی و ارسال خیلی سریع بود.",
    date: "۲ هفته پیش",
  },
  {
    id: 2,
    name: "فاطمه احمدی",
    role: "معلم",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
    comment: "مجموعه کتاب‌های کودک و نوجوان فوق‌العاده‌ای دارند. برای کلاس‌هام کتاب‌های خیلی خوبی پیدا کردم.",
    date: "۱ ماه پیش",
  },
  {
    id: 3,
    name: "علی رضایی",
    role: "کارآفرین",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 4,
    comment: "کتاب‌های کسب و کار و مدیریت خیلی کاملی دارند. قیمت‌ها هم نسبت به بقیه فروشگاه‌ها مناسب‌تره.",
    date: "۳ هفته پیش",
  },
  {
    id: 4,
    name: "مریم کریمی",
    role: "دانشجوی روانشناسی",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
    comment: "پشتیبانی عالی و صبور دارند. وقتی مشکلی داشتم، خیلی سریع کمکم کردند. حتماً دوباره خرید می‌کنم.",
    date: "۱ هفته پیش",
  },
  {
    id: 5,
    name: "حسن موسوی",
    role: "برنامه‌نویس",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
    comment: "کتاب‌های تکنولوژی و برنامه‌نویسی به‌روز و کاملی دارند. برای یادگیری زبان‌های جدید خیلی مفیده.",
    date: "۲ ماه پیش",
  },
  {
    id: 6,
    name: "زهرا صادقی",
    role: "خانه‌دار",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 4,
    comment: "کتاب‌های آشپزی و خانه‌داری خیلی خوبی دارند. تصاویر کتاب‌ها هم با کیفیت و واضح هستند.",
    date: "۱۰ روز پیش",
  },
]

export default function Testimonials() {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
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
              نظرات مشتریان
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">تجربه مشتریان ما از خرید کتاب از نواتیک</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full glassmorphism border-0 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <Avatar className="w-12 h-12">
                      <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                      <AvatarFallback>
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < testimonial.rating ? "text-yellow-400 fill-current" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>

                  <div className="relative">
                    <Quote className="absolute -top-2 -right-2 w-8 h-8 text-primary/20" />
                    <p className="text-muted-foreground leading-relaxed mb-4 relative z-10">{testimonial.comment}</p>
                  </div>

                  <p className="text-xs text-muted-foreground">{testimonial.date}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

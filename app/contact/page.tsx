"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, HeadphonesIcon, Users } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

const contactInfo = [
  {
    icon: MapPin,
    title: "آدرس",
    content: "کابل، افغانستان\nخیابان شهید مزاری، کوچه ۱۵",
    color: "text-blue-600",
  },
  {
    icon: Phone,
    title: "تلفن",
    content: "+93 70 123 4567\n+93 78 987 6543",
    color: "text-green-600",
  },
  {
    icon: Mail,
    title: "ایمیل",
    content: "info@novatech.af\nsupport@novatech.af",
    color: "text-purple-600",
  },
  {
    icon: Clock,
    title: "ساعات کاری",
    content: "شنبه تا پنج‌شنبه: ۸ صبح تا ۸ شب\nجمعه: ۱۰ صبح تا ۶ شب",
    color: "text-orange-600",
  },
]

const departments = [
  { value: "sales", label: "فروش و سفارشات" },
  { value: "support", label: "پشتیبانی فنی" },
  { value: "returns", label: "مرجوعی کالا" },
  { value: "suggestions", label: "پیشنهادات و انتقادات" },
  { value: "partnership", label: "همکاری و مشارکت" },
  { value: "other", label: "سایر موارد" },
]

const faqs = [
  {
    question: "چگونه می‌توانم سفارش خود را پیگیری کنم؟",
    answer: "با وارد کردن شماره سفارش در بخش پیگیری سفارش می‌توانید وضعیت سفارش خود را مشاهده کنید.",
  },
  {
    question: "آیا امکان مرجوعی کالا وجود دارد؟",
    answer: "بله، تا ۷ روز پس از دریافت کالا می‌توانید آن را مرجوع کنید.",
  },
  {
    question: "هزینه ارسال چقدر است؟",
    answer: "برای سفارشات بالای ۵۰۰ افغانی، ارسال رایگان است. برای سفارشات کمتر، ۵۰ افغانی هزینه ارسال دریافت می‌شود.",
  },
  {
    question: "چه روش‌های پرداختی پذیرفته می‌شود؟",
    answer: "پرداخت آنلاین با کارت بانکی و پرداخت نقدی در محل تحویل پذیرفته می‌شود.",
  },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    department: "",
    subject: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    تماس با ما
                  </span>
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  ما همیشه آماده پاسخگویی به سوالات و راهنمایی شما هستیم. از طریق فرم زیر یا راه‌های ارتباطی با ما در
                  تماس باشید.
                </p>
              </div>

              <div className="flex items-center space-x-6 space-x-reverse">
                <div className="flex items-center gap-2">
                  <MessageCircle className="w-5 h-5 text-blue-600" />
                  <span className="font-medium">پاسخ سریع</span>
                </div>
                <div className="flex items-center gap-2">
                  <HeadphonesIcon className="w-5 h-5 text-green-600" />
                  <span className="font-medium">پشتیبانی ۲۴/۷</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-purple-600" />
                  <span className="font-medium">تیم متخصص</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative w-full h-96 lg:h-[400px]">
                <Image
                  src="/placeholder.svg?height=400&width=500"
                  alt="تماس با نواتیک"
                  fill
                  className="object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <Card className="glassmorphism border-0">
              <CardHeader>
                <CardTitle className="text-2xl">ارسال پیام</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">نام و نام خانوادگی</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder="نام کامل خود را وارد کنید"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">ایمیل</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="example@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">شماره تماس</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        placeholder="۰۷۰ ۱۲۳ ۴۵۶۷"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="department">بخش مورد نظر</Label>
                      <Select
                        value={formData.department}
                        onValueChange={(value) => handleInputChange("department", value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="بخش مورد نظر را انتخاب کنید" />
                        </SelectTrigger>
                        <SelectContent>
                          {departments.map((dept) => (
                            <SelectItem key={dept.value} value={dept.value}>
                              {dept.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">موضوع</Label>
                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => handleInputChange("subject", e.target.value)}
                      placeholder="موضوع پیام خود را وارد کنید"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">پیام</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="پیام خود را اینجا بنویسید..."
                      rows={6}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                    disabled={isSubmitted}
                  >
                    {isSubmitted ? (
                      "پیام ارسال شد!"
                    ) : (
                      <>
                        <Send className="w-4 h-4 ml-2" />
                        ارسال پیام
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info & FAQ */}
          <div className="space-y-8">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="glassmorphism border-0">
                <CardHeader>
                  <CardTitle>اطلاعات تماس</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon
                    return (
                      <div key={index} className="flex items-start gap-4">
                        <div
                          className={`w-12 h-12 rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 flex items-center justify-center`}
                        >
                          <Icon className={`w-6 h-6 ${info.color}`} />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">{info.title}</h3>
                          <p className="text-muted-foreground text-sm whitespace-pre-line">{info.content}</p>
                        </div>
                      </div>
                    )
                  })}
                </CardContent>
              </Card>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card className="glassmorphism border-0">
                <CardContent className="p-0">
                  <div className="relative h-48 rounded-lg overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=200&width=400"
                      alt="نقشه موقعیت نواتیک"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-white font-medium">دفتر مرکزی نواتیک</p>
                      <p className="text-white/80 text-sm">کابل، افغانستان</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                سوالات متداول
              </span>
            </h2>
            <p className="text-muted-foreground">پاسخ سوالات رایج مشتریان</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                <Card className="glassmorphism border-0 h-full">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-3 text-primary">{faq.question}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{faq.answer}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16"
        >
          <Card className="glassmorphism border-0 overflow-hidden">
            <div className="relative">
              <div className="absolute inset-0">
                <Image
                  src="/placeholder.svg?height=300&width=1200"
                  alt="پشتیبانی نواتیک"
                  fill
                  className="object-cover opacity-20"
                />
              </div>
              <CardContent className="relative p-12 text-center">
                <div className="max-w-2xl mx-auto">
                  <h2 className="text-3xl font-bold mb-4">
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      نیاز به کمک فوری دارید؟
                    </span>
                  </h2>
                  <p className="text-muted-foreground text-lg mb-8">
                    تیم پشتیبانی ما آماده پاسخگویی فوری به سوالات شماست
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800"
                    >
                      <Phone className="w-4 h-4 ml-2" />
                      تماس فوری
                    </Button>
                    <Button size="lg" variant="outline">
                      <MessageCircle className="w-4 h-4 ml-2" />
                      چت آنلاین
                    </Button>
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

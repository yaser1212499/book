"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Users, Award, Target, Heart, Star, TrendingUp, Shield, Truck } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

const stats = [
  { icon: BookOpen, label: "کتاب موجود", value: "۱۰,۰۰۰+", color: "text-blue-600" },
  { icon: Users, label: "مشتری راضی", value: "۵,۰۰۰+", color: "text-green-600" },
  { icon: Award, label: "سال تجربه", value: "۸", color: "text-purple-600" },
  { icon: TrendingUp, label: "رشد سالانه", value: "۲۵٪", color: "text-orange-600" },
]

const team = [
  {
    name: "احمد محمدی",
    role: "مدیر عامل",
    image: "/placeholder.svg?height=300&width=300",
    description: "متخصص ادبیات فارسی با ۱۵ سال تجربه در صنعت نشر",
  },
  {
    name: "فاطمه احمدی",
    role: "مدیر فروش",
    image: "/placeholder.svg?height=300&width=300",
    description: "کارشناس بازاریابی و توسعه کسب و کار",
  },
  {
    name: "علی رضایی",
    role: "مدیر فنی",
    image: "/placeholder.svg?height=300&width=300",
    description: "توسعه‌دهنده وب و متخصص تکنولوژی",
  },
  {
    name: "مریم کریمی",
    role: "مدیر محتوا",
    image: "/placeholder.svg?height=300&width=300",
    description: "کارشناس ادبیات و انتخاب کتاب",
  },
]

const values = [
  {
    icon: Heart,
    title: "عشق به کتاب",
    description: "ما عاشق کتاب هستیم و این عشق را با شما به اشتراک می‌گذاریم",
  },
  {
    icon: Star,
    title: "کیفیت برتر",
    description: "تنها بهترین و باکیفیت‌ترین کتاب‌ها را انتخاب و عرضه می‌کنیم",
  },
  {
    icon: Shield,
    title: "اعتماد و امنیت",
    description: "امنیت اطلاعات و رضایت مشتریان اولویت اصلی ماست",
  },
  {
    icon: Truck,
    title: "ارسال سریع",
    description: "تحویل سریع و ایمن کتاب‌ها در سراسر افغانستان",
  },
]

export default function AboutPage() {
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
                <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400">
                  درباره نواتیک
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    داستان ما
                  </span>
                  <br />
                  داستان عشق به کتاب
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  نواتیک از سال ۱۳۹۵ با هدف گسترش فرهنگ مطالعه و دسترسی آسان به کتاب در افغانستان آغاز به کار کرد. ما
                  معتقدیم که کتاب پلی است میان گذشته و آینده، میان خیال و واقعیت.
                </p>
              </div>

              <div className="flex items-center space-x-6 space-x-reverse">
                <Link href="/books">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  >
                    مشاهده کتاب‌ها
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline">
                    تماس با ما
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative w-full h-96 lg:h-[500px]">
                <Image
                  src="/placeholder.svg?height=500&width=600"
                  alt="کتابخانه نواتیک"
                  fill
                  className="object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="glassmorphism border-0 text-center">
                    <CardContent className="p-6">
                      <Icon className={`w-12 h-12 mx-auto mb-4 ${stat.color}`} />
                      <h3 className="text-3xl font-bold mb-2">{stat.value}</h3>
                      <p className="text-muted-foreground">{stat.label}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="glassmorphism border-0 h-full">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <Target className="w-8 h-8 text-blue-600" />
                    <h2 className="text-2xl font-bold">ماموریت ما</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    ماموریت نواتیک ایجاد دسترسی آسان و مقرون‌به‌صرفه به کتاب برای همه اقشار جامعه است. ما می‌خواهیم پلی
                    باشیم میان نویسندگان و خوانندگان، میان دانش و جامعه.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-sm">گسترش فرهنگ مطالعه در جامعه</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-sm">حمایت از نویسندگان و ناشران محلی</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-sm">ارائه خدمات با کیفیت و قیمت مناسب</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="glassmorphism border-0 h-full">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <Star className="w-8 h-8 text-purple-600" />
                    <h2 className="text-2xl font-bold">چشم‌انداز ما</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    چشم‌انداز ما تبدیل شدن به بزرگترین و معتبرترین فروشگاه آنلاین کتاب در افغانستان و منطقه است. ما
                    می‌خواهیم نقش مؤثری در توسعه فرهنگی و علمی جامعه ایفا کنیم.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                      <span className="text-sm">رهبری در صنعت فروش آنلاین کتاب</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                      <span className="text-sm">گسترش به سایر کشورهای منطقه</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                      <span className="text-sm">ایجاد اکوسیستم جامع فرهنگی</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
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
                ارزش‌های ما
              </span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              ارزش‌هایی که ما را در مسیر خدمت‌رسانی به مشتریان راهنمایی می‌کند
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="glassmorphism border-0 text-center h-full">
                    <CardContent className="p-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="font-bold text-lg mb-3">{value.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">تیم ما</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              افرادی که با تخصص و تعهد، نواتیک را به بهترین فروشگاه کتاب تبدیل کرده‌اند
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="glassmorphism border-0 text-center overflow-hidden">
                  <div className="relative">
                    <div className="aspect-square relative overflow-hidden">
                      <Image
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg mb-1">{member.name}</h3>
                    <p className="text-primary font-medium mb-3">{member.role}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">{member.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="glassmorphism border-0 overflow-hidden">
              <div className="relative">
                <div className="absolute inset-0">
                  <Image
                    src="/placeholder.svg?height=400&width=1200"
                    alt="کتابخانه"
                    fill
                    className="object-cover opacity-20"
                  />
                </div>
                <CardContent className="relative p-12 text-center">
                  <div className="max-w-2xl mx-auto">
                    <h2 className="text-3xl font-bold mb-4">
                      <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        همراه ما باشید
                      </span>
                    </h2>
                    <p className="text-muted-foreground text-lg mb-8">
                      در این سفر فرهنگی همراه ما باشید و از جدیدترین کتاب‌ها و تخفیف‌های ویژه با خبر شوید
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Link href="/newsletter">
                        <Button
                          size="lg"
                          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                        >
                          عضویت در خبرنامه
                        </Button>
                      </Link>
                      <Link href="/books">
                        <Button size="lg" variant="outline">
                          شروع خرید
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

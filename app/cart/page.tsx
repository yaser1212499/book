"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight } from "lucide-react"
import { useCart } from "@/contexts/cart-context"
import { motion } from "framer-motion"

export default function CartPage() {
  const { items, total, updateQuantity, removeItem, clearCart } = useCart()
  const [promoCode, setPromoCode] = useState("")
  const [discount, setDiscount] = useState(0)

  const shipping = total > 500 ? 0 : 50
  const finalTotal = total - discount + shipping

  const handleApplyPromo = () => {
    if (promoCode === "NOVATECH10") {
      setDiscount(total * 0.1)
    } else if (promoCode === "WELCOME20") {
      setDiscount(total * 0.2)
    }
  }

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-md mx-auto"
          >
            <div className="w-32 h-32 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <ShoppingBag className="w-16 h-16 text-muted-foreground" />
            </div>
            <h1 className="text-2xl font-bold mb-4">سبد خرید شما خالی است</h1>
            <p className="text-muted-foreground mb-8">
              هنوز کتابی به سبد خرید اضافه نکرده‌اید. از مجموعه گسترده کتاب‌های ما دیدن کنید.
            </p>
            <Link href="/books">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                مشاهده کتاب‌ها
                <ArrowRight className="mr-2 w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold mb-2">سبد خرید</h1>
          <p className="text-muted-foreground">{items.length.toLocaleString("fa-IR")} کتاب در سبد خرید شما</p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-4"
          >
            {items.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="glassmorphism border-0">
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <div className="w-20 h-28 relative overflow-hidden rounded-lg flex-shrink-0">
                        <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                      </div>

                      <div className="flex-1 space-y-2">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-semibold text-lg line-clamp-2">{item.title}</h3>
                            <p className="text-muted-foreground">{item.author}</p>
                          </div>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => removeItem(item.id)}
                            className="text-red-500 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900/20"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center border rounded-lg">
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              disabled={item.quantity <= 1}
                              className="h-8 w-8"
                            >
                              <Minus className="w-3 h-3" />
                            </Button>
                            <span className="px-3 py-1 font-medium">{item.quantity}</span>
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="h-8 w-8"
                            >
                              <Plus className="w-3 h-3" />
                            </Button>
                          </div>

                          <div className="text-left">
                            <p className="font-bold text-lg text-primary">
                              {(item.price * item.quantity).toLocaleString("fa-IR")} افغانی
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {item.price.toLocaleString("fa-IR")} افغانی × {item.quantity}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}

            <div className="flex justify-between items-center pt-4">
              <Button
                variant="outline"
                onClick={clearCart}
                className="text-red-500 border-red-200 hover:bg-red-50 dark:hover:bg-red-900/20"
              >
                <Trash2 className="w-4 h-4 ml-2" />
                پاک کردن سبد خرید
              </Button>
              <Link href="/books">
                <Button variant="outline">
                  ادامه خرید
                  <ArrowRight className="mr-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Order Summary */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            {/* Promo Code */}
            <Card className="glassmorphism border-0">
              <CardHeader>
                <CardTitle className="text-lg">کد تخفیف</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-2">
                  <Input
                    placeholder="کد تخفیف را وارد کنید"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                  />
                  <Button onClick={handleApplyPromo} variant="outline">
                    اعمال
                  </Button>
                </div>
                {discount > 0 && (
                  <Badge className="bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400">
                    کد تخفیف اعمال شد
                  </Badge>
                )}
              </CardContent>
            </Card>

            {/* Order Summary */}
            <Card className="glassmorphism border-0">
              <CardHeader>
                <CardTitle className="text-lg">خلاصه سفارش</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span>جمع کل:</span>
                  <span>{total.toLocaleString("fa-IR")} افغانی</span>
                </div>

                {discount > 0 && (
                  <div className="flex justify-between text-green-600">
                    <span>تخفیف:</span>
                    <span>-{discount.toLocaleString("fa-IR")} افغانی</span>
                  </div>
                )}

                <div className="flex justify-between">
                  <span>هزینه ارسال:</span>
                  <span>
                    {shipping === 0 ? (
                      <Badge className="bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400">
                        رایگان
                      </Badge>
                    ) : (
                      `${shipping.toLocaleString("fa-IR")} افغانی`
                    )}
                  </span>
                </div>

                <Separator />

                <div className="flex justify-between text-lg font-bold">
                  <span>مبلغ نهایی:</span>
                  <span className="text-primary">{finalTotal.toLocaleString("fa-IR")} افغانی</span>
                </div>

                {total < 500 && (
                  <p className="text-sm text-muted-foreground">
                    برای ارسال رایگان {(500 - total).toLocaleString("fa-IR")} افغانی دیگر خرید کنید
                  </p>
                )}

                <Link href="/checkout" className="block">
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                    ادامه فرآیند خرید
                    <ArrowRight className="mr-2 w-4 h-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Security Features */}
            <Card className="glassmorphism border-0">
              <CardContent className="p-4">
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>پرداخت ۱۰۰٪ امن</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>ضمانت اصالت کالا</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span>۷ روز ضمانت بازگشت</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

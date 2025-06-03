"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"
import { CreditCard, Truck, MapPin, User, CheckCircle, ArrowRight } from "lucide-react"
import { useCart } from "@/contexts/cart-context"
import { motion } from "framer-motion"
import Link from "next/link"

export default function CheckoutPage() {
  const { items, total } = useCart()
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
    notes: "",
    paymentMethod: "card",
  })

  const shipping = total > 500 ? 0 : 50
  const finalTotal = total + shipping

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleNextStep = () => {
    if (step < 3) setStep(step + 1)
  }

  const handlePrevStep = () => {
    if (step > 1) setStep(step - 1)
  }

  const handleSubmitOrder = () => {
    // Here you would typically submit the order to your backend
    setStep(3)
  }

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center max-w-md mx-auto">
            <h1 className="text-2xl font-bold mb-4">سبد خرید شما خالی است</h1>
            <p className="text-muted-foreground mb-8">برای ادامه فرآیند خرید، ابتدا کتابی به سبد خرید اضافه کنید.</p>
            <Link href="/books">
              <Button size="lg">
                مشاهده کتاب‌ها
                <ArrowRight className="mr-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        {/* Progress Steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="flex items-center justify-center space-x-4 space-x-reverse mb-8">
            {[1, 2, 3].map((stepNumber) => (
              <div key={stepNumber} className="flex items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                    step >= stepNumber ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                  }`}
                >
                  {step > stepNumber ? <CheckCircle className="w-5 h-5" /> : stepNumber}
                </div>
                {stepNumber < 3 && <div className={`w-16 h-1 mx-2 ${step > stepNumber ? "bg-primary" : "bg-muted"}`} />}
              </div>
            ))}
          </div>

          <div className="text-center">
            <h1 className="text-3xl font-bold mb-2">
              {step === 1 && "اطلاعات تحویل"}
              {step === 2 && "روش پرداخت"}
              {step === 3 && "تأیید سفارش"}
            </h1>
            <p className="text-muted-foreground">
              {step === 1 && "لطفاً اطلاعات تحویل کالا را وارد کنید"}
              {step === 2 && "روش پرداخت مورد نظر خود را انتخاب کنید"}
              {step === 3 && "سفارش شما با موفقیت ثبت شد"}
            </p>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {step === 1 && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Card className="glassmorphism border-0">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <User className="w-5 h-5" />
                      اطلاعات شخصی
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">نام</Label>
                        <Input
                          id="firstName"
                          value={formData.firstName}
                          onChange={(e) => handleInputChange("firstName", e.target.value)}
                          placeholder="نام خود را وارد کنید"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">نام خانوادگی</Label>
                        <Input
                          id="lastName"
                          value={formData.lastName}
                          onChange={(e) => handleInputChange("lastName", e.target.value)}
                          placeholder="نام خانوادگی خود را وارد کنید"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">ایمیل</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          placeholder="example@email.com"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">شماره تماس</Label>
                        <Input
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          placeholder="۰۷۰ ۱۲۳ ۴۵۶۷"
                        />
                      </div>
                    </div>

                    <Separator />

                    <div>
                      <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                        <MapPin className="w-5 h-5" />
                        آدرس تحویل
                      </h3>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="address">آدرس کامل</Label>
                          <Textarea
                            id="address"
                            value={formData.address}
                            onChange={(e) => handleInputChange("address", e.target.value)}
                            placeholder="آدرس کامل خود را وارد کنید"
                            rows={3}
                          />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="city">شهر</Label>
                            <Input
                              id="city"
                              value={formData.city}
                              onChange={(e) => handleInputChange("city", e.target.value)}
                              placeholder="نام شهر"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="postalCode">کد پستی</Label>
                            <Input
                              id="postalCode"
                              value={formData.postalCode}
                              onChange={(e) => handleInputChange("postalCode", e.target.value)}
                              placeholder="کد پستی ۱۰ رقمی"
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="notes">توضیحات اضافی (اختیاری)</Label>
                          <Textarea
                            id="notes"
                            value={formData.notes}
                            onChange={(e) => handleInputChange("notes", e.target.value)}
                            placeholder="توضیحات اضافی برای تحویل کالا"
                            rows={2}
                          />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Card className="glassmorphism border-0">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CreditCard className="w-5 h-5" />
                      روش پرداخت
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <RadioGroup
                      value={formData.paymentMethod}
                      onValueChange={(value) => handleInputChange("paymentMethod", value)}
                      className="space-y-4"
                    >
                      <div className="flex items-center space-x-2 space-x-reverse p-4 border rounded-lg">
                        <RadioGroupItem value="card" id="card" />
                        <Label htmlFor="card" className="flex-1 cursor-pointer">
                          <div className="flex items-center gap-3">
                            <CreditCard className="w-5 h-5 text-blue-600" />
                            <div>
                              <p className="font-medium">پرداخت آنلاین</p>
                              <p className="text-sm text-muted-foreground">پرداخت امن با کارت بانکی</p>
                            </div>
                          </div>
                        </Label>
                      </div>

                      <div className="flex items-center space-x-2 space-x-reverse p-4 border rounded-lg">
                        <RadioGroupItem value="cash" id="cash" />
                        <Label htmlFor="cash" className="flex-1 cursor-pointer">
                          <div className="flex items-center gap-3">
                            <Truck className="w-5 h-5 text-green-600" />
                            <div>
                              <p className="font-medium">پرداخت در محل</p>
                              <p className="text-sm text-muted-foreground">پرداخت نقدی هنگام تحویل</p>
                            </div>
                          </div>
                        </Label>
                      </div>
                    </RadioGroup>

                    {formData.paymentMethod === "card" && (
                      <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                        <p className="text-sm text-blue-800 dark:text-blue-200">
                          پس از تأیید سفارش، به درگاه پرداخت امن هدایت خواهید شد.
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="text-center"
              >
                <Card className="glassmorphism border-0">
                  <CardContent className="p-8">
                    <div className="w-20 h-20 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-10 h-10 text-green-600" />
                    </div>
                    <h2 className="text-2xl font-bold mb-4">سفارش شما ثبت شد!</h2>
                    <p className="text-muted-foreground mb-6">
                      سفارش شما با شماره #۱۲۳۴۵ ثبت شد و به زودی پردازش خواهد شد.
                    </p>
                    <div className="space-y-4">
                      <div className="flex justify-center gap-4">
                        <Link href="/orders">
                          <Button variant="outline">مشاهده سفارشات</Button>
                        </Link>
                        <Link href="/books">
                          <Button className="bg-gradient-to-r from-blue-600 to-purple-600">ادامه خرید</Button>
                        </Link>
                      </div>
                      <p className="text-sm text-muted-foreground">ایمیل تأیید سفارش برای شما ارسال شد.</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}

            {/* Navigation Buttons */}
            {step < 3 && (
              <div className="flex justify-between mt-6">
                <Button variant="outline" onClick={handlePrevStep} disabled={step === 1}>
                  مرحله قبل
                </Button>
                <Button
                  onClick={step === 2 ? handleSubmitOrder : handleNextStep}
                  className="bg-gradient-to-r from-blue-600 to-purple-600"
                >
                  {step === 2 ? "تأیید و پرداخت" : "مرحله بعد"}
                  <ArrowRight className="mr-2 w-4 h-4" />
                </Button>
              </div>
            )}
          </div>

          {/* Order Summary */}
          {step < 3 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="glassmorphism border-0 sticky top-8">
                <CardHeader>
                  <CardTitle>خلاصه سفارش</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    {items.map((item) => (
                      <div key={item.id} className="flex justify-between text-sm">
                        <span className="flex-1 truncate">
                          {item.title} × {item.quantity}
                        </span>
                        <span>{(item.price * item.quantity).toLocaleString("fa-IR")} افغانی</span>
                      </div>
                    ))}
                  </div>

                  <Separator />

                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>جمع کل:</span>
                      <span>{total.toLocaleString("fa-IR")} افغانی</span>
                    </div>
                    <div className="flex justify-between">
                      <span>هزینه ارسال:</span>
                      <span>{shipping === 0 ? "رایگان" : `${shipping.toLocaleString("fa-IR")} افغانی`}</span>
                    </div>
                  </div>

                  <Separator />

                  <div className="flex justify-between text-lg font-bold">
                    <span>مبلغ نهایی:</span>
                    <span className="text-primary">{finalTotal.toLocaleString("fa-IR")} افغانی</span>
                  </div>

                  {/* Security Features */}
                  <div className="pt-4 space-y-2 text-sm text-muted-foreground">
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
          )}
        </div>
      </div>
    </div>
  )
}

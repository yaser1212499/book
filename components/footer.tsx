import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
  BookOpen,
  CreditCard,
  Truck,
  Shield,
  Clock,
} from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2 space-x-reverse">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">ن</span>
              </div>
              <span className="text-2xl font-bold">نواتیک</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              نواتیک، بزرگترین فروشگاه آنلاین کتاب در افغانستان. ما با ارائه بهترین کتاب‌ها و خدمات مطلوب، تجربه خرید
              فوق‌العاده‌ای را برای شما فراهم می‌کنیم.
            </p>
            <div className="flex space-x-4 space-x-reverse">
              <Button size="icon" variant="ghost" className="hover:bg-blue-600">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button size="icon" variant="ghost" className="hover:bg-blue-400">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button size="icon" variant="ghost" className="hover:bg-pink-600">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button size="icon" variant="ghost" className="hover:bg-red-600">
                <Youtube className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold">دسترسی سریع</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/books" className="text-gray-300 hover:text-white transition-colors">
                  همه کتاب‌ها
                </Link>
              </li>
              <li>
                <Link href="/categories" className="text-gray-300 hover:text-white transition-colors">
                  دسته‌بندی‌ها
                </Link>
              </li>
              <li>
                <Link href="/bestsellers" className="text-gray-300 hover:text-white transition-colors">
                  پرفروش‌ترین‌ها
                </Link>
              </li>
              <li>
                <Link href="/new-releases" className="text-gray-300 hover:text-white transition-colors">
                  جدیدترین‌ها
                </Link>
              </li>
              <li>
                <Link href="/offers" className="text-gray-300 hover:text-white transition-colors">
                  تخفیف‌ها
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-white transition-colors">
                  وبلاگ
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold">خدمات مشتریان</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  تماس با ما
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-300 hover:text-white transition-colors">
                  سوالات متداول
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-gray-300 hover:text-white transition-colors">
                  راهنمای ارسال
                </Link>
              </li>
              <li>
                <Link href="/returns" className="text-gray-300 hover:text-white transition-colors">
                  مرجوعی کالا
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-300 hover:text-white transition-colors">
                  حریم خصوصی
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-300 hover:text-white transition-colors">
                  شرایط و قوانین
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold">اطلاعات تماس</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 space-x-reverse">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">کابل، افغانستان</span>
              </div>
              <div className="flex items-center space-x-3 space-x-reverse">
                <Phone className="w-5 h-5 text-green-400" />
                <span className="text-gray-300" dir="ltr">
                  +93 70 123 4567
                </span>
              </div>
              <div className="flex items-center space-x-3 space-x-reverse">
                <Mail className="w-5 h-5 text-purple-400" />
                <span className="text-gray-300">info@novatech.af</span>
              </div>
              <div className="flex items-center space-x-3 space-x-reverse">
                <Clock className="w-5 h-5 text-orange-400" />
                <span className="text-gray-300">شنبه تا پنج‌شنبه: ۸ صبح تا ۸ شب</span>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-gray-700" />

        {/* Features */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          <div className="flex items-center space-x-3 space-x-reverse">
            <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center">
              <Truck className="w-5 h-5 text-blue-400" />
            </div>
            <div>
              <h4 className="font-semibold text-sm">ارسال سریع</h4>
              <p className="text-xs text-gray-400">تحویل در کمتر از ۲۴ ساعت</p>
            </div>
          </div>
          <div className="flex items-center space-x-3 space-x-reverse">
            <div className="w-10 h-10 bg-green-600/20 rounded-lg flex items-center justify-center">
              <Shield className="w-5 h-5 text-green-400" />
            </div>
            <div>
              <h4 className="font-semibold text-sm">خرید امن</h4>
              <p className="text-xs text-gray-400">پرداخت ۱۰۰٪ ایمن</p>
            </div>
          </div>
          <div className="flex items-center space-x-3 space-x-reverse">
            <div className="w-10 h-10 bg-purple-600/20 rounded-lg flex items-center justify-center">
              <CreditCard className="w-5 h-5 text-purple-400" />
            </div>
            <div>
              <h4 className="font-semibold text-sm">پرداخت آسان</h4>
              <p className="text-xs text-gray-400">روش‌های متنوع پرداخت</p>
            </div>
          </div>
          <div className="flex items-center space-x-3 space-x-reverse">
            <div className="w-10 h-10 bg-orange-600/20 rounded-lg flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-orange-400" />
            </div>
            <div>
              <h4 className="font-semibold text-sm">کیفیت تضمینی</h4>
              <p className="text-xs text-gray-400">کتاب‌های اصل و باکیفیت</p>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-gray-700" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-400 text-sm">© ۲۰۲۴ نواتیک. تمامی حقوق محفوظ است.</p>
          <div className="flex items-center space-x-6 space-x-reverse text-sm text-gray-400">
            <span>ساخته شده توسط شرکت نواتیک با ❤️ در افغانستان</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

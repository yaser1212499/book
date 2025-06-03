import { Suspense } from "react"
import Hero from "@/components/hero"
import Categories from "@/components/categories"
import FeaturedBooks from "@/components/featured-books"
import Testimonials from "@/components/testimonials"
import Newsletter from "@/components/newsletter"
import LoadingSpinner from "@/components/loading-spinner"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Suspense fallback={<LoadingSpinner />}>
        <Hero />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <Categories />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <FeaturedBooks />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <Testimonials />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <Newsletter />
      </Suspense>
    </div>
  )
}

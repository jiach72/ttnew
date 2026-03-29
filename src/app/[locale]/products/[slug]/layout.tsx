import { products } from '@/data/products'
import type { Locale } from '@/lib/i18n'

export function generateStaticParams() {
  const langLocales: Locale[] = ['en', 'zh']
  return langLocales.flatMap((locale) =>
    products.map((product) => ({
      locale,
      slug: product.slug,
    }))
  )
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}

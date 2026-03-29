'use client'

import { useState, use } from 'react'
import { t, type Locale, locales } from '@/lib/i18n'
import { products } from '@/data/products'
import { ProductCard } from '@/components/ProductCard'

interface ProductsPageProps {
  params: Promise<{ locale: string }>
}

export default function ProductsPage({ params }: ProductsPageProps) {
  const { locale: localeParam } = use(params)
  const locale = (locales.includes(localeParam as Locale) ? localeParam : "en") as Locale
  const [filter, setFilter] = useState<'all' | 'rings' | 'necklaces' | 'earrings'>('all')

  const filteredProducts = filter === 'all'
    ? products
    : products.filter(p => p.category === filter)

  return (
    <div className="py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl font-bold text-brand-black mb-4">
            {t('products.title', locale)}
          </h1>
          <p className="text-gray-600">
            {t('products.subtitle', locale)}
          </p>
        </div>

        {/* Filters */}
        <div className="flex justify-center gap-4 mb-12">
          {[
            { value: 'all', label: t('products.filter.all', locale) },
            { value: 'rings', label: t('products.filter.rings', locale) },
            { value: 'necklaces', label: t('products.filter.necklaces', locale) },
            { value: 'earrings', label: t('products.filter.earrings', locale) },
          ].map((option) => (
            <button
              key={option.value}
              onClick={() => setFilter(option.value as typeof filter)}
              className={`px-4 py-2 text-sm font-medium rounded transition-colors ${
                filter === option.value
                  ? 'bg-brand-gold text-brand-black'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} locale={locale} />
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            {locale === 'en' ? 'No products found.' : '暂无产品。'}
          </div>
        )}
      </div>
    </div>
  )
}

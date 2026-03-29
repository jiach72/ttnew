import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { locales, type Locale } from '@/lib/i18n'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import '../globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
})

export const metadata: Metadata = {
  title: 'Twinturing | Lab-Grown Diamond Jewelry',
  description: 'Same Sparkle, Smarter Choice. Premium lab-grown diamond jewelry at a fraction of the price.',
  keywords: ['lab-grown diamond', 'jewelry', 'engagement ring', 'sustainable jewelry', 'ethical diamond'],
  openGraph: {
    title: 'Twinturing | Lab-Grown Diamond Jewelry',
    description: 'Same Sparkle, Smarter Choice. Premium lab-grown diamond jewelry.',
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['zh_CN'],
  },
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const validLocale = locales.includes(locale as Locale) ? (locale as Locale) : 'en'

  return (
    <html lang={validLocale} className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Header locale={validLocale} />
        <main className="flex-1">
          {children}
        </main>
        <Footer locale={validLocale} />
      </body>
    </html>
  )
}

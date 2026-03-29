'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { t, type Locale } from '@/lib/i18n'

interface HeaderProps {
  locale: Locale
}

export function Header({ locale }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { href: `/${locale}`, label: t('nav.home', locale) },
    { href: `/${locale}/products`, label: t('nav.products', locale) },
    { href: `/${locale}/about`, label: t('nav.about', locale) },
    { href: `/${locale}/blog`, label: t('nav.blog', locale) },
    { href: `/${locale}/faq`, label: t('nav.faq', locale) },
    { href: `/${locale}/contact`, label: t('nav.contact', locale) },
  ]

  const otherLocale = locale === 'en' ? 'zh' : 'en'

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-sm' 
          : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-brand-gold to-brand-gold-dark rounded-lg flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
              <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 2L2 9L12 22L22 9L12 2Z" />
              </svg>
            </div>
            <div>
              <span className="font-serif text-2xl font-bold tracking-tight text-brand-black">
                Twinturing
              </span>
              <span className="hidden sm:block text-xs text-gray-500 -mt-1">
                {locale === 'en' ? 'Lab-Grown Diamonds' : '培育钻石'}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:gap-x-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative px-4 py-2 text-sm font-medium text-gray-700 hover:text-brand-gold transition-colors group"
              >
                {item.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-brand-gold group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-4">
            {/* Language Switch */}
            <Link
              href={`/${otherLocale}`}
              className="hidden sm:flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-600 hover:text-brand-gold border border-gray-200 rounded-full hover:border-brand-gold transition-all duration-300"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
              </svg>
              {locale === 'en' ? '中文' : 'EN'}
            </Link>

            {/* Cart icon (placeholder) */}
            <button className="relative p-2 text-gray-700 hover:text-brand-gold transition-colors">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
              </svg>
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-brand-gold text-brand-black text-xs font-bold rounded-full flex items-center justify-center">
                0
              </span>
            </button>

            {/* Mobile menu button */}
            <button
              type="button"
              className="lg:hidden p-2 text-gray-700 hover:text-brand-gold transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            mobileMenuOpen ? 'max-h-96 pb-6' : 'max-h-0'
          }`}
        >
          <div className="pt-4 border-t border-gray-100">
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className="block py-3 text-base font-medium text-gray-700 hover:text-brand-gold hover:pl-2 transition-all duration-200"
                onClick={() => setMobileMenuOpen(false)}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={`/${otherLocale}`}
              className="block py-3 text-base font-medium text-brand-gold"
              onClick={() => setMobileMenuOpen(false)}
            >
              {locale === 'en' ? '切换到中文' : 'Switch to English'}
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}

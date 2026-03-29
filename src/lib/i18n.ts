export const locales = ['en', 'zh'] as const
export type Locale = typeof locales[number]
export const defaultLocale: Locale = 'en'

export const translations: Record<Locale, Record<string, string>> = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.products': 'Collections',
    'nav.rings': 'Rings',
    'nav.necklaces': 'Necklaces',
    'nav.earrings': 'Earrings',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.blog': 'Journal',
    'nav.faq': 'FAQ',

    // Hero
    'hero.title': 'Same Sparkle, Smarter Choice',
    'hero.subtitle': 'Lab-grown diamond jewelry that shines just as bright — at a fraction of the price.',
    'hero.cta': 'Explore Collections',
    'hero.cta.secondary': 'Our Story',

    // Products
    'products.title': 'Our Collections',
    'products.subtitle': 'Each piece crafted with precision, designed to last forever.',
    'products.filter.all': 'All',
    'products.filter.rings': 'Rings',
    'products.filter.necklaces': 'Necklaces',
    'products.filter.earrings': 'Earrings',
    'products.price': 'Price',
    'products.view': 'View Details',
    'products.from': 'From',

    // Product Detail
    'product.addToCart': 'Add to Cart',
    'product.selectSize': 'Select Size',
    'product.description': 'Description',
    'product.specifications': 'Specifications',
    'product.certification': 'Certification',
    'product.shipping': 'Shipping & Returns',

    // About
    'about.title': 'The Twinturing Story',
    'about.subtitle': 'Where technology meets timeless elegance.',
    'about.mission.title': 'Our Mission',
    'about.mission.text': 'We believe everyone deserves to experience the brilliance of diamonds without compromise — on price, ethics, or quality.',
    'about.values.title': 'Our Values',
    'about.values.sustainability': 'Sustainability',
    'about.values.transparency': 'Transparency',
    'about.values.innovation': 'Innovation',

    // Contact
    'contact.title': 'Get in Touch',
    'contact.subtitle': 'We\'d love to hear from you.',
    'contact.form.name': 'Name',
    'contact.form.email': 'Email',
    'contact.form.message': 'Message',
    'contact.form.submit': 'Send Message',

    // FAQ
    'faq.title': 'Frequently Asked Questions',
    'faq.subtitle': 'Everything you need to know about lab-grown diamonds.',

    // Footer
    'footer.tagline': 'Same Sparkle, Smarter Choice',
    'footer.copyright': '© 2026 Twinturing. All rights reserved.',
    'footer.shop': 'Shop',
    'footer.company': 'Company',
    'footer.support': 'Support',
    'footer.newsletter': 'Subscribe to our newsletter',
    'footer.email.placeholder': 'Enter your email',
    'footer.subscribe': 'Subscribe',

    // Common
    'common.learnMore': 'Learn More',
    'common.viewAll': 'View All',
    'common.loading': 'Loading...',
  },
  zh: {
    // Navigation
    'nav.home': '首页',
    'nav.products': '全部系列',
    'nav.rings': '戒指',
    'nav.necklaces': '项链',
    'nav.earrings': '耳环',
    'nav.about': '关于我们',
    'nav.contact': '联系我们',
    'nav.blog': '资讯',
    'nav.faq': '常见问题',

    // Hero
    'hero.title': '同样的闪耀，更智慧的选择',
    'hero.subtitle': '实验室培育钻石珠宝，同样的璀璨，更优的价格。',
    'hero.cta': '探索系列',
    'hero.cta.secondary': '了解我们',

    // Products
    'products.title': '精选系列',
    'products.subtitle': '每一件作品都经过精心打造，只为永恒闪耀。',
    'products.filter.all': '全部',
    'products.filter.rings': '戒指',
    'products.filter.necklaces': '项链',
    'products.filter.earrings': '耳环',
    'products.price': '价格',
    'products.view': '查看详情',
    'products.from': '起',

    // Product Detail
    'product.addToCart': '加入购物车',
    'product.selectSize': '选择尺寸',
    'product.description': '产品描述',
    'product.specifications': '产品参数',
    'product.certification': '认证证书',
    'product.shipping': '配送与退换',

    // About
    'about.title': '双生图灵的故事',
    'about.subtitle': '当科技遇见永恒优雅。',
    'about.mission.title': '我们的使命',
    'about.mission.text': '我们相信每个人都值得拥有钻石的璀璨，无需在价格、伦理或品质上妥协。',
    'about.values.title': '我们的价值观',
    'about.values.sustainability': '可持续发展',
    'about.values.transparency': '透明公开',
    'about.values.innovation': '创新科技',

    // Contact
    'contact.title': '联系我们',
    'contact.subtitle': '我们期待听到您的声音。',
    'contact.form.name': '姓名',
    'contact.form.email': '邮箱',
    'contact.form.message': '留言',
    'contact.form.submit': '发送',

    // FAQ
    'faq.title': '常见问题',
    'faq.subtitle': '关于实验室培育钻石，您需要知道的一切。',

    // Footer
    'footer.tagline': '同样的闪耀，更智慧的选择',
    'footer.copyright': '© 2026 Twinturing 双生图灵 版权所有',
    'footer.shop': '选购',
    'footer.company': '公司',
    'footer.support': '支持',
    'footer.newsletter': '订阅我们的资讯',
    'footer.email.placeholder': '输入您的邮箱',
    'footer.subscribe': '订阅',

    // Common
    'common.learnMore': '了解更多',
    'common.viewAll': '查看全部',
    'common.loading': '加载中...',
  }
}

export function t(key: string, locale: Locale = defaultLocale): string {
  return translations[locale][key] || translations[defaultLocale][key] || key
}

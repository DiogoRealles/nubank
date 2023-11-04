import type { Metadata } from 'next'
import { Sora, Source_Code_Pro, Source_Sans_3 } from 'next/font/google'
import '@/styles/globals.css'
import Navbar from '@/components/Navbar/Index'
import Footer from '@/components/Footer/Index'

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['300', '400', '500', '600', ],
})

const sourceSansPro = Source_Sans_3({
  subsets: ['latin'],
  variable: '--font-sourceSansPro',
  weight: ['300', '400', '600', ],
})

export const metadata: Metadata = {
  title: {
    default: 'Nubank - Finalmente você no controle do seu dinheiro',
    template: 'Nubank - s%',
  },
  description: 'Peça sua conta e cartão de crédito do Nubank - Empréstimo. Transparentes, seguros e do seu jeito. Opções de empréstimos que deixam você no controle sempre',
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
  metadataBase: new URL('https://diogorealles.github.io/portfolio'),
  alternates: {
    canonical: '/nubank',
    languages: {
      'pt-BR': '/pt-BR'
    }
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Diog Realles - Nubank',
    description: 'Peça sua conta e cartão de crédito do Nubank - Empréstimo. Transparentes, seguros e do seu jeito. Opções de empréstimos que deixam você no controle sempre',
    creator: 'Diogo Realles',
    siteId: '',
    creatorId: '',
    images: {
      url: 'https://diogorealles.github.io/portfolio/nubank/public/img/og.png',
      alt: 'Nubank cover',
    },
  },

  verification: {
    google: 'google-site-verification=FYoOGkzHFgI2WUdeqlv11lIxxBk0yf4NpQwExOgba_4'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br" className='scroll-smooth user-selection overflow-x-hidden'>
      <body className={`${sora.variable} ${sourceSansPro.className} bg-white-dark`}>
        <Navbar />

        {children}
        
        <Footer />
      </body>
    </html>
  )
}

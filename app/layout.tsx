import './globals.css'
import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Murat Akar — Kişisel Web Sitesi',
  description: "Murat Akar'ın kişisel web sitesi. Hakkımda, projeler, yazılar, iletişim.",
  metadataBase: new URL('https://www.muratakar.net'),
  alternates: { canonical: '/' },
  openGraph: { url: 'https://www.muratakar.net/', title: 'Murat Akar — Kişisel Web Sitesi', description: 'Projelerim, yazılarım ve iletişim için resmi sitem.', images: ['/og-image.jpg'] },
  twitter: { card: 'summary_large_image' }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet" />
        <Script defer data-domain="www.muratakar.net" src="https://plausible.io/js/script.file-downloads.hash.outbound-links.pageview-props.revenue.tagged-events.js" />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}

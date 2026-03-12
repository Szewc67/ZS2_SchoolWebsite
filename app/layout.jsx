import './globals.scss'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import Script from 'next/script'
import Header from '@/components/header'
import Availability from '@/components/availability'
import Footer from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: {
    template: '%s | Zespół Szkoł Nr 2 im. Jana Kochanowskiego w Łańcucie',
    default: 'Zespół Szkoł Nr 2 im. Jana Kochanowskiego w Łańcucie',
  },
  description:
    'Z nami rozwiniesz swoje zainteresowania, posiądziesz wiedzę i umiejętności. Wszystko pod okiem najlepszych nauczycieli i wspaniałych kolegów, którzy zawsze Ci doradzą oraz pomogą z każdym problemem.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <body className={inter.className}>
        <Header />
        <Availability />
        {children}
        <Footer />
        <Analytics />

        {/* Google tag (gtag.js)*/}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-JBV30B3LQ3" />
        <Script id="google-analytics">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-JBV30B3LQ3');
        `}
        </Script>
      </body>
    </html>
  )
}

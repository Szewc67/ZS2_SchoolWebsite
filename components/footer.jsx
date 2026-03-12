'use client'

import './style/footer.scss'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'

export default function Footer() {
  const pathname = usePathname()
  const router = useRouter()

  function epuap() {
    if (
      confirm(
        'Link prowadzi poza stronę szkoły na platformę ePUAP. Czy chcesz kontynuować?'
      )
    )
      router.push(
        'https://epuap.gov.pl/wps/portal/strefa-klienta/katalog-spraw/profil-urzedu/zs2lancut?fbclid=IwAR1Px7CPEeuj6-srWU6t3p_Bq8nhlx1uqMQfJHn7ji0cQwAoMq3V2tBsgao'
      )
  }
  function maps() {
    if (
      confirm(
        'Link prowadzi poza stronę szkoły na platformę Google Maps. Czy chcesz kontynuować?'
      )
    )
      router.push('https://goo.gl/maps/h7hHYKVXTWPDQJeE9')
  }
  function autors() {
    if (
      confirm(
        'Link prowadzi poza stronę szkoły na platformę Vercel. Czy chcesz kontynuować?'
      )
    )
      router.push('https://do-moon.vercel.app')
  }
  function privacy() {
    if (
      confirm(
        'Link prowadzi poza stronę szkoły na platformę Graphassets. Czy chcesz kontynuować?'
      )
    )
      router.push('https://media.graphassets.com/o6lzAgp8QNKos25g4KcW')
  }

  return (
    pathname != '/' && (
      <footer className="footer ">
        <div className="footer__text">
          <h1>Zespół Szkół nr 2 im. Jana Kochanowskiego w Łańcucie</h1>

          <div className="footer__description">
            <p>
              tel.: 17 225 25 82
              <br />
              sekretariat@zs2lancut.pl
            </p>

            <p onClick={epuap} className="pointer" title="ePUAP">
              Skrzynka ePUAP/
              <br />
              zs2lancut/SkrytkaESP
            </p>

            <p onClick={maps} className="pointer" title="Google Maps">
              ul. Podzwierzyniec
              <br />
              41,37-100 Łańcut
            </p>

            <p>
              <span onClick={autors} className="pointer" title="Autorzy">
                Design & Code by DoMoon
              </span>
              <br />
              <span onClick={privacy} className="pointer" title="Polityka Prywatności">
                Polityka prywatności
              </span>
            </p>
          </div>
        </div>

        <Image
          src="/footer-logo.webp"
          alt="logo"
          className="footer__logo"
          width="128"
          height="128"
        />
      </footer>
    )
  )
}

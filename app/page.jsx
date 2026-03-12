'use client'

import './main-page.scss'
import Link from 'next/link'
import { getMovies } from '@/lib/queries'
import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'

export default function Home() {
  const router = useRouter()

  const [movieUrl, setMovieUrl] = useState('')

  useEffect(() => {
    async function fetchMovies() {
      const movie = await getMovies()
      setMovieUrl(
        movie ? movie[0].movie.url : 'https://media.graphassets.com/eptXmvItQBimQjlPI5WH'
      )
    }

    fetchMovies()
  }, [])

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
    <main className="main-page">
      <video
        className="main-page__video"
        src={movieUrl}
        autoPlay="autoplay"
        playsInline="playsinline"
        loop={true}
        muted={true}
      />

      <footer className="main-page__footer">
        <div className="main-page__temporary">
          <button className="main-page__button">
            <Link href="/digital-masters">
              Konkurs <span>Digital Masters</span> ZS2 Łańcut
            </Link>

            <hr />

            <Link href="/mikrotik">
              Akademia <span>MikroTik</span>
            </Link>
          </button>
        </div>

        <div className="main-page__description">
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
            ul. Podzwierzyniec 41
            <br />
            37-100 Łańcut
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
      </footer>
    </main>
  )
}

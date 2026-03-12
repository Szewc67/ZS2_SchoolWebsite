'use client'

import './style/header.scss'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

export default function Header() {
  const [isOn, setIsOn] = useState(false)
  const router = useRouter()

  let isMainPage = usePathname() === '/'

  function reset() {
    setIsOn(false)
  }

  function tiktok() {
    if (
      confirm(
        'Link prowadzi poza stronę szkoły na platformę Tiktok. Czy chcesz kontynuować?'
      )
    )
      router.push('https://www.tiktok.com/@zs2lancut')
  }
  function facebook() {
    if (
      confirm(
        'Link prowadzi poza stronę szkoły na platformę Facebook. Czy chcesz kontynuować?'
      )
    )
      router.push('https://www.facebook.com/zs2lancut')
  }
  function instagram() {
    if (
      confirm(
        'Link prowadzi poza stronę szkoły na platformę Instagram. Czy chcesz kontynuować?'
      )
    )
      router.push('https://www.instagram.com/zs2lancut')
  }

  return (
    <>
      <section className={isOn ? 'darknes' : ''} onClick={reset} />
      <section className={!isMainPage ? 'header-backgraund' : ''} />

      <header className="header">
        <Link href="/" onClick={reset}>
          <Image
            src={isMainPage ? '/logo-white.svg' : '/logo-main.svg'}
            alt="logo"
            width="323"
            height="52"
            className="header__logo"
            priority={true}
          />
        </Link>

        <div className="header__nav">
          <div className={`header__media ${isMainPage ? 'header__media--white' : ''}`}>
            <p onClick={tiktok} className="pointer" title="Tiktok">
              <Image src="/Tictok.svg" alt="tiktok" width="28" height="28" />
            </p>
            <p onClick={facebook} className="pointer" title="Facebook">
              <Image src="/Facebook.svg" alt="facebook" width="28" height="28" />
            </p>
            <p onClick={instagram} className="pointer" title="Instagram">
              <Image src="/Instagram.svg" alt="instagram" width="28" height="28" />
            </p>
          </div>

          <div className="header__menu" onClick={() => setIsOn(!isOn)}>
            <div
              className={`${
                isOn ? 'header__menu-item--white' : 'header__menu-item--black'
              } ${isMainPage ? 'header__menu-item--white' : ''}`}
            ></div>
            <div
              className={`${
                isOn ? 'header__menu-item--white' : 'header__menu-item--black'
              } ${isMainPage ? 'header__menu-item--white' : ''}`}
            ></div>
            <div
              className={`${
                isOn ? 'header__menu-item--white' : 'header__menu-item--black'
              } ${isMainPage ? 'header__menu-item--white' : ''}`}
            ></div>
          </div>
        </div>

        <div
          className={`header__menu--droped ${isOn ? 'menu--visible' : 'menu--hidden'}`}
        >
          <ul>
            <li>
              <Link href="/dziennik">e-Dziennik</Link>
            </li>
            <li>
              <Link href="https://plan-lekcji.zs2lancut.pl">Plan lekcji</Link>
            </li>

            <hr />

            <li>
              <Link href="/aktualnosci" onClick={reset}>
                Aktualności
              </Link>
            </li>
            <li>
              <Link href="/szkola" onClick={reset}>
                Szkoła
              </Link>
            </li>
            <li>
              <Link href="/dlarodzicow" onClick={reset}>
                Dla rodziców
              </Link>
            </li>
            <li>
              <Link href="/stowarzyszenie" onClick={reset}>
                Stowarzyszenie
              </Link>
            </li>
            <li>
              <Link href="/kandydat" onClick={reset}>
                Dla kandydata
              </Link>
            </li>
            <li>
              <Link href="/konkursy" onClick={reset}>
                Konkursy
              </Link>
            </li>

            <div className="header__menu--droped__media">
              <li>
                <Link href="/tiktok" target="_blank">
                  <Image src="Tictok.svg" alt="tiktok" width="28" height="28" />
                </Link>
                <Link href="/facebook" target="_blank">
                  <Image src="Facebook.svg" alt="facebook" width="28" height="28" />
                </Link>
                <Link href="/instagram" target="_blank">
                  <Image src="Instagram.svg" alt="instagram" width="28" height="28" />
                </Link>
              </li>
            </div>
          </ul>
        </div>
      </header>
    </>
  )
}

'use client'

import './style/information.scss'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

export default function Information() {
  const router = useRouter()

  function BIP() {
    if (
      confirm(
        'Link prowadzi poza stronę szkoły na Biuletyn Informacji Publicznej. Czy chcesz kontynuować?'
      )
    )
      router.push(
        'http://www.powiat-lancut.itl.pl/bip/index2.php?page=bip.php&under=49&grp=2'
      )
  }
  function DD() {
    if (
      confirm(
        'Link prowadzi poza stronę szkoły na Deklaracje Dostępności. Czy chcesz kontynuować?'
      )
    )
      router.push('https://media.graphassets.com/u6yIa4JxTJbYiwCqYBGd')
  }
  function PP() {
    if (
      confirm(
        'Link prowadzi poza stronę szkoły na Polityke prywatności. Czy chcesz kontynuować?'
      )
    )
      router.push('https://media.graphassets.com/o6lzAgp8QNKos25g4KcW')
  }

  return (
    <section className="information">
      <Image
        src="/icons/bip.svg"
        alt="Biuletyn Informacji Publicznej"
        width="50"
        height="50"
        onClick={BIP}
        className="information__icon"
        title="Biuletyn Informacji Publicznej"
      />

      <Image
        src="/icons/accessibility.svg"
        alt="Deklaracja Dostępności"
        width="50"
        height="50"
        onClick={DD}
        className="information__icon"
        title="Deklaracja Dostępności"
      />

      <Image
        src="/icons/pp.svg"
        alt="Polityka Prywatności"
        width="50"
        height="50"
        onClick={PP}
        className="information__icon"
        title="Polityka Prywatności"
      />
    </section>
  )
}

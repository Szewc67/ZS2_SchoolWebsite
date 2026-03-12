import './szkola.scss'
import Image from 'next/image'
import Link from 'next/link'
import Information from '@/components/information'

export const metadata = {
  title: 'Szkoła',
}

export default async function Szkola() {
  return (
    <>
      <Information />

      <main className="szkola">
        <h1 className="szkola__title">
          O <span>Naszej</span> Szkole
        </h1>

        <section className="szkola__content">
          <div className="szkola__content--left">
            <Link href="/dokumenty">
              <button className="szkola__button">Dokumenty</button>
            </Link>

            <Link
              href="/szkola/stowarzyszenie"
              className="szkola__button--center"
            >
              <button className="szkola__button szkola__button--center">
                Stowarzyszenie
              </button>
            </Link>

            <Link href="/szkola/wirtualna-strzelnica">
              <button className="szkola__button">Wirtualna strzelnica</button>
            </Link>
          </div>

          <Image
            src="/kochanowski.svg"
            alt="image"
            width="180"
            height="190"
            className="szkola__content--center"
          />

          <div className="szkola__content--right">
            <Link href="/kadra" className="szkola__button--center">
              <button className="szkola__button szkola__button--center">
                Kadra
              </button>
            </Link>

            <Link href="/samorzad">
              <button className="szkola__button">Samorząd</button>
            </Link>

            <Link
              href="/aktualnosci/ekopracownia-w-zs2"
              className="szkola__button--center"
            >
              <button className="szkola__button szkola__button--center">
                Ekopracownia
              </button>
            </Link>
          </div>
        </section>
      </main>
    </>
  )
}

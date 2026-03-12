import { getDirectionsPosts } from '@/lib/queries'
import './kandydat.scss'
import Slider from '@/components/slider'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'

export default async function Kandydat() {
  const directions = await getDirectionsPosts()
  const images = directions?.map((direction) => direction.mainImage.url)

  let events = [
    {
      date: '13.05 - 14.06',
      title: 'Złożenie wniosków do szkoł ponadpodstawowoych',
    },
    {
      date: '13.05 - 18.07',
      title: 'Wydanie skierowań do Poradni Medycyny Placy dla kandydatów do Technikum',
    },
    {
      date: '21.06 - 08.07',
      title: 'Przyjmowanie świadectw ukończenia szkoły oraz egzaminu ósmoklasistów',
    },
    {
      date: '16.07',
      title: 'Ogłoszenie listy kandydatów zakfalifikowanych i niezakfalifikowanych',
    },
    {
      date: '16.08 - 18.08',
      title: 'Potwierdzenie woli przyjecia do szkoły',
    },
    {
      date: '19.08',
      title: 'Ogłoszenie listy kandydatów przyjetych i nieprzyjetych do szkoły',
    },
  ]

  return directions ? (
    <main className="kandydat">
      <h1 className="kandydat__title">
        Zespół Szkół <span>nr 2</span> im. Jana Kochanowskiego w Łańcucie
      </h1>

      <div className="kandydat__content">
        <div className="kandydat__container">
          <div className="kandydat__slider">
            <Slider images={images} interval={4000} className="kandydat__slider--width" />
            <Link className="kandydat__slider-button" href="/kierunki">
              Sprawdź <span>kierunki</span>
            </Link>
          </div>

          <Link href="https://nabor.pcss.pl/lancut" className="kandydat__nabor">
            <Image
              src="/icons/logo_nabor.svg"
              alt="Nabór"
              width={130}
              height={100}
              className="kandydat__nabor-img"
            />
            Nabór Elektroniczny
          </Link>
        </div>

        <div className="kandydat__timeline">
          <h2 className="kandydat__subtitle">
            Harmonogram <span>Rekeutacji</span> 2024/2025
          </h2>

          {events.map((event, i) => (
            <div className="kandydat__event" key={i}>
              <p>
                <span>{event.date}</span> {event.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  ) : (
    notFound()
  )
}

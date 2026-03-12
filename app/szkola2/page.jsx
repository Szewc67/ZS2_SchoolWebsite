import Image from 'next/image'
import Link from 'next/link'
import './szkola.scss'

export default function Szkola() {
  return (
    <main className="szkola">
      <h1 className="szkola__title">
        O <span>Naszej</span> Szkole!
      </h1>

      <div className="szkola__hero">
        <article className="szkola__article">
          <p>
            <span>Zespół Szkół nr 2 w Łańcucie </span>
            to miejsce, gdzie edukacja staje się przygodą, a marzenia zamieniają się w
            rzeczywistość. Nasza szkoła oferuje szeroki wachlarz kierunków, które
            przygotowują uczniów do dynamicznie zmieniającego się rynku pracy oraz
            rozwijają ich pasje i zainteresowania.
          </p>
          <p>
            Nasi nauczyciele to prawdziwi pasjonaci, którzy swoją wiedzę i doświadczenie
            przekazują z zaangażowaniem i sercem. Kadra nauczycielska nieustannie się
            rozwija, uczestnicząc w szkoleniach i konferencjach, aby móc sprostać
            wymaganiom współczesnej edukacji. Dbamy o indywidualne podejście do każdego
            ucznia, wspierając ich w rozwijaniu talentów i pokonywaniu trudności.
          </p>
          <p>
            Szkoła jest wyposażona w <span>nowoczesne pracownie</span>, które umożliwiają
            realizację najbardziej ambitnych projektów. Znajdziesz u nas m.in. nowoczesne
            pracownie komputerowe, <span>symulatory lotnicze</span> oraz przestrzenie
            dedykowane zajęciom policyjnym i wojskowym. Dzięki temu nauka u nas jest nie
            tylko efektywna, ale i niezwykle interesująca.
          </p>
        </article>

        <Image
          src="samorzad.jpg"
          alt=""
          width={420}
          height={420}
          className="szkola__image"
        />
      </div>

      <div className="szkola__menu">
        <Link href="#" className="szkola__menu-button">
          Dokumenty
        </Link>
        <Link href="#" className="szkola__menu-button">
          Kadra
        </Link>
        <Link href="#" className="szkola__menu-button">
          Samorząd Szkolny
        </Link>
        <Link href="#" className="szkola__menu-button">
          Stowarzyszenie
        </Link>
        <Link href="#" className="szkola__menu-button">
          <span>Ekopracowania</span>
        </Link>
        <Link href="#" className="szkola__menu-button">
          <span>Strzelnica</span>
        </Link>
      </div>

      <div className="szkola__hero szkola__hero--reverse">
        <article className="szkola__article">
          <p>
            Jesteśmy również dumni z uczestnictwa w programie <span>Erasmus</span>, który
            otwiera przed naszymi uczniami drzwi do międzynarodowej edukacji i kultury.
            Dzięki wymianom międzynarodowym, nasi uczniowie mają możliwość zdobywania
            doświadczenia w różnych krajach Europy, rozwijając swoje umiejętności
            językowe, poznając nowe kultury i nawiązując cenne kontakty.
          </p>
          <p>
            Nasze placówki edukacyjne są przyjazne uczniom, oferując komfortowe warunki
            nauki i rozwijania pasji. Organizujemy liczne wycieczki, warsztaty, spotkania
            z ekspertami oraz projekty edukacyjne, które wzbogacają proces kształcenia.
            Zespół Szkół nr 2 w Łańcucie to miejsce, gdzie każdy uczeń może poczuć się
            wyjątkowo i znaleźć swoją drogę do sukcesu.
            <span>Dołącz do nas i przekonaj się, jak fascynująca może być nauka!</span>
          </p>
        </article>

        <Image
          src="samorzad.jpg"
          alt=""
          width={420}
          height={420}
          className="szkola__image"
        />
      </div>

      <div className="szkola__documents">
        <h2 className="szkola__documents-title">Dokumenty regulacyjne</h2>

        <div className="szkola__documents-container">
          <Link
            href="https://media.graphassets.com/u6yIa4JxTJbYiwCqYBGd"
            className="szkola__documents-element"
          >
            <Image src="/icons/document.svg" alt="" width={50} height={50} />
            <p>DEKLARACJA DOSTĘPNOŚCI</p>
          </Link>
          <Link
            href="https://media.graphassets.com/o6lzAgp8QNKos25g4KcW"
            className="szkola__documents-element"
          >
            <Image src="/icons/document.svg" alt="" width={50} height={50} />
            <p>POLITYKA PRYWATNOŚCI</p>
          </Link>
          <Link
            href="http://www.powiat-lancut.itl.pl/bip/index2.php?page=bip.php&under=49&grp=2"
            className="szkola__documents-element"
          >
            <Image src="/icons/document.svg" alt="" width={50} height={50} />
            <p>BIULETYN INFORMACJI PUBLICZNYCH</p>
          </Link>
        </div>
      </div>
    </main>
  )
}

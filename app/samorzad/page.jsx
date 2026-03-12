import './samorzad.scss'
import Image from 'next/image'

export const metadata = {
  title: 'Samorzad Szkolny',
  description: 'Samorzad Szkolny ZS2',
}

export default function Samorzad() {
  return (
    <main className="samorzad">
      <h1 className="samorzad__title">
        Samorząd Uczniowski <br />
        <span>2023/2024</span>
      </h1>
      <div className="samorzad__div">
        <div className="samorzad__div__zdjecie"></div>
        <div className="samorzad__div__text">
          <div className="potrzebe">
            <div>
              <h2>Przewodniczący</h2>
              <span>Szymon Łukarski 4TC</span>
            </div>
            <div>
              <h2>Zastępca</h2>
              <span>Aneta Woźniak 3LA</span>
            </div>
          </div>
          <div className="potrzebe">
            <div>
              <h2>Sekretarz</h2>
              <span>Martyna Kiełb 2LA</span>
            </div>
            <div>
              <h2>Członkowie</h2>
              <span>Dominik Zwoliński 2TC</span> <br />
              <span>Konrad Golenia 2TB</span> <br />
              <span>Bartłomiej Domka 4TA</span>
            </div>
          </div>
        </div>
      </div>
      <div className="samorzad__harmo">
        <div className="samorzad__harmo__title">
          <h1 className="samorzad__harmo__title__h1">
            Harmonogram Aktywności
            <br />
            Samorządu
          </h1>
          <Image
            src="/ludzie.png"
            alt="ikonka z ludźmi"
            width="150"
            height="90"
          />
        </div>
        <div className="samorzad__harmo__aktyw"></div>
      </div>
    </main>
  )
}

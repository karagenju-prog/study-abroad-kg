"use client";

import Link from "next/link";
import { useState } from "react";

const countryTabs = [
  {
    id: "italy",
    code: "IT",
    name: "Италия",
    flag: "🇮🇹",
    available: true,
    href: "/countries/italy",
    image: "/images/country/italy-hero.jpg",
    label: "Study in Italy",
    shortText:
      "Университеты, документы, стипендии и путь поступления в Италию.",
    scholarship: "До €8,133 в год",
  },
  {
    id: "germany",
    code: "DE",
    name: "Германия",
    flag: "🇩🇪",
    available: false,
    href: "/countries/germany",
    image: "/images/country/italy-hero.jpg",
    label: "Study in Germany",
    shortText:
      "Сильные университеты, технические программы и хорошие перспективы.",
    scholarship: "Скоро",
  },
  {
    id: "turkey",
    code: "TR",
    name: "Турция",
    flag: "🇹🇷",
    available: false,
    href: "/countries/turkey",
    image: "/images/country/italy-hero.jpg",
    label: "Study in Turkey",
    shortText:
      "Удобное направление для студентов СНГ с понятным поступлением.",
    scholarship: "Скоро",
  },
  {
    id: "france",
    code: "FR",
    name: "Франция",
    flag: "🇫🇷",
    available: false,
    href: "/countries/france",
    image: "/images/country/italy-hero.jpg",
    label: "Study in France",
    shortText:
      "Европейское качество образования и сильные бизнес-школы.",
    scholarship: "Скоро",
  },
];

const pathwaySteps = [
  {
    icon: "🎓",
    text: "Найди подходящую программу",
  },
  {
    icon: "📄",
    text: "Проверь требования и документы",
  },
  {
    icon: "€",
    text: "Подай заявку",
  },
  {
    icon: "✅",
    text: "Найди стипендию и начни учёбу",
  },
];

export default function HomePage() {
  const [activeCountry, setActiveCountry] = useState("italy");

  const selectedCountry =
    countryTabs.find((country) => country.id === activeCountry) ||
    countryTabs[0];

  return (
    <main className="homePage">
      <section className="hero heroStudentLayout">
        <div className="heroBackground">
          <img
            src={selectedCountry.image}
            alt={selectedCountry.name}
            className="heroBackgroundImage"
          />
          <div className="heroBackgroundOverlay" />
        </div>

        <div className="heroLeft">
          <div className="heroCountryBadge">
  <span>{selectedCountry.code}</span>
  <p>{selectedCountry.label}</p>
</div>

          <p className="heroEyebrow">
            Платформа для самостоятельного поступления
          </p>

          <h1 className="heroTitle">
  Поступи за границу <br />
  самостоятельно — <span>без агентств</span>
</h1>
          <p className="heroText">
            Найди программу, требования и стипендии <span>в одном месте</span>.
          </p>

      <Link href="/start" className="primaryButton">
            <span>🔎</span>
            Найти программу
          </Link>
        </div>

        <div className="heroPathwaySide">
          <div className="pathwayPanel">
            <p className="pathwayLabel">{selectedCountry.label}</p>

            <h2>Путь от программы до стипендии</h2>

            <div className="pathwayList">
              {pathwaySteps.map((step) => (
                <div className="pathwayRow" key={step.text}>
                  <div className="pathwayIcon">{step.icon}</div>
                  <p>{step.text}</p>
                </div>
              ))}
            </div>
          </div>

          {selectedCountry.available ? (
            <Link
              href="/countries/italy/scholarships"
              className="miniScholarship"
            >
              <div>
                <p>Возможная стипендия</p>
                <h3>{selectedCountry.scholarship}</h3>
                <span>Сумма зависит от конкурса, статуса и документов.</span>
              </div>

              <strong>→</strong>
            </Link>
          ) : (
            <div className="miniScholarship lockedMiniScholarship">
              <div>
                <p>Раздел готовится</p>
                <h3>{selectedCountry.name}</h3>
                <span>Скоро добавим университеты, документы и стипендии.</span>
              </div>

              <strong>🔒</strong>
            </div>
          )}
        </div>
      </section>

      <section className="countrySection">
        <div className="countrySectionTop">
          <div>
            <h2>Выбери страну</h2>
            <p>
              Нажми на страну, чтобы открыть её раздел. Там будут университеты,
              документы, стипендии и путь поступления.
            </p>
          </div>

          <div className="countryNotice">
            <span>ⓘ</span>
            <p>Сейчас доступна Италия. Другие страны добавим позже.</p>
          </div>
        </div>

        <div className="countryHomeGrid">
          {countryTabs.map((country) => {
            const isActive = activeCountry === country.id;

            if (country.available) {
              return (
                <Link
                  href={country.href}
                  key={country.id}
                  onMouseEnter={() => setActiveCountry(country.id)}
                  className={
                    isActive ? "countryHomeCard active" : "countryHomeCard"
                  }
                >
                  <div className="countryHomeTop">
                    <div className="countryHomeFlag">{country.flag}</div>

                    <div>
                      <strong>{country.code}</strong>
                      <h3>{country.name}</h3>
                    </div>

                    <span className="countryStatus available">Доступно</span>
                  </div>

                  <p>{country.shortText}</p>

                  <div className="countryHomeAction">Перейти →</div>
                </Link>
              );
            }

            return (
              <button
                key={country.id}
                onClick={() => setActiveCountry(country.id)}
                className={
                  isActive
                    ? "countryHomeCard active locked"
                    : "countryHomeCard locked"
                }
                type="button"
              >
                <div className="countryHomeTop">
                  <div className="countryHomeFlag">{country.flag}</div>

                  <div>
                    <strong>{country.code}</strong>
                    <h3>{country.name}</h3>
                  </div>

                  <span className="countryStatus soon">Скоро</span>
                </div>

                <p>{country.shortText}</p>

                <div className="countryHomeAction">Скоро</div>
              </button>
            );
          })}
        </div>
      </section>
    </main>
  );
}
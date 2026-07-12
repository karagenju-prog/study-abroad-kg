"use client";

import Link from "next/link";
import { useState } from "react";

const countryTabs = [
  {
    id: "italy",
    name: "Италия",
    flag: "🇮🇹",
    available: true,
  },
  {
    id: "germany",
    name: "Германия",
    flag: "🇩🇪",
    available: false,
  },
  {
    id: "turkey",
    name: "Турция",
    flag: "🇹🇷",
    available: false,
  },
  {
    id: "france",
    name: "Франция",
    flag: "🇫🇷",
    available: false,
  },
];

const italyUniversities = [
  {
    name: "University of Cassino and Southern Lazio",
    short: "UNICAS",
    href: "/countries/italy/universities/unicas",
    logo: "UC",
    logoImage: "",
    logoClass: "logoText",
  },
  {
    name: "Sapienza University of Rome",
    short: "Sapienza",
    href: "/countries/italy/universities/sapienza",
    logo: "SR",
    logoImage: "/logos/sapienza.png",
    logoClass: "logoSeal largeSeal",
  },
  {
    name: "University of Bologna",
    short: "Bologna",
    href: "/countries/italy/universities/bologna",
    logo: "UB",
    logoImage: "",
    logoClass: "logoText",
  },
  {
    name: "University of Padua",
    short: "Padua",
    href: "/countries/italy/universities/padua",
    logo: "UP",
    logoImage: "",
    logoClass: "logoText",
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
    icon:  "€" ,
    text: "Подай заявку самостоятельно",
  },
  {
    icon: "✅",
    text: "Найди стипендию и начни учёбу",
  },
];

export default function HomePage() {
  const [activeCountry, setActiveCountry] = useState("italy");

  const selectedCountry = countryTabs.find(
    (country) => country.id === activeCountry
  );

  const showItaly = activeCountry === "italy";

  return (
    <main className="homePage">
      <section className="hero heroStudentLayout">
        <div className="heroLeft">
          <p className="heroEyebrow">
            Платформа для самостоятельного поступления
          </p>

          <h1 className="heroTitle">
            Поступи за границу самостоятельно — <span>без агентств</span>
          </h1>

          <p className="heroText">
            Найди программу, требования и стипендии <span>в одном месте</span>.
          </p>

          <p className="heroNote">
            Пока специализируемся на Италии. Позже добавим другие страны.
          </p>

          <Link href="/start" className="primaryButton">
            <span>🔎</span>
            Найти программу
          </Link>
        </div>
        
<div className="heroCenterVisual">
  <div className="heroCenterImage" />
</div>

        <div className="heroPathwaySide">
          <div className="pathwayPanel">
            <p className="pathwayLabel">Study in Italy</p>

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

          <Link
            href="/countries/italy/scholarships"
            className="miniScholarship"
          >
            <div>
              <p>Возможная стипендия</p>
              <h3>До €8,133 в год</h3>
              <span>Сумма зависит от конкурса, статуса и документов.</span>
            </div>

            <strong>→</strong>
          </Link>
        </div>
      </section>
<section className="countrySection">
  <div className="countrySectionTop">
    <div>
      <h2>Куда поступить?</h2>
      <p>Выбери страну и изучи университеты.</p>
    </div>

    <div className="countryNotice">
      <span>ⓘ</span>
      <p>Сейчас доступна Италия. Другие страны добавим позже.</p>
    </div>
  </div>

  <div className="countryTabs">
    {countryTabs.map((country) => (
      <button
        key={country.id}
        onClick={() => setActiveCountry(country.id)}
        className={
          activeCountry === country.id
            ? "countryTab active"
            : country.available
              ? "countryTab"
              : "countryTab locked"
        }
        type="button"
      >
        <span>{country.flag}</span>
        {country.name}
        {!country.available && <small>🔒</small>}
      </button>
    ))}
  </div>

  {showItaly ? (
    <div className="universityCards logoUniversityGrid">
  {italyUniversities.map((university) => (
    <Link
      href={university.href}
      className="universityLogoCard"
      key={university.name}
    >
      <div className="universityLogoBox">
        {university.logoImage ? (
          <img
            src={university.logoImage}
            alt={`${university.name} logo`}
            className={`universityLogoImage ${university.logoClass}`}
          />
        ) : (
          <span>{university.logo}</span>
        )}
      </div>

      <h3>{university.name}</h3>
    </Link>
  ))}
</div>
  ) : (
    <div className="comingSoonBox">
      <h3>
        {selectedCountry?.flag} {selectedCountry?.name}
      </h3>

      <p>
        Эта страна пока в разработке. Сначала мы заполняем Италию, потом
        добавим университеты, документы и стипендии для других стран.
      </p>
    </div>
  )}
</section>
    </main>
  );
}
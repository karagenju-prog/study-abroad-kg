"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const availableCountries = ["italy", "germany", "turkey", "france"];

export default function Header() {
  const pathname = usePathname();

  const pathParts = pathname.split("/");
  const countryFromUrl = pathParts[2];

  const activeCountry = availableCountries.includes(countryFromUrl)
    ? countryFromUrl
    : "italy";

  const countryBase = `/countries/${activeCountry}`;

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href === "/countries") return pathname === "/countries";
    return pathname.startsWith(href);
  };

  return (
    <header className="siteHeader">
      <div className="headerInner">
        <Link href="/" className="brandBlock">
          <div className="brandLogo">✦</div>

          <div>
            <strong>
              Study Abroad <span>KG</span>
            </strong>
            <p>Поступление без агентств</p>
          </div>
        </Link>

        <nav className="mainNav">
          <Link
            href="/"
            className={isActive("/") ? "navLink active" : "navLink"}
          >
            Главная
          </Link>

          <Link
            href="/countries"
            className={isActive("/countries") ? "navLink active" : "navLink"}
          >
            Страны
          </Link>

          <Link
            href={`${countryBase}/universities`}
            className={
              isActive(`${countryBase}/universities`)
                ? "navLink active"
                : "navLink"
            }
          >
            Университеты
          </Link>

          <Link
            href={`${countryBase}/documents`}
            className={
              isActive(`${countryBase}/documents`)
                ? "navLink active"
                : "navLink"
            }
          >
            Документы
          </Link>

          <Link
            href={`${countryBase}/scholarships`}
            className={
              isActive(`${countryBase}/scholarships`)
                ? "navLink active"
                : "navLink"
            }
          >
            Стипендии
          </Link>

          <Link
            href={`${countryBase}/roadmap`}
            className={
              isActive(`${countryBase}/roadmap`)
                ? "navLink active"
                : "navLink"
            }
          >
            Как поступить
          </Link>

          <Link
            href="/about"
            className={isActive("/about") ? "navLink active" : "navLink"}
          >
            О нас
          </Link>

          <Link
            href="/community"
            className={isActive("/community") ? "navLink active" : "navLink"}
          >
            Сообщество
          </Link>
        </nav>

        <Link href="/start" className="headerSearchButton">
          🔎
        </Link>
      </div>
    </header>
  );
}
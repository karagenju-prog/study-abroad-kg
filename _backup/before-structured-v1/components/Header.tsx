"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const availableCountries = ["italy", "germany", "turkey", "france"];

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { href: "/", label: "Главная" },
    { href: "/countries", label: "Страны" },
    { href: `${countryBase}/universities`, label: "Университеты" },
    { href: `${countryBase}/documents`, label: "Документы" },
    { href: `${countryBase}/scholarships`, label: "Стипендии" },
    { href: `${countryBase}/roadmap`, label: "Как поступить" },
    { href: "/about", label: "О нас" },
    { href: "/community", label: "Сообщество" },
  ];

  return (
    <header className="siteHeader">
      <div className="headerInner">
        <Link href="/" className="brandBlock" onClick={closeMobileMenu}>
          <div className="brandLogo">✦</div>

          <div>
             <strong>
                  Study Abroad <span>KG</span>
              </strong>
                  <p>Поступление без агентств</p>
                  
          </div>
        </Link>

        <nav className="mainNav">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={isActive(link.href) ? "navLink active" : "navLink"}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="headerActions">
          <Link
            href="/start"
            className="headerSearchButton"
            onClick={closeMobileMenu}
            aria-label="Поиск программы"
          >
            🔎
          </Link>

      <button
  type="button"
  className="mobileMenuButton"
  onPointerUp={() => setIsMobileMenuOpen((prev) => !prev)}
  aria-label="Открыть меню"
  aria-expanded={isMobileMenuOpen}
>
  {isMobileMenuOpen ? "×" : "☰"}
</button>
        </div>
      </div>

      <div
        className={
          isMobileMenuOpen ? "mobileMenuOverlay active" : "mobileMenuOverlay"
        }
        onClick={closeMobileMenu}
      />

      <nav className={isMobileMenuOpen ? "mobileMenu active" : "mobileMenu"}>
        <div className="mobileMenuTop">
          <span>Меню</span>
          <button type="button" onClick={closeMobileMenu}>
            ×
          </button>
        </div>

        <div className="mobileMenuLinks">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMobileMenu}
              className={
                isActive(link.href) ? "mobileNavLink active" : "mobileNavLink"
              }
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Link href="/start" className="mobileSearchLink" onClick={closeMobileMenu}>
          🔎 Найти программу
        </Link>
      </nav>
    </header>
  );
}
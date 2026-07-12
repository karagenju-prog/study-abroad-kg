import Link from "next/link";
import { countries } from "@/data/countries";

export default function CountriesPage() {
  return (
    <main className="countriesPage">
      <section className="countriesHero">
        <p className="countriesEyebrow">Направления для поступления</p>
        <h1>Выбери страну</h1>
        <p className="countriesText">
          Начни со страны, которая тебе интересна. Внутри каждой страницы будет
          своя презентация, а потом уже разделы: университеты, документы,
          стипендии и путь поступления.
        </p>
      </section>

      <section className="countriesGrid">
        {countries.map((country) =>
          country.available ? (
            <Link
              key={country.slug}
              href={`/countries/${country.slug}`}
              className="countryCard"
            >
              <div className="countryCardTop">
                <span className="countryFlag">{country.flag}</span>
                <span className="countryStatus available">
                  {country.status}
                </span>
              </div>

              <h2>{country.name}</h2>
              <p>{country.shortText}</p>

              <div className="countryCardArrow">Открыть →</div>
            </Link>
          ) : (
            <div key={country.slug} className="countryCard locked">
              <div className="countryCardTop">
                <span className="countryFlag">{country.flag}</span>
                <span className="countryStatus locked">{country.status}</span>
              </div>

              <h2>{country.name}</h2>
              <p>{country.shortText}</p>

              <div className="countryCardArrow lockedText">Скоро</div>
            </div>
          )
        )}
      </section>
    </main>
  );
}
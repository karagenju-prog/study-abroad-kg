import Link from "next/link";
import { notFound } from "next/navigation";
import { countries } from "@/data/countries";

type CountryPageProps = {
  params: {
    country: string;
  };
};

export default function CountryPage({ params }: CountryPageProps) {
  const country = countries.find((item) => item.slug === params.country);

  if (!country) {
    notFound();
  }

  return (
    <main className="countryPage">
      <section className="countryHeroPage">
        <div className="countryHeroLeft">
          <div className="countryTopBadge">
            <span>{country.flag}</span>
            <span>{country.name}</span>
          </div>

          <h1>{country.heroTitle}</h1>
          <p className="countryHeroText">{country.heroText}</p>

          <div className="countryStats">
            {country.stats.map((stat) => (
              <div className="countryStatCard" key={stat.label}>
                <span>{stat.label}</span>
                <strong>{stat.value}</strong>
              </div>
            ))}
          </div>
        </div>

        <div className="countryHeroRight">
          <div className="countryPresentationCard">
            <div className="countryPresentationFlag">{country.flag}</div>
            <h2>{country.name}</h2>
            <p>{country.overview}</p>
          </div>
        </div>
      </section>

      <section className="countryNavSection">
        <div className="countryNavHeader">
          <h2>Разделы по стране</h2>
          <p>
            Здесь пользователь уже выбирает нужное: университеты, документы,
            стипендии и маршрут поступления.
          </p>
        </div>

        <div className="countryQuickNav">
          {country.available ? (
            <>
              <Link
                href={`/countries/${country.slug}/universities`}
                className="countryQuickNavItem"
              >
                🎓 Университеты
              </Link>

              <Link
                href={`/countries/${country.slug}/documents`}
                className="countryQuickNavItem"
              >
                📄 Документы
              </Link>

              <Link
                href={`/countries/${country.slug}/scholarships`}
                className="countryQuickNavItem"
              >
                💶 Стипендии
              </Link>

              <Link
                href={`/countries/${country.slug}/roadmap`}
                className="countryQuickNavItem"
              >
                🧭 Как поступить
              </Link>
            </>
          ) : (
            <>
              <div className="countryQuickNavItem disabled">🎓 Университеты</div>
              <div className="countryQuickNavItem disabled">📄 Документы</div>
              <div className="countryQuickNavItem disabled">💶 Стипендии</div>
              <div className="countryQuickNavItem disabled">🧭 Как поступить</div>
            </>
          )}
        </div>
      </section>

      <section className="countryInfoSection">
        <div className="countryInfoCard">
          <h3>О стране</h3>
          <p>{country.overview}</p>
        </div>

        <div className="countryInfoCard">
          <h3>Почему это направление интересно</h3>
          <ul className="countryHighlightsList">
            {country.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
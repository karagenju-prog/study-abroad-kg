import Link from "next/link";

const universities = [
  {
    name: "University of Cassino and Southern Lazio",
    shortName: "UNICAS",
    slug: "unicas",
    city: "Кассино",
    initials: "UC",
    description: "Государственный университет в регионе Лацио. Хороший вариант для студентов, которые ищут спокойный город и доступ к Lazio DiSCo.",
  },
  {
    name: "Sapienza University of Rome",
    shortName: "Sapienza",
    slug: "sapienza",
    city: "Рим",
    initials: "SR",
    description: "Крупный университет в столице Италии с большим выбором программ и сильной репутацией.",
  },
  {
    name: "University of Bologna",
    shortName: "Bologna",
    slug: "bologna",
    city: "Болонья",
    initials: "UB",
    description: "Один из самых известных университетов Италии. Болонья — сильный студенческий город.",
  },
  {
    name: "University of Padua",
    shortName: "Padua",
    slug: "padua",
    city: "Падуя",
    initials: "UP",
    description: "Сильный государственный университет в более спокойном и удобном для студентов городе.",
  },
  {
    name: "University of Turin",
    shortName: "Turin",
    slug: "turin",
    city: "Турин",
    initials: "UT",
    description: "Хороший вариант для экономики, бизнеса, права и международных направлений.",
  },
];

export default function UniversitiesPage() {
  return (
    <main>
      <section>
        <h1>Университеты Италии</h1>

        <p style={{ color: "#d1d5db", lineHeight: "1.6", maxWidth: "900px" }}>
          Выбери университет, чтобы посмотреть краткое описание, направления,
          возможные программы, требования и подходящие стипендии.
        </p>
      </section>

      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "18px",
          marginTop: "28px",
        }}
      >
        {universities.map((university) => (
          <Link
            key={university.slug}
            href={`/countries/italy/universities/${university.slug}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <article
              style={{
                border: "1px solid #1f2937",
                borderRadius: "18px",
                padding: "22px",
                background: "#111827",
                minHeight: "230px",
                transition: "0.2s",
              }}
            >
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "16px",
                  background: "#2563eb",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: "bold",
                  fontSize: "20px",
                  marginBottom: "18px",
                }}
              >
                {university.initials}
              </div>

              <p style={{ color: "#60a5fa", fontWeight: "bold", marginBottom: "8px" }}>
                {university.shortName}
              </p>

              <h2 style={{ fontSize: "22px", marginTop: 0, marginBottom: "10px" }}>
                {university.name}
              </h2>

              <p style={{ color: "#d1d5db", marginBottom: "10px" }}>
                <strong>Город:</strong> {university.city}
              </p>

              <p style={{ color: "#d1d5db", lineHeight: "1.6" }}>
                {university.description}
              </p>

              <p style={{ color: "#93c5fd", fontWeight: "bold", marginTop: "18px" }}>
                Смотреть университет →
              </p>
            </article>
          </Link>
        ))}
      </section>
    </main>
  );
}
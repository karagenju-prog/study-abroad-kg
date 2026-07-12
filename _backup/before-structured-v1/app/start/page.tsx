"use client";

import { useState } from "react";

const programs = [
  {
    country: "Италия",
    university: "University of Cassino and Southern Lazio",
    city: "Кассино",
    region: "Лацио",
    level: "Бакалавриат",
    field: "Бизнес и экономика",
    language: "Английский",
    program: "Economics and Business",
    scholarship: "Lazio DiSCo",
    scholarshipAmount: "до ~€8, 133/год",
    officialUrl: "https://www.unicas.it",
    requirements: [
      "12 лет образования или эквивалент",
      "Для 11 классов часто нужен 1 курс / foundation / другой признанный вариант",
      "Английский примерно B2 / IELTS 5.5 или эквивалент",
      "Документы об образовании + перевод + апостиль/легализация",
    ],
    scholarshipDocs: [
      "ISEEUP / ISEE Parificato",
      "Доходы семьи",
      "Имущество / недвижимость",
      "Состав семьи",
    ],
  },
  {
    country: "Италия",
    university: "Sapienza University of Rome",
    city: "Рим",
    region: "Лацио",
    level: "Бакалавриат",
    field: "Экономика / Инженерия / Международные направления",
    language: "Английский / Итальянский",
    program: "Sapienza programs",
    scholarship: "Lazio DiSCo",
    scholarshipAmount: "до ~€8, 133/год",
    officialUrl: "https://www.uniroma1.it/en",
    requirements: [
      "Проверить требования конкретной программы",
      "Документы об образовании",
      "Языковой сертификат, если требуется",
      "Pre-enrollment / Universitaly для non-EU students",
    ],
    scholarshipDocs: [
      "ISEEUP / ISEE Parificato",
      "Доходы семьи",
      "Имущество семьи",
      "Документы по правилам DiSCo Lazio",
    ],
  },
  {
    country: "Италия",
    university: "University of Bologna",
    city: "Болонья",
    region: "Emilia-Romagna",
    level: "Бакалавриат / Магистратура",
    field: "Экономика / Бизнес / Data / Международные направления",
    language: "Английский / Итальянский",
    program: "Bologna programs",
    scholarship: "ER.GO",
    scholarshipAmount: "зависит от региона и статуса",
    officialUrl: "https://www.unibo.it/en",
    requirements: [
      "Требования зависят от программы",
      "Документы об образовании",
      "Языковой сертификат, если требуется",
      "Возможный admission test / selection",
    ],
    scholarshipDocs: [
      "Документы о доходах семьи",
      "Документы об имуществе",
      "ISEE / foreign income procedure",
      "Подача через ER.GO",
    ],
  },
  {
    country: "Италия",
    university: "University of Padua",
    city: "Падуя",
    region: "Veneto",
    level: "Бакалавриат / Магистратура",
    field: "Data / Science / Economics / Engineering",
    language: "Английский / Итальянский",
    program: "Padua programs",
    scholarship: "Padua / Regional scholarships",
    scholarshipAmount: "зависит от конкурса",
    officialUrl: "https://www.unipd.it/en",
    requirements: [
      "Проверить требования выбранной программы",
      "Документы об образовании",
      "Язык обучения: English / Italian",
      "Соблюдение дедлайнов admission и scholarship",
    ],
    scholarshipDocs: [
  "Документы о доходах семьи",
  "Справка о составе семьи",
  "Документы об имуществе / недвижимости",
  "Требования конкретного конкурса стипендии",
],
  },
  {
    country: "Италия",
    university: "Politecnico di Milano",
    city: "Милан",
    region: "Lombardy",
    level: "Магистратура",
    field: "Инженерия / Design / Architecture / Technology",
    language: "Английский",
    program: "Polimi MSc programs",
    scholarship: "DSU + Merit scholarships",
    scholarshipAmount: "до €10,000/год для некоторых merit scholarships",
    officialUrl: "https://www.polimi.it/en",
    requirements: [
      "Диплом бакалавра в подходящей области",
      "Portfolio может требоваться для design/architecture",
      "Английский сертификат",
      "Сильный academic profile",
    ],
   scholarshipDocs: [
  "Документы для DSU, если подаёшься на региональную поддержку",
  "Сильный академический профиль для merit scholarships",
  "Документы о доходах и имуществе семьи",
  "Проверка условий конкурса Polimi",
],
  },
  {
    country: "Италия",
    university: "University of Turin",
    city: "Турин",
    region: "Piemonte",
    level: "Магистратура",
    field: "Бизнес / Экономика / Международные программы",
    language: "Английский",
    program: "English-taught Master programs",
    scholarship: "EDISU Piemonte / Talent 4 UniTo",
    scholarshipAmount: "Talent 4 UniTo: €20,000 total gross for 2 years",
    officialUrl: "https://en.unito.it",
    requirements: [
      "Диплом бакалавра",
      "Transcript",
      "Английский язык",
      "Проверить конкретную программу",
    ],
  scholarshipDocs: [
  "Документы для DSU, если подаёшься на региональную поддержку",
  "Сильный академический профиль для merit scholarships",
  "Документы о доходах и имуществе семьи",
  "Проверка условий конкурса Polimi",
],
  },
  {
    country: "Италия",
    university: "University of Pisa",
    city: "Пиза",
    region: "Tuscany",
    level: "Бакалавриат / Магистратура",
    field: "Economics / Engineering / Science / Humanities",
    language: "Английский / Итальянский",
    program: "Pisa programs",
    scholarship: "DSU Toscana",
    scholarshipAmount: "зависит от DSU Toscana call",
    officialUrl: "https://www.unipi.it/en",
    requirements: [
      "Проверить требования программы",
      "Документы об образовании",
      "Языковой сертификат, если требуется",
      "Подача по дедлайнам университета",
    ],
    scholarshipDocs: [
  "Документы о доходах семьи",
  "Документы об имуществе / недвижимости",
  "Паспорт или ID",
  "Онлайн-заявка через DSU Toscana",
],
  },
];

const selectStyle = {
  width: "100%",
  marginTop: "8px",
  padding: "12px",
  borderRadius: "12px",
  border: "1px solid #334155",
  background: "#020617",
  color: "#f9fafb",
  outline: "none",
};

const optionStyle = {
  background: "#020617",
  color: "#f9fafb",
};

export default function StartPage() {
  const [country, setCountry] = useState("Италия");
  const [level, setLevel] = useState("Все");
  const [field, setField] = useState("Все");
  const [language, setLanguage] = useState("Все");

  const filteredPrograms = programs.filter((program) => {
    return (
      (country === "Все" || program.country === country) &&
      (level === "Все" || program.level.includes(level)) &&
      (field === "Все" || program.field.toLowerCase().includes(field.toLowerCase())) &&
      (language === "Все" || program.language.includes(language))
    );
  });

  return (
    <main>
      <section style={{ maxWidth: "980px" }}>
        <p
          style={{
            color: "#60a5fa",
            fontWeight: "bold",
            margin: 0,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            fontSize: "13px",
          }}
        >
          Start here
        </p>

        <h1
          style={{
            fontSize: "42px",
            lineHeight: "1.1",
            marginTop: "16px",
            marginBottom: "14px",
            letterSpacing: "-0.03em",
          }}
        >
          Найди программу и стипендию
        </h1>

        <p style={{ color: "#d1d5db", fontSize: "17px", lineHeight: "1.6", margin: 0 }}>
          Выбери страну, уровень, направление и язык. Мы покажем варианты, требования и возможную стипендию.
        </p>
      </section>

      <section
        style={{
          marginTop: "28px",
          padding: "22px",
          border: "1px solid #1f2937",
          borderRadius: "20px",
          background:
            "linear-gradient(145deg, rgba(17, 24, 39, 0.95), rgba(2, 6, 23, 0.9))",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "16px",
          }}
        >
          <label>
            <span style={{ color: "#cbd5e1" }}>Страна</span>
            <select value={country} onChange={(e) => setCountry(e.target.value)} style={selectStyle}>
              <option style={optionStyle}>Все</option>
              <option style={optionStyle}>Италия</option>
            </select>
          </label>

          <label>
            <span style={{ color: "#cbd5e1" }}>Уровень</span>
            <select value={level} onChange={(e) => setLevel(e.target.value)} style={selectStyle}>
              <option style={optionStyle}>Все</option>
              <option style={optionStyle}>Бакалавриат</option>
              <option style={optionStyle}>Магистратура</option>
            </select>
          </label>

          <label>
            <span style={{ color: "#cbd5e1" }}>Направление</span>
            <select value={field} onChange={(e) => setField(e.target.value)} style={selectStyle}>
              <option style={optionStyle}>Все</option>
              <option style={optionStyle}>Экономика</option>
              <option style={optionStyle}>Бизнес</option>
              <option style={optionStyle}>Data</option>
              <option style={optionStyle}>Инженерия</option>
              <option style={optionStyle}>Международные</option>
            </select>
          </label>

          <label>
            <span style={{ color: "#cbd5e1" }}>Язык</span>
            <select value={language} onChange={(e) => setLanguage(e.target.value)} style={selectStyle}>
              <option style={optionStyle}>Все</option>
              <option style={optionStyle}>Английский</option>
              <option style={optionStyle}>Итальянский</option>
            </select>
          </label>
        </div>
      </section>

      <section style={{ marginTop: "30px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", gap: "16px", alignItems: "end" }}>
          <div>
            <h2 style={{ margin: 0 }}>Найденные варианты</h2>
            <p style={{ color: "#94a3b8", margin: "8px 0 0" }}>
              Это черновая база. Перед подачей проверяй официальные сайты.
            </p>
          </div>

          <p style={{ color: "#93c5fd", fontWeight: "bold", margin: 0 }}>
            {filteredPrograms.length} вариантов
          </p>
        </div>

        <div style={{ display: "grid", gap: "18px", marginTop: "20px" }}>
          {filteredPrograms.map((program) => (
            <article
              key={`${program.university}-${program.program}`}
              style={{
                border: "1px solid #1f2937",
                borderRadius: "20px",
                padding: "22px",
                background: "#111827",
              }}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "minmax(0, 1.25fr) minmax(280px, 0.75fr)",
                  gap: "22px",
                }}
              >
                <div>
                  <p style={{ color: "#60a5fa", fontWeight: "bold", marginTop: 0 }}>
                    {program.level} · {program.language}
                  </p>

                  <h3 style={{ marginTop: 0, fontSize: "24px", marginBottom: "12px" }}>
                    {program.program}
                  </h3>

                  <div style={{ display: "grid", gap: "8px", color: "#d1d5db" }}>
                    <p style={{ margin: 0 }}>
                      <strong>Университет:</strong> {program.university}
                    </p>
                    <p style={{ margin: 0 }}>
                      <strong>Город:</strong> {program.city}, {program.region}
                    </p>
                    <p style={{ margin: 0 }}>
                      <strong>Направление:</strong> {program.field}
                    </p>
                  </div>

                  <div style={{ marginTop: "18px" }}>
                    <p style={{ fontWeight: "bold", marginBottom: "8px" }}>
                      Главное для поступления:
                    </p>

                    <ul style={{ color: "#d1d5db", lineHeight: "1.7", paddingLeft: "20px", marginTop: 0 }}>
                      {program.requirements.slice(0, 4).map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href={program.officialUrl}
                    target="_blank"
                    style={{
                      display: "inline-block",
                      marginTop: "8px",
                      color: "#93c5fd",
                      fontWeight: "bold",
                      textDecoration: "none",
                    }}
                  >
                    Официальный сайт →
                  </a>
                </div>

                <aside
                  style={{
                    border: "1px solid #334155",
                    borderRadius: "18px",
                    padding: "18px",
                    background: "#020617",
                  }}
                >
                  <p style={{ color: "#22c55e", fontWeight: "bold", marginTop: 0 }}>
                    Возможная стипендия
                  </p>

                  <h4 style={{ fontSize: "21px", margin: "0 0 10px" }}>
                    {program.scholarship}
                  </h4>

                  <div
                    style={{
                      background: "#052e16",
                      border: "1px solid #166534",
                      borderRadius: "14px",
                      padding: "13px",
                      marginBottom: "14px",
                    }}
                  >
                    <p style={{ margin: 0, color: "#86efac", fontWeight: "bold" }}>
                      {program.scholarshipAmount}
                    </p>
                    <p style={{ margin: "6px 0 0", color: "#bbf7d0", fontSize: "13px" }}>
                      Сумма зависит от конкурса и документов.
                    </p>
                  </div>

                  <p style={{ fontWeight: "bold", marginBottom: "8px" }}>
                    Обычно нужно:
                  </p>

                  <ul style={{ color: "#d1d5db", lineHeight: "1.7", paddingLeft: "20px", marginTop: 0 }}>
                    {program.scholarshipDocs.slice(0, 4).map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </aside>
              </div>
            </article>
          ))}

          {filteredPrograms.length === 0 && (
            <div
              style={{
                border: "1px solid #1f2937",
                borderRadius: "20px",
                padding: "22px",
                background: "#111827",
              }}
            >
              <p style={{ color: "#d1d5db", margin: 0 }}>
                Пока нет вариантов по выбранным фильтрам. Попробуй изменить направление или уровень.
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
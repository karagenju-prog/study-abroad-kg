"use client";

import { useState } from "react";

const programs = [
  {
    country: "Италия",
    university: "University of Messina",
    city: "Мессина",
    region: "Сицилия",
    level: "Бакалавриат / Магистратура",
    field: "Медицина / Экономика / Инженерия / Международные программы",
    language: "Английский / Итальянский",
    program: "Messina programs",
    scholarship: "Региональные стипендии Сицилии",
    scholarshipAmount: "зависит от конкурса и статуса студента",
    officialUrl: "https://international.unime.it/",
    requirements: [
      "Проверить требования конкретной программы",
      "Документы об образовании",
      "Языковой сертификат, если требуется",
      "Перевод документов + апостиль/легализация",
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
    university: "University of Cassino and Southern Lazio",
    city: "Кассино",
    region: "Лацио",
    level: "Бакалавриат",
    field: "Бизнес / Экономика",
    language: "Английский",
    program: "Economics and Business",
    scholarship: "Lazio DiSCo",
    scholarshipAmount: "до ~€8,133/год",
    officialUrl: "https://www.unicas.it/",
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
    university: "University of Cassino and Southern Lazio",
    city: "Кассино",
    region: "Лацио",
    level: "Магистратура",
    field: "Экономика / Бизнес / Менеджмент",
    language: "Английский",
    program: "Cassino programs",
    scholarship: "Lazio DiSCo",
    scholarshipAmount: "до ~€8,133/год",
    officialUrl: "https://www.unicas.it/",
    requirements: [
      "Диплом бакалавра или справка о скором окончании",
      "Transcript / приложение с оценками",
      "Английский примерно B2",
      "CV и мотивационное письмо, если требуется программой",
    ],
    scholarshipDocs: [
      "ISEEUP / ISEE Parificato",
      "Доходы семьи",
      "Состав семьи",
      "Документы о бакалавриате",
    ],
  },
  {
    country: "Италия",
    university: "Sapienza University of Rome",
    city: "Рим",
    region: "Лацио",
    level: "Бакалавриат / Магистратура",
    field: "Медицина / Инженерия / Экономика / Гуманитарные науки / Естественные науки",
    language: "Английский / Итальянский",
    program: "Sapienza programs",
    scholarship: "Lazio DiSCo",
    scholarshipAmount: "до ~€8,133/год",
    officialUrl: "https://www.uniroma1.it/en/pagina-strutturale/home",
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
    university: "Tor Vergata University of Rome",
    city: "Рим",
    region: "Лацио",
    level: "Бакалавриат / Магистратура",
    field: "Экономика / Инженерия / Медицина / Естественные науки",
    language: "Английский / Итальянский",
    program: "Tor Vergata programs",
    scholarship: "Lazio DiSCo",
    scholarshipAmount: "до ~€8,133/год",
    officialUrl: "https://web.uniroma2.it/en",
    requirements: [
      "Проверить требования выбранной программы",
      "Документы об образовании",
      "Язык зависит от программы",
      "Соблюдение дедлайнов университета и стипендии",
    ],
    scholarshipDocs: [
      "ISEEUP / ISEE Parificato",
      "Доходы семьи",
      "Состав семьи",
      "Имущество / недвижимость",
    ],
  },
  {
    country: "Италия",
    university: "Luiss University",
    city: "Рим",
    region: "Лацио",
    level: "Бакалавриат / Магистратура",
    field: "Экономика / Бизнес / Финансы / Право / Политология",
    language: "Английский / Итальянский",
    program: "Luiss programs",
    scholarship: "Luiss Scholarships / Financial Aid",
    scholarshipAmount: "зависит от конкурса и профиля студента",
    officialUrl: "https://www.luiss.it/en",
    requirements: [
      "Сильный академический профиль",
      "Документы об образовании",
      "Английский или итальянский по требованиям программы",
      "Могут быть дополнительные тесты или интервью",
    ],
    scholarshipDocs: [
      "Академическая успеваемость",
      "Финансовые документы, если требуется",
      "CV / мотивационное письмо",
      "Отдельная заявка на scholarship, если требуется",
    ],
  },
  {
    country: "Италия",
    university: "University of Bologna",
    city: "Болонья",
    region: "Эмилия-Романья",
    level: "Бакалавриат / Магистратура",
    field: "Экономика / Право / Инженерия / Гуманитарные науки / Политология",
    language: "Английский / Итальянский",
    program: "Bologna programs",
    scholarship: "ER.GO",
    scholarshipAmount: "зависит от конкурса, дохода семьи и места проживания",
    officialUrl: "https://www.unibo.it/en",
    requirements: [
      "Требования зависят от программы",
      "Документы об образовании",
      "Языковой сертификат, если требуется",
      "Возможный admission test / selection",
    ],
    scholarshipDocs: [
      "ISEEUP / ISEE Parificato",
      "Финансовые документы семьи",
      "Документы о составе семьи",
      "Документы об имуществе",
    ],
  },
  {
    country: "Италия",
    university: "Ca’ Foscari University of Venice",
    city: "Венеция",
    region: "Венето",
    level: "Бакалавриат / Магистратура",
    field: "Экономика / Языки / Международные отношения / Менеджмент",
    language: "Английский / Итальянский",
    program: "Venice programs",
    scholarship: "Региональные стипендии Венето",
    scholarshipAmount: "зависит от конкурса и ISEE",
    officialUrl: "https://www.unive.it/english",
    requirements: [
      "Проверить требования конкретной программы",
      "Документы об образовании",
      "Язык зависит от программы",
      "Перевод документов + легализация",
    ],
    scholarshipDocs: [
      "ISEEUP / финансовые документы",
      "Состав семьи",
      "Имущество семьи",
      "Документы университета",
    ],
  },
  {
    country: "Италия",
    university: "University of Padua",
    city: "Падуя",
    region: "Венето",
    level: "Бакалавриат / Магистратура",
    field: "Естественные науки / Психология / Медицина / Инженерия / Экономика / Дата Аналитика",
    language: "Английский / Итальянский",
    program: "Padua programs",
    scholarship: "Региональные стипендии Венето / University Scholarships",
    scholarshipAmount: "зависит от конкурса и профиля студента",
    officialUrl: "https://www.unipd.it/en",
    requirements: [
      "Проверить требования выбранной программы",
      "Документы об образовании",
      "Языковой сертификат, если требуется",
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
    university: "Politecnico di Torino",
    city: "Турин",
    region: "Пьемонт",
    level: "Бакалавриат / Магистратура",
    field: "Инженерия / Архитектура / Дизайн / Технологии",
    language: "Английский / Итальянский",
    program: "Torino programs",
    scholarship: "EDISU Piemonte",
    scholarshipAmount: "зависит от ISEE, конкурса и статуса студента",
    officialUrl: "https://www.polito.it/",
    requirements: [
      "Для бакалавриата: 12 лет образования или эквивалент",
      "Для магистратуры: бакалавр по близкому направлению",
      "Английский или итальянский по требованиям программы",
      "Для design/architecture может требоваться portfolio",
    ],
    scholarshipDocs: [
      "ISEEUP / ISEE Parificato",
      "Доходы семьи",
      "Состав семьи",
      "Документы об имуществе",
    ],
  },
  {
    country: "Италия",
    university: "University of Milan",
    city: "Милан",
    region: "Ломбардия",
    level: "Бакалавриат / Магистратура",
    field: "Медицина / Естественные науки / Право / Экономика / Гуманитарные науки",
    language: "Английский / Итальянский",
    program: "Milan programs",
    scholarship: "DSU Lombardia",
    scholarshipAmount: "зависит от ISEE и конкурса",
    officialUrl: "https://www.unimi.it/en",
    requirements: [
      "Проверить требования конкретной программы",
      "Документы об образовании",
      "Язык зависит от программы",
      "Перевод документов + легализация",
    ],
    scholarshipDocs: [
      "ISEEUP / ISEE Parificato",
      "Доходы семьи",
      "Состав семьи",
      "Недвижимость / имущество",
    ],
  },
  {
    country: "Италия",
    university: "Politecnico di Milano",
    city: "Милан",
    region: "Ломбардия",
    level: "Бакалавриат / Магистратура",
    field: "Инженерия / Архитектура / Дизайн / Технологии",
    language: "Английский / Итальянский",
    program: "Politechnico programs",
    scholarship: "DSU Lombardia / Merit Scholarships",
    scholarshipAmount: "зависит от ISEE, конкурса и профиля студента",
    officialUrl: "https://www.polimi.it/en/",
    requirements: [
      "Для бакалавриата: 12 лет образования или эквивалент",
      "Для магистратуры: диплом бакалавра в подходящей области",
      "Английский сертификат, если требуется",
      "Portfolio может требоваться для design/architecture",
    ],
    scholarshipDocs: [
      "Документы для DSU Lombardia",
      "Доходы семьи",
      "Недвижимость / имущество",
      "Сильный academic profile для merit scholarships",
    ],
  },
  {
    country: "Италия",
    university: "Bocconi University",
    city: "Милан",
    region: "Ломбардия",
    level: "Бакалавриат / Магистратура",
    field: "Экономика / Финансы / Менеджмент / Право / Data",
    language: "Английский",
    program: "Bocconi programs",
    scholarship: "Bocconi Scholarships / Financial Aid",
    scholarshipAmount: "зависит от конкурса и профиля студента",
    officialUrl: "https://www.unibocconi.it/en",
    requirements: [
      "Сильный академический профиль",
      "Английский примерно B2/C1",
      "Могут быть тесты или дополнительные требования",
      "CV / мотивация для некоторых программ",
    ],
    scholarshipDocs: [
      "Академическая успеваемость",
      "Финансовые документы, если требуется",
      "CV / мотивационное письмо",
      "Отдельная заявка на financial aid, если требуется",
    ],
  },
];


export default function StartPage() {
  const [country, setCountry] = useState("Италия");
  const [level, setLevel] = useState("Все");
  const [field, setField] = useState("Все");
  const [language, setLanguage] = useState("Все");

  const countries = ["Все", "Италия"];

  const levels = ["Все", "Бакалавриат", "Магистратура"];

  const fields = [
    "Все",
    "Экономика",
    "Бизнес",
    "Финансы",
    "Менеджмент",
    "Data",
    "Инженерия",
    "Медицина",
    "Право",
    "Архитектура",
    "Дизайн",
    "Международные",
    "Языки",
    "Политология",
  ];

  const languages = ["Все", "Английский", "Итальянский"];

  const filteredPrograms = programs.filter((program) => {
    const countryMatch = country === "Все" || program.country === country;
    const levelMatch = level === "Все" || program.level.includes(level);
    const fieldMatch =
      field === "Все" ||
      program.field.toLowerCase().includes(field.toLowerCase());
    const languageMatch =
      language === "Все" || program.language.includes(language);

    return countryMatch && levelMatch && fieldMatch && languageMatch;
  });

  return (
    <main className="startPage">
      <section className="startHero">
        <p className="pageEyebrow">Start here</p>

        <h1>Найди программу и стипендию</h1>

        <p>
          Выбери страну, уровень, направление и язык. Мы покажем подходящие
          варианты, основные требования и возможную стипендию.
        </p>
      </section>

      <section className="startFilters">
        <label>
          <span>Страна</span>
          <select value={country} onChange={(e) => setCountry(e.target.value)}>
            {countries.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </label>

        <label>
          <span>Уровень</span>
          <select value={level} onChange={(e) => setLevel(e.target.value)}>
            {levels.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </label>

        <label>
          <span>Направление</span>
          <select value={field} onChange={(e) => setField(e.target.value)}>
            {fields.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </label>

        <label>
          <span>Язык</span>
          <select value={language} onChange={(e) => setLanguage(e.target.value)}>
            {languages.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </label>
      </section>

      <section className="startResults">
        <div className="startResultsTop">
          <div>
            <h2>Найденные варианты</h2>
            <p>
              Это черновая база. Перед подачей всегда проверяй официальные
              сайты университетов и стипендий.
            </p>
          </div>

          <strong>{filteredPrograms.length} вариантов</strong>
        </div>

        <div className="startProgramList">
          {filteredPrograms.map((program) => (
            <article
              key={`${program.university}-${program.program}`}
              className="startProgramCard"
            >
              <div className="startProgramLayout">
                <div className="startProgramMain">
                  <p className="startProgramMeta">
                    {program.level} · {program.language}
                  </p>

                  <h3>{program.program}</h3>

                  <div className="startProgramInfo">
                    <p>
                      <strong>Университет:</strong> {program.university}
                    </p>
                    <p>
                      <strong>Город:</strong> {program.city}, {program.region}
                    </p>
                    <p>
                      <strong>Направление:</strong> {program.field}
                    </p>
                  </div>

                  <div className="startRequirements">
                    <h4>Главное для поступления</h4>

                    <ul>
                      {program.requirements.slice(0, 4).map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <a
                    className="startOfficialLink"
                    href={program.officialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Официальный сайт →
                  </a>
                </div>

                <aside className="startScholarshipBox">
                  <p className="startScholarshipLabel">Возможная стипендия</p>

                  <h4>{program.scholarship}</h4>

                  <div className="startScholarshipAmount">
                    <strong>{program.scholarshipAmount}</strong>
                    <span>Сумма зависит от конкурса и документов.</span>
                  </div>

                  <div className="startScholarshipDocs">
                    <h5>Обычно нужно</h5>

                    <ul>
                      {program.scholarshipDocs.slice(0, 4).map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </aside>
              </div>
            </article>
          ))}

          {filteredPrograms.length === 0 && (
            <div className="startEmptyState">
              <h3>Пока нет вариантов</h3>
              <p>
                Попробуй изменить направление, уровень или язык обучения.
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
const scholarships = [
  {
    name: "Lazio DiSCo",
    region: "Лацио",
    cities: "Рим, Кассино",
    type: "Региональная стипендия",
    amount: "Зависит от конкурса, дохода семьи и статуса студента",
    deadline:
      "Ориентир: обычно июнь–июль. В конкурсе 2026/2027 первая фаза — до 22 июля 2026, 12:00.",
    goodFor:
      "Подходит студентам университетов региона Лацио: Sapienza, Tor Vergata, Roma Tre, UNICAS и других.",
    usuallyNeeded: [
      "ISEEUP / ISEE Parificato",
      "Доходы семьи",
      "Состав семьи",
      "Имущество и недвижимость",
      "Документы об обучении",
    ],
    website: "https://laziodisco.it/?lang=en",
  },
  
  {
    name: "DSU Lombardia",
    region: "Ломбардия",
    cities: "Милан, Павия, Бергамо, Брешиа",
    type: "Региональная стипендия",
    amount: "Зависит от ISEE, университета и условий конкурса",
    deadline:
      "Ориентир: обычно июль–август. Важно проверять дедлайн конкретного университета в Ломбардии.",
    goodFor:
      "Подходит тем, кто поступает в университеты Ломбардии: University of Milan, Politecnico di Milano, Bocconi и другие.",
    usuallyNeeded: [
      "ISEEUP / ISEE Parificato",
      "Доходы семьи",
      "Состав семьи",
      "Недвижимость и имущество",
      "Зачисление или подача в университет",
    ],
    website: "https://www.dsu.lombardia.it/",
  },
  {
    name: "ER.GO",
    region: "Эмилия-Романья",
    cities: "Болонья, Парма, Модена, Феррара",
    type: "Региональная стипендия",
    amount: "Зависит от конкурса, дохода семьи и места проживания",
    deadline:
      "Ориентир: обычно июль–сентябрь. Для 2026/2027 формы ER.GO открываются летом, точные даты зависят от типа заявки.",
    goodFor:
      "Хороший вариант для студентов University of Bologna и других университетов региона Эмилия-Романья.",
    usuallyNeeded: [
      "ISEEUP / ISEE Parificato",
      "Финансовые документы семьи",
      "Документы о составе семьи",
      "Документы об имуществе",
      "Регистрация в университете",
    ],
    website: "https://www.er-go.it/",
  },
  {
    name: "EDISU Piemonte",
    region: "Пьемонт",
    cities: "Турин",
    type: "Региональная стипендия",
    amount: "Зависит от ISEE, конкурса и статуса студента",
    deadline:
      "Ориентир: обычно конец июля — начало сентября. В конкурсе 2025/2026: 25 июля — 9 сентября 2025, 12:00.",
    goodFor:
      "Подходит студентам университетов Пьемонта, особенно тем, кто выбирает Турин и Politecnico di Torino.",
    usuallyNeeded: [
      "ISEEUP / ISEE Parificato",
      "Доходы семьи",
      "Состав семьи",
      "Документы об имуществе",
      "Документы о зачислении",
    ],
    website: "https://www.edisu.piemonte.it/en",
  },
  {
    name: "Veneto Scholarship",
    region: "Венето",
    cities: "Падуя, Венеция, Верона",
    type: "Региональная стипендия",
    amount: "Зависит от региона, ISEE и условий ежегодного конкурса",
    deadline:
      "Ориентир: обычно сентябрь–октябрь. University of Padua для 2025/2026 указывал дедлайн 30 сентября 2025.",
    goodFor:
      "Подходит тем, кто поступает в University of Padua, Ca’ Foscari University of Venice и другие университеты Венето.",
    usuallyNeeded: [
      "ISEEUP / ISEE Parificato",
      "Доходы семьи",
      "Состав семьи",
      "Имущество семьи",
      "Документы университета",
    ],
    website: "https://www.unipd.it/en/scholarships",
  },
  {
    name: "DSU Toscana",
    region: "Тоскана",
    cities: "Флоренция, Пиза, Сиена",
    type: "Региональная стипендия",
    amount: "Зависит от конкурса, дохода семьи и места проживания",
    deadline:
      "Ориентир: обычно июль–сентябрь. В конкурсе 2025/2026: до 5 сентября 2025, 13:00 для bachelor/master/single-cycle.",
    goodFor:
      "Подходит студентам университетов Тосканы: University of Pisa, University of Florence, University of Siena и других.",
    usuallyNeeded: [
      "ISEEUP / ISEE Parificato",
      "Доходы семьи",
      "Документы о составе семьи",
      "Документы о недвижимости",
      "Студенческие документы",
    ],
    website: "https://www.dsu.toscana.it/",
  },
  {
    name: "MAECI",
    region: "Вся Италия",
    cities: "Зависит от выбранного университета",
    type: "Государственная стипендия Италии",
    amount: "Обычно фиксированный ежемесячный грант по условиям конкурса",
    deadline:
      "Ориентир: обычно весной. Для 2026/2027 дедлайн был 26 марта 2026, 14:00 CET.",
    goodFor:
      "Подходит иностранным студентам, которые поступают на магистратуру, PhD, исследовательские программы или курсы итальянского языка.",
    usuallyNeeded: [
      "Заявка через официальный портал",
      "Академические документы",
      "Мотивация и учебный план",
      "Языковой сертификат",
      "Поступление или выбор подходящей программы",
    ],
    website:
      "https://www.esteri.it/en/servizi-opportunita/opportunita/borse-di-studio/per-cittadini-stranieri/borsestudio_stranieri/",
  },
  {
    name: "Invest Your Talent in Italy",
    region: "Вся Италия",
    cities: "Зависит от университета и программы",
    type: "Стипендия для магистратуры",
    amount: "Обычно ежемесячная выплата на 9 месяцев",
    deadline:
      "Ориентир: обычно весной. Для 2026/2027 дедлайн был 11 мая 2026, 18:00 по итальянскому времени.",
    goodFor:
      "Подходит сильным кандидатам на англоязычные магистерские программы в инженерии, технологиях, архитектуре, дизайне, экономике и менеджменте.",
    usuallyNeeded: [
      "Поступление на подходящую магистерскую программу",
      "Академические документы",
      "CV",
      "Мотивационное письмо",
      "Языковой сертификат",
    ],
    website:
      "https://uni-italia.it/en/institutional/invest-your-talent-in-italy-en/",
  },
  {
    name: "University Scholarships",
    region: "Зависит от университета",
    cities: "Милан, Рим, Болонья, Турин и другие города",
    type: "Внутренние стипендии университетов",
    amount: "Зависит от университета, программы и профиля студента",
    deadline:
      "Зависит от университета. Обычно дедлайны идут вместе с admission round или отдельной заявкой на financial aid.",
    goodFor:
      "Подходит студентам с сильным академическим профилем, хорошими оценками, мотивацией и достижениями.",
    usuallyNeeded: [
      "Академическая успеваемость",
      "Мотивационное письмо",
      "CV или портфолио",
      "Языковой сертификат",
      "Отдельная заявка на стипендию, если требуется",
    ],
    website: "https://www.universitaly.it/",
  },
];

export default function ItalyScholarshipsPage() {
  return (
    <main className="italyScholarshipsPage">
      <section className="scholarshipsHero">
        <div>
          <p className="pageEyebrow">Study in Italy</p>
          <h1>Стипендии в Италии</h1>
          <p>
            В Италии есть несколько типов стипендий: региональные, государственные
            и университетские. Самые популярные для иностранных студентов —
            региональные стипендии, которые зависят от дохода семьи и региона
            обучения.
          </p>
        </div>

        <div className="scholarshipsHeroCard">
          <span>🎓</span>
          <h2>Главная идея</h2>
          <p>
            Сначала выбираешь университет и регион, потом проверяешь стипендию
            этого региона. Условия, суммы и дедлайны каждый год обновляются.
          </p>
        </div>
      </section>

      <section className="scholarshipsNotice">
        <strong>Важно</strong>
        <p>
          Эта страница дает общее понимание. Перед подачей всегда проверяй
          официальный конкурс, дедлайны и список документов на сайте стипендии
          или университета.
        </p>
      </section>

      <section className="scholarshipsIntroGrid">
        <div>
          <span>01</span>
          <h3>Региональные стипендии</h3>
          <p>
            Обычно зависят от дохода семьи, состава семьи, имущества и региона.
            Это самый частый вариант для студентов из Кыргызстана и СНГ.
          </p>
        </div>

        <div>
          <span>02</span>
          <h3>Государственные гранты</h3>
          <p>
            Например MAECI. Обычно больше подходят для магистратуры, PhD,
            исследовательских программ и отдельных академических направлений.
          </p>
        </div>

        <div>
          <span>03</span>
          <h3>Стипендии университетов</h3>
          <p>
            Зависят от конкретного университета. Часто учитываются оценки,
            мотивация, достижения, портфолио и сила заявки.
          </p>
        </div>
      </section>

      <section className="scholarshipsGrid">
        {scholarships.map((item) => (
          <article key={item.name} className="scholarshipCard">
            <div className="scholarshipHeader">
              <div>
                <p className="scholarshipType">{item.type}</p>
                <h2>{item.name}</h2>
              </div>

              <span className="scholarshipRegion">{item.region}</span>
            </div>

            <div className="scholarshipMeta">
              <div>
                <span>Города</span>
                <p>{item.cities}</p>
              </div>

              <div>
                <span>Размер</span>
                <p>{item.amount}</p>
              </div>
            </div>

              <div className="scholarshipDeadline">
                 <span>Дедлайн</span>
                <p>{item.deadline}</p>
            </div>
            
            <div className="scholarshipInfo">
              <h3>Кому подходит</h3>
              <p>{item.goodFor}</p>
            </div>

            <div className="scholarshipDocs">
              <h3>Обычно нужно</h3>
              <ul>
                {item.usuallyNeeded.map((doc) => (
                  <li key={doc}>{doc}</li>
                ))}
              </ul>
            </div>

            {/*<a
              className="scholarshipLink"
              href={item.website}
              target="_blank"
              rel="noopener noreferrer"
            >
              Официальный сайт →
            </a>*/}
          </article>
        ))}
      </section>

      <section className="scholarshipsBottomCta">
        <div>
          <p className="pageEyebrow">Следующий шаг</p>
          <h2>Не знаешь, какая стипендия подходит?</h2>
          <p>
            Стипендия зависит от региона, университета, уровня обучения, доходов
            семьи, документов и дедлайнов. Лучше заранее понять, куда подаваться
            и какие документы готовить.
          </p>
        </div>

        <a
          href="https://wa.me/+393519791937?text=Здравствуйте!%20Мне%20нужна%20помощь%20со%20стипендиями%20в%20Италии."
          target="_blank"
          rel="noopener noreferrer"
        >
          Получить поддержку
        </a>
      </section>
    </main>
  );
}
const universities = [
  {
    short: "MES",
    name: "University of Messina",
    city: "Мессина",
    type: "Государственный университет",
    programs: "Бакалавриат и магистратура",
    focus: "Медицина, экономика, инженерия, международные программы",
    goodFor:
      "Подходит тем, кто хочет учиться на юге Италии, жить ближе к морю и выбрать более спокойную студенческую среду.",
    scholarship: "Региональные стипендии Сицилии",
    website: "https://international.unime.it/",
  },
  {
    short: "CAS",
    name: "University of Cassino and Southern Lazio",
    city: "Кассино",
    type: "Государственный университет",
    programs: "Бакалавриат и магистратура",
    focus: "Экономика, инженерия, бизнес, гуманитарные направления",
    goodFor:
      "Хороший вариант для студентов, которые ищут спокойный город, доступ к Lazio DiSCo и удобное расположение между Римом и Неаполем.",
    scholarship: "Lazio DiSCo",
    website: "https://www.unicas.it/",
  },
  {
    short: "SAP",
    name: "Sapienza University of Rome",
    city: "Рим",
    type: "Государственный университет",
    programs: "Бакалавриат и магистратура",
    focus: "Медицина, инженерия, экономика, гуманитарные науки, естественные науки",
    goodFor:
      "Один из самых известных университетов Италии. Подходит тем, кто хочет учиться в крупном университете и жить в столице.",
    scholarship: "Lazio DiSCo",
    website: "https://www.uniroma1.it/en/pagina-strutturale/home",
  },
  {
    short: "TOR",
    name: "Tor Vergata University of Rome",
    city: "Рим",
    type: "Государственный университет",
    programs: "Бакалавриат и магистратура",
    focus: "Экономика, инженерия, медицина, естественные науки",
    goodFor:
      "Сильный вариант в Риме для тех, кто хочет государственный университет с программами на английском языке.",
    scholarship: "Lazio DiSCo",
    website: "https://web.uniroma2.it/en",
  },
  {
    short: "LUI",
    name: "Luiss University",
    city: "Рим",
    type: "Частный университет",
    programs: "Бакалавриат и магистратура",
    focus: "Экономика, бизнес, финансы, право, политология",
    goodFor:
      "Подходит тем, кто рассматривает бизнес, менеджмент, финансы, право или политологию. Обычно дороже государственных университетов.",
    scholarship: "Собственные стипендии и варианты финансовой поддержки",
    website: "https://www.luiss.it/en",
  },
  {
    short: "BOL",
    name: "University of Bologna",
    city: "Болонья",
    type: "Государственный университет",
    programs: "Бакалавриат и магистратура",
    focus: "Экономика, право, инженерия, гуманитарные науки, политология",
    goodFor:
      "Подходит тем, кто хочет сильную университетскую среду, активную студенческую жизнь и широкий выбор направлений.",
    scholarship: "ER.GO / региональные стипендии Эмилии-Романьи",
    website: "https://www.unibo.it/en",
  },
  {
    short: "VEN",
    name: "Ca’ Foscari University of Venice",
    city: "Венеция",
    type: "Государственный университет",
    programs: "Бакалавриат и магистратура",
    focus: "Экономика, языки, международные отношения, менеджмент",
    goodFor:
      "Сильный вариант для тех, кто интересуется языками, экономикой, международными программами и учебой в Венеции.",
    scholarship: "Региональные стипендии Венето",
    website: "https://www.unive.it/english",
  },
  {
    short: "PAD",
    name: "University of Padua",
    city: "Падуя",
    type: "Государственный университет",
    programs: "Бакалавриат и магистратура",
    focus: "Естественные науки, психология, медицина, инженерия, экономика",
    goodFor:
      "Сильный исторический университет в удобном студенческом городе. Хороший баланс качества образования, стоимости жизни и возможностей.",
    scholarship: "Региональные стипендии Венето",
    website: "https://www.unipd.it/en",
  },
  {
    short: "PDT",
    name: "Politecnico di Torino",
    city: "Турин",
    type: "Государственный технический университет",
    programs: "Бакалавриат и магистратура",
    focus: "Инженерия, архитектура, дизайн, технологии",
    goodFor:
      "Подходит тем, кто хочет поступать на инженерные, технические, архитектурные или дизайн-направления в сильном техническом университете.",
    scholarship: "EDISU Piemonte",
    website: "https://www.polito.it/",
  },
  {
    short: "MIL",
    name: "University of Milan",
    city: "Милан",
    type: "Государственный университет",
    programs: "Бакалавриат и магистратура",
    focus: "Медицина, естественные науки, право, экономика, гуманитарные науки",
    goodFor:
      "Крупный государственный университет в Милане. Подходит тем, кто хочет большой город, широкий выбор направлений и больше карьерных возможностей.",
    scholarship: "DSU Lombardia",
    website: "https://www.unimi.it/en",
  },
  {
    short: "PDM",
    name: "Politecnico di Milano",
    city: "Милан",
    type: "Государственный технический университет",
    programs: "Бакалавриат и магистратура",
    focus: "Инженерия, архитектура, дизайн, технологии",
    goodFor:
      "Один из самых сильных технических университетов Италии. Хороший выбор для инженерии, архитектуры, дизайна и технологических направлений.",
    scholarship: "DSU Lombardia",
    website: "https://www.polimi.it/en/",
  },
  {
    short: "BOC",
    name: "Bocconi University",
    city: "Милан",
    type: "Частный университет",
    programs: "Бакалавриат и магистратура",
    focus: "Экономика, финансы, менеджмент, право, анализ данных",
    goodFor:
      "Премиальный вариант для экономики, финансов, бизнеса и менеджмента. Обычно требует более сильного бюджета, чем государственные университеты.",
    scholarship: "Собственные стипендии и финансовая помощь",
    website: "https://www.unibocconi.it/en",
  },
];

export default function ItalyUniversitiesPage() {
  return (
    <main className="italyUniversitiesPage">
      <section className="universitiesHero">
        <div>
          <p className="pageEyebrow">Study in Italy</p>
          <h1>Университеты Италии</h1>
          <p>
            Здесь собраны популярные университеты Италии для студентов из
            Кыргызстана и стран СНГ. Сравнивай города, направления, тип
            университета, программы обучения и доступные стипендии.
          </p>
        </div>

        <div className="universitiesHeroCard">
          <span>🇮🇹</span>
          <h2>Как выбирать университет?</h2>
          <p>
            Смотри не только на рейтинг. Важно учитывать город, стоимость жизни,
            направление, язык обучения, дедлайны, бюджет и региональную
            стипендию.
          </p>
        </div>
      </section>

      <section className="universitiesNotice">
        <div>
          <strong>Важно</strong>
          <p>
            Требования, дедлайны, программы и условия стипендий могут меняться
            каждый год. Перед подачей всегда проверяй информацию на официальном
            сайте университета.
          </p>
        </div>
      </section>
      
      <section className="universitiesBottomCta">
        <div>
          <p className="pageEyebrow">Следующий шаг</p>
          <h2>Не знаешь, какой университет выбрать?</h2>
          <p>
            Выбирать университет лучше не наугад. Нужно учитывать город,
            программу, язык обучения, бюджет, стипендию, дедлайны и твой
            академический профиль.
          </p>
        </div>

        <a
          href="https://wa.me/+393519791937?text=Здравствуйте!%20Мне%20нужна%20помощь%20с%20выбором%20университета%20в%20Италии."
          target="_blank"
          rel="noopener noreferrer"
        >
          Получить поддержку
        </a>
      </section>

      <section className="universitiesGrid">
        {universities.map((uni) => (
          <article key={uni.name} className="universityCard">
            <div className="universityHeader">
              <div className="universityLogo">{uni.short}</div>

              <div className="universityHeaderText">
                <p className="universityType">{uni.type}</p>
                <h2>{uni.name}</h2>
                <p className="universityCity">Город: {uni.city}</p>
              </div>
            </div>

            <div className="universityInfoBlock">
              <div className="universityInfoRow">
                <span>Программы</span>
                <p>{uni.programs}</p>
              </div>

              <div className="universityInfoRow">
                <span>Направления</span>
                <p>{uni.focus}</p>
              </div>

              <div className="universityInfoRow">
                <span>Стипендия</span>
                <p>{uni.scholarship}</p>
              </div>

              <div className="universityInfoRow">
                <span>Кому подходит</span>
                <p>{uni.goodFor}</p>
              </div>
            </div>

            {/*<div className="universityActions">
              <a href={uni.website} target="_blank" rel="noopener noreferrer">
                Официальный сайт →
              </a>
            </div>*/}
          </article>
        ))}
      </section>

    </main>
  );
}
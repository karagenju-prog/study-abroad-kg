import Link from "next/link";

const whatsappLink =
  "https://wa.me/+393519791937?text=Здравствуйте!%20Я%20хочу%20поступить%20в%20Италию%20и%20хочу%20узнать%20про%20поддержку.";

const stats = [
  {
    value: "148 000+",
    label: "иностранных студентов учились в Италии в 2022/2023 учебном году",
  },
  {
    value: "+50%",
    label: "примерный рост иностранных студентов с 2016/2017 до 2022/2023",
  },
  {
    value: "33 000+",
    label: "учебных виз было выдано Италией в 2023 году",
  },
  {
    value: "СНГ",
    label: "в Италии учатся студенты из Кыргызстана, Казахстана, Узбекистана и других стран региона",
  },
];

const reasons = [
  {
    title: "Европейское образование",
    text: "Итальянские университеты входят в европейскую систему образования. Диплом понятен в Европе, а обучение строится через кредиты ECTS, экзамены и самостоятельную подготовку.",
  },
  {
    title: "Стипендии",
    text: "Во многих регионах иностранные студенты могут подаваться на региональные стипендии: выплаты, снижение tuition fee, питание или общежитие — зависит от региона и конкурса.",
  },
  {
    title: "Климат и море",
    text: "Во многих регионах Италии зима мягче, чем в северной Европе. Весной и осенью проще жить активнее: прогулки, поездки, море и путешествия.",
  },
  {
    title: "Транспорт и Европа рядом",
    text: "Поезда, автобусы, метро и лоукостеры позволяют путешествовать по Италии и другим странам Европы без машины.",
  },
];

const educationCards = [
  {
    title: "Экзамены можно пересдавать",
    text: "По многим предметам экзамены проходят несколько раз в году. Если не получилось сдать с первого раза, часто можно прийти на следующую сессию.",
  },
  {
    title: "Больше самостоятельности",
    text: "Студент сам отвечает за подготовку, дедлайны, экзамены и свой учебный план.",
  },
  {
    title: "Посещение зависит от курса",
    text: "На некоторых предметах посещение важно или обязательно, на других студент может готовиться самостоятельно. Но ходить на пары всё равно желательно.",
  },
  {
    title: "Можно совмещать с работой",
    text: "Некоторые студенты работают и приезжают в университет в основном на экзамены. Это возможно, но требует дисциплины.",
  },
];

const erasmusCards = [
  {
    title: "Учёба в другой стране Европы",
    text: "Через Erasmus+ студент может поехать на семестр или год в партнёрский университет.",
  },
  {
    title: "Дополнительная стипендия",
    text: "На период мобильности студент может получить Erasmus+ грант. Сумма зависит от страны и правил университета.",
  },
  {
    title: "Без оплаты второго университета",
    text: "Обычно студент не платит tuition fee принимающему университету, но могут быть небольшие расходы на документы или сборы.",
  },
  {
    title: "Опыт для резюме",
    text: "Erasmus усиливает CV, язык, связи и понимание международной среды.",
  },
];

const pathwayCards = [
  {
    title: "Университеты",
    text: "Посмотри университеты Италии, города, программы и варианты обучения.",
    href: "/countries/italy/universities",
    image: "/images/country/universities.jpeg",
    icon: "🎓",
  },
  {
    title: "Стипендии",
    text: "Разберись, как работают региональные стипендии и что нужно подготовить чтобы получить стипендию.",
    href: "/countries/italy/scholarships",
    image: "/images/country/scholarship.jpg",
    icon: "💶",
  },
  {
    title: "Документы",
    text: "Проверь список документов для поступления, стипендии и дальнейших этапов.",
    href: "/countries/italy/documents",
    image: "/images/country/documents.jpg",
    icon: "📄",
  },
  {
    title: "Путь поступления",
    text: "Посмотри последовательность шагов: выбор программы, документы, подача, стипендия и виза.",
    href: "/countries/italy/roadmap",
    image: "/images/country/trevi.jpg",
    icon: "🧭",
  },
];

export default function ItalyPage() {
  return (
    <main className="italyPage">
      <section className="italyHero">
        <div className="italyHeroContent">
          <p className="pageEyebrow">Study in Italy</p>

          <h1>Италия — учёба, стипендии и жизнь в Европе</h1>

          <p className="italyHeroLead">
            Италия подходит студентам, которые хотят получить европейское
            образование, найти программу на английском, податься на стипендию и
            жить в стране с красивыми городами, мягким климатом, морем и
            доступом к путешествиям по Европе.
          </p>

          <div className="italyHeroActions">
            <Link href="/start" className="italyPrimaryButton">
              Найти программу
            </Link>

            <a href={whatsappLink} className="italySecondaryButton" target="_blank">
              Нужна поддержка
            </a>
          </div>
        </div>

        <div className="italyHeroVisual">
          <img src="/images/country/colosseum.jpg" alt="Rome, Italy" />

          <div className="italyHeroBadge">
            <span>🇮🇹</span>
            <div>
              <strong>Italy</strong>
              <p>учёба · стипендии · Erasmus · Европа</p>
            </div>
          </div>
        </div>
      </section>
      <section className="italyQuickNavSection">
        <div className="italyQuickNavHeader">
          <div>
            <p className="pageEyebrow">Быстрый переход</p>
            <h2>Что хочешь посмотреть по Италии?</h2>
          </div>

          <p>
            Можешь сразу перейти к университетам, стипендиям и документам,
            либо спокойно прочитать страницу ниже.
          </p>
        </div>

        <div className="italyQuickNavGrid">
          {pathwayCards.map((card) => (
            <Link key={card.title} href={card.href} className="italyQuickNavCard">
              <span>{card.icon}</span>

              <div>
                <strong>{card.title}</strong>
                <small>{card.text}</small>
              </div>
            </Link>
          ))}
        </div>
      </section>
      
      <section className="italyStatsSection">
        <div className="italySectionHeader">
          <p className="pageEyebrow">Почему это направление растёт</p>
          <h2>Италия становится популярнее среди иностранных студентов</h2>
          <p>
            В Италии уже учатся студенты из Кыргызстана, Казахстана,
            Узбекистана, России, Украины и других русскоговорящих стран.
            Интерес к Италии растёт, потому что здесь есть европейское
            образование, стипендии и реальный студенческий опыт жизни в Европе.
          </p>
        </div>

        <div className="italyStatsGrid">
          {stats.map((item) => (
            <article key={item.value} className="italyStatCard">
              <strong>{item.value}</strong>
              <p>{item.label}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="italySplitSection">
        <div className="italySplitText">
          <p className="pageEyebrow">Почему выбирают Италию</p>
          <h2>Не только диплом, а полноценный опыт жизни</h2>
          <p>
            Италия даёт студенту больше, чем просто университет: города с
            историей, море, транспорт, путешествия, международную среду и шанс
            получить финансовую поддержку.
          </p>
        </div>

        <div className="italyPhotoGrid">
          <img src="/images/country/coast.jpg" alt="Sea in Italy" />
          <img src="/images/country/Streets.jpg" alt="Trevi Fountain" />
          <img src="/images/country/venice italy.jpg" alt="Venice, Italy" />
        </div>
      </section>

      <section className="italyCardGrid">
        {reasons.map((reason) => (
          <article key={reason.title} className="italyInfoCard">
            <h3>{reason.title}</h3>
            <p>{reason.text}</p>
          </article>
        ))}
      </section>

      <section className="italyScholarshipSection">
        <div className="italyScholarshipImage">
          <img src="/images/country/student.jpg" alt="Italy city view" />
        </div>

        <div className="italyScholarshipText">
          <p className="pageEyebrow">Стипендии без мифов</p>
          <h2>Почему Италия даёт стипендии иностранным студентам?</h2>

          <p>
            На первый взгляд может казаться странным: почему Италия должна
            помогать иностранному студенту? Но это часть образовательной и
            экономической системы.
          </p>

          <p>
            Студент живёт в Италии и тратит деньги внутри страны: на жильё,
            еду, транспорт, связь, документы, поездки и повседневную жизнь. Эти
            расходы возвращаются в экономику и поддерживают города,
            университеты и местный бизнес.
          </p>

          <p>
            Италия обычно не требует “отработать” стипендию после учёбы. Но
            студент должен соблюдать правила: вовремя подать документы,
            соответствовать требованиям, закрывать кредиты и проходить конкурс.
          </p>

          <div className="italyNotice">
            Стипендия не выдаётся автоматически. Всё зависит от региона,
            документов, дохода семьи, сроков подачи и правил конкретного года.
          </div>

          <a href={whatsappLink} className="italySupportButton" target="_blank">
            Хочу понять свои шансы
          </a>
        </div>
      </section>

      <section className="italyEducationSection">
        <div className="italySectionHeader">
          <p className="pageEyebrow">Система образования</p>
          <h2>Учёба в Италии гибче, чем многие ожидают</h2>
          <p>
            В Италии студенту дают больше самостоятельности. Главное — закрывать
            экзамены, кредиты ECTS и следить за дедлайнами. Свободы больше, но
            ответственность тоже на студенте.
          </p>
        </div>

        <div className="italyCardGrid">
          {educationCards.map((card) => (
            <article key={card.title} className="italyInfoCard">
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="italyComparisonSection">
        <div>
          <p className="pageEyebrow">Италия vs СНГ</p>
          <h2>Чем отличается подход к учёбе?</h2>
        </div>

        <div className="italyComparisonTable">
          <div className="italyComparisonRow italyComparisonHead">
            <span>В СНГ</span>
            <span>В Италии</span>
          </div>

         <div className="italyComparisonRow">
  <span>
    <small>В СНГ</small>
    Больше контроля внутри семестра
  </span>
  <span>
    <small>В Италии</small>
    Больше самостоятельности
  </span>
</div>

<div className="italyComparisonRow">
  <span>
    <small>В СНГ</small>
    Посещение часто строго контролируется
  </span>
  <span>
    <small>В Италии</small>
    Зависит от курса и преподавателя
  </span>
</div>

<div className="italyComparisonRow">
  <span>
    <small>В СНГ</small>
    Меньше гибкости с пересдачами
  </span>
  <span>
    <small>В Италии</small>
    Несколько экзаменационных сессий
  </span>
</div>

<div className="italyComparisonRow">
  <span>
    <small>В СНГ</small>
    Расписание часто фиксированное
  </span>
  <span>
    <small>В Италии</small>
    Студент сам отвечает за свой план
  </span>
</div>
        </div>
      </section>

      <section className="italyErasmusSection">
        <div className="italyErasmusText">
          <p className="pageEyebrow">Erasmus+ mobility</p>
          <h2>Италия может открыть путь к учёбе в другой стране Европы</h2>
          <p>
            Поступая в итальянский университет, студент может получить доступ к
            Erasmus+ mobility. Это возможность поехать на семестр или год в
            партнёрский университет в другой стране Европы и получить
            дополнительный грант на период мобильности.
          </p>

          <div className="italyNotice">
            Erasmus+ не даётся автоматически. Нужно пройти конкурс в своём
            университете, подходить по требованиям и подать заявку вовремя.
          </div>
        </div>

        <div className="italyErasmusImage">
          <img src="/images/country/erasmus.jpg" alt="Amalfi coast, Italy" />
        </div>
      </section>

      <section className="italyCardGrid">
        {erasmusCards.map((card) => (
          <article key={card.title} className="italyInfoCard">
            <h3>{card.title}</h3>
            <p>{card.text}</p>
          </article>
        ))}
      </section>

      <section className="italyFitSection">
        <div className="italyFitBox">
          <h2>Кому Италия подходит?</h2>

          <ul>
            <li>хочешь европейский диплом;</li>
            <li>хочешь шанс на стипендию;</li>
            <li>готов заранее готовить документы;</li>
            <li>готов следить за дедлайнами;</li>
            <li>хочешь путешествовать по Европе;</li>
            <li>готов брать ответственность за учёбу.</li>
          </ul>
        </div>

        <div className="italyFitBox italyFitBoxDark">
          <h2>Кому может не подойти?</h2>

          <ul>
            <li>ждёшь 100% гарантию стипендии;</li>
            <li>не готов к бюрократии;</li>
            <li>не хочешь заниматься документами;</li>
            <li>думаешь, что можно ничего не делать;</li>
            <li>хочешь, чтобы университет вёл тебя за руку.</li>
          </ul>
        </div>
      </section>

      <section className="italySupportSection">
        <div>
          <p className="pageEyebrow">Поддержка</p>
          <h2>Можно поступать самому. Но не обязательно идти вслепую</h2>
          <p>
            Мы сделали этот сайт, чтобы студент мог разобраться самостоятельно:
            университеты, программы, документы, стипендии, дедлайны и этапы
            поступления.
          </p>

          <p>
            Если хочешь пройти путь спокойнее, можно обратиться за поддержкой:
            мы поможем понять требования, выбрать программы, проверить
            документы, не потерять дедлайны и подготовиться к подаче.
          </p>
        </div>

        <a href={whatsappLink} className="italyBigSupportButton" target="_blank">
          Нужна поддержка по Италии
        </a>
      </section>

      <section className="italyPathwaySection">
        <div className="italySectionHeader">
          <p className="pageEyebrow">Следующий шаг</p>
          <h2>Разбери поступление по этапам</h2>
          <p>
            Начни с главного: посмотри университеты, стипендии и документы.
            Эти три блока помогут понять, насколько Италия подходит тебе.
          </p>
        </div>

        <div className="italyPathwayGrid">
          {pathwayCards.map((card) => (
            <Link key={card.title} href={card.href} className="italyPathwayCard">
              <img src={card.image} alt={card.title} />

              <div>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
                <span>Открыть раздел →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="italyDisclaimer">
        <p>
          Мы повышаем ваши шансы для получения наибольшей стипендии,
          бесплатной учебы, питании и жилья. Все зависит от вашей готовности изменить жизнь и от ваших документов.
        </p>
      </section>
    </main>
  );
}
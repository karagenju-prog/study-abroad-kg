const italyFeatures = [
  {
    title: "Жизнь в Италии",
    text: "Италия подходит студентам, которым важна не только учёба, но и среда: города с историей, живая культура, общение, прогулки и спокойный ритм вне крупных мегаполисов.",
  },
  {
    title: "Климат",
    text: "Во многих регионах климат мягче, чем в северной Европе. Зима обычно легче, а весна и осень комфортные для жизни и учёбы.",
  },
  {
    title: "Красота городов",
    text: "Рим, Болонья, Падуя, Флоренция, Турин и другие города дают ощущение, что ты учишься не просто в университете, а в культурной среде.",
  },
  {
    title: "Транспорт",
    text: "Между городами удобно передвигаться на поездах и автобусах. Для студентов это важно: можно жить в одном городе, ездить в другой и путешествовать по Италии.",
  },
];

const studentNotes = [
  "Много государственных университетов",
  "Есть города дешевле Рима и Милана",
  "Можно найти программы на английском",
  "Стипендии часто зависят от региона",
  "Важно заранее готовить документы",
  "Жизнь отличается по регионам: север, центр и юг могут сильно различаться",
];

export default function ItalyPage() {
  return (
    <main className="italyPresentationPage">
      <section className="italyPresentationHero">
        <div className="italyPresentationText">
          <p className="pageEyebrow">Study in Italy</p>

          <h1>Италия как страна для учёбы и жизни</h1>

          <p>
            Италия — это не только университеты и стипендии. Это страна с
            сильной культурой, красивыми городами, разным ритмом жизни и
            большим количеством возможностей для студентов.
          </p>
        </div>

        <div className="italyPresentationImage">
          <img src="/images/italy/rome.jpg" alt="Rome, Italy" />

          <div className="italyFloatingBadge">
            <span>🇮🇹</span>
            <div>
              <strong>Italy</strong>
              <p>учёба · жизнь · культура</p>
            </div>
          </div>
        </div>
      </section>

      <section className="italyMoodSection">
        <div className="italyMoodText">
          <p className="pageEyebrow">Почему студенты выбирают Италию</p>
          <h2>Учёба здесь ощущается не только как диплом, но и как опыт жизни</h2>
          <p>
            Для многих студентов Италия становится удобным направлением:
            европейское образование, живые города, возможность путешествовать,
            знакомиться с новой культурой и при этом искать финансовую поддержку
            через региональные стипендии.
          </p>
        </div>

        <div className="italyMoodPhotos">
          <img src="/images/italy/bologna.jpg" alt="Bologna, Italy" />
          <img src="/images/italy/padua.jpg" alt="Padua, Italy" />
          <img src="/images/italy/venice.jpg" alt="Venice, Italy" />
        </div>
      </section>

      <section className="italyFeatureGrid">
        {italyFeatures.map((feature) => (
          <article key={feature.title} className="italyFeatureCard">
            <h3>{feature.title}</h3>
            <p>{feature.text}</p>
          </article>
        ))}
      </section>

      <section className="italyStudentLife">
        <div className="italyStudentLifeImage">
          <img src="/images/italy/campus.jpg" alt="Students in Italy" />
        </div>

        <div className="italyStudentLifeText">
          <p className="pageEyebrow">Для студента</p>
          <h2>Что важно понимать перед выбором Италии</h2>

          <p>
            Италия может быть сильным вариантом, если ты готов разбираться в
            требованиях, следить за дедлайнами и заранее собирать документы.
            Здесь многое реально сделать самостоятельно, но важно не идти
            вслепую.
          </p>

          <div className="studentNotesGrid">
            {studentNotes.map((note) => (
              <div key={note} className="studentNote">
                <span>✓</span>
                <p>{note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="italyRegionsSection">
        <div>
          <p className="pageEyebrow">Разные города — разный опыт</p>
          <h2>Италия не ощущается одинаково везде</h2>
        </div>

        <div className="italyRegionsGrid">
          <article>
            <h3>Крупные города</h3>
            <p>
              Рим, Милан и крупные центры дают больше возможностей, но могут
              быть дороже и конкурентнее.
            </p>
          </article>

          <article>
            <h3>Студенческие города</h3>
            <p>
              Болонья, Падуя, Турин и похожие города часто дают сильную
              университетскую атмосферу.
            </p>
          </article>

          <article>
            <h3>Спокойные города</h3>
            <p>
              Небольшие города могут быть дешевле и спокойнее, но важно
              проверять программы, транспорт и условия жизни.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
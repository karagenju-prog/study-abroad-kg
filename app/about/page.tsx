export default function AboutPage() {
  return (
    <main className="aboutPage">
      <section className="aboutHero">
        <p className="pageEyebrow">О проекте</p>

        <h1>Мы помогаем поступать за границу без агентств</h1>

        <p>
          Study Abroad KG — это проект для студентов из Кыргызстана, которые
          хотят самостоятельно поступить в зарубежный университет, разобраться
          с документами, стипендиями и не потеряться в процессе.
        </p>
      </section>

      <section className="aboutStory">
        <div className="aboutStoryCard">
          <span>🇰🇬 → 🇮🇹</span>
          <h2>Мы сами прошли этот путь</h2>
          <p>
            Мы не из богатых семей и хорошо понимаем, что для многих студентов
            поступление за границу кажется чем-то сложным, дорогим и почти
            недоступным. Но на практике многое можно сделать самостоятельно,
            если знать правильный порядок действий.
          </p>
          <p>
            Сейчас мы учимся и живём в Италии, поэтому знаем процесс не по
            слухам: выбор университета, подача заявки, документы, стипендии,
            дедлайны, первые шаги после приезда и бытовые трудности студента.
          </p>
        </div>
      </section>

      <section className="aboutTeam">
        <div className="aboutSectionHeader">
          <p className="pageEyebrow">Команда</p>
          <h2>Кто стоит за проектом</h2>
        </div>

        <div className="aboutTeamGrid">
          <article className="aboutPersonCard">
            <div className="aboutAvatar">Б</div>
            <div>
              <p className="aboutRole">Основатель проекта</p>
              <h3>Бекжан Тологонов</h3>
              <p>
                 Сейчас находится и учится в Италии.
                Отвечает за развитие проекта, структуру сайта, информацию по
                поступлению, университетам и стипендиям.
              </p>
              <a
  className="aboutInstagram"
  href="https://www.instagram.com/bekzhantlgn"
  target="_blank"
  rel="noopener noreferrer"
>
  Instagram →
</a>
            </div>
          </article>

          <article className="aboutPersonCard">
            <div className="aboutAvatar">Э</div>
            <div>
              <p className="aboutRole">Сооснователь проекта</p>
              <h3>Эрболот Махмуталиев</h3>
              <p>
                 Сейчас также находится и учится в
                Италии. Отвечает за документацию, проверку процессов и
                техническую поддержку студентов.
              </p>

               <a
  className="aboutInstagram"
  href="https://www.instagram.com/makhmutaliev17"
  target="_blank"
  rel="noopener noreferrer"
>
  Instagram →
</a>

            </div>
          </article>
        </div>
      </section>

      <section className="aboutTrust">
        <div>
          <p className="pageEyebrow">Почему нам можно доверять</p>
          <h2>
  Мы не меняем вашу жизнь.
  <br />
  Мы помогаем вам изменить её, <br />контролируя весь процесс.
</h2>
        </div>

        <div className="aboutTrustGrid">
          <div>
            <span>01</span>
            <h3>Мы сами студенты</h3>
            <p>
              Мы знаем, каково это — искать информацию, сомневаться, считать
              бюджет и переживать из-за документов.
            </p>
          </div>

          <div>
            <span>02</span>
            <h3>Мы внутри процесса</h3>
            <p>
              Мы учимся в Италии и понимаем, как работают университеты,
              региональные стипендии и студенческая жизнь после приезда.
            </p>
          </div>

          <div>
            <span>03</span>
            <h3>Без красивых сказок</h3>
            <p>
              Мы не говорим, что всё легко. Мы объясняем, что нужно подготовить,
              где могут быть сложности и как не упустить дедлайны.
            </p>
          </div>
        </div>
      </section>

      <section className="aboutMission">
        <div>
          <p className="pageEyebrow">Наша миссия</p>
          <h2>Сделать поступление понятнее для студентов из Кыргызстана</h2>
          <p>
            Мы хотим, чтобы у студентов был доступ к нормальной информации без
            страха, давления и лишних переплат. Агентство может помочь, но не
            каждый обязан платить большие деньги только за то, чтобы понять
            базовый процесс поступления.
          </p>
        </div>
      </section>

      <section className="aboutBottomCta">
        <div>
          <h2>Хочешь поступить в Италию, но не знаешь с чего начать?</h2>
          <p>
            Можешь начать с выбора программы, документов и стипендии. Если
            нужна поддержка — мы поможем разобраться по шагам.
          </p>
        </div>

        <a
          href="https://wa.me/+393519791937?text=Здравствуйте!%20Хочу%20узнать%20о%20поступлении%20в%20Италию."
          target="_blank"
          rel="noopener noreferrer"
        >
          Написать нам
        </a>
      </section>
    </main>
  );
}
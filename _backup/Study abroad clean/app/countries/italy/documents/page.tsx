export default function DocumentsPage() {
  const documentGroups = [
    {
      title: "Для поступления",
      description: "Базовые документы, которые обычно нужны университету.",
      icon: "🎓",
      items: [
        "Аттестат или диплом",
        "Оценки / transcript",
        "Перевод документов",
        "Апостиль или легализация, если требуется",
        "Паспорт",
        "CV, если требуется программой",
        "Мотивационное письмо, если требуется",
        "Сертификат английского / итальянского, если требуется",
      ],
    },
    {
      title: "Для стипендии",
      description: "Документы семьи для ISEEUP / ISEE Parificato и региональной стипендии.",
      icon: "💶",
      items: [
        "Документы о доходах семьи",
        "Документы об имуществе / недвижимости",
        "Справка о составе семьи",
        "Информация о жилье и квадратных метрах",
        "Паспорт или ID членов семьи, если требуется",
        "Переводы и легализация по правилам конкурса",
        "Соблюдение дедлайна стипендии",
      ],
    },
    {
      title: "Для визы",
      description: "Документы, которые могут понадобиться после admission letter.",
      icon: "🛂",
      items: [
        "Admission letter от университета",
        "Pre-enrollment / Universitaly, если требуется",
        "Паспорт",
        "Финансовые доказательства",
        "Подтверждение жилья",
        "Медицинская страховка",
        "Фото",
        "Визовая анкета",
      ],
    },
    {
      title: "После приезда",
      description: "Что обычно нужно оформить уже в Италии.",
      icon: "🇮🇹",
      items: [
        "Codice fiscale",
        "Permesso di soggiorno",
        "Адрес / residenza, если требуется",
        "Банковский счёт или карта",
        "Документы для университета",
        "Документы для стипендии",
      ],
    },
  ];

  return (
    <main className="startPage">
      <div className="startContainer">
        <section style={{ maxWidth: "900px" }}>
          <p className="startEyebrow">Documents</p>

          <h1
            style={{
              fontSize: "44px",
              lineHeight: "1.1",
              marginTop: "14px",
              marginBottom: "14px",
              letterSpacing: "-0.04em",
            }}
          >
            Документы для поступления в Италию
          </h1>

          <p
            style={{
              color: "#d1d5db",
              fontSize: "17px",
              lineHeight: "1.7",
              margin: 0,
            }}
          >
            Здесь собраны основные категории документов: для университета,
            стипендии, визы и первых шагов после приезда. Это черновая структура:
            перед подачей требования нужно проверять на официальных сайтах.
          </p>
        </section>

        <section
          style={{
            marginTop: "32px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "18px",
          }}
        >
          {documentGroups.map((group) => (
            <article
              key={group.title}
              style={{
                border: "1px solid rgba(148, 163, 184, 0.16)",
                borderRadius: "22px",
                padding: "24px",
                background: "rgba(15, 23, 42, 0.68)",
              }}
            >
              <div
                style={{
                  width: "54px",
                  height: "54px",
                  borderRadius: "17px",
                  background: "rgba(37, 99, 235, 0.18)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "26px",
                  marginBottom: "18px",
                }}
              >
                {group.icon}
              </div>

              <h2
                style={{
                  fontSize: "24px",
                  marginTop: 0,
                  marginBottom: "10px",
                }}
              >
                {group.title}
              </h2>

              <p
                style={{
                  color: "#94a3b8",
                  lineHeight: "1.6",
                  marginTop: 0,
                  marginBottom: "18px",
                }}
              >
                {group.description}
              </p>

              <ul
                style={{
                  color: "#d1d5db",
                  lineHeight: "1.8",
                  paddingLeft: "20px",
                  margin: 0,
                }}
              >
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </section>

        <section
          style={{
            marginTop: "34px",
            padding: "24px",
            borderRadius: "22px",
            border: "1px solid rgba(34, 197, 94, 0.25)",
            background: "rgba(5, 46, 22, 0.55)",
          }}
        >
          <h2 style={{ marginTop: 0 }}>Важно</h2>

          <p
            style={{
              color: "#bbf7d0",
              lineHeight: "1.7",
              marginBottom: 0,
            }}
          >
            Для стипендии документы семьи часто нужно готовить заранее: доходы,
            имущество, состав семьи и жильё. В разных регионах Италии правила
            могут отличаться, поэтому точный список всегда нужно сверять с
            официальным конкурсом стипендии.
          </p>
        </section>
      </div>
    </main>
  );
}
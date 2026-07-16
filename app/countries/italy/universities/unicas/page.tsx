export default function UnicasPage() {
  return (
    <main>
      <section style={{ maxWidth: "900px" }}>
        <p style={{ color: "#60a5fa", fontWeight: "bold" }}>
          University of Cassino and Southern Lazio
        </p>

        <h1>UNICAS — University of Cassino and Southern Lazio</h1>

        <p style={{ color: "#d1d5db", lineHeight: "1.6" }}>
          Государственный университет в регионе Лацио. Может быть хорошим
          вариантом для студентов, которые хотят учиться в более спокойном городе,
          искать программы на английском языке и подаваться на Lazio DiSCo.
        </p>

        {/*<a
          href="https://www.unicas.it"
          target="_blank"
          style={{
            display: "inline-block",
            marginTop: "18px",
            padding: "12px 18px",
            borderRadius: "12px",
            background: "#2563eb",
            color: "#ffffff",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          Официальный сайт университета
        </a>*/}
      </section>

      <section
        style={{
          marginTop: "36px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "16px",
        }}
      >
        {[
          ["Город", "Кассино"],
          ["Регион", "Лацио"],
          ["Тип", "Государственный университет"],
          ["Стипендия", "Lazio DiSCo"],
        ].map(([title, text]) => (
          <div
            key={title}
            style={{
              border: "1px solid #1f2937",
              borderRadius: "16px",
              padding: "20px",
              background: "#111827",
            }}
          >
            <h3 style={{ marginTop: 0 }}>{title}</h3>
            <p style={{ color: "#d1d5db" }}>{text}</p>
          </div>
        ))}
      </section>

      <section style={{ marginTop: "40px" }}>
        <h2>Кому может подойти</h2>

        <ul style={{ color: "#d1d5db", lineHeight: "1.8", paddingLeft: "20px" }}>
          <li>Студентам, которые хотят учиться в Италии в более спокойном городе.</li>
          <li>Тем, кто рассматривает экономику, бизнес, data/technology или engineering.</li>
          <li>Тем, кто хочет подаваться на региональную стипендию Lazio DiSCo.</li>
          <li>Тем, кому важна более доступная жизнь по сравнению с Римом или Миланом.</li>
        </ul>
      </section>

      <section style={{ marginTop: "40px" }}>
        <h2>Направления и программы</h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "14px", marginTop: "16px" }}>
          {[
            "Economics and Business",
            "Economics and Entrepreneurship",
            "Data Science / Technology",
            "Engineering",
          ].map((program) => (
            <div
              key={program}
              style={{
                border: "1px solid #1f2937",
                borderRadius: "14px",
                padding: "18px",
                background: "#111827",
              }}
            >
              {program}
            </div>
          ))}
        </div>
      </section>

      <section
        style={{
          marginTop: "40px",
          border: "1px solid #166534",
          borderRadius: "18px",
          padding: "24px",
          background: "#052e16",
        }}
      >
        <h2 style={{ marginTop: 0 }}>Возможная стипендия: Lazio DiSCo</h2>

        <p style={{ color: "#bbf7d0", lineHeight: "1.6" }}>
          Для студентов университетов региона Лацио доступна региональная
          стипендия Lazio DiSCo. Она может помочь покрыть расходы на обучение,
          проживание и питание, если студент подходит по требованиям конкурса.
        </p>

        <p style={{ color: "#86efac", fontWeight: "bold" }}>
          Максимально: до ~€7,072/год для fuori sede
        </p>

        <p style={{ color: "#bbf7d0", fontSize: "14px" }}>
          Точная сумма зависит от конкурса, статуса студента и документов.
        </p>
      </section>

      <section style={{ marginTop: "40px" }}>
        <h2>На что обратить внимание</h2>

        <ul style={{ color: "#d1d5db", lineHeight: "1.8", paddingLeft: "20px" }}>
          <li>Проверить требования конкретной программы на официальном сайте.</li>
          <li>Заранее подготовить документы для Lazio DiSCo.</li>
          <li>Проверить дедлайны университета и стипендии отдельно.</li>
          <li>Уточнить требования по английскому языку.</li>
          <li>Не откладывать документы для визы и Universitaly.</li>
        </ul>
      </section>
    </main>
  );
}
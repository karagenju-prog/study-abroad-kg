import Header from "@/components/Header";
import "./globals.css";

export const metadata = {
  title: "Study Abroad KG",
  description: "Поступление за границу без агентств",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
import Header from "@/components/layout/Header";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

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
        <Analytics />
      </body>
    </html>
  );
}
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Modos de Renderizado",
  description: "Conociendo los modos de renderizadode NextJS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

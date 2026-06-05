import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AECODE Activity Control OS",
  description: "Tablero maestro anonimizado para gestion de actividades, roles, postventa, soporte y automatizacion AECODE."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}

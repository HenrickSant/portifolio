export const metadata = {
  title: "Cauã Santos — Especialista em Automação & IA",
  description: "Portfólio de Cauã Santos, especialista em automação, n8n, IA e integrações.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body style={{ margin: 0, padding: 0, background: "#080c10" }}>
        {children}
      </body>
    </html>
  );
}

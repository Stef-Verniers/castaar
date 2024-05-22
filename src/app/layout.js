import "./globals.css";

export const metadata = {
  title: "CASTAAR.",
  description: "Mijn persoonlijk opdracht voor deze sollicitatie",
};

export default function RootLayout({ children }) {
  return (
    <>
    <html lang="en">
      <body>{children}</body>
    </html>
    </>
  );
}

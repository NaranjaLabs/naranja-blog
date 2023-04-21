import './globals.css';

export const metadata = {
  title: 'Naranja Blog',
  description: 'Criado pela organização Naranja Labs'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}

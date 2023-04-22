import './globals.css';

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        teste
        {children}
      </body>
    </html>
  );
}

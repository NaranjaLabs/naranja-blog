import '../globals.css';

export const metadata = {
  title: 'Naranja Blog',
  description: 'Blog para devs'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}

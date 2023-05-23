import Footer from '@components/Footer';
import Header from '@components/Header';
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
    <html lang="pt-br">
      <body className="bg-[#F8F8F8]">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

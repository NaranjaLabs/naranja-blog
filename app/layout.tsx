import './globals.css';
import Footer from '@components/components/Footer';
import Header from '@components/components/Header';

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className="bg-[#F8F8F8]">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

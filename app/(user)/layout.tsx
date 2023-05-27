import Head from 'next/head';

import Footer from '@components/Footer';
import Header from '@components/Header';

import '../globals.css';
import Script from 'next/script';

export const metadata = {
  title: 'Naranja Blog',
  description: 'Blog para devs'
  // link: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🍊</text></svg>',
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
      <Script
        async
        src="https://naranja-blog-ec1t.vercel.app/script.js"
        data-website-id="84e34a49-d393-4819-b883-3fdf0c98d86c"
      />
    </html>
  );
}

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className="bg-[#F8F8F8]">{children}</body>
    </html>
  );
}
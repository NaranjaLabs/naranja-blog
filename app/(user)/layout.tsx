import '../globals.css';

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

import './globals.css'; // Tumhara CSS yahan import karo

export const metadata = {
  title: 'Books Management',
  description: 'Manage your books using Next.js and TypeScript',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

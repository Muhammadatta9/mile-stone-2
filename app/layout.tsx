import './globals.css';
import Header from '../component/header';

export const metadata = {
  title: 'Modern Website',
  description: 'Responsive React Website with Tailwind CSS',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header /> {/* Header at the top */}
        <main>{children}</main>
      </body>
    </html>
  );
}

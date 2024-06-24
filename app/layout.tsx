import type { Metadata } from 'next';
import './globals.css';
import { Footer, Navbar } from '@/components';

export const metadata: Metadata = {
  title: 'Car Hub',
  description:
    'Discover best cars in the world. Find, book, rent a car quick and super easy!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className='relative'>
        <Navbar />
        {children}
      </body>
      <Footer />
    </html>
  );
}

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import '@/shared/assets/styles/globals.css';
import { MainLayout } from '@/components/layout';
import { TanStackQueryProvider } from '@/providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Sonet | Social Network',
  description: 'Social Network'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ru'>
      <body className={(inter.className, 'dark-theme')}>
        <TanStackQueryProvider>
          <MainLayout content={children} />
        </TanStackQueryProvider>
      </body>
    </html>
  );
}

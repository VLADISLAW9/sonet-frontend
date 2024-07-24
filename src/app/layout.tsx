import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { Layout } from '@/components/Layout';
import { TanStackQueryProvider } from '@/components/providers/TanStackQueryProviders';

import '@/shared/assets/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Sonet | Social Network',
  description: 'Social Network'
};

const RootLayout = ({
  children
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang='ru'>
      <body className={inter.className}>
        <TanStackQueryProvider>
          <Layout>{children}</Layout>
        </TanStackQueryProvider>
      </body>
    </html>
  );
};

export default RootLayout;

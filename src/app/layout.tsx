import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import '@/app/globals.css';

import { I18nProvider } from '@/providers/i18n-provider';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
  title: '不動産電話応対トレーニング / Real Estate Call Training',
  description:
    'Dual-language real estate customer service training platform with AI feedback, simulations, and progress tracking.'
};

interface RootLayoutProps {
  readonly children: React.ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => (
  <html lang="ja">
    <body className={inter.className}>
      <I18nProvider>
        <main className="min-h-screen bg-slate-50">
          {children}
        </main>
      </I18nProvider>
    </body>
  </html>
);

export default RootLayout;

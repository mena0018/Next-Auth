import '@/styles/globals.css';
import type { Metadata } from 'next';
import type { FC, PropsWithChildren } from 'react';
import AuthProvider from '@/providers/AuthProvider';

export const metadata: Metadata = {
  title: 'HomePage',
  description: 'HomePage Page made with Next.',
};

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang='en'>
      <body>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
};

export default RootLayout;

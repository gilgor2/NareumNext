import type { Metadata } from 'next';
import './globals.css';
import NavigationHeader from '@/component/organism/common/NavigationHeader/NavigationHeader';

export const metadata: Metadata = {
  title: 'nareum',
  description: 'help you keep being your self',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=optional"
          rel="stylesheet"
        />
      </head>
      <body>
        <NavigationHeader />
        <div className="h-[calc(100vh-5rem)]">
          {children}
        </div>
      </body>
    </html>
  );
}

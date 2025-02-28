import localFont from 'next/font/local';

export const geistSans = localFont({
  src: [
    {
      path: '../../public/fonts/GeistVF.woff2',
      weight: '100 900',
      style: 'normal',
    },
  ],
  variable: '--font-geist',
  display: 'swap',
});
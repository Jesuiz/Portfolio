import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { geistSans } from '@/src/utils/fonts';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${geistSans.variable} font-sans`}>
      <Component {...pageProps} />
    </div>
  );
}
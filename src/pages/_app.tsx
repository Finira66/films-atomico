import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { Raleway } from "next/font/google";

const raleway = Raleway({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={raleway.className}>
      <Component {...pageProps} />
    </div>
  );
}

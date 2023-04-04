import type { AppProps } from "next/app";
import "@/styles/globals.scss";
import Context from "@/context/Context";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Context>
      <Component {...pageProps} />
    </Context>
  );
}

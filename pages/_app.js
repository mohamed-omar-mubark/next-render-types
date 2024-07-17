// primereact
import "primereact/resources/themes/lara-light-teal/theme.css";
// primeflex
import "primeflex/primeflex.css";
// primeicons
import "primeicons/primeicons.css";

// style
import "../assets/styles/app.scss";

// session provider
import { SessionProvider } from "next-auth/react";

// default layout
import DefaultLayout from "@/layouts/default";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
    </SessionProvider>
  );
}

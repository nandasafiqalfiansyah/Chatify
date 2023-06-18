import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { AppStateProvider } from "../providers/AppStateContext";

export default function App({ Component, pageProps }) {
  return (
    <AppStateProvider>
      <Component {...pageProps} />
    </AppStateProvider>
  );
}






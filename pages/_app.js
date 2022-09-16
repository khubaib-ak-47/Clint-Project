import "../styles/globals.css";
import { ThemeProvider } from "@material-tailwind/react";

import { Footer, Navbar } from "../components/landing";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp;

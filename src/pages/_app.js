import Navbar from "@/components/Shared/NavbarBox/Navbar";
import { GlobalStyles } from "./GlobalStyle";
import Footer from "@/components/Shared/FooterBox/Footer";

export default function App({ Component, pageProps }) {
  return <>
    <GlobalStyles />
    <Navbar />
    <Component {...pageProps} />
    <Footer />
  </>
}

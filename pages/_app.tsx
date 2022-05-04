// import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
// import { Container } from 'react-bootstrap';
import type { AppProps } from "next/app";
import Footer, { Projects } from "../components/footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div id="template" className={`rtl w-full bg-gray-100 dark:bg-gray-800`}>
      <div className="max-w-screen-lg lg:max-w-screen-xl mx-auto px-6 sm:px-8 md:px-10 py-16">
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  );
}

export default MyApp;

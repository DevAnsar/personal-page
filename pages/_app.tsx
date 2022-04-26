import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import { Container } from 'react-bootstrap';
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Container fluid id="template" className={`rtl`}>
      <Component {...pageProps} />
    </Container>
  );
}

export default MyApp;

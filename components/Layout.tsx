import Footer, { Projects } from "../components/footer";
import Header from "../components/Header";
import Head from "next/head";
import type { Props } from "../types";

const Layout = ({ children }: Props) => {
  return (
    <>
      <Head>
        <title>Ansarmirzayi.ir</title>
      </Head>

      <div
        id="template"
        className={`rtl w-full bg-gray-100 dark:bg-gray-700  duration-100`}
      >
        <Header />
        <main className="max-w-screen-lg lg:max-w-screen-xl mx-auto px-6 sm:px-8 md:px-10 py-16">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;

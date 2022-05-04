import type { NextPage, GetStaticProps } from "next";
import Head from "next/head";

import { myConfig } from "../config";

import { InformationCart } from "../components/index/InformationCart";
import { Jobs } from "../components/jobs";
import { BlogsRow } from "../components/blogs/BlogsRow";

// import styles from "../styles/Home.module.css";
import { AuthorContentInterface , JobInterface } from "../types";

const Home: NextPage<{ contents: AuthorContentInterface; jobs: JobInterface[] }> = ({
  contents,
  jobs,
}) => {
  return (
    <div className="w-full">
      <Head>
        <title>AnsarMirzayi.ir</title>
        <meta
          name="description"
          content="My name is ansar mirzayi. I am web developer."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <InformationCart {...contents} />
      <Jobs jobs={jobs} />
      <BlogsRow />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(myConfig.API_URL + "/v1/index", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();
  return {
    props: {
      contents: data.contents,
      jobs: data.jobs,
    },
  };
};

export default Home;

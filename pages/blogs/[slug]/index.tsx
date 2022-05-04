import type { NextPage, GetServerSideProps } from "next";
import Head from "next/head";
import BlogShowPage from '../../../components/blogs/BlogShowPage'
import { myConfig } from "../../../config";
import { BlogInterface } from "../../../types";

const BlogSinglePage: NextPage<{ blog: BlogInterface }> = ({ blog }) => {
  return (
    <div className="w-full">
      <Head>
        <title>AnsarMirzayi.ir | {blog.title}</title>
        <meta
          name="description"
          content="My name is ansar mirzayi. I am web developer."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex justify-center">
        <BlogShowPage {...blog} />
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const slug = context.query.slug;
  let blog = null;
  const res = await fetch(myConfig.API_URL + `/v1/blogs/${slug}`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  if (res.ok) {
    const data = await res.json();
    // console.log('data:',data);
    blog = data.blog;
  }

  // console.log('context',);
  return {
    props: {
      blog,
    },
  };
};

export default BlogSinglePage;

import { NextPage, GetServerSideProps } from "next";
import { BlogCard } from "../../components/blogs/BlogCard";
import { myConfig } from "../../config";
import { BlogInterface } from "../../types";

const BlogsPage: NextPage<{ blogs: BlogInterface[] }> = ({ blogs }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-12">
      {blogs?.map((blog) => (
        <BlogCard
          key={blog.slug}
          id={blog.id}
          slug={blog.slug}
          title={blog.title}
          image={blog.image}
          description={blog.description}
          writer={blog.writer}
          date={blog.date}
          category={blog.category}
        />
      ))}
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const slug = context.query.slug;
  let blogs = null;
  const res = await fetch(myConfig.API_URL + `/v1/blogs`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  if (res.ok) {
    const data = await res.json();
    // console.log("data:", data);
    blogs = data.blogs;
  }

  // console.log('context',);
  return {
    props: {
      blogs,
    },
  };
};

export default BlogsPage;

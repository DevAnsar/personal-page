import React, { useState, useEffect } from "react";
import Link from "next/link";
import { BlogCard } from "./BlogCard";
import { BlogInterface } from "./../../types";
import { myConfig } from "../../config";

export const BlogsRow = () => {
  // const blogs: BlogInterface[] = [
  //   {
  //     id: 1,
  //     slug: "test-1",
  //     title: "مقاله تست 1",
  //     image: "/test.png",
  //     date: "12 اسفند 1401",
  //     description: "این مقاله درباره تاثیر خواب در عملکرد ...",
  //     writer: {
  //       id: 1,
  //       name: "انصار میرزایی",
  //     },
  //   },
  //   {
  //     id: 2,
  //     slug: "test-2",
  //     title: "مقاله تست 2",
  //     image: "/test.png",
  //     date: "13 اسفند 1401",
  //     description: "این مقاله درباره تاثیر بیداری در عملکرد ...",
  //     writer: {
  //       id: 1,
  //       name: "انصار میرزایی",
  //     },
  //   },
  //   {
  //     id: 3,
  //     slug: "test-2",
  //     title: "مقاله تست 2",
  //     image: "/test.png",
  //     date: "13 اسفند 1401",
  //     description: "این مقاله درباره تاثیر بیداری در عملکرد ...",
  //     writer: {
  //       id: 1,
  //       name: "انصار میرزایی",
  //     },
  //   },
  //   {
  //     id: 3,
  //     slug: "test-2",
  //     title: "مقاله تست 2",
  //     image: "/test.png",
  //     date: "13 اسفند 1401",
  //     description: "این مقاله درباره تاثیر بیداری در عملکرد ...",
  //     writer: {
  //       id: 1,
  //       name: "انصار میرزایی",
  //     },
  //   },
  // ];
  const SkeletonData: BlogInterface[] = [
    {
      id: 1,
      slug: undefined,
      title: undefined,
      image: undefined,
      date: undefined,
      description: undefined,
      writer: undefined,
      category: undefined,
    },
    {
      id: 2,
      slug: undefined,
      title: undefined,
      image: undefined,
      date: undefined,
      description: undefined,
      writer: undefined,
      category: undefined,
    },
    {
      id: 3,
      slug: undefined,
      title: undefined,
      image: undefined,
      date: undefined,
      description: undefined,
      writer: undefined,
      category: undefined,
    },
    {
      id: 4,
      slug: undefined,
      title: undefined,
      image: undefined,
      date: undefined,
      description: undefined,
      writer: undefined,
      category: undefined,
    },
  ];
  const [row_blogs, setRowBlogs] = useState<BlogInterface[]>(SkeletonData);
  useEffect(() => {
    handleGetData();
  }, []);

  const handleChangeShowType = (el: any) => {
    console.log("status:", el.target.checked);
    if (el.target.checked) {
      setRowBlogs(blogs);
    } else {
      setRowBlogs(SkeletonData);
    }
  };

  const handleGetData = async () => {
    try {
      const res = await fetch(myConfig.API_URL + "/v1/top-blogs", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      if (res.ok) {
        const data = await res.json();
        if (data.status) {
          setRowBlogs(data.top_blogs);
        }
      } else {
        console.log("You have some error", 404);
      }
    } catch (e) {
      console.log("You have some error", e);
    }
  };

  return (
    <div className="w-full mt-20">
      <div className="header flex flex-col md:flex-row items-end justify-between mb-12">
        <div className="title">
          <p className="text-xl md:text-2xl font-bold text-gray-700 dark:text-gray-200 mb-2">
            جدیدترین مطالب
          </p>
          <p className="text-sm md:text-md md:mt-2 font-normal text-gray-800 dark:text-gray-100">
            تمامی مقالات توسط 2 کارشناس تایید شده و توسط CTO تایید شده است
          </p>
        </div>
        <div className="text-end">
          <Link href="/blogs">
            <button
              className="flex-shrink-0 px-4 py-2 text-sm md:text-base text-gray-100 font-semibold  bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-blue-200"
              type="submit"
            >
              مشاهده ی همه مقالات
            </button>
          </Link>
        </div>
        {/* <input
          type="checkbox"
          onChange={handleChangeShowType}
          name="vehicle"
          className="h-5 w-5 text-red-600"
        /> */}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-12">
        <BlogCard {...row_blogs[0]} />
        <BlogCard {...row_blogs[1]} />
        <BlogCard {...row_blogs[2]} />
        <BlogCard {...row_blogs[3]} />
      </div>
    </div>
  );
};

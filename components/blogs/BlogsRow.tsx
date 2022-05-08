import React, { useState, useEffect } from "react";
import Link from "next/link";
import { BlogCard } from "./BlogCard";
import { BlogInterface } from "./../../types";
import { myConfig, SwiperBreakpoint } from "../../config";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y } from "swiper";

export const BlogsRow = () => {
  const [row_blogs, setRowBlogs] = useState<BlogInterface[]>([]);
  useEffect(() => {
    handleGetData();
  }, []);

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
      <div className="header flex flex-col md:flex-row  md:justify-between mb-12">
        <div className="title">
          <p className="text-lg md:text-xl font-bold text-gray-700 dark:text-gray-200 mb-2">
            جدیدترین مطالب
          </p>
          <p className="text-sm md:text-md md:mt-2 font-normal text-gray-800 dark:text-gray-100">
            تمامی مقالات توسط 2 کارشناس تایید شده و توسط CTO تایید شده است
          </p>
        </div>
        <div className="text-end">
          <Link href="/blogs" passHref>
            <button
              className="flex-shrink-0 px-4 py-2 text-sm md:text-base mt-5 md:mt-1 text-gray-100 font-semibold  bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-blue-200"
              type="submit"
            >
              مشاهده ی همه مقالات
            </button>
          </Link>
        </div>
      </div>
      <Swiper
        modules={[Pagination, A11y]}
        spaceBetween={0}
        slidesPerView={4}
        pagination={{
          clickable: true,
          // renderBullet: function (index, className) {
          //   return '<span class="' + className + '">' + index + "</span>";
          // },
        }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        breakpoints={SwiperBreakpoint}
      >
        <SwiperSlide>
          <BlogCard {...row_blogs[0]} />
        </SwiperSlide>
        <SwiperSlide>
          <BlogCard {...row_blogs[1]} />
        </SwiperSlide>
        <SwiperSlide>
          <BlogCard {...row_blogs[2]} />
        </SwiperSlide>
        <SwiperSlide>
          <BlogCard {...row_blogs[3]} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

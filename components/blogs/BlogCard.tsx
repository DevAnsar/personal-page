import React from "react";
import Link from "next/link";
import { myConfig } from "../../config";
import { BlogInterface } from "./../../types";
import { DataSkeleton, ImageSkeleton } from "./Skeleton";

export const BlogCard = (data: BlogInterface) => {
  // console.log(data);
  return (
    <div className="overflow-hidden shadow-md hover:shadow-lg rounded-xl md:rounded-3xl h-90 w-full cursor-pointer m-auto">
      <Link href="/blogs/[slug]" as={`/blogs/${data.slug}`}>
        <div className="w-full block h-full">
          <ImageSkeleton
            image={data.image}
            skeletonCalss="w-full h-40 rounded-md"
          >
            <img
              alt="blog photo"
              src={myConfig.Base_URL + data.image}
              className="h-40 w-full object-cover"
            />
          </ImageSkeleton>

          <div className="bg-white dark:bg-gray-800 w-full p-4  space-y-2">
            <DataSkeleton
              skeletonData={
                data.category ? data.category?.title : data.category
              }
              skeletonCalss="w-36 h-3 rounded-md"
            >
              <p className="mb-2 text-indigo-500 text-md ">
                {data.category?.title}
              </p>
            </DataSkeleton>

            <DataSkeleton
              skeletonData={data.title}
              skeletonCalss="w-36 h-8 rounded-md space-y-3"
            >
              <p className="text-gray-800 dark:text-white text-md md:text-lg mb-2">
                {data?.title}
              </p>
            </DataSkeleton>
            <DataSkeleton
              skeletonData={data.description}
              skeletonCalss="w-full h-4 rounded-md"
              skeletonRows={2}
              skeletonRowCalss="space-y-2"
            >
              <p className="text-gray-400 dark:text-gray-300 text-xs md:text-sm">
                {data?.description}
              </p>
            </DataSkeleton>

            <div className="flex items-center mt-4">
              <a href="#" className="block relative">
                <ImageSkeleton
                  image={data.writer?.image}
                  skeletonCalss="w-10 h-10 rounded-full"
                >
                  <img
                    alt="blog photo"
                    src={myConfig.Base_URL + data.writer?.image}
                    className="mx-auto object-cover rounded-full h-10 w-10"
                  />
                </ImageSkeleton>
              </a>
              <div className="flex flex-col justify-between mr-4 text-sm  space-y-2">
                <DataSkeleton
                  skeletonData={data.writer ? data.writer.name : undefined}
                  skeletonCalss="w-20 h-2 rounded-md"
                >
                  <p className="text-gray-800 dark:text-white h-2 text-xs">
                    {data.writer?.name}
                  </p>
                </DataSkeleton>

                <DataSkeleton
                  skeletonData={data.date}
                  skeletonCalss="w-24 h-2 rounded-md"
                >
                  <p className="text-gray-400 dark:text-gray-300 h-2 text-xs">
                    {data.date}
                  </p>
                </DataSkeleton>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

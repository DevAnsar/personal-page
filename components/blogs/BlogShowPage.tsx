import React from "react";
import { myConfig } from "../../config";
import { BlogInterface } from "../../types";
import { DataSkeleton, ImageSkeleton } from "./Skeleton";

const BlogShowPage = (data: BlogInterface) => {
  console.log(data);
  return (
    <div className="w-full">
      <div className="w-full  flex justify-center mb-8">
        <div className="overflow-hidden shadow-md max-w-md hover:shadow-lg rounded-xl md:rounded-3xl">
          <div className="w-full block h-full">
            <ImageSkeleton
              image={data.image}
              skeletonCalss="w-full h-80 rounded-md"
            >
              <img
                alt="blog photo"
                src={myConfig.Base_URL + data.image}
                className="object-cover w-full"
              />
            </ImageSkeleton>
          </div>
        </div>
      </div>

      <DataSkeleton
        skeletonData={data.category ? data.category?.title : data.category}
        skeletonCalss="w-36 h-3 rounded-md"
      >
        <p className="font-base mb-2 text-indigo-500 text-md ">
          {data.category?.title}
        </p>
      </DataSkeleton>

      <div className="bg-white dark:bg-gray-800 w-full p-4 overflow-hidden shadow-md  rounded-md md:rounded-xl  m-auto">
        <div className="flex flex-col md:flex-row md:justify-between justify-start mb-10">
          <DataSkeleton
            skeletonData={data.title}
            skeletonCalss="w-36 h-8 rounded-md space-y-3"
          >
            <p className="text-gray-800 dark:text-white text-xl font-medium mb-2">
              {data?.title}
            </p>
          </DataSkeleton>

          <div className="flex items-center justify-start">
            <div className="flex flex-row justify-between align-center md:mr-4 text-xs md:text-sm">
              <DataSkeleton
                skeletonData={data.writer ? data.writer.name : undefined}
                skeletonCalss="w-40 h-4 rounded-md"
              >
                <p className="text-gray-800 dark:text-white h-4 md:px-3 pl-2">
                  نوشته شده توسط : {data.writer?.name}
                </p>
              </DataSkeleton>
              <a href="#" className="block relative mt-0">
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

              {/* <DataSkeleton
                skeletonData={data.date}
                skeletonCalss="w-24 h-3 rounded-md"
              >
                <p className="text-gray-400 dark:text-gray-300 h-3">
                  {data.date}
                </p>
              </DataSkeleton> */}
            </div>
          </div>
        </div>

        <DataSkeleton
          skeletonData={data.body}
          skeletonCalss="w-full h-4 rounded-md"
          skeletonRows={10}
          skeletonRowCalss="space-y-2"
        >
          <p className="text-gray-800 dark:text-gray-300 font-normal text-md md:text-lg lg:text-xl whitespace-pre-line break-words tracking-wide leading-loose">
            {data?.body}
          </p>
        </DataSkeleton>
      </div>
    </div>
  );
};

export default BlogShowPage;

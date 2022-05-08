import React from "react";
import Image from "next/image";
import { ImageLoader } from "../../config";
import { JobInterface } from "../../types";

const Job: React.FunctionComponent<{ job: JobInterface }> = ({ job }) => {
  return (
    <a
      target="_blank"
      href={job.url}
      data-toggle="tooltip"
      data-placement="bottom"
      rel="noreferrer"
      title={`${job.title} - ${job.domain}`}
    >
      <div className="shadow-md hover:shadow-lg rounded-2xl p-4 bg-white dark:bg-gray-800 relative overflow-hidden h-90 w-full cursor-pointer m-auto">
        <div className="w-full h-40 relative mb-2 rounded-md md:rounded-lg overflow-hidden">
          <Image loader={ImageLoader} src={job.image} layout="fill" />
        </div>

        <div className="w-4/4">
          <p className="text-gray-800 dark:text-white text-md md:text-lg font-medium mb-2">
            {job.title}
          </p>

          <p className="text-gray-600 dark:text-gray-300 text-xs md:text-sm">
            {job.domain}
          </p>
          <p className="text-gray-600 dark:text-gray-300 text-xs md:text-sm">
            {job.description}
          </p>
          <p className="text-indigo-500  text-md font-medium mt-4">مشاهده</p>
        </div>
      </div>
    </a>
  );
};

export default Job;

import React from "react";
import Image from "next/image";
import { myConfig } from "../../config";
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
        <img
          alt=""
          // job.image
          // "https://images.unsplash.com/photo-1635002962487-2c1d4d2f63c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZGlnaXRhbCUyMGFydHxlbnwwfDJ8MHx8&auto=format&fit=crop&w=800&q=60"
          
          src={myConfig.Base_URL + job.image}
          className="rounded-lg mb-4  w-100"
        />
        <div className="w-4/4">
          <p className="text-gray-800 dark:text-white text-md md:text-lg font-medium mb-2">{job.title}</p>

          <p className="text-gray-600 dark:text-gray-300 text-xs md:text-sm">{job.domain}</p>
          <p className="text-gray-600 dark:text-gray-300 text-xs md:text-sm">{job.description}</p>
          <p className="text-indigo-500  text-md font-medium mt-4">مشاهده</p>
        </div>
      </div>
    </a>
  );
};

export default Job;

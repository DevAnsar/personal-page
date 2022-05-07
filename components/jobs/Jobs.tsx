import React from "react";
import { Job } from "./index";
import { JobInterface } from "../../types";

const Jobs: React.FunctionComponent<{ jobs: JobInterface[] }> = ({ jobs }) => {
  return (
    <div className="w-full mt-20">
      <div className="header flex flex-col  md:flex-row md:justify-between mb-12">
        <div className="title">
          <p className="text-lg md:text-xl font-bold text-gray-700 dark:text-gray-200 mb-2">
            جدیدترین نمونه کارها{" "}
          </p>
          <p className="text-sm md:text-md md:mt-2 font-normal text-gray-800 dark:text-gray-100">
            توسعه و برنامه نویسی وب اپلیکیشن و پنل های مدیریت با انواع کتابخانه
            ها و فریم ورک ها
          </p>
        </div>
        <div className="text-end">
          <button
            className="flex-shrink-0 px-4 py-2 text-sm md:text-base mt-5 md:mt-1 font-semibold text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-blue-200"
            type="submit"
          >
            برای سفارش پروژه تماس بگیرید
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-12">
        {jobs?.map((job: JobInterface, index) => (
          <Job key={index} job={job} />
        ))}
      </div>
    </div>
  );
};
export default Jobs;

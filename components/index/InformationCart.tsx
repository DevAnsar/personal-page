import { Socials } from "../../components/index/Socials";
import { Skills } from "../../components/index/Skills";

// library
import { maker } from "../../components/TextChef";

import { myConfig } from "../../config";

import { AuthorContentInterface } from "../../types";

export const InformationCart = (data: AuthorContentInterface) => {
  return (
    <div className="mb-5 w-full">
      <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-12 gap-12">
        <div className="md:col-span-2 lg:col-span-2 xl:col-span-3 flex justify-center align-center">
          <div className="w-36 h-36 md:w-64 md:h-64 mt-5  rounded-full overflow-hidden shadow-xl md:shadow-3xl shadow-slate-500">
            <img
              alt={"ansar mirzayi"}
              className="shadow-lg  w-80 bg-white dark:bg-gray-800"
              src={myConfig.Base_URL + data?.main_image}
            />
          </div>
        </div>
        <div className="md:col-span-3 lg:col-span-4 xl:col-span-9 text-md md:text-xl font-bold text-gray-800 dark:text-gray-200">
          <div className="mt-md-4 mt-0  text-base">وب سایت شخصی</div>

          <div className="mt-1 flex justify-between">
            <div className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-gray-100">
              {data?.user_name}
            </div>
            <Socials />
          </div>
          <div className="mt-3 min-h-25 text-gray-800 dark:text-gray-100 flex flex-row">
            فول استک وب
            <Skills />
          </div>

          <div className="mt-2  text-medium min-h-30 text-gray-800 dark:text-gray-100">
            {maker(data?.description)}
          </div>
        </div>
      </div>
    </div>
  );
};

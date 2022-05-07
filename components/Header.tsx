import Link from 'next/link'
import DarkModeToggleButton from "./tools/DarkModeToggleButton";
import { MenuIcon } from "@heroicons/react/solid";

const Header = () => {
  return (
    <div className="sticky top-0 w-full z-10 bg-white/[0.7] dark:bg-black/[0.3] backdrop-blur-lg shadow-lg shadow-gray-600/[0.1] dark:shadow-white/[0.1]">
      <div className="max-w-screen-lg lg:max-w-screen-xl mx-auto px-6 sm:px-8 md:px-10 py-5 md:py-8 ">
        <div className="flex justify-between">
          <div className="flex">
            <MenuIcon
              className="w-6 h-6 text-gray-800 dark:text-gray-300 "
              role="button"
            />

            <Link href="/" passHref>
              <div className="px-4 mx-4 text-gray-900 dark:text-gray-300 cursor-pointer">
                انصار میرزایی
              </div>
            </Link>
          </div>
          <DarkModeToggleButton />
        </div>
      </div>
    </div>
  );
};
export default Header;

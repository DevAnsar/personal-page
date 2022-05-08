// import Image from "next/image";

// import PhoneIcon from "../../public/images/phone-call.svg";
// import TelegramIcon from "../../public/images/telegram.svg";
// import EmailIcon from "../../public/images/email.svg";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-800 pt-4 pb-8 xl:pt-8">
      <div className="max-w-screen-lg xl:max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8 text-gray-400 dark:text-gray-300">
        {/* <ul className="text-lg font-light pb-8 flex flex-wrap justify-center">
          <li className="w-1/2 md:w-1/3 lg:w-1/3">
            <div className="text-center">
              <h2 className="text-gray-500 dark:text-gray-200 text-md uppercase mb-4">
                محتوا
              </h2>
              <ul>
                <li className="mb-4 hover:text-gray-800 dark:hover:text-white transition-colors duration-200">
                  <a href="#">پروژه ها و نمونه کارها</a>
                </li>
                <li className="mb-4 hover:text-gray-800 dark:hover:text-white transition-colors duration-200">
                  <a href="#">مقالات برنامه نویسی</a>
                </li>
                <li className="mb-4 hover:text-gray-800 dark:hover:text-white transition-colors duration-200">
                  <a href="#">پلاگین ها</a>
                </li>
              </ul>
            </div>
          </li>
          <li className="w-1/2 md:w-1/3 lg:w-1/3">
            <div className="text-center">
              <h2 className="text-gray-500 dark:text-gray-200 text-md uppercase mb-4">
                ارتباط
              </h2>
              <ul>
                <li className="mb-4 hover:text-gray-800 dark:hover:text-white transition-colors duration-200">
                  <a href="https://github.com/DevAnsar">گیت هاب</a>
                </li>
                <li className="mb-4 hover:text-gray-800 dark:hover:text-white transition-colors duration-200">
                  <a href="https://www.linkedin.com/in/ansar-mirzayi-628686185">لینکدین</a>
                </li>
                <li className="mb-4 hover:text-gray-800 dark:hover:text-white transition-colors duration-200">
                  <a href="#">توویتر</a>
                </li>
              </ul>
            </div>
          </li>
          <li className="w-1/2 md:w-1/3 lg:w-1/3">
            <div className="text-center">...</div>
          </li>
        </ul> */}
        <div className="pt-8 flex border-gray-200 max-w-xs mx-auto items-center justify-between">
          <a href="" title="تلگرام">
            <svg
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="20"
              height="20"
              className="text-xl hover:text-gray-800 dark:hover:text-white transition-colors duration-200"
            >
              <path d="M 20.572266 3.0117188 C 20.239891 2.9764687 19.878625 3.028375 19.515625 3.171875 C 19.065625 3.348875 12.014406 6.3150313 5.4414062 9.0820312 L 3.2695312 9.9960938 C 2.4285313 10.337094 2.0039062 10.891672 2.0039062 11.638672 C 2.0039062 12.161672 2.22525 12.871063 3.28125 13.289062 L 6.9472656 14.757812 C 7.2642656 15.708813 8.0005469 17.916906 8.1855469 18.503906 C 8.2955469 18.851906 8.5733906 19.728594 9.2753906 19.933594 C 9.4193906 19.982594 9.5696563 20.007813 9.7226562 20.007812 C 10.165656 20.007812 10.484625 19.801641 10.640625 19.681641 L 12.970703 17.710938 L 15.800781 20.328125 C 15.909781 20.439125 16.486719 21 17.261719 21 C 18.228719 21 18.962234 20.195016 19.115234 19.416016 C 19.198234 18.989016 21.927734 5.2870625 21.927734 5.2890625 C 22.172734 4.1900625 21.732219 3.6199531 21.449219 3.3769531 C 21.206719 3.1694531 20.904641 3.0469688 20.572266 3.0117188 z M 19.910156 5.171875 C 19.533156 7.061875 17.478016 17.378234 17.166016 18.865234 L 13.029297 15.039062 L 10.222656 17.416016 L 11 14.375 C 11 14.375 16.362547 8.9468594 16.685547 8.6308594 C 16.945547 8.3778594 17 8.2891719 17 8.2011719 C 17 8.0841719 16.939781 8 16.800781 8 C 16.675781 8 16.506016 8.1197812 16.416016 8.1757812 C 15.272669 8.8885973 10.404094 11.662239 8.0078125 13.025391 L 4.53125 11.636719 L 6.21875 10.927734 C 10.51775 9.1177344 18.174156 5.893875 19.910156 5.171875 z" />
            </svg>
          </a>
          <a href="" title="واتساپ">
            <svg
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="20"
              height="20"
              className="text-xl hover:text-gray-800 dark:hover:text-white transition-colors duration-200"
            >
              <path d="M 12.011719 2 C 6.5057187 2 2.0234844 6.478375 2.0214844 11.984375 C 2.0204844 13.744375 2.4814687 15.462563 3.3554688 16.976562 L 2 22 L 7.2324219 20.763672 C 8.6914219 21.559672 10.333859 21.977516 12.005859 21.978516 L 12.009766 21.978516 C 17.514766 21.978516 21.995047 17.499141 21.998047 11.994141 C 22.000047 9.3251406 20.962172 6.8157344 19.076172 4.9277344 C 17.190172 3.0407344 14.683719 2.001 12.011719 2 z M 12.009766 4 C 14.145766 4.001 16.153109 4.8337969 17.662109 6.3417969 C 19.171109 7.8517969 20.000047 9.8581875 19.998047 11.992188 C 19.996047 16.396187 16.413812 19.978516 12.007812 19.978516 C 10.674812 19.977516 9.3544062 19.642812 8.1914062 19.007812 L 7.5175781 18.640625 L 6.7734375 18.816406 L 4.8046875 19.28125 L 5.2851562 17.496094 L 5.5019531 16.695312 L 5.0878906 15.976562 C 4.3898906 14.768562 4.0204844 13.387375 4.0214844 11.984375 C 4.0234844 7.582375 7.6067656 4 12.009766 4 z M 8.4765625 7.375 C 8.3095625 7.375 8.0395469 7.4375 7.8105469 7.6875 C 7.5815469 7.9365 6.9355469 8.5395781 6.9355469 9.7675781 C 6.9355469 10.995578 7.8300781 12.182609 7.9550781 12.349609 C 8.0790781 12.515609 9.68175 15.115234 12.21875 16.115234 C 14.32675 16.946234 14.754891 16.782234 15.212891 16.740234 C 15.670891 16.699234 16.690438 16.137687 16.898438 15.554688 C 17.106437 14.971687 17.106922 14.470187 17.044922 14.367188 C 16.982922 14.263188 16.816406 14.201172 16.566406 14.076172 C 16.317406 13.951172 15.090328 13.348625 14.861328 13.265625 C 14.632328 13.182625 14.464828 13.140625 14.298828 13.390625 C 14.132828 13.640625 13.655766 14.201187 13.509766 14.367188 C 13.363766 14.534188 13.21875 14.556641 12.96875 14.431641 C 12.71875 14.305641 11.914938 14.041406 10.960938 13.191406 C 10.218937 12.530406 9.7182656 11.714844 9.5722656 11.464844 C 9.4272656 11.215844 9.5585938 11.079078 9.6835938 10.955078 C 9.7955938 10.843078 9.9316406 10.663578 10.056641 10.517578 C 10.180641 10.371578 10.223641 10.267562 10.306641 10.101562 C 10.389641 9.9355625 10.347156 9.7890625 10.285156 9.6640625 C 10.223156 9.5390625 9.737625 8.3065 9.515625 7.8125 C 9.328625 7.3975 9.131125 7.3878594 8.953125 7.3808594 C 8.808125 7.3748594 8.6425625 7.375 8.4765625 7.375 z" />
            </svg>
          </a>
          <a href="mailto:ansarmirzayi@gmail.com" title="ایمیل">
            <svg
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 50 50"
              width="20"
              height="20"
              className="text-xl hover:text-gray-800 dark:hover:text-white transition-colors duration-200"
            >
              <path d="M12 23.403V23.39 10.389L11.88 10.3h-.01L9.14 8.28C7.47 7.04 5.09 7.1 3.61 8.56 2.62 9.54 2 10.9 2 12.41v3.602L12 23.403zM38 23.39v.013l10-7.391V12.41c0-1.49-.6-2.85-1.58-3.83-1.46-1.457-3.765-1.628-5.424-.403L38.12 10.3 38 10.389V23.39zM14 24.868l10.406 7.692c.353.261.836.261 1.189 0L36 24.868V11.867L25 20l-11-8.133V24.868zM38 25.889V41c0 .552.448 1 1 1h6.5c1.381 0 2.5-1.119 2.5-2.5V18.497L38 25.889zM12 25.889L2 18.497V39.5C2 40.881 3.119 42 4.5 42H11c.552 0 1-.448 1-1V25.889z" />
            </svg>
          </a>
          <a href="#" title="twitter">
            <svg
              width="20"
              height="20"
              fill="currentColor"
              className="text-xl hover:text-gray-800 dark:hover:text-white transition-colors duration-200"
              viewBox="0 0 1792 1792"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1684 408q-67 98-162 167 1 14 1 42 0 130-38 259.5t-115.5 248.5-184.5 210.5-258 146-323 54.5q-271 0-496-145 35 4 78 4 225 0 401-138-105-2-188-64.5t-114-159.5q33 5 61 5 43 0 85-11-112-23-185.5-111.5t-73.5-205.5v-4q68 38 146 41-66-44-105-115t-39-154q0-88 44-163 121 149 294.5 238.5t371.5 99.5q-8-38-8-74 0-134 94.5-228.5t228.5-94.5q140 0 236 102 109-21 205-78-37 115-142 178 93-10 186-50z"></path>
            </svg>
          </a>
          <a href="https://github.com/DevAnsar" title="اکانت گیت هاب">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="text-xl hover:text-gray-800 dark:hover:text-white transition-colors duration-200"
              viewBox="0 0 1792 1792"
            >
              <path d="M896 128q209 0 385.5 103t279.5 279.5 103 385.5q0 251-146.5 451.5t-378.5 277.5q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-119-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-85-13.5q-45 113-8 204-79 87-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-39 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103zm-477 1103q3-7-7-12-10-3-13 2-3 7 7 12 9 6 13-2zm31 34q7-5-2-16-10-9-16-3-7 5 2 16 10 10 16 3zm30 45q9-7 0-19-8-13-17-6-9 5 0 18t17 7zm42 42q8-8-4-19-12-12-20-3-9 8 4 19 12 12 20 3zm57 25q3-11-13-16-15-4-19 7t13 15q15 6 19-6zm63 5q0-13-17-11-16 0-16 11 0 13 17 11 16 0 16-11zm58-10q-2-11-18-9-16 3-14 15t18 8 14-14z"></path>
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/ansar-mirzayi-628686185/"
            title="اکانت لینکدین"
          >
            <svg
              width="20"
              height="20"
              fill="currentColor"
              className="text-xl hover:text-gray-800 dark:hover:text-white transition-colors duration-200"
              viewBox="0 0 1792 1792"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M477 625v991h-330v-991h330zm21-306q1 73-50.5 122t-135.5 49h-2q-82 0-132-49t-50-122q0-74 51.5-122.5t134.5-48.5 133 48.5 51 122.5zm1166 729v568h-329v-530q0-105-40.5-164.5t-126.5-59.5q-63 0-105.5 34.5t-63.5 85.5q-11 30-11 81v553h-329q2-399 2-647t-1-296l-1-48h329v144h-2q20-32 41-56t56.5-52 87-43.5 114.5-15.5q171 0 275 113.5t104 332.5z"></path>
            </svg>
          </a>
        </div>
        <div className="text-center pt-10 sm:pt-12 font-light flex items-center justify-center">
          <form className="flex flex-col md:flex-row w-3/4 md:w-full max-w-sm md:space-x-3 space-y-3 md:space-y-0 justify-center">
            <div className=" relative ">
              <input
                type="text"
                id='"form-subscribe-Subscribe'
                className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                placeholder="ایمیل"
              />
            </div>
            <button
              className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200"
              type="submit"
            >
              عضویت در خبرنامه
            </button>
          </form>
        </div>
        <div className="text-center pt-10 sm:pt-12 font-light flex items-center justify-center">
          2022@
        </div>
      </div>
    </footer>
    // <div className="footer border-top">
    //   <div className={`footer-row pt-3 mb-2`}>
    //     <div className={`footer-list`}>
    //       <a
    //         href="tel:09306029572"
    //         rel="noreferrer"
    //         title="09306029572"
    //         target="_blank"
    //         className="balance me-3 ms-4 me-md-2 ms-md-3"
    //       >
    //         <Image
    //           alt="تماس تلفنی"
    //           className="footer-icons"
    //           width="23px"
    //           height="23px"
    //           src={PhoneIcon}
    //         />
    //         <span className="d-none d-md-block pe-2 ps-3">تماس تلفنی</span>
    //       </a>
    //       <a
    //         href="mailto:ansarmirzayi@gmail.com"
    //         title="ansarmirzayi@gmail.com"
    //         className="balance me-3 ms-4 me-md-2 ms-md-3"
    //       >
    //         <Image
    //           alt="ارسال ایمیل"
    //           className="footer-icons"
    //           width="23px"
    //           height="23px"
    //           src={EmailIcon}
    //         />
    //         <span className="d-none d-md-block pe-2 ps-3">ارسال ایمیل</span>
    //       </a>
    //       <a
    //         rel="noreferrer"
    //         href="https://t.me/dev_ansar"
    //         title="https://t.me/dev_ansar"
    //         target="_blank"
    //         className="balance me-3 ms-4 me-md-2 ms-md-3"
    //       >
    //         <Image
    //           alt="تلگرام"
    //           className="footer-icons"
    //           width="23px"
    //           height="23px"
    //           src={TelegramIcon}
    //         />
    //         <span className="d-none d-md-block pe-2 ps-3">تلگرام</span>
    //       </a>
    //     </div>
    //     <div className={`footer-list`}>
    //       <a
    //         rel="noreferrer"
    //         href="http://ansarmirzayi.ir"
    //         target="_blank"
    //         className="balance text-white text-medium"
    //       >
    //         ansarmirzayi.ir
    //       </a>
    //     </div>
    //   </div>
    // </div>
  );
}

import Image from "next/image";

// import GitHubIcon from "../../public/images/GitHub-Mark-Light-32px.png";
// import NpmIcon from "../../public/images/npm-icon.svg";

const Socials = () => {
  return (
    <div className="flex justify-center align-center">
      {/* <a
        rel="noreferrer"
        href="https://www.npmjs.com/~ansaramman"
        className="logo ml-3"
        target="_blank"
        title="npm packages"
      >
        <Image width="27px" height="27px" alt="اکانت npm" src={NpmIcon} />
      </a> */}
      <a
        rel="noreferrer"
        href="https://www.linkedin.com/in/ansar-mirzayi-628686185/"
        className="logo ml-3"
        target="_blank"
        title="اکانت لینکداین"
      >
        <svg
          width="30"
          height="30"
          fill="currentColor"
          className="text-3xl text-gray-600 hover:text-gray-800 dark:text-gray-200  dark:hover:text-white transition-colors duration-200"
          viewBox="0 0 1792 1792"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M477 625v991h-330v-991h330zm21-306q1 73-50.5 122t-135.5 49h-2q-82 0-132-49t-50-122q0-74 51.5-122.5t134.5-48.5 133 48.5 51 122.5zm1166 729v568h-329v-530q0-105-40.5-164.5t-126.5-59.5q-63 0-105.5 34.5t-63.5 85.5q-11 30-11 81v553h-329q2-399 2-647t-1-296l-1-48h329v144h-2q20-32 41-56t56.5-52 87-43.5 114.5-15.5q171 0 275 113.5t104 332.5z"></path>
        </svg>
      </a>

      <a
        target="_blank"
        href="https://github.com/DevAnsar"
        title="اکانت گیت هاب"
        rel="noreferrer" 
      >
        <svg
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 30 30"
          width="30"
          height="30"
          className="text-3xl text-gray-600 hover:text-gray-800 dark:text-gray-200  dark:hover:text-white transition-colors duration-200"
        >
          {" "}
          <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z" />
        </svg>
      </a>
      {/* <a
        rel="noreferrer"
        target="_blank"
        href="https://github.com/DevAnsar"
        className=" mr-3 skill-icons"
        title="اکانت گیت هاب"
      >
        <Image
          width="30px"
          height="30px"
          alt="اکانت گیت هاب"
          src={GitHubIcon}
        />
      </a> */}
    </div>
  );
};

export { Socials };

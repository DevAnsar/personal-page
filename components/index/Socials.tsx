import Image from "next/image";

import GitHubIcon from "../../public/images/GitHub-Mark-Light-32px.png";
import NpmIcon from "../../public/images/npm-icon.svg";

const Socials = () => {
  return (
    <div className="flex justify-center align-center">
      <a
        rel="noreferrer"
        href="https://www.npmjs.com/~ansaramman"
        className="logo ms-3"
        target="_blank"
        title="npm packages"
      >
        <Image width="27px" height="27px" alt="اکانت npm" src={NpmIcon} />
      </a>
      <a
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
      </a>
    </div>
  );
};

export { Socials };

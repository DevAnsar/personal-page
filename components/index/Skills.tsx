import Image from "next/image";

import PhpIcon from "../../public/images/php.svg";
import LaravelIcon from "../../public/images/logomark.min.svg";
const JsIcon =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAAclBMVEX33x4AAAD+5R/64R7XwxqLfhH/6B8aFwP03R7bxhuOgBHMuBnVwBoYFgPfyRskIAWYiRLu1x21pBaFeRDp0hyjkxRTSwqqmhVpXw3ArRfFshgxLAZvZA0+OAh2ag4tKQVhWAwQDgNaUQsqJQV8cA9JQgnQi+ziAAAB60lEQVRYhe2WYWOCIBCG5a4RqZkpWbrpVmv//y+OPDChdOg+5vsJBR7vjrvDIFi0aNGiRYsWLXpdYaupu0SrHgUwicoqTgCmYCBkayW2MgZAku9Yq/d0PwEFb7TLgCBlPWV8Lgg+mKXUm2SDeMgcZb7eWSBMXA5jiefpWSDI9e46bz5p9CXnWMTP9HDkAHCgaPumk+0ajYs2wjxljfA//z4IJY1z2o6R/+E7Fu1pfNGASUVix0jHupxiylPQjyaFquD+A4Jjlz6h9D6vJ6AgWN8z8RRPssoGYdVP6ks8v/p7zt3UCG+j3DbCI4t0TmYVbeudyC3UZk7R6leyj/oWI7vHQapr7w+7jpT6OfcMdHuNmUHt/HwbAKkJfp0UJReEd0d4QVPlKAh0hjgJCdW93ZucOo4ECcT1k0D81LMfpHqKzL4ONGgR8kzNh7dPo26KTKIa050WU7kir2kqGgLhirpFipwHDS1+V1Sx1VBV+Urycv/GgF/dwV6Kbi+0t7dR/XWqzbgY7HJYsge1txfWjxOMVcOHxnN3MbV77JzrqRlLbGjsxYVejKJwOafxAqHbz+jaLUY42kYd/roGQIb6Tt5+WH0QRFacTcgPHj9ICJDEZRZtArfJIxebKMuqleSeTW34TxHn/US+vH4BepwS04qX0e8AAAAASUVORK5CYII=";
import VueIcon from "../../public/images/vue.png";
const ReactIcon =
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K";


const Skills = () => {
  return (
    <div className="flex">
      <a
        href="https://www.php.net/"
        className="ml-2 mr-1 skill-icons"
        title="php"
      >
        <Image width="25px" height="25px" alt="php" src={PhpIcon} />
      </a>
      <a
        href="https://laravel.com"
        className="ml-2 mr-1 skill-icons"
        title="laravel"
      >
        <Image alt="laravel" width="25px" height="25px" src={LaravelIcon} />
      </a>
      <a
        href="https://www.javascript.com"
        className="ml-2 mr-1 skill-icons"
        title="javascript"
      >
        <Image alt="javascript" src={JsIcon} width="25px" height="25px" />
      </a>
      <a
        href="https://reactjs.org"
        className="ml-2 mr-1 skill-icons"
        title="reactjs"
      >
        <Image alt="reactjs" width="25px" height="25px" src={ReactIcon} />
      </a>
      <a
        href="https://vuejs.org/"
        className="ml-2 mr-1 skill-icons"
        title="vuejs"
      >
        <Image alt="vuejs" width="25px" height="25px" src={VueIcon} />
      </a>
    </div>
  );
};

export { Skills };

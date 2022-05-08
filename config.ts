import { AppConfigInterface, ImageLoaderPropsInterface } from "./types";

export const myConfig: AppConfigInterface = {
  // Base_URL:"http://localhost:8000",
  // API_URL:"http://localhost:8000/api",
  Base_URL: "https://server.ansarmirzayi.ir",
  API_URL: "https://server.ansarmirzayi.ir/api",
};

export const ImageLoader = ({ src }: ImageLoaderPropsInterface) => {
  return `${myConfig.Base_URL + src}`;
};

export const SwiperBreakpoint = ({
  // when window width is <= 320px
  320: {
    slidesPerView: 1,
    spaceBetween: 10,
  },
  // when window width is <= 480px
  480: {
    slidesPerView: 2,
    spaceBetween: 20,
  },

  // when window width is <= 640px
  640: {
    slidesPerView: 3,
    spaceBetween: 30,
  },

  // when window width is <= 1440px
  1440: {
    slidesPerView: 4,
    spaceBetween: 50,
  },
});

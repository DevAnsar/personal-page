export interface AuthorContentInterface {
  main_image: string;
  user_name: string;
  description: string;
}

export interface JobInterface {
  url: string;
  title: string;
  domain: string;
  image: string;
  description: string;
}

export interface WriterUserInterface {
  id: number;
  name: string;
  image: string;
}

export interface CategoryInterface {
  id: number;
  title: string;
}
export interface BlogInterface {
  id: number;
  slug: string;
  url?: string;
  title: string;
  image: string ;
  description: string;
  body?: string;
  writer: WriterUserInterface;
  date: string;
  category: CategoryInterface,
}

export interface DataSkeletonTypes {
  skeletonData: string | null | undefined;
  skeletonCalss?: string;
  children?: React.ReactNode;
  skeletonRows ?: number;
  skeletonRowCalss ? : string
}


export interface ImageSkeletonTypes {
  image: string | null | undefined;
  skeletonCalss?: string;
  children?: React.ReactNode
}

export type Props = {
  children: React.ReactNode;
};

export interface AppConfigInterface {
  Base_URL: string;
  API_URL: String;
}
export interface ImageLoaderPropsInterface {
  src: string;
}
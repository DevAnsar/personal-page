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
  image?: string;
}

export interface CategoryInterface {
  id: number;
  title: string;
}
export interface BlogInterface {
  id: number | undefined;
  slug: string | undefined;
  url?: string | undefined;
  title: string | undefined;
  image: string | undefined;
  description: string | undefined;
  body?: string | undefined;
  writer: WriterUserInterface | undefined;
  date: string | undefined;
  category: CategoryInterface | undefined,
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
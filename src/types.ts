export interface Img {
  src: string;
  alt: string;
}

export interface Post {
  title: string;
  img: Img;
  description: string;
  date: Date;
  categories: string[];
}

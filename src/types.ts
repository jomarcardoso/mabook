export interface Img {
  src: string;
  alt: string;
}

export interface Post {
  title: string;
  imageUrl: Img;
  content: string;
  date: Date;
  categories: string[];
  stars: number;
  votes: number;
}

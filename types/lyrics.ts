import { PortableTextBlock } from "next-sanity";

export type Lyrics = {
  _id: string;
  title: string;
  content: PortableTextBlock[];
  demo?: string;
};

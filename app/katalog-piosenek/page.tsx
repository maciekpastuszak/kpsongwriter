import { client } from "@/sanity/lib/client";
import { songsQuery } from "@/sanity/queries";
import SongsView from "./SongsView";
import { Song } from "@/types/song";

export const revalidate = 0;

export default async function Page() {
  const songs: Song[] = await client.fetch(songsQuery);
  return <SongsView songs={songs} />;
}

import { client } from "@/sanity/lib/client";
import { songListQuery } from "@/sanity/queries";
import SongListView from "./SongListView";
import { Song } from "@/types/song";
import Footer from "@/components/Footer";

export const revalidate = 0;

export default async function Page() {
  const songs: Song[] = await client.fetch(songListQuery);
  return (
    <>
      <SongListView songs={songs} />
      <Footer />
    </>
  );
}

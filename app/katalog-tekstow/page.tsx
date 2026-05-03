import { client } from "@/sanity/lib/client";
import { lyricsQuery } from "@/sanity/queries";
import LyricsView from "./LyricsView";
import { Lyrics } from "@/types/lyrics";

export default async function Page() {
  const lyrics: Lyrics[] = await client.fetch(lyricsQuery);

  return <LyricsView lyrics={lyrics} />;
}

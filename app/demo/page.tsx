import { client } from "@/sanity/lib/client";
import { demosQuery } from "@/sanity/queries";
import DemoView from "./DemoView";
import { DemoSong } from "@/types/demo";

export const revalidate = 0;

export default async function Page() {
  const demos: DemoSong[] = await client.fetch(demosQuery);
  return <DemoView demos={demos} />;
}

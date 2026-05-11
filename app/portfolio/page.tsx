import { client } from "@/sanity/lib/client";
import { portfolioAudioQuery, portfolioLyricsQuery } from "@/sanity/queries";
import PortfolioView from "./PortfolioView";

export default async function Page() {
  const audioSamples = await client.fetch(portfolioAudioQuery);
  const lyricsSamples = await client.fetch(portfolioLyricsQuery);

  return <PortfolioView audio={audioSamples} lyrics={lyricsSamples} />;
}

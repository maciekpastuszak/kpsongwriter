export const songsQuery = `
*[_type == "songAudio"] | order(publishedAt desc){
  _id,
  title,
  status,
  genre,
  description,
  duration,
  "audioUrl": file.asset->url
}
`;

export const lyricsQuery = `
*[_type == "songLyrics"] | order(publishedAt desc){
  _id,
  title,
  content,
  demo
}
`;

export const songListQuery = `
  *[_type == "songList"] | order(publishedAt desc) {
    _id,
    title,
    duration,
    zaiks,
    iswct,
    publishedAt
  }
`;

export const demosQuery = `
*[_type == "demoAudio"] | order(publishedAt desc) {
  _id,
  title,
  genre,
  duration,
  description,
  "audioUrl": file.asset->url
}
`;

export const portfolioAudioQuery = `
*[_type == "demoAudio" && showInPortfolio == true] | order(publishedAt desc) {
  title,
  duration,
  genre,
  "audioUrl": file.asset->url
}
`;

export const portfolioLyricsQuery = `
*[_type == "songLyrics" && showInPortfolio == true] | order(publishedAt desc) {
  title,
  content
}
`;

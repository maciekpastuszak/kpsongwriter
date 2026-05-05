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

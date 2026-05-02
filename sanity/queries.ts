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

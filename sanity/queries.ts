export const songsQuery = `
*[_type == "songAudio"] | order(publishedAt desc){
  _id,
  title,
  description,
  duration,
  "audioUrl": file.asset->url
}
`;

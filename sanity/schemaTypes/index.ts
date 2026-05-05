import { type SchemaTypeDefinition } from "sanity";
import { songAudioType } from "./songAudioType";
import { songLyricsType } from "./songLyricsType";
import { songListType } from "./songListType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [songAudioType, songLyricsType, songListType],
};
// import { songAudioType } from "./songAudioType";

// export const schemaTypes = [songAudioType];

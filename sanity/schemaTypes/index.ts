import { type SchemaTypeDefinition } from "sanity";
import { songAudioType } from "./songAudioType";
import { songLyricsType } from "./songLyricsType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [songAudioType, songLyricsType],
};
// import { songAudioType } from "./songAudioType";

// export const schemaTypes = [songAudioType];

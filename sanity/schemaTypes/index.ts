import { type SchemaTypeDefinition } from "sanity";
import { songAudioType } from "./songAudioType";
import { songLyricsType } from "./songLyricsType";
import { songListType } from "./songListType";
import { DemoAudioType } from "./demoAudioType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [songAudioType, songLyricsType, songListType, DemoAudioType],
};
// import { songAudioType } from "./songAudioType";

// export const schemaTypes = [songAudioType];

import { type SchemaTypeDefinition } from "sanity";
import { songAudioType } from "./songAudioType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [songAudioType],
};
// import { songAudioType } from "./songAudioType";

// export const schemaTypes = [songAudioType];

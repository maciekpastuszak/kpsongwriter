import { defineField, defineType } from "sanity";

export const DemoAudioType = defineType({
  name: "demoAudio",
  title: "Piosenki (`DEMO`)",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Tytuł",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "file",
      title: "Plik MP3",
      type: "file",
      options: {
        accept: "audio/mpeg",
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "duration",
      title: "Czas (sekundy)",
      type: "string",
    }),

    defineField({
      name: "genre",
      title: "Gatunek",
      type: "string",
    }),

    defineField({
      name: "description",
      title: "Opis",
      type: "text",
    }),

    defineField({
      name: "publishedAt",
      title: "Opublikowano",
      type: "datetime",
    }),
  ],
});

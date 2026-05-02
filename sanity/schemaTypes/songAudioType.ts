import { defineField, defineType } from "sanity";

export const songAudioType = defineType({
  name: "songAudio",
  title: "Piosenki (Audio)",
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
      name: "status",
      title: "Status",
      type: "string",
      options: {
        list: [
          { title: "Dostępny", value: "Dostępny" },
          { title: "W trakcie", value: "W trakcie" },
          { title: "Sprzedany", value: "Sprzedany" },
        ],
        layout: "radio",
      },
      initialValue: "Dostępny",
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

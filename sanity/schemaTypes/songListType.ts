import { defineField, defineType } from "sanity";

export const songListType = defineType({
  name: "songList",
  title: "Lista Piosenek",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Tytuł",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "duration",
      title: "Czas trwania",
      type: "string",
    }),

    defineField({
      name: "zaiks",
      title: "Numer Zaiks",
      type: "string",
    }),

    defineField({
      name: "iswct",
      title: "Numer ISWCT",
      type: "string",
    }),

    defineField({
      name: "publishedAt",
      title: "Opublikowano",
      type: "datetime",
    }),
  ],
});

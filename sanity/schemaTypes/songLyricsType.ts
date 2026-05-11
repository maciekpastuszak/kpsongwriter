import { defineField, defineType } from "sanity";

export const songLyricsType = defineType({
  name: "songLyrics",
  title: "Piosenki (Teksty)",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Tytuł",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "content",
      title: "Treść",
      type: "array",
      of: [{ type: "block", styles: [], lists: [] }],
    }),

    defineField({
      name: "demo",
      title: "Demo",
      type: "text",
    }),

    defineField({
      name: "publishedAt",
      title: "Opublikowano",
      type: "datetime",
    }),

    defineField({
      name: "showInPortfolio",
      title: "Pokaż w Portfolio",
      type: "boolean",
      initialValue: false,
    }),
  ],
});

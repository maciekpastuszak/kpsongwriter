import { defineField, defineType } from "sanity";

export const songAudioType = defineType({
  name: "songAudio",
  title: "Song Audio",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "file",
      title: "MP3 File",
      type: "file",
      options: {
        accept: "audio/mpeg",
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "duration",
      title: "Duration (seconds)",
      type: "number",
    }),

    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),

    defineField({
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
    }),
  ],
});

import { defineType, defineField } from "sanity";

export default defineType({
    name: 'navigation',
    title: 'Navigation',
    type: 'document',
    fields: [
      defineField({
        name: 'title',
        title: 'Title',
        type: 'string',
      }),
      defineField({
        name: 'links',
        title: 'Navigation Links',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              defineField({
                name: 'label',
                title: 'Label',
                type: 'string',
              }),
              defineField({
                name: 'url',
                title: 'URL',
                type: 'string',
              }),
            ],
          },
        ],
      }),
    ],
  });
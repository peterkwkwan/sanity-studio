import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'titleWithDescription',
  title: 'Title & Description',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => [Rule.required()],
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array', // multi-line text,
      of: [{type: 'block'}],
      validation: (Rule) => [Rule.required()],
    }),
  ],
})

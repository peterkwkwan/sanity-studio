import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'practiceArea',
  title: 'Practice Area',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'competencies',
      title: 'Competencies',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'competencies'}],
          // options: {
          //   filter: 'category == "category1"',
          // },
        },
      ],
    }),
  ],
})

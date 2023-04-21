import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'jobFamily',
  title: 'Job Family',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'color',
      title: 'Color',
      type: 'color',
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
  preview: {
    select: {
      title: 'title',
      primary: 'color',
    },
    prepare({title, primary}) {
      return {
        title,
        media: (
          <span
            style={{
              backgroundColor: primary.hex,
              height: '100%',
              width: '100%',
            }}
          />
        ),
      }
    },
  },
})

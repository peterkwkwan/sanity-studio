import {SELECT_ONE_DROPDOWN} from '@/constants/descriptions'
import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'businessSegmentCompetencies',
  title: 'Business Segment Competencies',
  type: 'object',
  fields: [
    defineField({
      name: 'businessSegment',
      title: 'Business Segment',
      type: 'reference',
      to: [{type: 'businessSegment'}],
      description: SELECT_ONE_DROPDOWN,
      options: {
        disableNew: true,
      },
    }),
    defineField({
      name: 'competencies',
      title: 'Competencies',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'competencies'}],
          options: {
            disableNew: true,
          },
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'businessSegment.name',
      primary: 'businessSegment.color',
    },
    prepare({title, primary}) {
      return {
        title,
        media: (
          <span
            style={{
              backgroundColor: primary?.hex,
              height: '100%',
              width: '100%',
            }}
          />
        ),
      }
    },
  },
})

import {SELECT_ONE_DROPDOWN} from '@/constants/descriptions'
import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'jobFamilyCompetencies',
  title: 'Job Family Competencies',
  type: 'object',
  fields: [
    defineField({
      name: 'jobFamilyGroup',
      title: 'Job Family Group',
      type: 'reference',
      to: [{type: 'jobFamilyGroup'}],
      description: SELECT_ONE_DROPDOWN,
      options: {
        disableNew: true,
      },
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
          options: {
            disableNew: true,
          },
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'jobFamilyGroup.name',
      primary: 'color',
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

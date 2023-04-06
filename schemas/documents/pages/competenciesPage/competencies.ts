import {defineType, defineField, StringOptions} from 'sanity'
import {DocumentIcon} from '@sanity/icons'
import {CustomOptions} from '../../../../types/fields'

export default defineType({
  name: 'competencies',
  title: 'Competencies',
  type: 'document',
  icon: DocumentIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => [
        Rule.min(3).required().error('Competency names must be at least 3 characters long.'),
        Rule.max(24).error('Competency names must not exceed 24 characters'),
      ],
      options: {
        // showCount: false,
      } as CustomOptions,
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{type: 'block'}],
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({title}) {
      return {
        title,
      }
    },
  },
})

import {defineField, defineType} from 'sanity'

import {MAX_CHAR_COUNT_DESCRIPTION} from '@/constants/descriptions'
import {CustomOptions} from '@/types/fields'

const minCharCount = 3
const maxCharCount = 32

export const comptenciesPage = defineType({
  name: 'competenciesPage',
  title: 'Competencies Page',
  type: 'document',
  fields: [
    defineField({
      name: 'pageTitle',
      title: 'Page Title',
      type: 'string',
      validation: (Rule) => [
        Rule.min(minCharCount),
        Rule.max(maxCharCount).error(MAX_CHAR_COUNT_DESCRIPTION('Page title', maxCharCount)),

        Rule.required(),
      ],
      options: {
        showCount: true,
      } as CustomOptions,
    }),
    defineField({
      name: 'introduction',
      title: 'Introduction',
      description: 'Introduction to the competencies page',
      type: 'array', // multi-line text,
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'practiceArea',
      title: 'Practice Areas',
      type: 'array',
      of: [{type: 'practiceArea'}],
    }),
  ],
})

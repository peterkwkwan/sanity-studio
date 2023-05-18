import {defineField, defineType} from 'sanity'

import {MAX_CHAR_COUNT_DESCRIPTION} from '@/constants'
import {CustomOptions} from '@/types/fields'

const minCharCount = 3
const maxCharCount = 32

export const skillsPage = defineType({
  name: 'skillsPage',
  title: 'Skills Page',
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
      description: 'Introduction to the skills page',
      type: 'array', // multi-line text,
      of: [{type: 'block'}],
      validation: (Rule) => [Rule.required()],
    }),
    defineField({
      name: 'skillCategoryCards',
      title: 'Skill Category Cards',
      type: 'array',
      of: [{type: 'titleWithDescription'}],
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array', // multi-line text,
      of: [{type: 'block'}],
      validation: (Rule) => [Rule.required()],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Content',
      }
    },
  },
})

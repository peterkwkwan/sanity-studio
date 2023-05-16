import {defineField, defineType} from 'sanity'

import {MAX_CHAR_COUNT_DESCRIPTION, SELECT_ONE_DROPDOWN} from '@/constants'
import {CustomOptions} from '@/types/fields'

const minCharCount = 3
const maxCharCount = 32

export const careerFramework = defineType({
  name: 'careerFramework',
  title: 'Career Framework',
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
      name: 'jobFamilyGroup',
      title: 'Job Family Group',
      type: 'reference',
      to: [{type: 'jobFamilyGroup'}],
      description: SELECT_ONE_DROPDOWN,
      options: {
        disableNew: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    {
      name: 'careerMapSvg',
      title: 'Career Map SVG',
      type: 'text',
      description: 'Copy & paste the SVG as plain text into this field',
      validation: (Rule) => Rule.required().min(2),
    },
  ],
  preview: {
    select: {
      title: 'pageTitle',
      subtitle: 'jobFamilyGroup.name',
    },
    prepare({title, subtitle}) {
      return {
        title,
        subtitle,
      }
    },
  },
})

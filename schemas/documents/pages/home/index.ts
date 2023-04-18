import {defineField, defineType} from 'sanity'

import {IMAGE_SIZE_DESCRIPTION, MAX_CHAR_COUNT_DESCRIPTION} from '@/constants/descriptions'
import {CustomOptions} from '@/types/fields'

const minCharCount = 3
const maxCharCount = 32

export const homePage = defineType({
  name: 'homePage',
  title: 'Home Page',
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
      description: 'Introduction for the home page',
      type: 'array', // multi-line text,
      of: [{type: 'block'}],
      validation: (Rule) => [Rule.required()],
    }),
    defineField({
      name: 'practiceAreaCards',
      title: 'Practice Areas Cards',
      type: 'array',
      of: [{type: 'practiceAreaCard'}],
    }),
    defineField({
      name: 'desktopImage',
      title: 'Home page desktop background image',
      type: 'image',
      description: IMAGE_SIZE_DESCRIPTION({height: 1600, width: 900}),
    }),
    defineField({
      name: 'mobileImage',
      title: 'Home page mobile background image',
      type: 'image',
      description: IMAGE_SIZE_DESCRIPTION({height: 900, width: 1600}),
    }),
  ],
})

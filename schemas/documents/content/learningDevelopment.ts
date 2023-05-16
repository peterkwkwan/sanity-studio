import {defineType, defineField} from 'sanity'
import {MAX_CHAR_COUNT_DESCRIPTION, SELECT_ONE_DROPDOWN, UNIQUE_DESCRIPTION} from '@/constants'
import {CustomOptions} from '@/types/fields'
import {isUniqueString} from '@/utils'

const minCharCount = 3
const maxCharCount = 40

export default defineType({
  name: 'learningDevelopment',
  title: 'Learning & Development',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => [
        Rule.min(minCharCount),
        Rule.max(maxCharCount).error(MAX_CHAR_COUNT_DESCRIPTION('Title', maxCharCount)),
        Rule.required(),
        Rule.custom(async (value = '', context) => {
          const isUnique = await isUniqueString(value, context)
          if (!isUnique)
            return UNIQUE_DESCRIPTION({
              fieldName: 'Title',
              documentType: 'Learning & Development item',
              value,
            })
          return true
        }),
      ],
      options: {
        showCount: true,
      } as CustomOptions,
    }),
    defineField({
      name: 'href',
      title: 'URL',
      type: 'string',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      description: SELECT_ONE_DROPDOWN,
      options: {
        list: [
          {title: 'WTW Global', value: 'WTW Global'},
          {title: 'W&R', value: 'W&R'},
          {title: 'WTW Leadership', value: 'WTW Leadership'},
          {title: 'Data Analysis & Insights', value: 'Data Analysis & Insights'},
          {title: 'RDI Tools & Tech', value: 'RDI Tools & Tech'},
          {title: 'Other', value: 'Other'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
})

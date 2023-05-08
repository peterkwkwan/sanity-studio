import {defineType, defineField} from 'sanity'
import {MAX_CHAR_COUNT_DESCRIPTION, UNIQUE_DESCRIPTION} from '@/constants'
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
  ],
})

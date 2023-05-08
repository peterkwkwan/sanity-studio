import {defineType, defineField} from 'sanity'
import {GiTeacher} from 'react-icons/gi'
import {MAX_CHAR_COUNT_DESCRIPTION} from '@/constants/descriptions'
import {CustomOptions} from '@/types/fields'

const minCharCount = 3
const maxCharCount = 40

export default defineType({
  name: 'learningDevelopment',
  title: 'Learning & Development',
  type: 'document',
  icon: GiTeacher,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => [
        Rule.min(minCharCount),
        Rule.max(maxCharCount).error(MAX_CHAR_COUNT_DESCRIPTION('Title', maxCharCount)),
        Rule.required(),
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

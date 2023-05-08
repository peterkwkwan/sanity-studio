import {defineType, defineField} from 'sanity'
import {AiOutlineTool} from 'react-icons/ai'
import {MAX_CHAR_COUNT_DESCRIPTION, UNIQUE_DESCRIPTION} from '@/constants'
import {CustomOptions} from '@/types/fields'
import {isUniqueString} from '@/utils'

const minCharCount = 3
const maxCharCount = 50

export default defineType({
  name: 'skills',
  title: 'Skills',
  type: 'document',
  icon: AiOutlineTool,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      description: 'Name of the skill',
      type: 'string',
      validation: (Rule) => [
        Rule.min(minCharCount),
        Rule.max(maxCharCount).error(MAX_CHAR_COUNT_DESCRIPTION('Title', maxCharCount)),
        Rule.required(),
        Rule.custom(async (value = '', context) => {
          const isUnique = await isUniqueString(value, context)
          if (!isUnique)
            return UNIQUE_DESCRIPTION({fieldName: 'Title', documentType: 'Skill', value})
          return true
        }),
      ],
      options: {
        showCount: true,
      } as CustomOptions,
    }),
  ],
})

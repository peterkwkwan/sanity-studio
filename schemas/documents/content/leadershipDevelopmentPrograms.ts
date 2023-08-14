import {defineType, defineField} from 'sanity'
import {AiOutlineTool} from 'react-icons/ai'
import {MAX_CHAR_COUNT_DESCRIPTION, UNIQUE_DESCRIPTION} from '@/constants'
import {CustomOptions} from '@/types/fields'
import {isUniqueString} from '@/utils'

const minCharCount = 3
const maxCharCount = 50

export default defineType({
  name: 'leadershipDevelopmentPrograms',
  title: 'Leadership Development Programs',
  type: 'document',
  icon: AiOutlineTool,
  fields: [
    defineField({
      name: 'ldName',
      title: 'Name',
      description: 'Name of the program',
      type: 'string',
      validation: (Rule) => [Rule.min(minCharCount), Rule.required()],
    }),
    defineField({
      name: 'url',
      title: 'Program URL',
      type: 'string',
      description: 'URL for the program',
    }),
    defineField({
      name: 'jobFamilyLevelName',
      title: 'Job Family Level',
      type: 'string',
      validation: (Rule) => [Rule.required()],
    }),
    defineField({
      name: 'jobFamilyLevelCode',
      title: 'Job Family Level Code',
      type: 'string',
      description: 'E.g. 33',
      validation: (Rule) => [Rule.required()],
    }),
    defineField({
      name: 'type',
      title: 'Type',
      type: 'string',
      validation: (Rule) => [Rule.required()],
    }),
  ],
})

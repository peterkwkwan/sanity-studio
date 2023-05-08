import {defineType, defineField} from 'sanity'
import {HiUserGroup} from 'react-icons/hi'
import {MAX_CHAR_COUNT_DESCRIPTION} from '@/constants/descriptions'
import {CustomOptions} from '@/types/fields'

const minCharCount = 3
const maxCharCount = 32

export default defineType({
  name: 'skillCategories',
  title: 'Skill Categories',
  type: 'document',
  icon: HiUserGroup,
  fields: [
    defineField({
      name: 'title',
      title: 'Skill Category title',
      type: 'string',
      validation: (Rule) => [
        Rule.min(minCharCount),
        Rule.max(maxCharCount).error(
          MAX_CHAR_COUNT_DESCRIPTION('Skill Category title', maxCharCount)
        ),
        Rule.required(),
      ],
      options: {
        showCount: true,
      } as CustomOptions,
    }),
    defineField({
      name: 'color',
      title: 'Color',
      type: 'color',
    }),
  ],
})

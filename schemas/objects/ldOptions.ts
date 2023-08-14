import {defineType, defineField} from 'sanity'
import {BsFillMenuAppFill} from 'react-icons/bs'

import {IMAGE_SIZE_DESCRIPTION, MAX_CHAR_COUNT_DESCRIPTION, SLUG_DESCRIPTION} from '@/constants'
import {isAdministrator} from '@/utils'
import {CustomOptions} from '@/types/fields'

const maxCharCount = 50

export default defineType({
  name: 'ldOptions',
  title: 'Learning Development Options',
  type: 'object',
  //   icon: BsFillMenuAppFill,

  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => [
        Rule.max(maxCharCount).error(MAX_CHAR_COUNT_DESCRIPTION('Label', maxCharCount)),
        Rule.required(),
      ],
      options: {
        showCount: true,
      } as CustomOptions,
    }),
    defineField({
      name: 'link',
      title: 'Link',
      type: 'string',
    }),
  ],
})

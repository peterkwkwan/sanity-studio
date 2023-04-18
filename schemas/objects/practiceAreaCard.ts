import {defineType, defineField} from 'sanity'
import {BsFillMenuAppFill} from 'react-icons/bs'

import {
  IMAGE_SIZE_DESCRIPTION,
  MAX_CHAR_COUNT_DESCRIPTION,
  SLUG_DESCRIPTION,
} from '@/constants/descriptions'
import {isAdministrator} from '@/utils'
import {CustomOptions} from '@/types/fields'

const maxCharCount = 50

export default defineType({
  name: 'practiceAreaCard',
  title: 'Practice Area Card',
  type: 'object',
  icon: BsFillMenuAppFill,

  fields: [
    defineField({
      name: 'label',
      title: 'Label',
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
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: SLUG_DESCRIPTION,
      readOnly: ({currentUser}) => isAdministrator(currentUser),
    }),
    defineField({
      name: 'color',
      title: 'Color',
      type: 'color',
    }),
    defineField({
      name: 'image',
      title: 'Practice Area Icon',
      type: 'image',
      description: IMAGE_SIZE_DESCRIPTION({height: 120, width: 100}),
    }),
  ],
})

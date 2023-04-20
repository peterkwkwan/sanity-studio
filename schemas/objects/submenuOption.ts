import {defineType, defineField} from 'sanity'
import {MdFormatListBulletedAdd} from 'react-icons/md'
import {MAX_CHAR_COUNT_DESCRIPTION, SLUG_DESCRIPTION} from '@/constants/descriptions'
import {CustomOptions} from '@/types/fields'
import {isAdministrator} from '@/utils'

const maxCharCount = 32

export default defineType({
  name: 'submenuOption',
  title: 'Submenu Option',
  type: 'object',
  icon: MdFormatListBulletedAdd,

  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => [
        Rule.max(maxCharCount).error(MAX_CHAR_COUNT_DESCRIPTION('Submenu name', maxCharCount)),
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
      readOnly: ({currentUser}) => !isAdministrator(currentUser),
    }),
  ],
})

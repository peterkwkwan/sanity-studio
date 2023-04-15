import {defineType, defineField} from 'sanity'
import {BsFillMenuAppFill} from 'react-icons/bs'

import {CustomOptions} from '../../types/fields'
import {isAdministrator} from '../../utils'
import {MAX_CHAR_COUNT_DESCRIPTION, SLUG_DESCRIPTION} from '../../constants/descriptions'

const maxCharCount = 32

export default defineType({
  name: 'menuOption',
  title: 'Menu Option',
  type: 'object',
  icon: BsFillMenuAppFill,

  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => [
        Rule.max(maxCharCount).error(MAX_CHAR_COUNT_DESCRIPTION('Menu name', maxCharCount)),
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
      name: 'submenuOptions',
      title: 'Submenu Options',
      description:
        'Optional. Adding submenu options will create a dropdown group in the navigation bar under this menu option.',
      type: 'array',
      of: [{type: 'submenuOption'}],
      options: {
        modal: {type: 'popover', width: 80},
      },
    }),
  ],
})

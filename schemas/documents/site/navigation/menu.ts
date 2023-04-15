import {defineType, defineField} from 'sanity'
import {BsMenuButtonFill} from 'react-icons/bs'

export default defineType({
  name: 'menu',
  title: 'Navigation menu',
  type: 'document',
  icon: BsMenuButtonFill,
  fields: [
    defineField({
      name: 'menuOptions',
      title: 'Menu Options',
      type: 'array',
      description:
        'Note: you can reorder the list by dragging the dotted icon on the left of each option',
      of: [{type: 'menuOption'}],
      options: {
        sortable: true,
      },
      validation: (Rule) => [
        Rule.unique(),
        Rule.max(10).warning(
          'There are too many menu items. This may lead to unexpected UI behavior.'
        ),
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Menu Options',
      }
    },
  },
})

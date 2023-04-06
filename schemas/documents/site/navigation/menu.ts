import {defineType, defineField} from 'sanity'
import {BsMenuButtonFill} from 'react-icons/bs'

export default defineType({
  name: 'menu',
  title: 'Menu',
  type: 'document',
  icon: BsMenuButtonFill,
  fields: [
    defineField({
      name: 'home',
      title: 'Home',
      type: 'string',
      description: 'Title of the "Home" button',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'menuItemOne',
      title: 'Menu item one',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'menuItemTwo',
      title: 'Menu item two',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'menuItemThree',
      title: 'Menu item three',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
  ],
})

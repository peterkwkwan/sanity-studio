import {SELECT_ONE_DROPDOWN} from '@/constants/descriptions'
import {defineType, defineField} from 'sanity'
import {GiTeacher, GiSkills} from 'react-icons/gi'

export default defineType({
  name: 'jobSkills',
  title: 'Job Skills',
  type: 'object',
  icon: GiSkills,
  fields: [
    defineField({
      name: 'skillCategories',
      title: 'Skill Category',
      type: 'reference',
      to: [{type: 'skillCategories'}],
      description: SELECT_ONE_DROPDOWN,
      options: {
        disableNew: true,
      },
    }),
    defineField({
      name: 'skills',
      title: 'Skills',
      type: 'array',
      description: 'Skills in this category',
      of: [
        {
          type: 'reference',
          to: [{type: 'skills'}],
          options: {
            disableNew: true,
          },
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'skillCategories.title',
    },
    prepare({title}) {
      return {title}
    },
  },
})

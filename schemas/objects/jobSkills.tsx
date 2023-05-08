import {SELECT_ONE_DROPDOWN} from '@/constants/descriptions'
import {defineType, defineField} from 'sanity'
import {GiSkills} from 'react-icons/gi'

export default defineType({
  name: 'jobSkills',
  title: 'Job Skills',
  type: 'object',
  icon: GiSkills,
  fields: [
    defineField({
      name: 'skillCategories',
      title: 'Skill Category',
      type: 'string',
      description: SELECT_ONE_DROPDOWN,
      options: {
        list: [
          {title: 'Data Analysis & Insights', value: 'Data Analysis & Insights'},
          {title: 'RDI Tools & Tech', value: 'RDI Tools & Tech'},
          {title: 'Other', value: 'Other'},
        ],
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
  // preview: {
  //   select: {
  //     title: 'skillCategories',
  //   },
  //   prepare({title}) {
  //     return {title}
  //   },
  // },
})

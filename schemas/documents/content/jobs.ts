import {defineType, defineField} from 'sanity'
import {RocketIcon} from '@sanity/icons'

import {MAX_CHAR_COUNT_DESCRIPTION} from '@/constants/descriptions'
import {CustomOptions} from '@/types/fields'

const minCharCount = 3
const maxCharCount = 50

export default defineType({
  name: 'jobs',
  title: 'Jobs',
  type: 'document',
  icon: RocketIcon,
  fields: [
    defineField({
      name: 'name',
      title: 'Job name',
      type: 'string',
      validation: (Rule) => [
        Rule.min(minCharCount),
        Rule.max(maxCharCount).error(MAX_CHAR_COUNT_DESCRIPTION('Job name', maxCharCount)),
        Rule.required(),
      ],
      options: {
        showCount: true,
      } as CustomOptions,
    }),
    defineField({
      name: 'jobFamilyGroup',
      title: 'Job Family Group',
      type: 'array',
      validation: (Rule) => [Rule.length(1).error('Jobs can only belong to 1 Job Family Group')],
      of: [
        {
          type: 'reference',
          to: [{type: 'jobFamilyGroup'}],
          options: {
            disableNew: true,
          },
        },
      ],
    }),
    defineField({
      name: 'jobFamily',
      title: 'Job Family',
      type: 'array',
      validation: (Rule) => [Rule.length(1).error('Jobs can only belong to 1 Job Family Group')],
      of: [
        {
          type: 'reference',
          to: [{type: 'jobFamily'}],
          options: {
            disableNew: true,
          },
        },
      ],
    }),
    defineField({
      name: 'level',
      title: 'Job level',
      type: 'number',
      description: 'Level of the job - should be a number',
      placeholder: 'E.g. 38',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'kpi',
      title: "Core KPI's",
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'competencies',
      title: 'Competencies',
      type: 'array',
      description: 'Competencies for this job',
      of: [
        {
          type: 'reference',
          to: [{type: 'competencies'}],

          options: {
            disableNew: true,
          },
        },
      ],
    }),
  ],
})

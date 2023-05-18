import {defineType, defineField} from 'sanity'

import {MAX_CHAR_COUNT_DESCRIPTION, SELECT_ONE_DROPDOWN, SLUG_DESCRIPTION} from '@/constants'
import {CustomOptions} from '@/types/fields'
import {isAdministrator} from '@/utils'

const minCharCount = 3
const maxCharCount = 50

export default defineType({
  name: 'jobs',
  title: 'Jobs',
  type: 'document',
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
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: SLUG_DESCRIPTION,
      readOnly: ({currentUser}) => !isAdministrator(currentUser),
    }),
    defineField({
      name: 'jobFamilyGroup',
      title: 'Job Family Group',
      type: 'reference',
      to: [{type: 'jobFamilyGroup'}],
      description: SELECT_ONE_DROPDOWN,
      options: {
        disableNew: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'jobFamily',
      title: 'Job Family',
      type: 'reference',
      to: [{type: 'jobFamily'}],
      description: SELECT_ONE_DROPDOWN,
      options: {
        disableNew: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'potentialMovement',
      title: 'Potential Movement',
      type: 'reference',
      to: [{type: 'jobs'}],
      description: 'The next potential job in this career track (if any)',
      options: {
        disableNew: true,
      },
    }),
    defineField({
      name: 'level',
      title: 'Job level',
      type: 'number',
      description: 'Level of the job - should be a number',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'levelling',
      title: 'Job leveling',
      type: 'string',
      description: SELECT_ONE_DROPDOWN,
      options: {
        list: [
          {title: 'Developing', value: 'Developing'},
          {title: 'Supporting', value: 'Supporting'},
          {title: 'Applying', value: 'Applying'},
          {title: 'Leading', value: 'Leading'},
          {title: 'Shaping', value: 'Shaping'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{type: 'block'}],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'kpi',
      title: "Core KPI's",
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'jobCompetencies',
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
    defineField({
      name: 'jobSkills',
      title: 'Skills',
      type: 'array',
      description: 'Associated skills required for this job grouped by skill category',
      of: [
        {
          type: 'jobSkills',
          options: {
            disableNew: true,
          },
        },
      ],
    }),
    defineField({
      name: 'learningDevelopmentCategories',
      title: 'Learning & Development categories',
      type: 'array',
      description: 'Learning & Development categories for this job',
      of: [
        {
          type: 'string',
          options: {
            list: [
              {title: 'WTW Global', value: 'WTW Global'},
              {title: 'W&R', value: 'W&R'},
              {title: 'WTW Leadership', value: 'WTW Leadership'},
              {title: 'Data Analysis & Insights', value: 'Data Analysis & Insights'},
              {title: 'RDI Tools & Tech', value: 'RDI Tools & Tech'},
              {title: 'Other', value: 'Other'},
            ],
          },
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'level',
      primary: 'jobFamilyGroup.color',
    },
    prepare({title, subtitle, primary}) {
      return {
        title,
        subtitle: `Level: ${subtitle ?? '--'}`,
        media: (
          <span
            style={{
              backgroundColor: primary?.hex,
              height: '100%',
              width: '100%',
            }}
          />
        ),
      }
    },
  },
})

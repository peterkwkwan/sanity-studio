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
          type: 'businessSegmentCompetencies',
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
      description: 'Associated skills required for this job',
      of: [
        {
          type: 'jobSkills',
          options: {
            disableNew: true,
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
        subtitle: `Level: ${subtitle}`,
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

import {defineType, defineField} from 'sanity'
import {AiOutlineTool} from 'react-icons/ai'
import {MAX_CHAR_COUNT_DESCRIPTION, SELECT_MULTIPLE_DROPDOWN} from '@/constants'
import {CustomOptions} from '@/types/fields'

const minCharCount = 3
const maxCharCount = 60

export default defineType({
  name: 'practiceSkills',
  title: 'Practice Skills',
  type: 'document',
  icon: AiOutlineTool,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      description: 'Name of the skill',
      type: 'string',
      validation: (Rule) => [
        Rule.min(minCharCount),
        Rule.max(maxCharCount).error(MAX_CHAR_COUNT_DESCRIPTION('Title', maxCharCount)),
        Rule.required(),
      ],
      options: {
        showCount: true,
      } as CustomOptions,
    }),
    defineField({
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: [
          {title: 'Core Skill', value: 'core'},
          {title: 'Related Skill', value: 'related'},
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
    }),
    defineField({
      name: 'href',
      title: 'URL',
      type: 'string',
    }),

    defineField({
      name: 'isDigital',
      title: 'Is Digtial Tool/Solution?',
      description: 'Indicates whether this is a Digitial Tool or Solution',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'array',
      description: SELECT_MULTIPLE_DROPDOWN,
      of: [
        {
          type: 'string',
          validation: (Rule) => Rule.required(),
          options: {
            list: [
              {title: 'Board Advisory', value: 'Board Advisory'},
              {title: 'Career Framework', value: 'Career Framework'},
              {title: 'Compensation Strategy & Design', value: 'Compensation Strategy & Design'},
              {title: 'Corporate Governance', value: 'Corporate Governance'},
              {
                title: 'EC Benchmarking and Market Analysis',
                value: 'EC Benchmarking and Market Analysis',
              },
              {title: 'ESG/Climate', value: 'ESG/Climate'},
              {title: 'Incentive Plan Design', value: 'Incentive Plan Design'},
              {
                title: 'Job Architecture and Job Leveling',
                value: 'Job Architecture and Job Leveling',
              },
              {title: 'Knowledge Architecture', value: 'Knowledge Architecture'},
              {title: 'Pay and Career Equity', value: 'Pay and Career Equity'},
              {title: 'Performance Management', value: 'Performance Management'},
              {title: 'Rem/Comp Committee Work', value: 'Rem/Comp Committee Work'},
              {title: 'Sales Effectiveness & Rewards', value: 'Sales Effectiveness & Rewards'},
              {title: 'Total Rewards', value: 'Total Rewards'},
              {title: 'Work Analysis & Design', value: 'Work Analysis & Design'},
            ],
          },
        },
      ],
    }),
  ],
})

import {defineType, defineField} from 'sanity'
import {RocketIcon} from '@sanity/icons'
import {MAX_CHAR_COUNT_DESCRIPTION, SELECT_ONE_DROPDOWN, UNIQUE_DESCRIPTION} from '@/constants'
import {CustomOptions} from '@/types/fields'
import {isUniqueString} from '@/utils'

const minCharCount = 3
const maxCharCount = 24

export default defineType({
  name: 'competencies',
  title: 'Competencies',
  type: 'document',
  icon: RocketIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => [
        Rule.min(minCharCount),
        Rule.max(maxCharCount).error(MAX_CHAR_COUNT_DESCRIPTION('Competency names', maxCharCount)),
        Rule.required(),
        Rule.custom(async (value = '', context) => {
          const isUnique = await isUniqueString(value, context)
          if (!isUnique)
            return UNIQUE_DESCRIPTION({fieldName: 'Title', documentType: 'Competency', value})
          return true
        }),
      ],
      options: {
        showCount: true,
      } as CustomOptions,
    }),
    defineField({
      name: 'businessSegment',
      title: 'Business Segment',
      type: 'reference',
      to: [{type: 'businessSegment'}],
      description: SELECT_ONE_DROPDOWN,
      options: {
        disableNew: true,
      },
      validation: (Rule) => [Rule.required()],
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{type: 'block'}],
      validation: (Rule) => [Rule.required()],
    }),
    defineField({
      name: 'whatThisMeanForWr',
      title: 'What This Mean For W&R',
      type: 'array',
      of: [{type: 'block'}],
      validation: (Rule) => [Rule.required()],
    }),
    defineField({
      name: 'developing',
      title: 'Developing',
      type: 'array',
      description: 'Levels 83, 78, 73, 68',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'supporting',
      title: 'Supporting',
      type: 'array',
      description: 'Levels 63, 58',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'applying',
      title: 'Applying',
      type: 'array',
      description: 'Levels 53, 48',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'leading',
      title: 'Leading',
      type: 'array',
      description: 'Level 43',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'shaping',
      title: 'Shaping',
      type: 'array',
      description: 'Level 38',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'inspiring',
      title: 'Inspiring',
      type: 'array',
      description: 'Level 33',
      of: [{type: 'block'}],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'businessSegment.name',
      primary: 'businessSegment.color',
    },
    prepare({title, subtitle, primary}) {
      return {
        title,
        subtitle,
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

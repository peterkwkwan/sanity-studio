import {defineType, defineField} from 'sanity'
import {MdGroup} from 'react-icons/md'
import {MAX_CHAR_COUNT_DESCRIPTION} from '@/constants'
import {CustomOptions} from '@/types/fields'

const minCharCount = 3
const maxCharCount = 32

export default defineType({
  name: 'jobFamily',
  title: 'Job Family',
  type: 'document',
  icon: MdGroup,
  fields: [
    defineField({
      name: 'name',
      title: 'Job Family name',
      type: 'string',
      validation: (Rule) => [
        Rule.min(minCharCount),
        Rule.max(maxCharCount).error(MAX_CHAR_COUNT_DESCRIPTION('Job Family name', maxCharCount)),
        Rule.required(),
      ],
      options: {
        showCount: true,
      } as CustomOptions,
    }),
    defineField({
      name: 'color',
      title: 'Color',
      type: 'color',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      primary: 'color',
    },
    prepare({title, primary}) {
      return {
        title,
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

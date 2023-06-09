import {defineType, defineField} from 'sanity'
import {HiUserGroup} from 'react-icons/hi'
import {MAX_CHAR_COUNT_DESCRIPTION} from '@/constants'
import {CustomOptions} from '@/types/fields'

const minCharCount = 3
const maxCharCount = 32

export default defineType({
  name: 'businessSegment',
  title: 'Business Segment',
  type: 'document',
  icon: HiUserGroup,
  fields: [
    defineField({
      name: 'name',
      title: 'Business Segment name',
      type: 'string',
      validation: (Rule) => [
        Rule.min(minCharCount),
        Rule.max(maxCharCount).error(
          MAX_CHAR_COUNT_DESCRIPTION('Business Segment name', maxCharCount)
        ),
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

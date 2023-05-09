import {defineType, defineField} from 'sanity'
import {HiUserGroup} from 'react-icons/hi'
import {MAX_CHAR_COUNT_DESCRIPTION, UNIQUE_DESCRIPTION} from '@/constants'
import {CustomOptions} from '@/types/fields'
import {isUniqueString} from '@/utils'

const minCharCount = 3
const maxCharCount = 32

export default defineType({
  name: 'jobFamilyGroup',
  title: 'Job Family Group',
  type: 'document',
  icon: HiUserGroup,
  fields: [
    defineField({
      name: 'name',
      title: 'Job Family Group name',
      type: 'string',
      validation: (Rule) => [
        Rule.min(minCharCount),
        Rule.max(maxCharCount).error(
          MAX_CHAR_COUNT_DESCRIPTION('Job Family Group name', maxCharCount)
        ),
        Rule.required(),
        Rule.custom(async (value = '', context) => {
          const isUnique = await isUniqueString(value, context)
          if (!isUnique)
            return UNIQUE_DESCRIPTION({fieldName: 'Title', documentType: 'Job Family Group', value})
          return true
        }),
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
    defineField({
      name: 'secondaryColor',
      title: 'Secondary Color',
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

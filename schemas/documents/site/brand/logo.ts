import {defineType, defineField} from 'sanity'
import {FaBuilding} from 'react-icons/fa'
import {IMAGE_SIZE_DESCRIPTION} from '@/constants/descriptions'

export default defineType({
  name: 'brandLogo',
  title: 'Brand Logo',
  type: 'document',
  icon: FaBuilding,
  fields: [
    defineField({
      name: 'image',
      title: 'Company Logo',
      type: 'image',
      description: IMAGE_SIZE_DESCRIPTION({height: 240, width: 60}),
    }),
  ],
  preview: {
    select: {
      image: 'image',
    },
    prepare({image}) {
      return {
        title: 'Company Logo',
        media: image,
      }
    },
  },
})

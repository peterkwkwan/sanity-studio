import {defineType, defineField} from 'sanity'
import {FaBuilding} from 'react-icons/fa'

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
      description: 'Please use a 240px x 60px image for best results',
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

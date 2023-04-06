import {defineType, defineField} from 'sanity'
import {FaBuilding} from 'react-icons/fa'

export default defineType({
  name: 'brandLogo',
  title: 'Brand Logo',
  type: 'document',
  icon: FaBuilding,
  fields: [
    defineField({
      name: 'title',
      title: 'Company Name',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      description: 'Testing - Currently not being used',
    }),
  ],
})

import {defineType, defineField} from 'sanity'
import {FaBuilding} from 'react-icons/fa'

export default defineType({
  name: 'brandColors',
  title: 'Brand Colors',
  type: 'document',
  icon: FaBuilding,
  fields: [
    defineField({
      name: 'primaryColor',
      title: 'Primary Color',
      type: 'color',
    }),
    defineField({
      name: 'secondaryColor',
      title: 'Secondary Color',
      type: 'color',
      description: 'Testing - not being used currently',
    }),
  ],
  preview: {
    select: {
      primary: 'primaryColor',
    },
    prepare({primary}) {
      return {
        title: 'Brand primary Color',
        subtitle: primary.hex,
        media: (
          <span
            style={{
              backgroundColor: primary.hex,
              height: '100%',
              width: '100%',
            }}
          />
        ),
      }
    },
  },
})

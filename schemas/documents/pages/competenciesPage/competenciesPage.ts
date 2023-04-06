import {defineField, defineType} from 'sanity'

export const comptenciesPage = defineType({
  name: 'competenciesPage',
  title: 'Competencies Page',
  type: 'document',
  fields: [
    defineField({
      name: 'pageTitle',
      title: 'Page Title',
      type: 'string',
      validation: (Rule) => Rule.min(3).max(32).required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'Url of the page',
      options: {
        source: 'title',
      },
      // hidden: ({document}) => !!document?.title,
      // readOnly: ({document}) => !!document?._id.startsWith('drafts.'),
    }),
    defineField({
      name: 'introduction',
      title: 'Introduction',
      description: 'Introduction to the competencies page',
      type: 'array', // multi-line text,
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'practiceArea',
      title: 'Practice Area',
      type: 'array',
      of: [{type: 'practiceArea'}],
    }),
  ],
})

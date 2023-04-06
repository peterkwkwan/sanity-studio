import {defineConfig} from 'sanity'
import {visionTool} from '@sanity/vision'
import {colorInput} from '@sanity/color-input'

import {deskTool} from 'sanity/desk'
import {schemaTypes} from './schemas'
import CharacterCount from './components/characterCount'

import {structure} from './desk/structure'
import {defaultDocumentNode} from './desk/defaultDocumentNode'
import {Logo as WtwLogo} from './components/logo'

export default defineConfig({
  name: 'default',
  title: 'gold-rook',

  projectId: 'wdhfrvff',
  dataset: 'production',

  plugins: [colorInput(), deskTool({structure, defaultDocumentNode}), visionTool()],

  schema: {
    types: schemaTypes,
  },

  form: {
    components: {
      input: CharacterCount,
    },
  },
  studio: {components: {logo: WtwLogo}},
})

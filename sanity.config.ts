import {defineConfig} from 'sanity'
import {visionTool} from '@sanity/vision'
import {colorInput} from '@sanity/color-input'
import {deskTool} from 'sanity/desk'

import {schemaTypes} from './schemas'
import {structure} from './desk/structure'
import {defaultDocumentNode} from './desk/defaultDocumentNode'
import {Logo as WtwLogo} from '@/components/logo'
import {CustomToolMenu} from './desk/CustomToolMenu'
import CustomInput from '@/components/Input'
const {theme} = (await import(
  'https://themer.sanity.build/api/hues?preset=dew&primary=c130df;400'
)) as {theme: import('sanity').StudioTheme}

export default defineConfig({
  name: 'default',
  title: 'sanity-studio-wtw',

  projectId: 'wdhfrvff',
  dataset: 'production',

  plugins: [colorInput(), deskTool({structure, defaultDocumentNode}), visionTool()],

  schema: {
    types: schemaTypes,
  },

  form: {
    components: {
      input: CustomInput,
    },
  },
  studio: {components: {logo: WtwLogo, toolMenu: CustomToolMenu}},
  theme,
})

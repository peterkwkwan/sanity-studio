import {defineConfig} from 'sanity'
import {visionTool} from '@sanity/vision'
import {colorInput} from '@sanity/color-input'
import {deskTool} from 'sanity/desk'
import {FiPlay} from 'react-icons/fi'

import {schemaTypes} from './schemas'
import {structure} from './desk/structure'
import {defaultDocumentNode} from './desk/defaultDocumentNode'
import {Logo as WtwLogo} from '@/components/logo'
import CustomInput from '@/components/Input'
import {isAdministrator} from '@/utils'
const {theme} = (await import(
  'https://themer.sanity.build/api/hues?preset=dew&primary=c130df;400'
)) as {theme: import('sanity').StudioTheme}

export default defineConfig({
  name: 'default',
  title: 'sanity-studio-wtw',

  projectId: 'wdhfrvff',
  dataset: 'production',

  plugins: [
    colorInput(),
    deskTool({structure, defaultDocumentNode}),
    visionTool({title: 'API Playground (Vision)', icon: FiPlay}),
  ],
  studio: {components: {logo: WtwLogo}},

  schema: {
    types: schemaTypes,
  },

  form: {
    components: {
      input: CustomInput,
    },
  },
  document: {
    // badges: CustomBadges,
  },
  tools: (tools, {currentUser}) => {
    const isAdmin = isAdministrator(currentUser)

    // If the user has the administrator role, return all tools.
    // If the user does not have the administrator role, filter out the vision tool.
    return isAdmin ? tools : tools.filter((tool) => tool.name !== 'vision')
  },
  theme,
})

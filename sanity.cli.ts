import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'wdhfrvff',
    dataset: 'production',
  },
  graphql: [
    {
      tag: 'default',
      playground: false,
      generation: 'gen3',
    },
  ],
})

import {defineCliConfig} from 'sanity/cli'
import {UserConfig} from 'vite'
import path from 'path'

export default defineCliConfig({
  api: {
    projectId: 'wdhfrvff',
    dataset: 'playground',
  },
  graphql: [
    {
      tag: 'default',
      playground: false,
      generation: 'gen3',
    },
  ],

  vite: (prevConfig: UserConfig): UserConfig => {
    return {
      ...prevConfig,
      resolve: {
        ...prevConfig.resolve?.alias,
        alias: [{find: '@', replacement: path.resolve(__dirname, './src')}],
      },
    }
  },
})

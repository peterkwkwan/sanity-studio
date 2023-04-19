import {ToolMenuProps, isDev} from 'sanity'

export function CustomToolMenu(props: ToolMenuProps) {
  // ToolMenuProps includes list of installed tools, and more
  const {tools, renderDefault} = props
  // Only show the dev-tool if the isDev variable resolves to true
  const availableTools = isDev ? tools : tools.filter((tool) => tool.name !== 'dev-tool')
  return renderDefault({...props, tools: availableTools})
}

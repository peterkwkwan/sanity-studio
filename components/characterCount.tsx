import {Stack, Text} from '@sanity/ui'
import {InputProps} from 'sanity'

export default function CharacterCount(props: InputProps) {
  if (props.schemaType?.options?.showCount) {
    return (
      <Stack space={2}>
        {props.renderDefault(props)}
        <Text size={1} align="left">
          Length: {(props?.value as string)?.length}
        </Text>
      </Stack>
    )
  }

  return props.renderDefault(props)
}

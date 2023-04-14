import {Stack, Text} from '@sanity/ui'
import {InputProps, RuleSpec} from 'sanity'

export default function CharacterCount(props: InputProps) {
  if (props.schemaType?.options?.showCount) {
    // validation -> _rules - contains all validation rules

    const validation: unknown[] = props.schemaType?.validation as any

    if (validation && validation[0]) {
      const rules = (validation[0] as any)._rules

      const maxCharCount = rules.find((rule: RuleSpec) => rule.flag === 'max').constraint

      return (
        <Stack space={2}>
          {props.renderDefault(props)}
          <Text size={1} align="left" style={{color: 'red'}}>
            {(props?.value as string)?.length > maxCharCount &&
              `${props.schemaType.title} cannot be greater than ${maxCharCount} characters`}
          </Text>
        </Stack>
      )
    }
  }

  return props.renderDefault(props)
}

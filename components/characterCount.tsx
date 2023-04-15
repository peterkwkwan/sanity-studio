import {Stack, Text} from '@sanity/ui'
import {InputProps, RuleSpec} from 'sanity'

export default function CharacterCount(props: InputProps) {
  if (props.schemaType?.options?.showCount) {
    // validation -> _rules - contains all validation rules

    const validation: any[] = props.schemaType?.validation as any

    let maxCharCount

    if (validation) {
      validation.forEach(({_rules}) => {
        _rules.find((rule: RuleSpec) => {
          if (rule.flag === 'max') {
            maxCharCount = rule.constraint
          }
        })
      })
    }

    if (maxCharCount) {
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

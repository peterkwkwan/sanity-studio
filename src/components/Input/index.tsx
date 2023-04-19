import {InputProps} from 'sanity'
import {CharacterCount} from './CharacterCount'
import {DocumentId} from './DocumentId'

export default function CustomInput(props: InputProps) {
  if (props.schemaType?.type?.name == 'document') {
    return <DocumentId {...props} />
  }
  if (props.schemaType?.options?.showCount) {
    return <CharacterCount {...props} />
  }

  return props.renderDefault(props)
}

import {Flex, Box} from '@sanity/ui'
import {CiWarning} from 'react-icons/ci'

export const SLUG_DESCRIPTION = (
  <Flex align="center">
    <Box marginRight={1}>
      <CiWarning />
    </Box>
    <span>WARNING: Only for developer use</span>
  </Flex>
)

export const MAX_CHAR_COUNT_DESCRIPTION = (fieldName: string, maxCharCount: number) =>
  `${fieldName} cannot be greater than ${maxCharCount} characters`

export const IMAGE_SIZE_DESCRIPTION = ({width, height}: {width: number; height: number}) => `
Please use a ${width}px (width) x ${height}px (height) image for best results.`

export const SELECT_ONE_DROPDOWN = `Select one option from the dropdown list`

export const UNIQUE_DESCRIPTION = ({
  fieldName,
  documentType,
  value,
}: {
  fieldName: string
  documentType: string
  value: string
}) =>
  `${fieldName} must be unique. There is already another ${documentType} with the name "${value}"`

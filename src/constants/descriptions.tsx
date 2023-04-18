import {Flex, Box} from '@sanity/ui'
import {CiWarning} from 'react-icons/ci'

export const SLUG_DESCRIPTION = (
  <Flex align="center">
    <Box marginRight={1}>
      <CiWarning />
    </Box>
    <span>WARNING: Only for developer use. URL of this menu option. </span>
  </Flex>
)

export const MAX_CHAR_COUNT_DESCRIPTION = (fieldName: string, maxCharCount: number) =>
  `${fieldName} cannot be greater than ${maxCharCount} characters`

export const IMAGE_SIZE_DESCRIPTION = ({height, width}: {height: number; width: number}) => `
Please use a ${width}px (width) x ${height}px (height) image for best results`

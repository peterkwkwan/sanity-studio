import React, {useState} from 'react'
import {Text, Box, Button} from '@sanity/ui'
import {MdContentCopy} from 'react-icons/md'
import {AiOutlineCheck} from 'react-icons/ai'
import {InputProps, SanityDocument} from 'sanity'

export const DocumentId = (props: InputProps) => {
  const [copied, setCopied] = useState(false)
  const documentId = (props?.value as SanityDocument)?._id

  if (documentId) {
    const handleCopyToClipboard = () => {
      navigator.clipboard.writeText(documentId)
      setCopied(true)
      setTimeout(() => {
        setCopied(false)
      }, 2000)
    }

    return (
      <>
        <Box paddingBottom={3}>
          <Text size={0} muted>
            Document ID:{' '}
            <span id="document-id-copy" style={{fontWeight: 700}}>
              {documentId}
            </span>
            <span style={{marginLeft: '6px'}}>
              <Button
                paddingY={1}
                paddingX={2}
                justify="center"
                mode="ghost"
                tone={copied ? 'positive' : 'default'}
                style={{cursor: 'pointer'}}
                aria-label="Copy Document ID"
                onClick={handleCopyToClipboard}
              >
                {copied ? <AiOutlineCheck /> : <MdContentCopy />}
              </Button>
            </span>
          </Text>
        </Box>
        {props.renderDefault(props)}
      </>
    )
  }
  return <></>
}

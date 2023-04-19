import React from 'react'
import {Text, Card} from '@sanity/ui'
import {InputProps, SanityDocument} from 'sanity'

export const DocumentId = (props: InputProps) => {
  return (
    <>
      <Card tone="primary" padding={4} marginBottom={4} radius={3} border>
        <Text size={2}>Document ID: {(props?.value as SanityDocument)?._id}</Text>
      </Card>
      {props.renderDefault(props)}
    </>
  )
}

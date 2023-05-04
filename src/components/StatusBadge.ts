import React from 'react'
import {DocumentBadgeDescription, EditStateFor} from 'sanity'

export const StatusBadge = (props: EditStateFor): DocumentBadgeDescription => {
  return {
    label: props.draft ? 'Draft in progress' : 'Published',
    color: props.draft ? 'warning' : 'success',
  }
}

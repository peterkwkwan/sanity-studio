import React from 'react'

export const Logo = () => {
  return (
    <img
      src="/logo.svg"
      alt="logo"
      style={{
        width: '200px',
        height: '100%',
        filter:
          'invert(24%) sepia(69%) saturate(2139%) hue-rotate(259deg) brightness(89%) contrast(92%)',
      }}
    />
  )
}

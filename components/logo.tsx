import React from 'react'

export const Logo = () => {
  return (
    <div>
      <h3>Sanity Studio</h3>
      <img
        src="../assets/logo.svg"
        alt="WTW-logo"
        style={{
          width: '120px',
          height: '16px',
          filter:
            'invert(24%) sepia(69%) saturate(2139%) hue-rotate(259deg) brightness(89%) contrast(92%)',
        }}
      />
    </div>
  )
}

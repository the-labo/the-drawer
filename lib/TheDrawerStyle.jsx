'use strict'

import c from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import { asStyleData } from 'the-component-util'
import { TheStyle } from 'the-style'

/** Style for TheDrawer */
const TheDrawerStyle = ({className, id, options}) => (
  <TheStyle {...{id}}
            className={c('the-drawer-style', className)}
            styles={TheDrawerStyle.data(options)}
  />
)

TheDrawerStyle.displayName = 'TheDrawerStyle'
TheDrawerStyle.propTypes = {
  /** Style options */
  options: PropTypes.object,
}

TheDrawerStyle.defaultProps = {
  options: {},
}

TheDrawerStyle.data = (options) => {
  const {ThemeValues} = TheStyle
  const {
    backgroundColor = ThemeValues.backgroundColor,
    borderColor = ThemeValues.borderColor,
    contentWidth = ThemeValues.contentWidth,
    dominantColor = ThemeValues.dominantColor,
  } = options
  return asStyleData('.the-drawer', {
    '&': {
      background: backgroundColor,
      border: `1px solid ${borderColor}`,
      bottom: 0,
      boxShadow: '0 2px 4px rgba(0,0,0,0.33)',
      boxSizing: 'border-box',
      left: '-80vw',
      maxWidth: `${contentWidth}px`,
      padding: '8px',
      position: 'fixed',
      top: '44px',
      transition: 'left 400ms',
      width: '80vw',
      zIndex: 16,
    },
    '&.the-drawer-open': {
      left: 0,
    },
  })
}

export default TheDrawerStyle

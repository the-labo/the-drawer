'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import c from 'classnames'
import TheStyle from 'the-style'
import { asStyleData } from 'the-component-util'

/** Style for TheDrawer */
const TheDrawerStyle = ({id, className, options}) => (
  <TheStyle {...{id}}
            className={c('the-drawer-style', className)}
            styles={TheDrawerStyle.data(options)}
  />
)

TheDrawerStyle.displayName = 'TheDrawerStyle'
TheDrawerStyle.propTypes = {
  /** Style options */
  options: PropTypes.object
}

TheDrawerStyle.defaultProps = {
  options: {}
}

TheDrawerStyle.data = (options) => {
  const {ThemeValues} = TheStyle
  const {
    dominantColor = ThemeValues.dominantColor,
    backgroundColor = ThemeValues.backgroundColor,
    borderColor = ThemeValues.borderColor,
  } = options
  return asStyleData('.the-drawer', {
    '&': {
      position: 'fixed',
      top: '44px',
      left: '-80vw',
      width: '80vw',
      bottom: 10,
      background: backgroundColor,
      border: `1px solid ${borderColor}`,
      padding: '8px',
      transition: 'left 400ms'
    },
    '.the-drawer-open': {
      left: 0
    }
  })
}

export default TheDrawerStyle

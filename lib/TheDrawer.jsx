'use strict'

import c from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import withClickOutside from 'react-click-outside'
import { eventHandlersFor, htmlAttributesFor } from 'the-component-util'
import { get } from 'the-window'
import TheDrawerStyle from './TheDrawerStyle'

/**
 * Drawer for the-components
 */
class TheDrawer extends React.PureComponent {
  constructor (props) {
    super(props)
    const s = this
    s.state = {
      open: false,
    }
  }

  componentDidMount () {
    const s = this
  }

  componentWillUnmount () {
    const s = this
  }

  handleClickOutside () {
    const s = this
    const { onOutsideClick } = s.props
    onOutsideClick && onOutsideClick()
  }

  render () {
    const s = this
    const { props, state } = s
    const {
      children,
      className,
      open,
    } = props
    return (
      <div {...htmlAttributesFor(props, { except: ['className'] })}
           {...eventHandlersFor(props, { except: [] })}
           className={c('the-drawer', className, {
             'the-drawer-open': open,
           })}
      >
        {children}
      </div>
    )
  }

  resize () {
  }
}

TheDrawer.Style = TheDrawerStyle

TheDrawer.propTypes = {
  /** Open or not */
  /** Handle outside tap */
  onOutsideClick: PropTypes.func,
  open: PropTypes.bool.isRequired,
}

TheDrawer.defaultProps = {
  onOutsideClick: null,
  open: false,
}

TheDrawer.displayName = 'TheDrawer'

export default withClickOutside(TheDrawer)

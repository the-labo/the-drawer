'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import c from 'classnames'
import TheDrawerStyle from './TheDrawerStyle'
import { get } from 'the-window'
import { htmlAttributesFor, eventHandlersFor } from 'the-component-util'
import withClickOutside from 'react-click-outside'

/**
 * Drawer for the-components
 */
class TheDrawer extends React.PureComponent {
  constructor (props) {
    super(props)
    const s = this
    s.state = {
      open: false
    }
  }

  render () {
    const s = this
    const {props, state} = s
    const {
      className,
      children,
      open
    } = props
    return (
      <div {...htmlAttributesFor(props, {except: ['className']})}
           {...eventHandlersFor(props, {except: []})}
           className={c('the-drawer', className, {
             'the-drawer-open': open
           })}
      >
        {children}
      </div>
    )
  }

  componentDidMount () {
    const s = this
  }

  componentWillUnmount () {
    const s = this

  }

  resize () {

  }

  handleClickOutside () {
    const s = this
    const {onOutsideClick} = s.props
    onOutsideClick && onOutsideClick()
  }

}

TheDrawer.Style = TheDrawerStyle

TheDrawer.propTypes = {
  /** Open or not */
  open: PropTypes.bool.isRequired,

  /** Handle outside tap */
  onOutsideClick: PropTypes.func
}

TheDrawer.defaultProps = {
  open: false,
  onOutsideClick: null
}

TheDrawer.displayName = 'TheDrawer'

export default withClickOutside(TheDrawer)

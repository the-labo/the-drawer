'use strict'

import React from 'react'
import { TheDrawer, TheDrawerStyle } from 'the-drawer'
import { TheButtonStyle } from 'the-button'
import { TheIconStyle } from 'the-icon'

class ExampleComponent extends React.PureComponent {
  constructor (props) {
    super(props)
    const s = this
    s.state = {open: false}
  }

  render () {
    const s = this
    return (
      <div>
        <TheIconStyle/>
        <TheButtonStyle/>
        <TheDrawerStyle/>
        <TheDrawer open={s.state.open}
                   onOutsideClick={() => s.setState({open: false})}>
          This is drawer content
        </TheDrawer>

        <a onClick={() => s.setState({open: !s.state.open})}>TryMe!</a>
      </div>

    )
  }
}

export default ExampleComponent

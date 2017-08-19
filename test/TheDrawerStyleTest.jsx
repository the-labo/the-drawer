/**
 * Test for TheDrawerStyle.
 * Runs with mocha.
 */
'use strict'

import TheDrawerStyle from '../lib/TheDrawerStyle'
import React from 'react'
import { ok, equal } from 'assert'
import { render } from 'the-script-test'

describe('the-drawer-style', () => {
  before(() => {
  })

  after(() => {
  })

  it('Render a component', () => {
    let element = render(
       <TheDrawerStyle />
    )
    ok(element)
  })
})

/* global describe, before, after, it */

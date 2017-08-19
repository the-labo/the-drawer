/**
 * Test for TheDrawer.
 * Runs with mocha.
 */
'use strict'

import TheDrawer from '../lib/TheDrawer'
import React from 'react'
import { ok, equal } from 'assert'
import { render } from 'the-script-test'

describe('the-drawer', () => {
  before(() => {
  })

  after(() => {
  })

  it('Render a component', () => {
    let element = render(
       <TheDrawer />
    )
    ok(element)
  })
})

/* global describe, before, after, it */

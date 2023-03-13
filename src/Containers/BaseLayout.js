import React from 'react';
import { useMachine } from '@xstate/react';
import { Nav } from '../Components/Nav.js'
import { StepsLayout } from './StepsLayout.js'
import bookingMachine from '../Machines/bookingMachine.js';
import './BaseLayout.css'

export const BaseLayout = () => {
  const [state, send] = useMachine(bookingMachine)
  console.log('machine', state.value, state.context);
  return (
    <div className='BaseLayout'>
      <Nav state={state} send={send} />
      <StepsLayout state={state} send={send} />
    </div>
  )
}
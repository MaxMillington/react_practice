
import React from 'react'

import './styles.css'
import Elements from './Elements'
import Controlled from './Controlled'
import Uncontrolled from './Uncontrolled'

export default function FormInputContainer( props ) {
  return (
    <div className="container">
      <Elements />
      <Controlled />
      <Uncontrolled />
    </div>
  )
}

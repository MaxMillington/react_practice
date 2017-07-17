import React from 'react'
import Tree from './Tree'
import { render } from 'react-dom'

window.React = React
render(
  <Tree />,
document.getElementById("react-container")
)

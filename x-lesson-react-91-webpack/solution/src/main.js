import React from 'react'
import Tree from './Tree'
import { render } from 'react-dom'

//import './styles.css'

import './sassy.less'

window.React = React
render(
  <Tree />,
document.getElementById("react-container")
)

import React from 'react'
import './myStyles.css'

function Stylesheet(props) {
    let className = props.primary ? 'primary' : ''
  return (
    <div className={`${className} font-xl`}>
        <h1>Stylesheet</h1>
    </div>
  )
}

export default Stylesheet
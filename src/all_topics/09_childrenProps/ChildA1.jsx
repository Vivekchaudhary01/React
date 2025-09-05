import React from 'react'

const ChildA1 = (props) => {
    console.log(props); // {children:{..},{..}}
    
  return (
    <div>
        <h1>Child A1 Component.</h1>
        {props.children}
    </div>
  )
}

export default ChildA1
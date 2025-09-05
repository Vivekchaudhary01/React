import React from 'react'
import ChildA1 from './ChildA1'

const ChildrenProps = () => {
  return (
    <div>
        <h1>Learn Children Props.</h1>
        {/* when we send xml to another component from a closing tag then a key is formed named children */}
        
        <ChildA1>
            <h2>Send me to the component.</h2>
            <h3>Hello React.</h3>
        </ChildA1>
    </div>


  )
}

export default ChildrenProps
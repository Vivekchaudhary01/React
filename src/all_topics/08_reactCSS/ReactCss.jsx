import React from 'react';
// Inline Css means passing css by creating object.

const ReactCss = () => {
    const h1Style={
        color:"White",
        backgroundColor: "blueviolet",
        boxShadow: "10px 10px 5px black",
    };

  return (
    <div>
        <h1 style={h1Style}>Style me using Inline CSS.</h1>

        <h1 style={{textAlign:"center",backgroundColor:"yellow"}}>Hello World</h1>


        <button className='primary_btn'>
            Style me using global css.
        </button>
    </div>
  )
}

export default ReactCss;
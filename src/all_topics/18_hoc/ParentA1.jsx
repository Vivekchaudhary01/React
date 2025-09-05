import React from 'react'
import ChildB1 from './ChildB1'

const ParentA1 = (props) => {
    console.log(props);     // {}
    
  return (
    <div>
        <h1>ParentA1</h1>
        <ChildB1/>
    </div>
  )
}

export default ParentA1

//? JS Example

// function Outer(){

//     return function Inner(){
//         return "Hello React";
//     }
// }
// let x=Outer();
// console.log(x());

// function Outer(Wrapper){
//     return Wrapper();        //? undefined
// }

// Outer(function Inner(){})
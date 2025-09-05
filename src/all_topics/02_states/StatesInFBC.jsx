import { useState } from "react";
// State is Mutable
// And if we want to change state we use setState Function.
//  State is used to store data in any component

const StatesInFBC=()=>{
    let [state, setState]= useState("Hello World!");  //[ud, func]

    console.log(useState());
    
    // console.log(state);
    // console.log(setState);

    const handleState=()=>{
        setState("Byee World");
        
    };
    
    return(
        <div>
            <h1>Learn States in FBC {state}</h1> 
            {/* due to {state} we are able to use state value in the above,i.e, to use variable in XML we use {name} */}
            {/* {Expression is used to access javascript variable in XML} */}

            <button onClick={handleState}>update state</button>
        </div>
    );
};
export default StatesInFBC;

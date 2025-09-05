import { useState } from "react";

const CounterInFBC= ()=>{
    console.log("Counter component");
    // when state change component gets render

    let [count,setCount]= useState(0);

    const incre=()=>{
        setCount(count+1);
    };
    const decre=()=>{
        setCount(count-1);
    };
    const rst=()=>{
        if(count>0)
        setCount(0);
    };

    return(
        <div>
            <h1>Counter In FBC: {count}</h1>
            <button onClick={incre}> Increment </button>
            <button onClick={decre}> Decrement </button>
            <button onClick={rst}  > Reset </button>
        </div>
    );
};
export default CounterInFBC;
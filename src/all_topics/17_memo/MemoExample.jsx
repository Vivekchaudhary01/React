import React, { useState, useMemo, useCallback } from "react";
import MemoChild from "./MemoChild";

const MemoExample = () => {
  const [add, setAdd] = useState(0);
  const [text, setText] = useState("");
  const [minus, setMinus] = useState(100);

  //   function doubleCount(){
  //     console.log("Double count func");
  //     return count*2
  //   }

  //! PERFORMANCE OPTIMZATION HOOK WHICH RETURNS MEMOIZED VALUE

  //!  Return memoized Value
  let memoizedValue = useMemo(() => {
    console.log("Double count func");
    return add * 2;
  }, [add]);

  // const display=()=>{
  //   console.log("I am Display");
  // }

  //! Return memoized Function
  const memoizedFunction=useCallback(()=>{
    console.log("I am display");
  },[])

  return (
    <div>
      <h1 className="text-center font-semibold">Learn useMemo Hook</h1>
      <hr />
      <input
        type="text"
        className="border border-gray-500 rounded w-[70%] block mx-auto my-3 px-3"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <h2 className="text-center">Addition : {add}</h2>
      <button
        onClick={() => setAdd(add + 1)}
        className="bg-green-400 px-3 py1 rounded block mx-auto"
      >
        Increment
      </button>

      <h2 className="text-center">Subtraction : {minus}</h2>
      <button
        onClick={() => setMinus(minus - 1)}
        className="bg-red-400 px-3 py1 rounded block mx-auto"
      >
        Decrement
      </button>

      <h2 className="text-center">
        Double Count: {memoizedValue}
      </h2>

      <MemoChild display={memoizedFunction}/>
    </div>
  );
};

export default MemoExample;
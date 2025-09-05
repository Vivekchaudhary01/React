import { useReducer } from "react";

let initialState = 0;

function reducerFunc(prevState, action) {
  switch (action.type) {
    case "increment":
      return prevState + 1;

    case "decrement":
      if (prevState > 0)
        return prevState - 1;
      return 0;

    case "reset":
      return 0;
  }
}
const Reducer = () => {
  const [state, dispatch] = useReducer(reducerFunc, initialState);
  return (
    <div>
      <h1 className="text-center font-semibold p-2 text-3xl">Learn useReducer</h1>
      <h2>Counter : {state}</h2>
      <section className="flex gap-4 m-2 p-3">
        <button
          className="bg-green-400 w-25"
          onClick={() => dispatch({ type: "increment" })}
        >
          Increment
        </button>

        <button
          className="bg-red-400 w-25"
          onClick={() => dispatch({ type: "decrement" })}
        >
          Decrement
        </button>

        <button
          className="bg-yellow-400 w-25"
          onClick={() => dispatch({ type: "reset" })}
        >
          Reset
        </button>
      </section>
    </div>
  );
};

export default Reducer;
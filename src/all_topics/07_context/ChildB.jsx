import { useContext } from "react";
import { myContextStore } from "./Context1";
// useContext is a hook which is used to access data from context.



const ChildB=()=>{
    let val=useContext(myContextStore);
    return(
        <div>
            <h1>Child B {val}.</h1>
        </div>
    )
};
export default ChildB;
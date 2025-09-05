// we create a context,i.e.,store where we store all the data and according to the need components can access that data
// in heirarchy that is if parent has context it can be accessed by the child C without drilling directly;
import { createContext } from "react";
import ParentA from "./ParentA";
// create context provide us the object which we called context object or store.
// context object has the key which is known as Provider and using it we provide it to another component.
// Provider is also a component.
// Provider has inbuilt prop which is known as value the using it we store data in the context.
// heirarchy is : App->Context1->ParentA->ChildA->ChildB;

export const myContextStore=createContext();
// we put this outside bcz we need to export it and we can not export it through component.

const Context1=()=>{
    let data="Hii";
    return(
        <div>
            <myContextStore.Provider value={data}>
                <ParentA/>
            </myContextStore.Provider>    
        </div>
    )
};
export default Context1;
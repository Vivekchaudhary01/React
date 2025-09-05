// it is used to share data between siblings.
// this is how we manage single state in multiple component.

import { useState } from "react";
import Cart from "./Cart";
import Button from "./Button";

const UpliftingParent=()=>{
    let [cartCount,setCartCount]=useState(0);
    return(
        <div>
            <h1>Learn State Uplifting.</h1>
            <Cart cartCount={cartCount}/>
            <Button setCartCount={setCartCount}/>
        </div>
    );
};
export default UpliftingParent;
const Button=({setCartCount})=>{

    //console.log(setCartCount);  // setState function
    // setState((x)=>{x+1});

    const updateCart=()=>{
        setCartCount((prevState)=>{
            return prevState+1;
        });
        // setCartCount((prevState)=> prevState+1);
    }
    
    return <button onClick={updateCart}>Add to Cart</button>
};
export default Button;
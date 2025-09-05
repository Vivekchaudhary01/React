
const PropChild1=(props)=>{
    // props are immutable and these are global to a components.
    //!console.log(props);     // Hello if called using javascript method always gives answer in String format.
    // but when we give using XML to send data we always recieve object ,i.e., key value pair  
    
    //! console.log(props); // {abc: Hello}
    // props means properties, calling the parent properties in the child component as an attribute.
    // we send data to multiple components using props.
    // to send data we need to have parent child relation of components.
    // we can send multiple props from one components.
    // we can also send multiple data in single prop.

    console.log(props); // {prop1: 'Hello', prop2: {…}, prop3: Array(3)}    
    
    return(
        <div>
            <h1>I am Prop Child. </h1>
            {/* <h2>{props.abc}</h2> */}
            
            <h2>{props.prop2.ename}</h2>    
            {/* Raja */}

            <h2>{props.prop3[2]}</h2>
            {/* 30 */}

        </div>
    );
};

export default PropChild1;
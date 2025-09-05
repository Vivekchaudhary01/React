const CallbackChild=(props)=>{
    console.log(props); // {getData:f}
    
    const handleBtn=()=>{
        props.getData("Hii From Child.")
    }
    return(
        <div>
            <h1>Callback Child.</h1>

            <button onClick={handleBtn}>
                send data
            </button>

            <button onClick={()=>{props.getData("JavaScript")}}>click</button>
        </div>
    );
};

export default CallbackChild;
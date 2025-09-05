const PropChild2=(x)=>{
    console.log(x);  // propData: {data: 'Hello', obj: {…}, arr1: Array(3)}
    
    // using object desctructring.
    let {data,obj:{id,ename},arr1}=x.propData;

    return(
        <div>
            <h1>I am Prop Child 2.</h1>
            <h2>{data}</h2>

            {/* <h2>{data} {ename} your age is {arr[1]}</h2> */}
        </div>
    )
}

export default PropChild2;
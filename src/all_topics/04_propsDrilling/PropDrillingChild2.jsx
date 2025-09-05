
const PropsDrillingChild2=(x)=>{
    console.log(x);     // props1: {str: 'Hello React', arr: Array(3), obj: {…}}
    let {str,arr,obj:{id,ename}}=x.props1;
    return(
        <div>
            <h1>I am Prop Child 2 {str} , {arr[1]}, {ename}.</h1>
        </div>
    )
};

export default PropsDrillingChild2;
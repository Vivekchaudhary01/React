import PropsDrillingChild2 from "./PropDrillingChild2";

const PropsDrillingChild1=(props1)=>{

    console.log(props1); // prop: {str: 'Hello React', arr: Array(3), obj: {…}}
    
    return(
        <div>
            <h1>I am Prop Child 1.</h1>

            <PropsDrillingChild2 props1={props1.prop}/>
        </div>
    )
};

export default PropsDrillingChild1;